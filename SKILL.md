# Design System — Agent Instructions

This skill describes the visual design language for all UI output. Every component, layout, and page should follow the design specs in the module files below. These describe *what the design looks like* — you choose how to implement the styles.

## Style
A playful, hand-drawn doodle interface with rough sketch borders, solid offset shadows, warm cream backgrounds, and a whimsical hand-lettered font — designed to feel human, imperfect, and creative


## Before Writing Any Code

1. **Read every module that applies.** For a landing page, read at minimum: `layout.md`, `typography.md`, `colors.md`, `buttons.md`, `cards.md`, `shadows.md`, `radius.md`, `borders.md`. Do NOT write JSX until you have loaded all relevant modules.

## Critical Rules

- **Tokens are AGNOSTIC, NOT Tailwind classes:** The tokens defined in the `.md` files (like `neutral-primary-soft`, `heading`, `border-default`) are agnostic design system tokens, NOT literal Tailwind classes. Do not blindly use classes like `bg-neutral-primary-soft` unless you have explicitly mapped them in the CSS/Tailwind configuration. You must implement the mapping yourself.

- **Cross-reference modules.** A card containing buttons must satisfy both `cards.md` AND `buttons.md`.
- **Dark mode is automatic.** The CSS custom properties resolve differently in light/dark via `@media (prefers-color-scheme: dark)`. Never manually swap colors.
- **Every interactive element needs hover, focus, and disabled states** — defined in the relevant module.
- **Use semantic HTML:** proper heading hierarchy (`h1`→`h6`), `<button>` for actions, `<a>` for navigation, ARIA attributes where needed.

## Module Index

### Foundation (read first for any UI work)
- [colors.md](colors.md) — all background, text, and border color tokens
- [typography.md](typography.md) — heading scale, paragraphs, labels, links
- [layout.md](layout.md) — spacing rhythm, containers, animation, visual depth
- [radius.md](radius.md) — border-radius scale
- [shadows.md](shadows.md) — elevation tokens
- [borders.md](borders.md) — border widths and styles

### Components
- [buttons.md](buttons.md) — button variants, sizes, states, glint effect
- [button-group.md](button-group.md) — grouped button structure
- [cards.md](cards.md) — card structure, background, interactivity
- [inputs.md](inputs.md) — form controls, labels, states
- [alerts.md](alerts.md) — alert variants
- [badges.md](badges.md) — badge variants, sizes, dismissible chips
- [lists.md](lists.md) — list components
- [avatars.md](avatars.md) — avatar variants, sizes, indicators
- [icon-shapes.md](icon-shapes.md) — icon containers

### Complex Components
- [accordion.md](accordion.md) — accordion variants
- [dropdown.md](dropdown.md) — dropdown menus
- [modals.md](modals.md) — modal dialogs
- [tabs.md](tabs.md) — tab navigation
- [tables.md](tables.md) — table structure
- [pagination.md](pagination.md) — pagination components
- [sidebars.md](sidebars.md) — sidebar navigation
- [radios-checkboxes-toggle.md](radios-checkboxes-toggle.md) — selection controls
- [tooltips-popovers.md](tooltips-popovers.md) — tooltips and popovers
- [content.md](content.md) — grid system, responsiveness

---

## Source file: `accordion.md`

# Accordion

> Dependencies: `colors.md`, `radius.md`

## Core Specs

- **Wrapper:** full width, 3px border (border-dark color), base radius (hand-drawn asymmetric) — clips first/last item corners
- **Item separator:** 2px bottom border (border-dark) on every item except last

## Trigger (Button)

- **Layout:** flex, space-between, full width
- **Padding:** 20px horizontal, 16px vertical
- **Font:** 16px, semibold weight, Delius Swash Caps cursive
- **Text color:** heading
- **Background:** neutral-secondary-soft
- **Hover:** neutral-tertiary-soft background
- **Focus:** outline none, 3px dashed ring in border-dark color, 4px offset
- **Transition:** all, 200ms cubic-bezier(.25,.46,.45,.94)
- **Open state:** neutral-tertiary-soft background

## Panel (Content)

- **Padding:** 20px horizontal, 16px vertical
- **Background:** neutral-primary-soft
- **Top border:** 2px, border-dark color
- **Font:** 16px, body color, 1.6 line-height

## Chevron Icon

- Size: 16x16px
- Color: body text color
- Closed: 0deg rotation
- Open: 180deg rotation
- Transition: transform, 150ms

## Variants

### Default (Collapse)
One panel open at a time. Items stacked inside a single shared bordered/rounded wrapper.

### Separated Cards
Each item is independent — has its own 3px border (border-dark), base radius (hand-drawn asymmetric), and shadow-sm. 8px bottom margin between items. No shared outer border.

### Always Open
Multiple panels can expand simultaneously. Same styling as Default.

### Flush
No outer border. Trigger and panel have transparent backgrounds. Only 2px bottom border dividers between items. Use inside containers that already provide a background.

## States

| State | Trigger appearance |
|---|---|
| Closed | heading text, neutral-secondary-soft background |
| Open | heading text, neutral-tertiary-soft background |
| Hover | neutral-tertiary-soft background |
| Focus | 3px dashed border-dark ring, 4px offset, no outline |
| Disabled | fg-disabled text, not-allowed cursor, no hover/focus |

---

## Source file: `alerts.md`

# Alerts

> Dependencies: `colors.md`, `radius.md`

## Core Specs

- **Padding:** 16px
- **Radius:** base (hand-drawn asymmetric: `255px 15px 225px / 15px 225px 15px 255px`)
- **Border:** 3px solid
- **Heading:** 16px, semibold weight
- **Body:** 14px, normal weight, 1.6 line-height

## Variants

### Brand
- **Background:** brand-softer
- **Border:** 3px solid, border-brand-subtle
- **Text:** fg-brand-strong

### Success
- **Background:** success-soft
- **Border:** 3px solid, border-success-subtle
- **Text:** fg-success-strong

### Danger
- **Background:** danger-soft
- **Border:** 3px solid, border-danger-subtle
- **Text:** fg-danger-strong

### Warning
- **Background:** warning-soft
- **Border:** 3px solid, border-warning-subtle
- **Text:** fg-warning

---

## Source file: `avatars.md`

# Avatars

> Dependencies: `colors.md`, `radius.md`

## Core Specs

- **Circular shape:** fully rounded (9999px)
- **Rounded square shape:** base hand-drawn radius (asymmetric)
- **Default size:** 40x40px
- **Image fit:** cover
- **Border:** 3px solid, border-dark

## Sizes

