# BlueStar Technology: Landing Page

A responsive, accessible one-page marketing site for **Bluestar Technology LLC**, a
Florida IT consulting firm.

Built with React, Vite, TypeScript, Tailwind CSS v4, Framer Motion and lucide-react.

## Getting started

Requires Node.js 20 or newer.

```bash
npm install
npm run dev       # start the dev server at http://localhost:5173
npm run build     # type-check and build the production site into /dist
npm run preview   # serve the production build locally
```

`dist/` is a static site, so you can deploy it to Netlify, Vercel, Cloudflare Pages,
GitHub Pages or any web host.

## Editing content

**All copy lives in [`src/content.ts`](src/content.ts).** That includes the headline,
services, value points, process steps, About text, testimonials, contact details and
footer text. Edit the strings and save; the dev server reloads automatically.
Anything marked `PLACEHOLDER` should be replaced before launch.

- **Tagline:** `hero.headline` and `hero.headlineAccent`. Alternative taglines are listed in a comment above `hero`.
- **Services, value points and process steps:** each is an array. Add, remove or reorder items freely. Icons come from [lucide.dev/icons](https://lucide.dev/icons). Import the icon you want at the top of the file and set it as `icon`.
- **Testimonials:** replace the sample quotes, then set `testimonialsArePlaceholders = false` to remove the "Placeholder" badges.
- **Contact info:** edit `company.email`, `company.phone` and `company.hours`.

SEO tags (title, description, Open Graph) live in [`index.html`](index.html).
**Replace `https://www.example.com/`** in the `og:url` and `og:image` tags with your
real domain once the site is live.

## Swapping images

Images live in `src/assets/images/` and are referenced from `src/content.ts`.

1. Add your new image to `src/assets/images/`. Aim for WebP or JPG, 1000–1600 px wide (1920 px for the hero), under ~300 KB.
2. Change the matching `import ... from './assets/images/...'` line in `content.ts`.
3. Update the image's `alt` text so it describes the new picture.
4. Update the photo credits in `imageCredits` (in `content.ts`) and in [`IMAGE_CREDITS.md`](IMAGE_CREDITS.md).

To replace the social preview image, overwrite `public/og-image.jpg` (1200×630).

## Contact form

No backend is needed. After client-side validation, the form opens the visitor's
email app with a pre-filled message addressed to `company.email`. To send submissions
to a service like Formspree, Netlify Forms or your own API, replace `submitForm()` in
[`src/components/Contact.tsx`](src/components/Contact.tsx).

## Project structure

```
public/
  favicon.svg          star-logo favicon
  og-image.jpg         social share image
src/
  content.ts           all editable text and image references
  index.css            Tailwind theme (colors, fonts) and shared button styles
  App.tsx              page layout (section order)
  assets/images/       optimized photos
  components/
    Navbar.tsx         sticky nav with mobile menu
    Hero.tsx           starfield hero (twinkling canvas, Starfield.tsx)
    Services.tsx       service cards
    WhyBlueStar.tsx    Clarity / Reliability / Guidance / Speed
    Process.tsx        4-step timeline
    About.tsx          company story and stats
    Testimonials.tsx   quote cards
    CtaBanner.tsx      "Ready to find your direction?"
    Contact.tsx        validated contact form and contact details
    Footer.tsx         links, copyright, photo credits
    Logo.tsx           SVG star mark and wordmark
    Reveal.tsx, SectionHeading.tsx   shared helpers
```

Brand colors are defined once in `src/index.css` under `@theme`: `midnight`, `navy`,
`electric`, `cyan` and `starlight`.

## Accessibility and motion

- Semantic landmarks, a skip link, labelled form fields, and errors announced and focused on submit.
- Visible cyan focus rings on every interactive element.
- `prefers-reduced-motion` is respected. Entrance animations become simple fades, the twinkling stars render as a still frame, and CSS animations and smooth scrolling are turned off.
