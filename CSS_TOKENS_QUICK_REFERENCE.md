# Design Tokens Quick Reference

## Font Sizes (Fluid Typography)

Use `clamp()` for responsive sizing without breakpoints:

```css
h1 { font-size: var(--fs-4xl); }   /* 48px - 64px */
h2 { font-size: var(--fs-3xl); }   /* 36px - 48px */
h3 { font-size: var(--fs-2xl); }   /* 28px - 36px */
h4 { font-size: var(--fs-xl); }    /* 22px - 28px */
p  { font-size: var(--fs-base); }  /* 16px - 18px */
small { font-size: var(--fs-sm); } /* 14px - 16px */
```

## Spacing

```css
margin: var(--space-4);      /* 16px */
padding: var(--space-6);     /* 24px */
gap: var(--space-2);         /* 8px */
border-radius: var(--radius-md); /* 8px */
```

## Common Combinations

### Padding for buttons/cards
```css
padding: var(--space-2) var(--space-4); /* Vertical × Horizontal */
```

### Section spacing
```css
.section {
  padding: var(--space-8) var(--space-6);
  margin-bottom: var(--space-12);
}
```

## Text Hierarchy

```css
/* Headings - use appropriate level */
h1 { font-size: var(--fs-4xl); line-height: var(--lh-tight); }
h2 { font-size: var(--fs-3xl); line-height: var(--lh-tight); }

/* Body text */
p { 
  font-size: var(--fs-base);
  line-height: var(--lh-normal);
  color: var(--clr-text-base);
}

/* Helper text */
.hint { 
  font-size: var(--fs-sm);
  color: var(--clr-text-muted);
}
```

## Colors

```css
/* Primary action */
color: var(--clr-primary);

/* Text hierarchy */
color: var(--clr-text-elevated);  /* Darkest, highest contrast */
color: var(--clr-text-base);      /* Normal body text */
color: var(--clr-text-muted);     /* Secondary, hint text */
color: var(--clr-text-quiet);     /* Least important */

/* Backgrounds */
background: var(--clr-background-base);
background: var(--clr-background-raised);
background: var(--clr-background-active);

/* Borders */
border-color: var(--clr-border-base);
border-color: var(--clr-border-active);
```

## Shadows

```css
box-shadow: var(--shadow-sm);  /* Subtle */
box-shadow: var(--shadow-md);  /* Default */
box-shadow: var(--shadow-lg);  /* Prominent */
box-shadow: var(--shadow-xl);  /* Maximum depth */
```

## Transitions

```css
transition: var(--transition-fast);    /* 150ms */
transition: var(--transition-normal);  /* 250ms */
transition: var(--transition-slow);    /* 350ms */
```

## Border Radius

```css
border-radius: var(--radius-sm);   /* 4px */
border-radius: var(--radius-md);   /* 8px */
border-radius: var(--radius-lg);   /* 12px */
border-radius: var(--radius-xl);   /* 16px */
border-radius: var(--radius-full); /* Circular */
```

## Z-Index

```css
position: relative;
z-index: var(--z-base);       /* 0 - default */
z-index: var(--z-dropdown);   /* 10 - dropdowns */
z-index: var(--z-modal);      /* 100 - modals */
z-index: var(--z-tooltip);    /* 1000 - tooltips */
z-index: var(--z-notification); /* 2000 - notifications */
```

## Complete Component Example

```css
.card {
  /* Layout */
  display: flex;
  flex-direction: column;
  gap: var(--space-4);

  /* Spacing */
  padding: var(--space-6);
  margin-bottom: var(--space-8);

  /* Appearance */
  background-color: var(--clr-background-base);
  border: 1px solid var(--clr-border-base);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);

  /* Interaction */
  transition: box-shadow var(--transition-normal);
}

.card:hover {
  box-shadow: var(--shadow-lg);
}

.card-title {
  font-size: var(--fs-xl);
  font-weight: 600;
  line-height: var(--lh-tight);
  color: var(--clr-text-elevated);
  margin-bottom: var(--space-2);
}

.card-description {
  font-size: var(--fs-sm);
  line-height: var(--lh-relaxed);
  color: var(--clr-text-muted);
}
```

## Dos and Don'ts

✅ **DO:**
- Use tokens for all values
- Use `clamp()` for responsive sizing
- Keep component styles DRY
- Leverage token layers for organization

❌ **DON'T:**
- Hardcode pixel values
- Use arbitrary breakpoints
- Mix hex colors with HSL
- Override design tokens in components

## Working with Tailwind

### Map design tokens to Tailwind
```html
<!-- Using mapped Tailwind tokens -->
<div class="text-base leading-normal text-text-base">Content</div>
<button class="px-4 py-2 rounded-md bg-primary text-surface">Button</button>
```

### Use `@apply` with tokens
```css
.button {
  @apply inline-flex items-center justify-center;
  padding: var(--space-2) var(--space-4);
  font-size: var(--fs-sm);
  border-radius: var(--radius-md);
}
```

## Performance Tips

1. **Minimize reflows** - Use `clamp()` instead of media queries
2. **Leverage inheritance** - Apply tokens at root level
3. **Use shorthand** - `padding: var(--space-2) var(--space-4)` not separate properties
4. **Group transitions** - Use `transition: all` with token timing
