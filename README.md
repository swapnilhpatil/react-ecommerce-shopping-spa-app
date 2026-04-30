# React E-commerce SPA

A premium, high-fidelity Single Page Application (SPA) E-commerce storefront built with modern web technologies. This project focuses on delivering a visually stunning, responsive, and highly interactive user experience.

## ✨ Features

- **Modern Tech Stack**: Built with **Next.js 16 (App Router)** and **Turbopack** for lightning-fast development and performance.
- **Utility-First Styling**: 100% styled with **Tailwind CSS v4** (completely refactored away from legacy CSS modules).
- **Premium UI/UX**: Includes modern design patterns like glassmorphism, dynamic animations, hover effects, and a highly responsive grid layout.
- **Complete Shopping Flows**:
  - 🏠 **Home**: Dynamic hero sections, trending products, and category grids.
  - 🛍️ **Catalog & Collections**: Advanced filtering, sorting, and responsive product cards.
  - 📦 **Product Details**: Interactive image galleries, size/color selectors, and detailed product specifications.
  - 🛒 **Cart & Checkout**: Multi-step checkout process with form validation and order review.
  - ❤️ **User Features**: Favorites, Profile management, and bespoke Sustainability pages.

## 🛠️ Technology Stack

- **Framework**: [Next.js](https://nextjs.org/) (React)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons & Graphics**: Custom SVG implementations
- **Routing**: Next.js App Router (Client-side transitions via `next/link`)

## 🚀 Getting Started

First, clone the repository and install the dependencies:

```bash
# Clone the repository
git clone https://github.com/swapnilhpatil/react-ecommerce-shopping-spa-app.git

# Navigate into the project directory
cd react-ecommerce-shopping-spa-app

# Install dependencies
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📂 Project Structure

```text
src/
├── app/                  # Next.js App Router pages
│   ├── cart/             # Shopping Cart
│   ├── catalog/          # Product Catalog
│   ├── checkout/         # Multi-step Checkout
│   ├── collections/      # Product Collections
│   ├── favorites/        # Wishlist/Favorites
│   ├── new-arrivals/     # New Products
│   ├── product/[id]/     # Dynamic Product Detail Page
│   ├── profile/          # User Profile
│   ├── sustainability/   # Brand Sustainability Info
│   ├── layout.tsx        # Root Layout
│   ├── page.tsx          # Home Page
│   └── globals.css       # Global Styles & Tailwind Directives
└── components/           # Reusable UI Components
    ├── Header.tsx        # Main Navigation
    ├── Footer.tsx        # Global Footer
    ├── ProductCard.tsx   # Reusable Product Display
    ├── Hero.tsx          # Hero Banner
    └── ...
```

## 💅 Recent Architectural Upgrades

- **Tailwind CSS v4 Migration**: The entire project was recently audited and migrated from local CSS Modules to a strict, utility-first Tailwind architecture utilizing the new `@tailwindcss/postcss` compiler.
- **Client-Side Routing**: All HTML `<a>` tags have been replaced with Next.js `<Link>` components to ensure seamless, SPA-like page transitions without full page reloads.

## 📝 License

This project is open-source and available under the MIT License.
