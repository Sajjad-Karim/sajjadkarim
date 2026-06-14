# Architecture

## Overview

This portfolio uses **Next.js App Router** with a **server-first** architecture. Marketing sections are Server Components; interactivity is isolated to small Client Component leaves.

```
layout.js (Server)
├── ToastProvider (Client)
└── ScrollRevealProvider (Client)
    ├── Navbar (Client)
    ├── main > page sections (Server)
    └── Footer (Server)
```

## Directory responsibilities

### `app/components/ui/`
Design system primitives — `Button`, `Card`, `LinkButton`. All interactive styling should use these.

### `app/components/layout/`
Structural primitives — `Container`, `Section`. Consistent spacing and max-widths.

### `app/components/providers/`
- `ClientProviders` — toast, ambient light (dynamic), scroll reveal
- `ToastProvider` — react-toastify client wrapper

### `app/components/experience/`
Global visual engine (not the career section):
- `GlobalCanvas` — fixed background layers
- `ScrollRevealProvider` — IntersectionObserver for scroll reveals
- `RevealSection` — wrapper with `data-reveal` attribute
- `SectionBridge` — soft section separators
- `AmbientLight` — cursor-aware glow (dynamic, no SSR)

### `app/components/homepage/{section}/`
Each homepage section follows the same pattern:
```
index.jsx           → orchestrator (uses Section layout primitive)
*-header.jsx        → eyebrow + headline
*-background.jsx    → section-local gradients
{section}.scss      → section-specific styles only
config/{section}-content.js → all copy and data
```

### `config/`
Single source of truth for content. Components import from config; they do not hardcode copy.

### `styles/tokens.css`
Aperture design system CSS custom properties. Never duplicate token values in components.

### `app/css/section-reveal.scss`
Shared scroll-reveal animation system. All sections use `.section-reveal` and `.section-stagger-{1-5}` classes.

## Server vs Client boundaries

| Client Component | Reason |
|------------------|--------|
| `navbar/*` | Scroll spy, mobile menu |
| `contact-form.jsx` | Form state, fetch |
| `projects-browser.jsx` | Category filter state |
| `scroll-reveal-provider.jsx` | IntersectionObserver |
| `ambient-light.jsx` | Pointer tracking |
| `toast-provider.jsx` | react-toastify |
| `education/index.jsx` | Lottie (legacy — candidate for refactor) |

Everything else should remain a Server Component unless it needs browser APIs or state.

## Data flow

```
config/*-content.js  →  section components  →  HTML
utils/data/personal-data.js  →  identity (email, social, profile path)
app/api/contact/route.js  →  Telegram + Nodemailer
```

## Adding a new homepage section

1. Create `config/{name}-content.js`
2. Create `app/components/homepage/{name}/` with orchestrator + sub-components
3. Add `{name}.scss` for section-specific styles (use `.section-reveal` for animations)
4. Wrap in `<RevealSection>` in `app/page.js`
5. Add nav link in `config/navigation.js`

## Naming conventions

- **RevealSection** — scroll-reveal page wrapper (`app/components/experience/`)
- **ExperienceSection** — career journey content (`app/components/homepage/experience/`)
- These were previously conflated; always use `RevealSection` for the wrapper.

## Remaining migration work

- **Education section** — still uses legacy template styling; migrate to config + design tokens
- **Blog routes** — `/blog` exists but homepage fetch was removed; decide keep or delete
- **Missing assets** — verify `public/sajjad.jpg`, `public/resume.pdf`, project images exist in deployment
