# WebCraft — Production-Ready Digital Agency (React Edition)

> **Brand:** WebCraft  
> **Tagline:** *Old-school craftsmanship. New-age possibilities.*  
> **Official Email:** [webcraft.4iu@gmail.com](mailto:webcraft.4iu@gmail.com)  
> **Instagram:** [https://www.instagram.com/webcraft4u/](https://www.instagram.com/webcraft4u/)  
> **Framework:** React 18 + Vite  
> **Repository:** [https://github.com/AyaanKhalifa/webcraft4u](https://github.com/AyaanKhalifa/webcraft4u)  
> **Master Logo:** Transparent `main logo.png` deployed universally across all headers, hero frames, footers, and preloaders.  
> **Favicons:** Dedicated `/favicon/` package.  
> **Android App:** Direct Chrome browser APK download (`/WebCraft.apk`).

---

## 1. Key Features & Innovations

1. **Garage Shutter Open Preloader:**
   - 18 corrugated horizontal steel slats that roll vertically upward into an overhead roll drum.
   - High-fidelity pulsing wireframe Skeleton Screen revealed underneath before hydrating into the live website.
2. **Interactive Particle Hero Canvas & Dynamic Typing:**
   - Real-time connected constellation nodes with gentle mouse repulsion.
   - Dynamic typing sub-headline cycling through core business specializations.
3. **Infinite Marquee Ticker:**
   - Smooth continuous ticker showcasing WebCraft engineering benchmarks (React, Sub-Second Speed, Core Web Vitals 95+, Google Local SEO, Stripe Payments).
4. **Interactive Custom Service & Price Configurator:**
   - Live pricing calculation engine for foundations, custom pages, and capability add-ons.
5. **Project Brief Form (100% Free Lead Routing):**
   - Submits directly to `webcraft.4iu@gmail.com` via FormSubmit with zero platform fees.
   - Animated SVG Green Tick (`✓`) celebration sequence upon submission.
   - Free direct fallbacks: Web Gmail, Native Mail client, and 1-click clipboard copy.
6. **Android App (.apk) Direct Download:**
   - Direct download for Chrome browser on Android (`WebCraft.apk`) with official wolf favicon icon and packaging.

---

## 2. Clean Project Architecture

```
d:/Web craft/
├── favicon/                 # Master favicon package
│   ├── android-chrome-192x192.png
│   ├── android-chrome-512x512.png
│   ├── apple-touch-icon.png
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   ├── favicon.ico
│   └── site.webmanifest
├── public/                  # Static assets served by Vite
│   ├── favicon/             # Favicon suite referenced in index.html
│   ├── images/work/         # Mockup illustrations
│   ├── logo.png             # Transparent master logo
│   ├── main-logo.png        # Transparent master logo
│   ├── robots.txt           # Search engine crawling rules
│   ├── sitemap.xml          # Search engine XML index
│   └── site.webmanifest     # PWA manifest
├── src/
│   ├── main.jsx             # React mount point
│   ├── App.jsx              # Main application orchestrator
│   ├── index.css            # Heritage Retro × Modern Editorial CSS
│   ├── assets/              # Component-level assets
│   └── components/
│       ├── Preloader.jsx    # Cinematic logo reveal with progress
│       ├── Navbar.jsx       # Header with scroll progress & drawer
│       ├── Hero.jsx         # Memorable headline & logo specimen
│       ├── BrandIntro.jsx   # Manifesto: Craft vs. Assembly Line
│       ├── Services.jsx     # 6 core disciplines + cost calculator
│       ├── Portfolio.jsx    # Real-world industry solutions (Clinics, Shops, Barbershops, etc.)
│       ├── Process.jsx      # 5-stage workflow (Discover, Plan, Design, Develop, Launch)
│       ├── WhyWebCraft.jsx  # 6 grounded value propositions
│       ├── Contact.jsx      # Validated enquiry form + email fallback
│       ├── Footer.jsx       # Navigation, direct email, Instagram, legal
│       ├── CaseStudyModal.jsx # Solution blueprint inspector
│       └── LegalModal.jsx   # Privacy Policy & Terms dialogs
├── index.html               # Root React entry with Google Fonts & /favicon/ links
├── package.json             # React, Vite, Lucide-React
├── vite.config.js           # Vite build configuration
└── README.md
```

---

## 2. Real-World Solutions in the Work Section (No Fake Projects)

Instead of fictional clients, the **Work** section is structured around real-world business blueprints:

1. **Medical & Dental Clinics:** Instant patient booking, mobile medical history intake, practitioner bios, accepted insurances, and HIPAA-aligned security.
2. **Retail Shops & Boutiques:** Frictionless mobile checkout (Apple Pay / Google Pay / Cards), POS inventory sync, in-store pickup options, and automated order alerts.
3. **Barbershops & Beauty Salons:** 24/7 chair & stylist scheduling, signature cuts photo gallery, transparent service pricing menus, and SMS appointment reminders.
4. **Software & SaaS Startups:** High-impact product landing page, interactive feature tour, transparent pricing tiers, and one-click trial onboarding.
5. **Local Trades & Contractors:** One-tap emergency call button, instant quote estimation calculator, before & after project slider, and service radius map.
6. **Restaurants & Cafés:** Fast-loading digital food and cocktail menu with allergen tags, table reservations, location directions, and catering intake.

---

## 3. Dedicated `/favicon/` Suite

Configured in `index.html`:
```html
<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png">
<link rel="shortcut icon" href="/favicon/favicon.ico">
<link rel="manifest" href="/favicon/site.webmanifest">
```

---

## 4. Commands

### Local Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
```
Generates production-ready distribution files in `dist/`.
