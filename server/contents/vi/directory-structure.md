---
title: Nuxt directory structure
---

- Scale Nuxt app with better directory structure

## Service directory

Example user for `user` apis

```
../services/user
├── index.ts               # export all from those
├── user.d.ts              # (1) api schema
├── user.service.ts        # (2) caller to make api request
├── user.constant.ts       # (3) api constant
```

1. Module file <user.d.ts>.

```ts
// user.d.ts
export declare namespace UserApi {
  export interface UserObj {
    // ...
    userRole: string; // refer to `./user.constant` USER_ROLE
    // ...others
  }

  export interface GetListParams {
    /* ... */
  }
  export interface ListResponse {
    /* ... */
  }
}
```

why is namespace?

- simple group and export with name defined for this namespace
- When using `module` (`declare module`) when use cannot import the defined name

2. Service file <user.service.ts>

```ts
// user.service.ts
import type { UserApi } from './user';

export async function fetchUserList(params: UserApi.GetListParams) {
  // caller logic
  return {} as Promise<UserApi.GetListParams>;
}
```

3. Constant file <user.constant.ts>

```ts
// user.constant.ts
export const USER_ROLE = {
  MEMBER: 'MEMBER',
  GUEST: 'GUEST',
};
```
