# Design System Modernization Guide

## Overview

This document outlines the modernization of the design system from legacy CSS practices to modern, accessible, and maintainable standards.

### Key Changes

#### 1. Removed 62.5% Font-Size Trick

**Before:**
```css
html {
  font-size: 62.5%; /* Makes 1rem = 10px */
}
```

**Why it was problematic:**
- Breaks user font-size preferences (accessibility issue)
- Conflicts with third-party component libraries
- Creates confusion across team members
- Hides developer intent with magic numbers

**After:**
```css
html {
  /* Uses default 16px (no manipulation) */
  font-family: var(--ff-han-sans-neo);
  scroll-behavior: smooth;
}
```

---

#### 2. Modern Typography Scale with `clamp()`

**New Approach:**
```css
/* Fluid typography that scales smoothly */
--fs-base: clamp(1rem, 1.5vw, 1.125rem); /* 16px - 18px */
--fs-lg: clamp(1.125rem, 1.8vw, 1.375rem); /* 18px - 22px */
--fs-xl: clamp(1.375rem, 2.2vw, 1.75rem); /* 22px - 28px */
```

**Benefits:**
- ✅ No hardcoded breakpoints needed
- ✅ Scales smoothly across viewport sizes
- ✅ Respects user font-size preferences
- ✅ Better performance than fixed breakpoints

**Usage in Components:**
```css
/* Instead of */
h1 {
  font-size: 2rem; /* Fixed */
}

/* Use */
h1 {
  font-size: var(--fs-3xl); /* Fluid: 36px - 48px */
  line-height: var(--lh-tight);
  letter-spacing: var(--ls-tight);
}
```

---

#### 3. Centralized Design Token System

**New File:** `layers/00-design-tokens.css`

All design tokens now organized by category:

##### Typography Tokens
```css
--fs-xs through --fs-4xl     /* Font sizes */
--lh-tight, --lh-normal, etc /* Line heights */
--ls-normal, --ls-wide, etc  /* Letter spacing */
```

##### Spacing Scale
```css
--space-1  /* 4px */
--space-2  /* 8px */
--space-4  /* 16px */
--space-8  /* 32px */
/* etc. */
```

##### Component Tokens
```css
--radius-sm through --radius-full
--shadow-sm through --shadow-xl
--z-base through --z-notification
--transition-fast, --transition-normal, --transition-slow
```

---

#### 4. Fixed Color System Issues

**Before:**
```css
--clr-border-active: --alpha(var(--clr-primary) / 10%);
--clr-background-active: --alpha(var(--clr-primary) / 6%);
```

**After (Using explicit HSL):**
```css
--clr-border-active: hsla(226, 100%, 59%, 0.1);
--clr-background-active: hsla(226, 100%, 59%, 0.06);
```

**Benefits:**
- ✅ No invalid CSS syntax
- ✅ Works in all browsers
- ✅ Easier to adjust opacity values
- ✅ Better IDE support and linting

---

#### 5. Improved Scrollbar Styling

**Before:**
```css
*::-webkit-scrollbar-track-piece {
  border-radius: 2em;
  background-color: #f8f8f8; /* Hardcoded */
}
```

**After:**
```css
*::-webkit-scrollbar-track {
  background-color: var(--clr-background-dimmed);
  border-radius: var(--radius-lg);
}

*::-webkit-scrollbar-thumb {
  background-color: var(--clr-border-base);
  transition: background-color var(--transition-fast);
}
```

---

#### 6. Responsive Design Token Adjustments

```css
@media (max-width: 640px) {
  :root {
    /* Tighter spacing on mobile */
    --space-6: 1.25rem;
    --space-8: 1.75rem;
  }
}
```

---

## Migration Path

### Phase 1: Immediate (Already Done)
- ✅ Remove 62.5% font-size trick
- ✅ Create design tokens system
- ✅ Fix color system syntax
- ✅ Update scrollbar styling
- ✅ Reorganize CSS layer imports

### Phase 2: Component Updates
Update existing components to use new tokens:

```css
/* Before */
.button {
  padding: 10px 20px;
  font-size: 14px;
  border-radius: 4px;
}

/* After */
.button {
  padding: var(--space-2) var(--space-4);
  font-size: var(--fs-sm);
  border-radius: var(--radius-md);
}
```

### Phase 3: Tailwind Integration
Use new tokens in Tailwind classes:

```html
<!-- Before (relying on arbitrary values) -->
<h1 class="text-3xl font-bold">Heading</h1>

<!-- After (using defined tokens) -->
<h1 class="text-3xl leading-tight tracking-tight">Heading</h1>
```

---

## Design Token Reference

### Font Sizes
| Token | Min | Preferred | Max |
|-------|-----|-----------|-----|
| `--fs-xs` | 0.75rem (12px) | 1vw | 0.875rem (14px) |
| `--fs-sm` | 0.875rem (14px) | 1.2vw | 1rem (16px) |
| `--fs-base` | 1rem (16px) | 1.5vw | 1.125rem (18px) |
| `--fs-lg` | 1.125rem (18px) | 1.8vw | 1.375rem (22px) |
| `--fs-2xl` | 1.75rem (28px) | 2.8vw | 2.25rem (36px) |
| `--fs-3xl` | 2.25rem (36px) | 3.5vw | 3rem (48px) |

### Spacing
| Token | Size |
|-------|------|
| `--space-1` | 0.25rem (4px) |
| `--space-2` | 0.5rem (8px) |
| `--space-4` | 1rem (16px) |
| `--space-6` | 1.5rem (24px) |
| `--space-8` | 2rem (32px) |

### Border Radius
| Token | Size |
|-------|------|
| `--radius-sm` | 0.25rem (4px) |
| `--radius-md` | 0.5rem (8px) |
| `--radius-lg` | 0.75rem (12px) |
| `--radius-full` | 9999px (circular) |

---

## Testing Checklist

- [ ] Verify typography scales correctly on mobile/tablet/desktop
- [ ] Test with browser zoom at 200%
- [ ] Test with browser font-size increased to largest
- [ ] Verify scrollbar styling across browsers
- [ ] Check component styling with new tokens
- [ ] Validate CSS layer cascade is correct
- [ ] Ensure no regressions in existing components
- [ ] Test color contrast ratios for accessibility

---

## Future Improvements

### Container Queries
```css
@container (min-width: 400px) {
  .card {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}
```

### CSS Cascade Layers for Better Control
```css
@layer reset, base, theme, tokens, components, utilities;
```

### Design System Tooling
Consider integrating:
- Style dictionary for multi-platform tokens
- Storybook for component documentation
- Automated accessibility testing
- Color contrast validation

---

## References

- [CSS Cascade Layers](https://developer.mozilla.org/en-US/docs/Web/CSS/@layer)
- [CSS clamp() Function](https://developer.mozilla.org/en-US/docs/Web/CSS/clamp)
- [Design Tokens](https://www.designtokens.org/)
- [Modern CSS for Dynamic Component Styling](https://web.dev/color-scheme/)
- [WCAG Color Contrast Guidelines](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum)
