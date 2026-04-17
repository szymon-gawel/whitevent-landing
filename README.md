# Whitevent Landing Page

Bilingual (PL/EN) landing page for **Whitevent** — a white label mobile event app platform targeting B2B event organizers.

## Stack

- React 18 + Vite 5 + TypeScript 5
- Tailwind CSS 3
- No UI component libraries
- Deploy target: Vercel

## Getting started

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

## Setting up the contact form

The contact form uses [Formspree](https://formspree.io) for email delivery.

1. Go to [formspree.io](https://formspree.io) and create a free account
2. Create a new form — you'll receive an endpoint ID (e.g. `xrgvkpla`)
3. Open `src/components/Contact.tsx` and replace `REPLACE_WITH_FORM_ID`:

```ts
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xrgvkpla'; // ← your ID here
```

## Deploy to Vercel

### Option A — Vercel CLI

```bash
npm install -g vercel
vercel
```

### Option B — GitHub integration (recommended)

1. Push this repository to GitHub
2. Go to [vercel.com](https://vercel.com) → **New Project**
3. Import the repository
4. Vercel auto-detects Vite — leave all settings as default
5. Click **Deploy**

The included `vercel.json` handles SPA routing and sets the output directory correctly.

### Environment variables

No environment variables are required. The Formspree endpoint is hardcoded in `src/components/Contact.tsx`.

## Project structure

```
src/
├── context/
│   └── LanguageContext.tsx   # PL/EN language state (localStorage)
├── hooks/
│   └── useScrollAnimation.ts # IntersectionObserver fade-in-up
├── components/
│   ├── Navbar.tsx             # Sticky nav, hamburger, language switcher
│   ├── Hero.tsx               # Full-screen hero with phone mockup
│   ├── HowItWorks.tsx         # 3-step process
│   ├── Features.tsx           # 6-card feature grid
│   ├── Modules.tsx            # 4 optional add-on modules
│   ├── Pricing.tsx            # 2 pricing cards
│   ├── Contact.tsx            # Formspree contact form
│   └── Footer.tsx
├── App.tsx
├── main.tsx
└── index.css                  # Tailwind directives + custom animations
```

## Language switching

Language defaults to Polish (`pl`). The preference is stored in `localStorage` under the key `whitevent-lang`. Toggle between PL/EN using the switcher in the top-right navbar.
