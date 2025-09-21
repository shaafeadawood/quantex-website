## Quantex Website

A polished, modern marketing site for Quantex built with Next.js App Router, TypeScript, Tailwind CSS, and Framer Motion. It features smooth section navigation, production-ready contact email workflow, and professional legal pages.

### Tech

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS + custom theme tokens
- Framer Motion for tasteful micro-interactions
- Resend for transactional emails (contact form)

## Getting Started

Run the dev server:

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

Build for production:

```bash
npm run build && npm start
```

## Contact form setup (email)

The site sends contact messages via Resend using a server API with robust validation.

1. Create a Resend account and generate an API key: https://resend.com
2. Copy `.env.example` to `.env.local` and set:
   - `RESEND_API_KEY` — your Resend API key
   - `CONTACT_TO_EMAIL` — where to receive form submissions
3. (Optional) After verifying your domain in Resend, adjust the `from` address in `src/app/api/contact/route.ts`.
4. Restart the dev server.

Server endpoint: `POST /api/contact`
Client form: `src/components/ContactForm.tsx`

## Navigation behavior

Header and footer links to sections (e.g., About, Services) are hash links. They behave as follows:

- From the homepage: smooth-scroll to the section (e.g., `#services`).
- From other routes: navigate to `/#section` first, then the browser shows that section.

## Routes and redirects

Public pages:

- `/` — Homepage with sections: `#home`, `#about`, `#services`, `#case-studies`, `#testimonials`, `#careers`, `#contact`
- `/privacy`, `/terms`, `/security` — Legal pages with SEO metadata
- `/api/contact` — Server endpoint for contact form

Legacy routes redirect to their homepage sections (to avoid 404s and keep deep links working):

- `/about` → `/#about`
- `/case-studies` → `/#case-studies`
- `/careers` → `/#careers`
- `/contact` → `/#contact`

## Project structure (high-level)

```
src/
   app/
      api/contact/route.ts     # Resend email endpoint with validation
      privacy/page.tsx         # Privacy Policy (styled TSX)
      terms/page.tsx           # Terms of Service (styled TSX)
      security/page.tsx        # Security & Trust (styled TSX)
      page.tsx                 # Homepage assembling sections
   components/
      Header.tsx, Footer.tsx   # Global nav with cross-route hash navigation
      ContactForm.tsx          # Client form calling /api/contact
      Accordion.tsx            # FAQ accordion used on legal pages
      sections/*               # Home sections (About, Services, Case Studies, etc.)
```

## Editing legal pages

Legal content lives in TSX files under `src/app/{privacy|terms|security}/page.tsx`. Update company details, effective dates, or sections directly in those files; no Markdown renderer is used.

## License

MIT — see `LICENSE`.
