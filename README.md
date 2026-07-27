# Naveen Kumar R — Portfolio Website

A premium, modern, responsive portfolio for a React Frontend Developer. Built with React, Vite, and Tailwind CSS.

**Live demo:** _add your Vercel URL here after deploying_

## Features

- ⚡️ Vite + React 19 for fast dev and build
- 🎨 Tailwind CSS v4 with a blue-gradient, glassmorphism design system
- 🌗 Dark / light theme toggle (persisted to localStorage)
- 🎬 Framer Motion scroll-reveal animations + AOS
- ⌨️ Typing animation in the hero
- 📊 Animated stat counters and skill progress bars
- 🧭 Sticky navbar with smooth-scroll section links
- 📈 Scroll progress bar + back-to-top button
- 🖱️ Custom cursor on desktop
- ✉️ Contact form wired to EmailJS
- 🔍 SEO: meta tags, Open Graph, Twitter cards, JSON-LD, `robots.txt`, `sitemap.xml`
- 🧱 Custom 404 page via React Router
- ♿ Reduced-motion support, visible focus states

## Tech Stack

React.js · Vite · JavaScript (ES6+) · Tailwind CSS · Framer Motion · React Router · React Icons · EmailJS · AOS · Axios

## Project Structure

```
src/
  components/   Reusable UI pieces (Navbar, Hero, Projects, Contact, ...)
  pages/        Route-level pages (Home, NotFound)
  context/      ThemeContext (dark/light mode)
  utils/        Static content/data (data.js)
  services/     emailService.js (EmailJS wrapper)
  styles/       (reserved for additional stylesheets)
public/
  resume.pdf    Downloadable resume
  robots.txt, sitemap.xml, favicon.svg
```

## Getting Started

```bash
npm install
npm run dev       # starts a local dev server
npm run build      # production build into /dist
npm run preview    # preview the production build locally
```

## Setting Up the Contact Form (EmailJS)

The contact form sends messages via [EmailJS](https://www.emailjs.com) — no backend needed.

1. Create a free EmailJS account.
2. Add an Email Service (e.g. Gmail) and note the **Service ID**.
3. Create an Email Template with variables `from_name`, `from_email`, `phone`, `message`, and note the **Template ID**.
4. Copy your **Public Key** from Account → API Keys.
5. Copy `.env.example` to `.env` and fill in the three values:
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```
6. Restart the dev server. The form will now deliver messages straight to your inbox.

Until this is configured, the form will show a friendly error instead of silently failing.

## Adding Your Photo

Replace the "NK" placeholder in `src/components/Hero.jsx` with an `<img>` tag pointing to a photo dropped into `src/assets/`.

## Adding GitHub / Live Demo Links to Projects

Open `src/utils/data.js` and fill in the `github` and `demo` fields for each project once your repositories and live deployments are ready. Empty strings show a "Coming soon" badge instead of a broken link.

## Deploying to Vercel

1. Push this project to a new GitHub repository.
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
3. Click **Add New → Project**, then import your repository.
4. Vercel auto-detects Vite — leave the default build settings (`npm run build`, output directory `dist`).
5. Add your three `VITE_EMAILJS_*` environment variables under Project Settings → Environment Variables.
6. Click **Deploy**. You'll get a live URL like `https://naveen-portfolio.vercel.app`.

## License

Personal project — all rights reserved.
