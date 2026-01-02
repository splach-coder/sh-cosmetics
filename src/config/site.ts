export const siteConfig = {
    name: 'SH Cosmetiques',
    description: 'منتجات صحية عضوية نقية مستمدة من الطبيعة - مورينجا، ستيفيا، ومنتجات طبيعية 100% للصحة والجمال',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    defaultLocale: 'ar',
    locales: ['ar', 'fr', 'en'],
    // SEO specifics
    ogImage: '/images/og-image.jpg',
    twitterHandle: '@shcosmetics',
    instagramHandle: '@shcosmetics',
    facebookHandle: 'shcosmetics',
    creator: 'SH Cosmetiques',
    email: 'hello@shcosmetiques.ma',
    phone: '+212 6XX XXX XXX',
    address: '123 شارع النخيل، مراكش، المغرب',
    // Business info
    tagline: 'نقاء الطبيعة لإشراقة تفيض بالحياة',
    keywords: ['مورينجا', 'ستيفيا', 'منتجات عضوية', 'صحة طبيعية', 'سوبر فود', 'المغرب', 'عناية طبيعية'],
};

export type SiteConfig = typeof siteConfig;

