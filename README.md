# Sajjad Karim — Portfolio

Product engineer portfolio built with **Next.js 14**, **React**, and the **Aperture** design system.

## Quick start

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm run lint
```

## Environment variables

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL for SEO (sitemap, OpenGraph) |
| `NEXT_PUBLIC_GTM` | Google Tag Manager ID |
| `EMAIL_ADDRESS` | Contact form recipient |
| `GMAIL_PASSKEY` | Gmail app password for Nodemailer |
| `TELEGRAM_BOT_TOKEN` | Telegram notifications for contact form |
| `TELEGRAM_CHAT_ID` | Telegram chat ID for notifications |

## Project structure

```
app/
  components/     # UI, layout, sections, providers
  css/            # Global styles + shared animation systems
  api/contact/    # Contact form API route
config/           # Content & site configuration (edit copy here)
hooks/            # Shared React hooks (navbar behavior)
lib/              # Utilities (cn, metadata helpers)
styles/           # Design tokens (CSS custom properties)
utils/data/       # Legacy identity data (personal-data, educations)
```

See [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) for detailed architecture guidance.

## Content updates

All section copy lives in `config/` — no component edits required:

| File | Section |
|------|---------|
| `config/hero-content.js` | Hero |
| `config/about-content.js` | About |
| `config/career-content.js` | Experience |
| `config/skills-content.js` | Skills |
| `config/projects-content.js` | Projects |
| `config/contact-content.js` | Contact |
| `config/navigation.js` | Navbar |
| `config/site.js` | SEO & site metadata |

## Design system

Tokens are defined in `styles/tokens.css` and consumed via Tailwind (`tailwind.config.js`). Use semantic classes (`text-primary`, `bg-surface`, `border-border`) instead of hardcoded hex values.

## License

Private — © Sajjad Karim
