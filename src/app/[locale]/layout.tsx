import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import "../globals.css";
import { Playfair_Display, Montserrat } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import { CartProvider } from '@/context/CartContext';
import { siteConfig } from '@/config/site';
import { Metadata } from 'next';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: "SH Cosmetiques | عناية طبيعية نقية",
    template: `%s | SH Cosmetiques`,
  },
  description: "ماركة تجميل نباتية وعضوية للعناية بالبشرة والشعر والغذاء الصحي.",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <body className={`${playfair.variable} ${montserrat.variable} min-h-screen flex flex-col font-body antialiased bg-cream text-charcoal`} suppressHydrationWarning>
        <div className="fixed inset-0 pointer-events-none z-50 bg-grain mix-blend-multiply opacity-40 dark:opacity-20"></div>
        <CartProvider>
          <NextIntlClientProvider messages={messages}>
            <Header />
            <CartDrawer />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </NextIntlClientProvider>
        </CartProvider>
      </body>
    </html>
  );
}
