# FlowPilot Landing (Demo)

Minimal SaaS landing optimized for portfolio: pixel-perfect responsive layout, a11y, SEO/OG, valid contact form, and great performance.

## Stack
- React + TypeScript + Vite
- Tailwind CSS
- react-hook-form
- lucide-react (icons)
- No external fonts, no router (privacy/terms as static files)

## Scripts
- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run preview` — preview prod build

## Form
Formspree POST to `https://formspree.io/f/your-endpoint` — replace with your endpoint.

## Deploy
Any static host (Vercel/Netlify). Place under a subpath if needed; Vite builds to `dist/`.

## Checklist
- Lighthouse desktop ≥ 90 across P/A/BP/SEO
- TTI < 2s on average laptop, LCP < 2.5s (inline SVG hero), CLS≈0
- Valid form + redirect to `/thank-you.html`
- Meta tags + OG + robots/sitemap