| Size | Dimensions | Radius |
|---|---|---|
| Extra Small | 18x18px | sm (hand-drawn asymmetric) |
| Small | 24x24px | sm (hand-drawn asymmetric) |
| Base | 32x32px | base (hand-drawn asymmetric) |
| Large | 44x44px | base (hand-drawn asymmetric) |
| XL | 56x56px | base (hand-drawn asymmetric) |
| 2XL | 64x64px | base (hand-drawn asymmetric) |

## Bordered Avatar

- 4px padding, fully rounded, 3px outline in border-dark color
- Alternative: 3px box-shadow ring in border-dark color

## Stacked Avatars

- Displayed in a row (flex)
- Each avatar: 40x40px, fully rounded, 3px border in border-buffer color
- Overlap: -16px negative margin on all except first

### Stacked Counter
- Same size as avatars (40x40px), fully rounded
- Background: dark-strong, text: white, 12px font, semibold weight
- Same overlap margin as other avatars

## Avatar with Text

- Flex row, 10px gap between avatar and text
- Avatar: 40x40px, fully rounded, cover fit
- Name: heading color, semibold weight
- Subtitle: 14px, body color

---

## Source file: `badges.md`

# Badges

> Dependencies: `colors.md`, `radius.md`

## Core Specs

- **Border:** 3px solid
- **Default radius:** default (hand-drawn asymmetric: `15px 225px 15px 255px / 255px 15px 225px`)
- **Pill radius:** 9999px

## Sizes

| Size | Font size | Horizontal padding | Vertical padding |
|---|---|---|---|
| Default (small) | 12px | 8px | 4px |
| Large | 14px | 10px | 6px |

## Variants

### Brand
- **Background:** brand-softer
- **Border:** 3px solid, border-brand-subtle
- **Text:** fg-brand-strong

### Alternative (Neutral Soft)
- **Background:** neutral-primary-soft
- **Border:** 3px solid, border-dark
- **Text:** heading

### Gray (Neutral Medium)
- **Background:** neutral-secondary-medium
- **Border:** 3px solid, border-dark
- **Text:** heading

### Danger
- **Background:** danger-soft
- **Border:** 3px solid, border-danger-subtle
- **Text:** fg-danger-strong

### Success
- **Background:** success-soft
- **Border:** 3px solid, border-success-subtle
- **Text:** fg-success-strong

### Warning
- **Background:** warning-soft
- **Border:** 3px solid, border-warning-subtle
- **Text:** fg-warning

### Dark
- **Background:** dark
- **Border:** 3px solid, border-dark
- **Text:** white

## Pill Badges

Use 9999px radius instead of default hand-drawn radius on any variant.

## Badges with Icons

- Icon size (default): 12x12px
- Icon size (large): 14x14px
- Icon spacing: 4px margin next to label

## Icon-only Badge

Square shape — equalize dimensions to 24x24px, no horizontal text padding.

## Dismissible Badges

Badge content + a close button. Close button hover backgrounds per variant:

| Variant | Close button hover background |
|---|---|
| Brand | brand-soft |
| Alternative | neutral-tertiary |
| Gray | neutral-quaternary |
| Danger | danger-medium |
| Success | success-medium |
| Warning | warning-medium |

## Dot / Notification Badge

- Positioned absolutely: -4px top, -4px right
- Size: 12x12px, fully rounded
- 3px border in border-buffer color
- Background: danger

---

## Source file: `borders.md`

# Borders

## Width Scale

| Context | Width |
|---|---|
| Default (inputs, buttons, cards) | 3px |
| Emphasis / focus | 3px |
| Subtle internal dividers | 2px |

## Sketch Border Tokens

