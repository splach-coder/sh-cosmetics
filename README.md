# SH Cosmetiques - E-Commerce Website

A modern, premium e-commerce website for **SH Cosmetiques**, a Moroccan brand specializing in natural, organic health foods and cosmetic products. Built with **Next.js**, **React**, **TailwindCSS**, and **TypeScript**.

## 🌿 About SH Cosmetiques

SH Cosmetiques offers premium, 100% natural and organic products including:
- **Moringa Powder** - A superfood packed with nutrients for health and vitality
- **Stevia Powder** - A natural, zero-calorie sugar alternative

All products are carefully selected to support a healthy lifestyle, free from artificial additives and chemicals.

## 📂 Project Structure

### 1. `src/data` (Product Catalog)
- **`products.ts`**: Contains all product information including:
  - Product names, descriptions, and pricing
  - Benefits and usage instructions
  - Images and categories
  - Tags (e.g., "الأكثر مبيعاً", "جديد")

### 2. `src/app/[locale]` (Pages & Routes)
- **`page.tsx`**: Homepage with Hero, Philosophy, Best Sellers, Testimonials, and Newsletter sections
- **`shop/`**: Product listing page
- **`products/[id]/`**: Individual product detail pages
- **`about/`**: About the brand
- **`contact/`**: Contact page with Google Maps integration
- **`checkout/`**: Shopping cart and checkout flow
- **`layout.tsx`**: Global layout with Header, Footer, and multilingual support

### 3. `src/components` (UI Components)
- **`home/`**: Homepage-specific components (Hero, Philosophy, BestSellers, Testimonials, Newsletter)
- **`Header.tsx`**: Navigation with cart drawer and language switcher
- **`Footer.tsx`**: Footer with company information
- **`CartDrawer.tsx`**: Shopping cart functionality
- **Reusable UI components**: Buttons, cards, forms, etc.

### 4. `messages/` (Internationalization)
- Multilingual support for Arabic, French, and English
- Translations for all UI elements and content

---

## 🚀 Getting Started

### Installation
```bash
# Clone the repository
git clone <repo-url> shcosmetics
cd shcosmetics

# Install dependencies
npm install
```

### Development
```bash
# Run the development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the website.

### Build for Production
```bash
# Create an optimized production build
npm run build

# Start the production server
npm start
```

---

## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router) with React 19
- **Language**: TypeScript
- **Styling**: TailwindCSS 4
- **Animations**: Framer Motion
- **Carousel**: Swiper.js
- **Icons**: Lucide React
- **Internationalization**: next-intl
- **Fonts**: Cormorant Garamond
- **Gestures**: @use-gesture/react

## ✨ Key Features

- **Premium Design**: Modern, visually stunning interface with smooth animations and micro-interactions
- **Fully Responsive**: Mobile-first design optimized for all devices
- **Multi-language Support**: Arabic (primary), French, and English
- **Shopping Cart**: Full e-commerce functionality with cart drawer
- **SEO Optimized**: Proper meta tags, semantic HTML, and performance optimization
- **Scroll Animations**: Framer Motion animations triggered on scroll for engaging user experience
- **Contact Integration**: Google Maps integration for location display
- **Newsletter Signup**: Email collection for marketing campaigns
- **Client-Side Rendering**: Fast, dynamic content without backend dependencies

## 📝 Adding New Products

To add new products to the catalog:

1. Open `src/data/products.ts`
2. Add a new product object with the following structure:
```typescript
{
  id: number,
  name: string,
  title: string,
  description: string,
  fullDescription: string,
  price: string,
  priceNumeric: number,
  image: string,
  category: string,
  tag: string,
  benefits: string[],
  usage: string
}
```
3. Add product images to `public/images/`
4. The product will automatically appear on the shop page and be available for purchase

---

## 🎨 Design Philosophy

This website prioritizes:
- **Visual Excellence**: Rich aesthetics with vibrant colors, smooth gradients, and premium typography
- **User Experience**: Intuitive navigation, smooth transitions, and engaging interactions
- **Performance**: Optimized images, lazy loading, and efficient code
- **Accessibility**: Semantic HTML and proper ARIA labels
- **Brand Identity**: Reflects the natural, organic essence of SH Cosmetiques products

---

*Built with ❤️ for SH Cosmetiques - Natural Beauty, Natural Health*
