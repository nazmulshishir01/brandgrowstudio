# 🟢 Brand Grow Studio — Website

A modern, futuristic, fully responsive multi-page website for **Brand Grow Studio** — a professional photography, videography, podcast recording, video editing, and creative marketing agency in Mirpur DOHS, Dhaka, Bangladesh.

## ✨ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS 3.4
- **Animations:** Framer Motion 11
- **Icons:** Lucide React
- **Typography:** Plus Jakarta Sans + DM Sans (Google Fonts)
- **Language:** JavaScript / JSX

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Installation

```bash
# 1. Navigate to the project folder
cd brandgrow

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## 📂 Project Structure

```
brandgrow/
├── app/
│   ├── layout.js          # Root layout (Navbar, Footer, SEO, JSON-LD)
│   ├── page.js            # Home page
│   ├── globals.css         # Global styles + Tailwind
│   ├── loading.js          # Loading skeleton
│   ├── not-found.js        # 404 page
│   ├── sitemap.js          # Dynamic SEO sitemap
│   ├── services/page.js    # Services page
│   ├── portfolio/page.js   # Portfolio with filterable grid
│   ├── studio/page.js      # Studio info + map
│   ├── about/page.js       # About page
│   ├── pricing/page.js     # Pricing + FAQ accordion
│   └── contact/page.js     # Contact form + map + socials
├── components/
│   ├── ui/index.js          # Reusable UI (Button, Chip, Logo, etc.)
│   ├── animations/index.js  # Framer Motion animation components
│   └── layout/
│       ├── Navbar.js        # Sticky navbar + mobile drawer
│       ├── Footer.js        # 4-column footer
│       └── FloatingElements.js  # WhatsApp + Back-to-top buttons
├── lib/
│   ├── data.js              # All site data (services, portfolio, FAQ, etc.)
│   └── seo.js               # SEO metadata helpers
├── public/
│   ├── robots.txt           # SEO robots
│   └── images/              # Place your images here
├── tailwind.config.js
├── postcss.config.js
├── next.config.js
├── tsconfig.json
└── package.json
```

## 🎨 Pages

| Page       | Route        | Features                                      |
|------------|--------------|-----------------------------------------------|
| Home       | `/`          | Hero, stats, services, showreel, why us, CTA  |
| Services   | `/services`  | 6 detailed service sections with alternating layout |
| Portfolio  | `/portfolio` | Filterable masonry grid with animated transitions  |
| Studio     | `/studio`    | Gallery, equipment list, pricing, Google Maps  |
| About      | `/about`     | Story, why us, client logos, social links      |
| Pricing    | `/pricing`   | 3 pricing cards, FAQ accordion                 |
| Contact    | `/contact`   | Booking form, info cards, map, social links    |

## 🎭 Animations & Effects

- **Scroll Reveal** — sections fade-in with blur-to-sharp as you scroll
- **Staggered Entries** — grid items appear one by one
- **Magnetic Hover** — buttons subtly follow your cursor
- **Cursor Glow** — hero section has ambient light following the mouse
- **Count Up** — stats animate from 0 to final value
- **Text Reveal** — word-by-word hero text entrance
- **Parallax Float** — subtle depth on scroll
- **Morphing Blob** — organic animated shape in hero background
- **Shine Effect** — light sweep on card hover
- **Spring Physics** — natural button and card interactions
- **Noise Texture** — subtle film grain overlay for depth

## 🔍 SEO Features

- Full `<meta>` tags via Next.js Metadata API
- JSON-LD structured data (LocalBusiness schema)
- Dynamic `sitemap.xml` generation
- `robots.txt`
- Open Graph + Twitter Card tags
- Semantic HTML throughout
- Alt text placeholders for images

## 📝 Customization

### Replace Placeholder Content
1. **Images** — Add real photos to `/public/images/` and update components
2. **YouTube** — Replace showreel placeholder with actual embed iframes
3. **Google Maps** — Update the iframe `src` with your exact studio coordinates
4. **Portfolio** — Add real YouTube video IDs and photo URLs
5. **Contact Form** — Connect to your backend/API (e.g., Formspree, EmailJS)

### Brand Colors
All colors are configured in `tailwind.config.js` under `theme.extend.colors.brand`.

## 📱 Responsive

- **Mobile** (< 768px): Single column, hamburger menu drawer
- **Tablet** (768–1024px): 2-column grids
- **Desktop** (> 1024px): Full multi-column layouts

## 📄 License

© 2025 Brand Grow Studio. All rights reserved.
"# brandgrowstudio" 
