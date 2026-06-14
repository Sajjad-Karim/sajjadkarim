# Performance

## Lighthouse targets

Run locally:

```bash
npm run build
npm run start
# Chrome DevTools → Lighthouse (mobile + desktop)
```

## Architecture decisions

| Optimization | Implementation |
|--------------|----------------|
| LCP | Hero portrait `priority` + `sizes` on `hero-visual.jsx` only |
| Code splitting | Dynamic imports: Education, ContactForm, ProjectsBrowser, AmbientLight, ScrollToTop |
| Client boundary | `ClientProviders` consolidates toast, ambient, scroll reveal |
| Images | AVIF/WebP via `next.config.js`; lazy + `sizes` below fold |
| Fonts | Inter preloaded; display/mono fonts load on demand |
| CSS | GlowCard styles scoped to Education; global `card.scss` removed from layout |
| GlowCard | Scoped pointer listeners (no `document.body`); disabled on touch/reduced motion |
| SEO | Metadata API, JSON-LD, robots, sitemap, manifest |
| Security | Security headers in `next.config.js` |
| Caching | Blog fetch `revalidate: 3600` |

## Core Web Vitals checklist

- **LCP**: Single priority image (hero portrait)
- **CLS**: Fixed aspect ratios on images; font `adjustFontFallback`
- **INP**: Passive scroll listeners; ambient light rAF stops when idle
- **TBT**: Reduced initial client JS via dynamic imports