These are the core hand-drawn border styles. Every bordered component (buttons, cards, inputs, modals, dropdowns, etc.) must use one of these tokens. The border color uses the `border-dark` token (#111827 light / #F3F4F6 dark).

| Token | Border | Border-radius |
|---|---|---|
| sketch-border-1 | 3px solid border-dark | `255px 15px 225px / 15px 225px 15px 255px` |
| sketch-border-2 | 3px solid border-dark | `15px 225px 15px 255px / 255px 15px 225px` |
| sketch-border-3 | 3px solid border-dark | `225px 15px 255px / 15px 255px 15px 225px` |

### Component Defaults

| Component | Default token |
|---|---|
| Buttons (primary) | sketch-border-1 |
| Cards | sketch-border-2 |
| Inputs / selects / textareas | sketch-border-1 |
| Modals | sketch-border-1 |
| Dropdowns / popovers | sketch-border-1 |
| Alerts | sketch-border-1 |
| Accordion wrapper | sketch-border-2 |
| Tables wrapper | sketch-border-1 |
| Tooltips | sketch-border-3 |
| Badges | sketch-border-3 |
| Navbar | sketch-border-2 (bottom only: `0 0 255px 15px / 0 0 15px 255px`) |

### Variety Rule

When rendering multiple items in a grid (e.g. feature cards, pricing cards), rotate through sketch-border-1, sketch-border-2, sketch-border-3 per item to create organic variety — never repeat the same variant on adjacent items.

## Rules

- Use solid borders by default with the border-dark token color (#111827 light / #F3F4F6 dark)
- Dashed borders (3px) for focus-visible outlines with 4px offset, giving a hand-drawn focus indicator
- Components in the same family must use matching border widths
- Never mix 1px and 3px borders within a single component — 3px is the standard
- Never use standard uniform border-radius — always use one of the sketch-border tokens

## Usage

| Context | Width |
|---|---|
| Inputs / selects / textareas | 3px default; 3px on focus with brand color |
| Buttons | 3px solid for all variants |
| Cards / containers | 3px solid, border-dark token color |
| Navbar bottom border | 2px solid |
| Footer top border | 3px solid |
| Section dividers | 2px solid or wavy SVG divider |

---

## Source file: `button-group.md`

# Button Groups

> Dependencies: `buttons.md`, `colors.md`, `radius.md`

## Core Specs

- **Wrapper:** inline-flex, base hand-drawn radius, shadow-sm (`3px 4px 0 0` in border-dark color)
- **Children overlap:** -1px left margin on all except first button
- **Buttons inside the group must NOT have individual shadows.** Only the wrapper has a shadow.

## Anatomy

### Wrapper
- Display: inline-flex
- Radius: base (hand-drawn asymmetric)
- Shadow: shadow-sm
- Border: 3px solid, border-dark

### First Button
- base hand-drawn radius on inline-start side only, 0 on inline-end

### Middle Button(s)
- No radius (0 on all corners)

### Last Button
- base hand-drawn radius on inline-end side only, 0 on inline-start

### All buttons except first
- -1px left margin to overlap borders

## Rules

- Buttons inside groups follow all styles from `buttons.md` (background, border, focus rings) except individual shadows
- Icon-only buttons: 16x16px icon, match height of text buttons

---

## Source file: `buttons.md`

# Buttons

> Dependencies: `colors.md`, `radius.md`, `shadows.md`

## Core Specs (every button except ghost and disabled)

- **Radius:** base (hand-drawn asymmetric: `255px 15px 225px / 15px 225px 15px 255px`)
- **Border:** 3px solid, border-dark color
- **Shadow:** shadow-md (`4px 5px 0 0` in border-dark color)
- **Glint effect:** Not used in hand-drawn style — solid offset shadow is the primary depth effect. The glint tokens remain available but buttons rely on the sketch shadow instead.
  - `var(--shadow-md), inset var(--color-1-400) 0 6px 0px -5px, var(--color-1-700) 0 4px 10px -5px`
- **Font weight:** 600 (semibold)
- **Font:** Delius Swash Caps, cursive
- **Box sizing:** border-box
- **Transition:** all properties, 0.2s cubic-bezier(.25,.46,.45,.94)

## Sizes

| Size | Font size | Horizontal padding | Vertical padding |
|---|---|---|---|
| Extra small | 14px | 16px | 8px |
| Small | 16px | 20px | 10px |
| Base (default) | 20px | 24px | 12px |
| Large | 20px | 28px | 14px |
| Extra large | 24px | 32px | 16px |

## Variants

### Brand
- **Background:** brand token
- **Border:** 3px solid, border-dark
- **Text:** heading color
- **Hover:** neutral-primary-soft background, heading text, shadow-lg, translate(-2px,-2px) rotate(-1.5deg)
- **Active:** shadow-xs, translate(2px,2px) rotate(1deg)
- **Focus ring:** 3px dashed, border-dark color, 4px offset
- **Glint:** no (sketch shadow instead)

### Secondary
- **Background:** neutral-primary-soft
- **Border:** 3px solid, border-dark
- **Text:** heading color
- **Hover:** neutral-secondary-soft background, shadow-lg, translate(-2px,-2px) rotate(-1.5deg)
- **Active:** shadow-xs, translate(2px,2px) rotate(1deg)
- **Focus ring:** 3px dashed, border-dark color, 4px offset
- **Glint:** no (sketch shadow instead)

### Tertiary
- **Background:** neutral-primary-soft
- **Border:** 3px solid, border-dark
- **Text:** body color
- **Hover:** neutral-secondary-medium background, heading text, shadow-lg, translate(-2px,-2px) rotate(-1.5deg)
- **Active:** shadow-xs, translate(2px,2px) rotate(1deg)
- **Focus ring:** 3px dashed, border-dark color, 4px offset
- **Glint:** no (sketch shadow instead)

### Success
- **Background:** success token
- **Border:** 3px solid, border-dark
- **Text:** white
- **Hover:** neutral-primary-soft background, heading text, shadow-lg, translate(-2px,-2px) rotate(-1.5deg)
- **Active:** shadow-xs, translate(2px,2px) rotate(1deg)
- **Focus ring:** 3px dashed, border-dark color, 4px offset
- **Glint:** no (sketch shadow instead)

### Danger
- **Background:** danger token
- **Border:** 3px solid, border-dark
- **Text:** white
- **Hover:** neutral-primary-soft background, heading text, shadow-lg, translate(-2px,-2px) rotate(-1.5deg)
- **Active:** shadow-xs, translate(2px,2px) rotate(1deg)
- **Focus ring:** 3px dashed, border-dark color, 4px offset
- **Glint:** no (sketch shadow instead)

### Warning
- **Background:** warning token
- **Border:** 3px solid, border-dark
- **Text:** heading color
- **Hover:** neutral-primary-soft background, heading text, shadow-lg, translate(-2px,-2px) rotate(-1.5deg)
- **Active:** shadow-xs, translate(2px,2px) rotate(1deg)
- **Focus ring:** 3px dashed, border-dark color, 4px offset
- **Glint:** no (sketch shadow instead)

### Dark
- **Background:** dark token
- **Border:** 3px solid, border-dark
- **Text:** white
- **Hover:** neutral-primary-soft background, heading text, shadow-lg, translate(-2px,-2px) rotate(-1.5deg)
- **Active:** shadow-xs, translate(2px,2px) rotate(1deg)
- **Focus ring:** 3px dashed, border-dark color, 4px offset
- **Glint:** no (sketch shadow instead)

### Ghost (NO shadow, NO glint)
- **Background:** transparent
- **Border:** transparent
- **Text:** heading color
- **Hover:** neutral-secondary-medium background
- **Focus ring:** 3px dashed, border-dark color, 4px offset
- **No shadow, no glint effect**

### Disabled (NO shadow, NO glint)
- **Background:** disabled token
- **Border:** 3px solid, border-default-medium
- **Text:** fg-disabled color
- **Cursor:** not-allowed
- **No hover, no focus, no shadow, no glint**

## Icons in Buttons

- Icon size: 16x16px
- Spacing: 8px gap between icon and label
- Layout: inline-flex, vertically centered

---

## Source file: `cards.md`

# Cards

> Dependencies: `colors.md`, `radius.md`, `shadows.md`, `typography.md`

## Core Specs

- **Background:** neutral-primary-soft
- **Border:** 3px solid, border-dark color
- **Radius:** base (hand-drawn asymmetric: `255px 15px 225px / 15px 225px 15px 255px`)
- **Shadow:** shadow-sm (`3px 4px 0 0` in border-dark color)

## Card Heading

- Desktop: 24px, semibold weight, heading color
- Mobile: 20px, semibold weight, heading color
- Never skip heading levels — the page hierarchy must logically arrive at the card heading level.

## States

### Static Card (no interactivity)
- Background: neutral-primary-soft
- Border: 3px solid, border-dark
- Radius: base (hand-drawn asymmetric)
- Shadow: shadow-sm
- No hover styles. Non-interactive cards must NOT have hover background changes.

### Interactive Card (clickable)
- Same base styles as static card
- Hover: neutral-secondary-soft background, shadow-lg, translateY(-4px) rotate(1.5deg)
- Active: shadow-xs, translateY(0) rotate(0)
- Transition: all, 0.2s cubic-bezier(.25,.46,.45,.94)
- Cursor: pointer

## Rules

- Background: neutral-primary-soft
- Border: 3px solid, border-dark
- Radius: base (hand-drawn asymmetric)
- Shadow: shadow-sm
- Rotate through radius variants (base, default, sm) when rendering multiple cards in a grid for organic variety
- Interactive hover: neutral-secondary-soft background with lift + rotation
- Non-interactive: no hover styles

---

## Source file: `colors.md`

# Color Tokens


## Background Tokens

### Neutral
| Token | Light | Dark |
|---|---|---|
| neutral-primary-soft | #F9F6F0 | #202124 |
| neutral-primary | #F9F6F0 | #1A1A1D |
| neutral-primary-medium | #F9F6F0 | #303134 |
| neutral-primary-strong | #F9F6F0 | #3C3C3F |
| neutral-secondary-soft | #EFEBE1 | #202124 |
| neutral-secondary | #EFEBE1 | #1A1A1D |
| neutral-secondary-medium | #EFEBE1 | #303134 |
| neutral-secondary-strong | #EFEBE1 | #3C3C3F |
| neutral-tertiary-soft | #E6E0D4 | #202124 |
| neutral-tertiary | #E6E0D4 | #303134 |
| neutral-tertiary-medium | #E6E0D4 | #3C3C3F |
| neutral-quaternary | #D9D2C4 | #3C3C3F |
| quaternary-medium | #D9D2C4 | #4A4A4D |
| gray | #C4BDB0 | #4A4A4D |

### Brand
| Token | Light | Dark |
|---|---|---|
| brand-softer | #FDF8F6 | #3A2A25 |
| brand-soft | #F5E6E1 | #5C433B |
| brand | #EACDC2 | #EACDC2 |
| brand-medium | #D9B6A8 | #D9B6A8 |
| brand-strong | #C29A8A | #F5E6E1 |

### Status
| Token | Light | Dark |
|---|---|---|
| success-soft | #F0FDF8 | #002C22 |
| success | #3EB36B | #4CC97E |
| success-medium | #D1FAE5 | #004F3B |
| success-strong | #2D8F54 | #3EB36B |
| danger-soft | #FEF2F2 | #4D0218 |
| danger | #E25858 | #E25858 |
| danger-medium | #FFE4E6 | #8B0836 |
| danger-strong | #C93C3C | #C93C3C |
| warning-soft | #FFFBF0 | #7C2D12 |
| warning | #E09E38 | #E09E38 |
| warning-medium | #FFF0D4 | #7C2D12 |
| warning-strong | #C07E1F | #C07E1F |

### Button Glint (CSS custom properties, used for the glint box-shadow effect)
| Variable | Light | Dark |
|---|---|---|
| `--color-1-400` | rgba(255,255,255,0.25) | rgba(255,255,255,0.12) |
| `--color-1-700` | rgba(0,0,0,0.12) | rgba(0,0,0,0.25) |

### Utility
| Token | Light | Dark |
|---|---|---|
| dark | #1F2937 | #1F2937 |
| dark-strong | #111827 | #374151 |
| disabled | #E6E0D4 | #303134 |

### Accent
| Token | Value (same both modes) |
|---|---|
| purple | #A855F7 |
| sky | #76C7E2 |
| teal | #0D9488 |
| pink | #DB2777 |
| cyan | #06B6D4 |
| fuchsia | #C026D3 |
| indigo | #4F46E5 |
| orange | #FB923C |

## Text Color Tokens

### Base
| Token | Light | Dark |
|---|---|---|
| white | #FFFFFF | #FFFFFF |
| black | #111827 | #111827 |
| heading | #1F2937 | #F3F4F6 |
| body | #6B7280 | #9CA3AF |
| body-subtle | #6B7280 | #9CA3AF |

### Brand
| Token | Light | Dark |
|---|---|---|
| fg-brand-subtle | #D9B6A8 | #5C433B |
| fg-brand | #EACDC2 | #EACDC2 |
| fg-brand-strong | #C29A8A | #D9B6A8 |

### Status
| Token | Light | Dark |
|---|---|---|
| fg-success | #2D8F54 | #065F46 |
| fg-success-strong | #1B6B3C | #4CC97E |
| fg-danger | #C93C3C | #F43F5E |
| fg-danger-strong | #8B2020 | #F87171 |
| fg-warning-subtle | #C07E1F | #E09E38 |
| fg-warning | #7C2D12 | #FBBF24 |
| fg-disabled | #9CA3AF | #6B7280 |

### Informational / Accent
| Token | Light | Dark |
|---|---|---|
| fg-yellow | #FACC15 | #FACC15 |
| fg-info | #312E81 | #93C5FD |
| fg-purple | #9333EA | #A855F7 |
| fg-purple-strong | #7E3AF2 | #DDD6FE |
| fg-cyan | #0891B2 | #06B6D4 |
| fg-indigo | #4F46E5 | #4F46E5 |
| fg-pink | #DB2777 | #DB2777 |
| fg-lime | #65A30D | #84CC16 |

## Border Color Tokens

| Token | Light | Dark |
|---|---|---|
| border-dark | #111827 | #F3F4F6 |
| border-buffer | #F9F6F0 | #1A1A1D |
| border-buffer-medium | #F9F6F0 | #303134 |
| border-buffer-strong | #F9F6F0 | #3C3C3F |
| border-muted | #EFEBE1 | #202124 |
| border-light-subtle | #E6E0D4 | #202124 |
| border-light | #E6E0D4 | #303134 |
| border-light-medium | #E6E0D4 | #3C3C3F |
| border-default-subtle | #D9D2C4 | #202124 |
| border-default | #D9D2C4 | #303134 |
| border-default-medium | #D9D2C4 | #3C3C3F |
| border-default-strong | #D9D2C4 | #4A4A4D |
| border-success-subtle | #A7F3D0 | #064E3B |
| border-success | #2D8F54 | #1B6B3C |
| border-danger-subtle | #FECDD3 | #881337 |
| border-danger | #C93C3C | #C93C3C |
| border-warning-subtle | #FED7AA | #7C2D12 |
| border-warning | #C07E1F | #E09E38 |
| border-brand-subtle | #D9B6A8 | #5C433B |
| border-brand-light | #EACDC2 | #EACDC2 |
| border-brand | #EACDC2 | #EACDC2 |
| border-dark-subtle | #1F2937 | #374151 |
| border-purple | #A855F7 | #A855F7 |
| border-orange | #FB923C | #FB923C |

## Semantic Usage Rules

- Page/section backgrounds: neutral-primary-soft (default), neutral-secondary-soft (alternating)
- Primary buttons: brand background with solid offset shadow
- Headings: heading text color
- Body text: body text color
- CTA links: fg-brand text color
- Default borders: border-dark (3px solid sketch-style)
- Status borders match intent: success → border-success, danger → border-danger, warning → border-warning
- Disabled: disabled background + fg-disabled text

## Prohibited

- No raw hex/rgb values in component code — always use design tokens
- No brand text color for long-form paragraphs
- No accent text tokens (fg-purple, etc.) for body copy or navigation
- No brand/accent backgrounds for large layout surfaces (pages, sections) unless it's a hero/campaign area
- No manual light/dark value swapping — let the CSS custom properties handle it

---

## Source file: `content.md`

# Content & Grid System

> Dependencies: `layout.md`, `typography.md`

## Containers

| Type | Max width | Horizontal padding |
|---|---|---|
| Standard | 1000px | 32px |
| Internal (reading) | 650px | — (45–75 char line length) |

## Vertical Padding

| Breakpoint | Vertical padding |
|---|---|
| Mobile | 32px |
| Tablet (≥768px) | 48px |
| Desktop (≥1024px) | 64px or 80px for hero/feature sections |

## Grid System

Mobile-first with flexible desktop configurations.

| Context | Gap |
|---|---|
| Standard content/cards | 32px |
| Compact widgets/metadata | 16px |

### Responsive Columns

| Breakpoint | Columns |
|---|---|
| Mobile (default) | 1–2 |
| Small/Tablet (≥640px) | 2–4 |
| Desktop (≥1024px) | 3–12 |

Full support for 6, 7, 8, 9+ column grids where needed.

## Breakpoints

| Name | Width |
|---|---|
| Small | 640px |
| Medium | 768px |
| Large | 1024px |
| Extra large | 1280px |
| 2x Extra large | 1536px |

## Rules

- Always design mobile-first
- Use layout shifts (column → row) to accommodate horizontal space
- Lists: 24px indentation, 8px vertical gap between items
- Body copy: 18px, 1.6 line-height
- All interactive links follow brand underline/hover protocol

---

## Source file: `dropdown.md`

# Dropdown

> Dependencies: `colors.md`, `radius.md`, `shadows.md`, `inputs.md`

## Core Specs

### Chevron Icon
- Size: 16x16px
- Spacing: 6px left margin, -2px right margin
- Color: inherits from trigger button

### Menu Container
- Background: neutral-primary-soft
- Border: 3px solid, border-dark
- Radius: base (hand-drawn asymmetric: `255px 15px 225px / 15px 225px 15px 255px`)
- Shadow: shadow-lg (`5px 6px 0 0` in border-dark color)
- Z-index: elevated above content

### Menu List
- Padding: 8px
- Font: 16px, body color, medium weight

### Menu Item
- Layout: inline-flex, vertically centered, full width
- Padding: 8px horizontal, 8px vertical
- Radius: default (hand-drawn asymmetric: `15px 225px 15px 255px / 255px 15px 225px`)
- Hover: neutral-tertiary-medium background, heading text
- Transition: all, 200ms

## Trigger Sizes

| Size | Font size | Horizontal padding | Vertical padding |
|---|---|---|---|
| Small | 16px | 16px | 8px |
| Base | 18px | 20px | 10px |
| Large | 20px | 24px | 12px |

## Icon-only Trigger

- Padding: 8px
- Min size: 44x44px
- Icon: 20x20px

## Variants

### Default
- Menu width: 200px, items have default hand-drawn radius

### With Divider
- Top border (2px, border-dark) between child groups, skip first group

### With Header
- Header padding: 16px horizontal, 12px vertical
- Bottom border: 2px, border-dark
- Name: heading color, 16px, semibold weight
- Email: body-subtle color, 14px, truncated

### With Icons
- Icon before label: 16x16px, 8px right margin, body color
- On hover, icon color changes to heading

### With Checkbox / Radio
- Inputs: 16x16px, sm hand-drawn radius, focus ring in brand-soft
- Helper text: 12px, body-subtle color, 2px top margin

### With Search
- Search input at top of menu following `inputs.md` specs
- Left icon: 12px left padding, input 36px left padding

### Scrollable
- Max height: 192px, vertical scroll overflow

## States

| State | Appearance |
|---|---|
| Focused trigger | 3px dashed border-dark outline, 4px offset |
| Hover item | neutral-tertiary-medium background, heading text |
| Active/open item | neutral-tertiary-soft background, heading text |
| Disabled item | fg-disabled text, not-allowed cursor, no pointer events |

---

## Source file: `icon-shapes.md`

# Icon Shapes

> Dependencies: `colors.md`, `radius.md`

## Core Specs

- Box sizing: border-box
- Icon must be perfectly centered (inline-flex, centered both axes)
- Circle: fully rounded (9999px) with 2px border, border-dark color
- Rounded square: base hand-drawn radius (MD/LG/XL), default hand-drawn radius (XS/SM), with 2px border, border-dark color
- Icon wrappers may apply slight rotation (transform: rotate(-3deg) to rotate(4deg)) for a playful sketch feel

## Sizes

| Size | Container | Icon |
|---|---|---|
| XS | 24x24px | 14x14px |
| SM | 32x32px | 16x16px |
| MD | 40x40px | 20x20px |
| LG | 48x48px | 24x24px |
| XL | 56x56px | 28x28px |

## Color Variants

### Brand
- Shape: circle
- Background: brand-softer
- Icon color: fg-brand-strong

### Gray
- Shape: circle
- Background: neutral-secondary-soft
- Icon color: body

### Danger
- Shape: circle
- Background: danger-soft
- Icon color: fg-danger-strong

### Success
- Shape: circle
- Background: success-soft
- Icon color: fg-success-strong

### Warning
- Shape: circle
- Background: warning-soft
- Icon color: fg-warning

---

## Source file: `inputs.md`

# Inputs

> Dependencies: `colors.md`, `radius.md`

## Core Specs

- **Display:** block, full width
- **Radius:** base (hand-drawn asymmetric: `255px 15px 225px / 15px 225px 15px 255px`)
- **Border:** 3px solid, border-dark color
- **Background:** neutral-primary-soft
- **Shadow:** shadow-xs (`2px 3px 0 0` in border-dark color)
- **Font:** 16px, heading color, Delius Swash Caps cursive
- **Padding:** 12px horizontal, 10px vertical
- **Placeholder:** body color
- **Transition:** all properties, 200ms

## Label

- Display: block
- Font: 16px, semibold weight, heading color
- Margin bottom: 8px
- Label `htmlFor` must match the input `id`

## States

### Default
- Border: 3px solid, border-dark
- Background: neutral-primary-soft

### Hover
- Shadow: shadow-sm (step up one level)

### Focus
- No outline
- Border: 3px solid, border-brand
- Shadow: shadow-sm in brand color

### Success
- Border: 3px solid, border-success
- Shadow: shadow-xs in success color

### Error / Danger
- Border: 3px solid, border-danger
- Shadow: shadow-xs in danger color

### Disabled
- Background: disabled
- Text: fg-disabled
- Cursor: not-allowed

## Input with Icons

- Icon size: 16x16px
- Icon color: body
- Container: relative positioned wrapper
- Start icon: absolutely positioned left, 12px left padding — input gets 36px left padding
- End icon: absolutely positioned right, 12px right padding — input gets 36px right padding
- Icons vertically centered within the wrapper

## Rules

- Every input must have a unique `id`
- Every label must have a matching `htmlFor`
- Padding: 12px horizontal, 10px vertical unless overridden for icon variants
- No arbitrary hex or hardcoded colors

---

## Source file: `layout.md`

# Layout & Spacing

## Spacing Rhythm

Base unit: **8px**. All spacing values should be multiples of 4px or 8px.

| Context | Value |
|---|---|
| Section vertical padding | 64px |
| Section header → content | 32px or 48px |
| Heading → paragraph | 16px |
| Container horizontal padding | 32px |
| Flex/grid row gap | 16px |
| Card grid gap | 32px |
| Wide component grid gap | 32px |
| Column layout gap | 48px |

## Container

Standard section container: max-width 1000px, centered, 32px horizontal padding.

Every major section wraps content in this container.

## Content Composition Order

Inside each section, follow this order:
1. Heading (`h1`–`h3`)
2. Leading paragraph
3. Normal paragraph(s)
4. Lists, CTA links, or component grids

## Section Pattern

Each section has:
- 64px vertical padding
- A background color (alternate between neutral-primary-soft and neutral-secondary-soft)
- A centered container (max-width 1000px, 32px horizontal padding)
- A section header area with 32px bottom margin
- Section content below
- Optional wavy SVG divider between sections

## Motion & Animation

- Prefer CSS-native: `transition`, `animation`, `@keyframes`. Use Motion library only when CSS cannot achieve the behavior.
- Hover interactions should include slight rotation (`rotate(-1.5deg)` to `rotate(1.5deg)`) and translation for a playful hand-drawn feel.
- Use `cubic-bezier(.25,.46,.45,.94)` easing for sketch-style transitions (0.2s duration).
- Active/pressed states reverse the hover direction with smaller shadow and inward translation.

## Backgrounds & Visual Depth

- Default page background: neutral-primary-soft (warm cream #F9F6F0 light / #202124 dark).
- Apply a subtle dot-grid pattern overlay using `radial-gradient(body-color 1px, transparent 1px)` at 20px spacing, ~50% opacity, behind all content.
- Use hand-drawn SVG wavy dividers between major sections.
- Decorative doodle SVGs (stars, arrows, squiggly underlines) should be placed as absolute-positioned elements near headings and CTAs for visual personality.
- Hero sections may include an additional hand-drawn crosshatch SVG pattern with radial mask fade.

## Must

- All sections: consistent 64px vertical padding
- All containers: max-width 1000px, centered, 32px horizontal padding
- Section headers: 32px or 48px bottom margin
- Consistent vertical rhythm, no crowded sections
- Layouts readable and properly spaced on both desktop and mobile

---

## Source file: `lists.md`

# Lists

> Dependencies: `colors.md`

## Core Specs

- Item spacing: 16px vertical gap between list items
- Text: body color
- Font: Delius Swash Caps, cursive

## List Icons

- Size: 20x20px
- Prevent squishing: no shrink
- Spacing: 6px right margin between icon and text
- Active/featured icon: fg-brand color
- Neutral icon: body color

## Inactive / Disabled Items

Strikethrough text with body color decoration on the list item.

## Pattern

Vertical flex list with 16px gap. Each item is a flex row with centered alignment — icon (20x20, no-shrink, 6px right margin) followed by a span of body-colored text.

---

## Source file: `modals.md`

# Modals

> Dependencies: `colors.md`, `radius.md`, `shadows.md`, `buttons.md`, `inputs.md`

## Core Specs

### Overlay (Backdrop)
- Fixed, covers full screen
- Z-index: 40
- Background: black at 50% opacity
- Backdrop blur: small amount

### Content Container
- Background: neutral-primary
- Radius: base (hand-drawn asymmetric: `255px 15px 225px / 15px 225px 15px 255px`)
- Border: 3px solid, border-dark
- Shadow: shadow-xl (`6px 7px 0 0` in border-dark color)
- Padding: 20px

## Anatomy

### Header
- Bottom border: 2px, border-dark
- Top corners inherit hand-drawn radius
- Title: 24px, semibold weight, heading color
- Close button: Ghost variant from `buttons.md`, 6px padding

### Body
- Vertical padding: 24px
- Vertical spacing between elements: 24px
- Text: 18px, 1.6 line-height, body color

### Footer
- Top border: 2px, border-dark
- Bottom corners inherit hand-drawn radius

## Variants

### Default (Information)
Standard header + body + footer with primary/secondary action buttons.

### Pop-up (Confirmation)
Centered text, prominent icon, reduced padding:
- Body: 24px padding, text centered
- Icon: centered, 16px bottom margin, 48x48px, gray color

### Form Modal
Body contains inputs following `inputs.md`. Vertical spacing between form elements: 16px.

## Rules

- Backdrop covers full screen with fixed positioning
- Content: neutral-primary background, base hand-drawn radius, 3px border, shadow-xl
- Header/Footer separated by 2px border-dark borders
- Close button must be present and functional
- Accessibility: `role="dialog"`, implement focus trap in code
- Dark mode automatic via token system

---

## Source file: `pagination.md`

# Pagination

> Dependencies: `colors.md`, `radius.md`

## Container

Font: 16px. Items displayed as flex with -1px overlap for seamless borders.

## Pagination Item

- Layout: flex, centered both axes
- Size: 40x40px (or 44x44px)
- Text: body color, semibold weight
- Background: neutral-primary-soft
- Border: 3px solid, border-dark
- Shadow: shadow-xs (`2px 3px 0 0` in border-dark color)
- Hover: neutral-secondary-soft background, heading text, shadow-sm, translate(-1px,-1px)
- Focus: 3px dashed outline, border-dark color, 4px offset
- Overlap: -1px left margin

## Previous / Next Buttons

- Horizontal padding: 12px, height: 40px
- First item: base hand-drawn radius on inline-start side
- Last item: base hand-drawn radius on inline-end side

## Active Page Item

- Text: fg-brand color
- Background: neutral-tertiary-medium
- Shadow: shadow-sm
- Hover text: fg-brand (stays same)

## Rules

- Display as flex with -1px child overlap for seamless borders
- Items: neutral-primary-soft background, 3px border-dark border, body text
- Active: fg-brand text, neutral-tertiary-medium background
- First item: rounded start, Last item: rounded end
- All items need hover and focus states

---

## Source file: `radios-checkboxes-toggle.md`

# Radios, Checkboxes & Toggles

> Dependencies: `colors.md`, `radius.md`

## Checkbox

- Size: 18x18px
- Radius: sm (hand-drawn asymmetric: `225px 15px 255px / 15px 255px 15px 225px`)
- Border: 3px solid, border-dark
- Background: neutral-primary-soft
- Focus ring: 3px dashed, border-dark, 4px offset

### Disabled
- Border: 3px solid, border-light
- Text: fg-disabled

## Radio

- Size: 18x18px
- Radius: fully rounded
- Border: 3px solid, border-dark
- Background: neutral-primary-soft
- Focus ring: 3px dashed, border-dark, 4px offset
- Checked: border-brand, indicator: neutral-primary color

### Disabled
- Border: 3px solid, border-light-medium
- Text: fg-disabled

Group all radio items under the same `name` attribute.

## Toggle

### Track
- Fully rounded
- Border: 3px solid, border-dark
- Background: neutral-quaternary
- Focus-within ring: 3px dashed, border-dark, 4px offset
- Checked track: brand background
- Disabled track: neutral-tertiary background

### Thumb
- Fully rounded
- Background: white
- Border: 3px solid, border-dark

### Disabled
- Track: neutral-tertiary background
- Label: fg-disabled text

## Rules

- All selection inputs must have `id` matching label `htmlFor`
- Focus states use 3px dashed outlines with 4px offset for hand-drawn feel
- Disabled states: no hover/focus interaction

---

## Source file: `radius.md`

# Border Radius

| Token | Value | Default usage |
|---|---|---|
| base | 255px 15px 225px / 15px 225px 15px 255px | Buttons, cards, inputs, modals, sections |
| default | 15px 225px 15px 255px / 255px 15px 225px | Badges, tooltips, dropdown items, small controls |
| sm | 225px 15px 255px / 15px 255px 15px 225px | Checkboxes, tiny elements |
| full | 9999px | Pills, avatars, toggles, dot indicators |

## Rules

- Hand-drawn asymmetric radius is the default across the product — never use uniform radius values
- Rotate through the three sketch variants (base, default, sm) within grids/lists to avoid visual repetition
- Radius must feel organic and imperfect within each component family
- The `full` token stays circular (9999px) for pills, avatars, and toggles

---

## Source file: `shadows.md`

# Shadows

All shadows are solid offset (zero blur) using the border-dark token color. In light mode the shadow color is #111827; in dark mode it is #F3F4F6. Apply via a CSS custom property so dark mode resolves automatically.

| Token | CSS value |
|---|---|
| shadow-2xs | `1px 2px 0 0` |
| shadow-xs | `2px 3px 0 0` |
| shadow-sm | `3px 4px 0 0` |
| shadow-md | `4px 5px 0 0` |
| shadow-lg | `5px 6px 0 0` |
| shadow-xl | `6px 7px 0 0` |
| shadow-2xl | `8px 10px 0 0` |

## Component Mapping

| Component type | Token |
|---|---|
| Subtle separators, tiny UI details | shadow-2xs or shadow-xs |
| Inputs, buttons, small controls, lightweight cards | shadow-sm or shadow-md |
| Standard cards, popovers, dropdowns | shadow-md |
| Prominent cards, sticky surfaces | shadow-lg |
| Modals, high-priority overlays | shadow-xl |
| Hero overlays, top-level emphasis (sparingly) | shadow-2xl |

## Hover Behavior

- Hover on interactive elements: step up by one shadow level AND apply `translate(-2px, -2px) rotate(-1.5deg)` for a playful lift.
- Active/pressed: step down to shadow-xs with `translate(2px, 2px) rotate(1deg)` for a pressed-in feel.

## Rules

- Use only these tokens — no custom box-shadow values
- All shadows are solid offset with zero blur — never use blurred shadows
- Shadow color always derives from the border-dark token
- Components in the same family share the same baseline elevation
- Never stack multiple shadow tokens on one element
- Never use shadow-xl/shadow-2xl for dense list items or body containers

---

## Source file: `sidebars.md`

# Sidebars

> Dependencies: `colors.md`, `radius.md`, `typography.md`, `badges.md`, `alerts.md`

## Core Specs

- Background: neutral-primary-soft
- Right border: 3px solid, border-dark (for left-sidebar); left border for right-sidebar
- Width: 256px

## Anatomy

### Outer Container
Hidden on mobile, visible at small breakpoint. Needs a toggle/trigger for mobile.

### Inner Wrapper
- Full height, vertical scroll overflow
- Padding: 12px horizontal, 16px vertical

### Navigation List
- Vertical spacing: 8px between items
- Font weight: semibold

### Navigation Item
- Layout: flex, vertically centered
- Padding: 8px horizontal, 8px vertical
- Text: heading color
- Radius: base (hand-drawn asymmetric)
- Hover: neutral-secondary-medium background
- Transition: all, 200ms
- Icon: 20x20px, body color, hover → heading color, 75ms transition
- Label: 12px left margin from icon

### Active Item
- Background: neutral-secondary-strong
- Text: fg-brand-strong

### Separator
- 16px top padding, 16px top margin
- Top border: 2px, border-dark
- 8px vertical spacing below

### Bottom CTA / Card
- Padding: 16px
- Top margin: 24px
- Radius: base (hand-drawn asymmetric)
- Border: 3px solid, border-dark
- Background: brand-softer
- Shadow: shadow-xs
- Can also use any alert variant from `alerts.md`

## Rules

- Responsive: hidden on mobile with a trigger mechanism
- Icons: 20x20px, body color (hover: heading color)
- Multi-level menus: indent with 44px left padding
- Spacing follows 8px grid
- Only neutral, brand, or status tokens — no arbitrary colors

---

## Source file: `tables.md`

# Tables

> Dependencies: `colors.md`, `radius.md`, `shadows.md`

## Wrapper

- Horizontal scroll overflow
- Background: neutral-primary-soft
- Radius: base (hand-drawn asymmetric: `255px 15px 225px / 15px 225px 15px 255px`)
- Border: 3px solid, border-dark
- Shadow: shadow-sm (`3px 4px 0 0` in border-dark color)

## Table Element

- Full width, left-aligned text (right-aligned for RTL)
- Font: 16px, body color

## Table Head

- Font: 16px, body color, semibold weight
- Background: neutral-secondary-soft
- Bottom border: 2px, border-dark
- Cell padding: 24px horizontal, 12px vertical

## Table Body

- Row background: neutral-primary
- Row bottom border: 2px, border-dark (omit on last row to avoid doubling with wrapper border)
- Row hover: neutral-secondary-soft background (optional)
- Row header: semibold weight, heading color, no-wrap
- Cell padding: 24px horizontal, 16px vertical

## Rules

- Wrapper must have horizontal scroll overflow for responsive scrolling
- Last row: omit bottom border to avoid doubling with wrapper border
- Row headers: always `scope="row"` for semantic structure
- Hover on rows is optional
- No arbitrary hex codes — use token colors only

---

## Source file: `tabs.md`

# Tabs

> Dependencies: `colors.md`, `radius.md`, `shadows.md`

## Core Specs

- Typography: 16px, semibold weight, body color, Delius Swash Caps cursive
- Transitions: all properties, 200ms cubic-bezier(.25,.46,.45,.94)

## Variants

### 1. Underline (Default)

**Wrapper:** bottom border, 3px solid border-dark

**Tab Item:**
- Padding: 16px horizontal, 16px vertical
- Bottom border: 3px, transparent
- Top corners: base hand-drawn radius
- Transition: all, 200ms

| State | Appearance |
|---|---|
| Active | fg-brand text, border-brand bottom border (3px) |
| Inactive | transparent bottom border; hover → heading text, border-dark bottom border |
| Disabled | fg-disabled text, not-allowed cursor |

### 2. Pills

**Tab Item:**
- Padding: 16px horizontal, 10px vertical
- Radius: base (hand-drawn asymmetric)
- Border: 3px solid, border-dark
- Font weight: semibold
- Transition: all, 200ms

| State | Appearance |
|---|---|
| Active | brand background, white text, shadow-sm |
| Inactive | neutral-primary-soft background, body text; hover → neutral-secondary-soft background, heading text |
| Disabled | fg-disabled text, not-allowed cursor |

### 3. Full Width

Children overlap with -1px left margin on all except first.

**Tab Item:**
- Full width, centered text
- Padding: 16px horizontal, 16px vertical
- Background: neutral-primary-soft
- Border: 3px solid, border-dark
- Transition: all, 200ms
- Hover: neutral-secondary-medium background, heading text

| State | Appearance |
|---|---|
| Active | neutral-secondary-soft background, fg-brand text |
| First item | rounded start (base hand-drawn radius) |
| Last item | rounded end (base hand-drawn radius) |

## Tabs with Icons

- Icon size: 16x16px or 20x20px
- Spacing: 8px right margin
- Layout: inline-flex, centered
- Icons inherit the text color of the tab state

---

## Source file: `tooltips-popovers.md`

# Tooltips & Popovers

> Dependencies: `colors.md`, `radius.md`, `shadows.md`

## Tooltips

### Core Specs
- Padding: 12px horizontal, 8px vertical
- Font: 14px, semibold weight
- Radius: default (hand-drawn asymmetric: `15px 225px 15px 255px / 255px 15px 225px`)
- Border: 3px solid, border-dark
- Shadow: shadow-xs (`2px 3px 0 0` in border-dark color)
- Transition: opacity, 300ms

### Dark (Default)
- Background: dark
- Text: white
- Border: 3px solid, border-dark

### Light
- Background: neutral-primary-medium
- Text: heading color
- Border: 3px solid, border-dark

## Popovers

### Core Specs
- Background: neutral-primary
- Radius: base (hand-drawn asymmetric: `255px 15px 225px / 15px 225px 15px 255px`)
- Border: 3px solid, border-dark
- Shadow: shadow-md (`4px 5px 0 0` in border-dark color)
- Transition: opacity, 300ms

### Header / Title
- Padding: 12px horizontal, 8px vertical
- Background: neutral-secondary-soft
- Bottom border: 2px, border-dark
- Font: 16px, semibold weight, heading color

### Body / Content
- Standard: 12px horizontal, 8px vertical padding; 16px, body color
- Rich: 16px padding; 16px, body color

## Arrows

- Size: 8x8px rotated 45deg
- Color must match the background of the tooltip/popover variant
- Border: 3px solid, border-dark (only on exposed sides)

## Rules

- Tooltips: default hand-drawn radius
- Popovers: base hand-drawn radius
- Dark tooltips: dark background, white text, 3px border-dark border
- Light tooltips/popovers: semantic neutral background + 3px border-dark border
- Arrows match parent background color

---

## Source file: `typography.md`

# Typography

> Dependencies: `colors.md`

## Core Rules

- **Font:** Delius Swash Caps, cursive — configured at app level, never override
- **Headings:** semibold weight (600), heading text color
- **Body copy:** body text color, never use brand color for paragraphs longer than one sentence
- **Semantic HTML:** Use `h1`–`h6` in order, never skip levels

## Heading Scale

### Desktop

| Element | Size | Line-height | Letter-spacing | Margin-bottom |
|---|---|---|---|---|
| `h1` | 56px | 1.1 | -0.8px | 16px |
| `h2` | 40px | 1.2 | — | — |
| `h3` | 24px | 1.2 | — | — |
| `h4` | 20px | 1.25 | — | — |
| `h5` | 18px | 1.5 | — | — |
| `h6` | 16px | 1.25 | — | — |

### Responsive

| Element | Tablet (≥768px) | Mobile (default) |
|---|---|---|
| `h1` | 48px | 40px |
| `h2` | 36px | 32px |
| `h3` | 24px | 24px |
| `h4` | 20px | 20px |
| `h5` | 18px | 18px |
| `h6` | 16px | 16px |

Mobile-first: start with mobile sizes, scale up at tablet and desktop breakpoints.

Never reduce line-height below 1.1 for any heading.

## Paragraphs

### Leading Paragraph
- Size: 20px
- Weight: normal
- Color: body
- Line-height: 1.6
- Max width: ~70 characters

### Normal Paragraph
- Size: 18px
- Weight: normal
- Color: body
- Line-height: 1.6
- Max width: ~65 characters

### Small Supporting Copy
- Size: 14px
- Weight: normal
- Color: body
- Line-height: 1.6
- Use only for helper text, legal text, captions, metadata.

## UI Labels

| Context | Size | Weight |
|---|---|---|
| Button labels | 20px | 600 (semibold) |
| Input labels | 16px | 600 (semibold) |
| Captions / meta / badges | 14px | 500 (medium) |

Do not apply paragraph line-height (1.6) to control labels.

## Links

- **Inline links:** Same size as surrounding text, fg-brand color, underline, hover → no underline
- **CTA links:** fg-brand color, semibold weight, underline, hover → no underline

## Emphasis

- `<strong>` for high-priority emphasis in body text
- `<em>` for tone emphasis only, not visual hierarchy
- All-caps only for short labels: uppercase, 0.4px letter-spacing, 12px or 14px

## Dark Mode

Hierarchy stays identical. Only color tokens change (automatic via CSS custom properties). Size, weight, and spacing remain constant.