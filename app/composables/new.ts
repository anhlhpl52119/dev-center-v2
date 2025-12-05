import type { DocumentNode } from 'graphql';
import type { Requester } from '~~/graphql/generated-gql';

import { getSdk } from '~~/graphql/generated-gql';

interface GraphQLResponse<T = any> {
  data?: T;
  errors?: GraphQLError[];
}

interface GraphQLError {
  message: string;
  locations?: Array<{ line: number; column: number }>;
  path?: string[];
  extensions?: Record<string, any>;
}

interface FetchRequesterOptions {
  headers?: Record<string, string>;
  [key: string]: any;
}

const validDocDefOps = ['mutation', 'query', 'subscription'];

export function createFetchRequester(
  endpoint: string,
  defaultOptions: FetchRequesterOptions = {},
) {
  const requester: Requester = async <R, V>(
    doc: DocumentNode,
    variables: V,
    options?: FetchRequesterOptions,
  ): Promise<R> => {
    // Validate document contains single query or mutation
    if (
      doc.definitions.filter(
        d =>
          d.kind === 'OperationDefinition'
          && validDocDefOps.includes(d.operation),
      ).length !== 1
    ) {
      throw new Error(
        'DocumentNode must contain single query or mutation',
      );
    }

    const definition = doc.definitions[0];

    // Validate document contains OperationDefinition
    if (definition.kind !== 'OperationDefinition') {
      throw new Error(
        'DocumentNode must contain single query or mutation',
      );
    }

    // Handle subscription separately
    if (definition.operation === 'subscription') {
      throw new Error(
        'Subscription requests through SDK interface are not supported',
      );
    }

    try {
      // Merge default options with request-specific options
      const mergedOptions = {
        ...defaultOptions,
        ...options,
        headers: {
          'Content-Type': 'application/json',
          ...defaultOptions.headers,
          ...options?.headers,
        },
      };

      // Make GraphQL request using $fetch
      const response = await $fetch<GraphQLResponse<R>>(endpoint, {
        method: 'POST',
        body: {
          query: print(doc),
          variables,
        },
        ...mergedOptions,
      });

      // Handle GraphQL errors
      if (response.errors && response.errors.length > 0) {
        throw new GraphQLRequestError(response.errors);
      }

      // Handle missing data
      if (response.data === undefined || response.data === null) {
        throw new Error('No data presented in the GraphQL response');
      }

      return response.data;
    }
    catch (error) {
      // Re-throw GraphQL errors as-is
      if (error instanceof GraphQLRequestError) {
        throw error;
      }

      // Handle fetch errors
      if (error instanceof Error) {
        throw new TypeError(`GraphQL request failed: ${error.message}`);
      }

      throw error;
    }
  };

  return getSdk(requester);
}
