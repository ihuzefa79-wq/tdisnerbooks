# What's A QuiZnos? — Todd C. Disner

Official book website for **What's A QuiZnos? The Entrepreneurial Story of America's Hottest Sub Chain** by Todd C. Disner.

Built with **Next.js 15 (App Router)**, **Framer Motion** and **Lenis** smooth scrolling.

## Features
- Branded intro loader (animated logo + progress, curtain reveal)
- Animated hero with interactive 3D book, parallax and sparkles
- Pinned horizontal-scroll "journey" section, counters, marquee, magnetic buttons, custom cursor
- Pages: Home, Books, Book detail (`/books/whats-a-quiznos`), About the Author, Contact
- All "Buy" buttons link to the Amazon store (configured in `src/lib/site.js`)

## Develop
```bash
npm install
npm run dev     # http://localhost:3000
```

## Production
```bash
npm run build
npm start
```

## Deploy on Vercel
Import this repository in Vercel. The framework (Next.js) is auto-detected; no environment variables are required.

## Editing content
- Amazon link, navigation, and book data: `src/lib/site.js`
- Images: `public/img/`
- Styles: `src/app/globals.css`
