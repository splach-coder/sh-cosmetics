'use client';

import { useLocale, useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { ShoppingBag, Menu, X, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useCart } from '@/context/CartContext';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const locale = useLocale();
    const pathname = usePathname();
    const { cartCount, toggleCart } = useCart();

    // Check if we're on the home page
    const isHomePage = pathname === `/${locale}` || pathname === '/';

    // Determine if header should be white (home page and not scrolled)
    const isWhiteHeader = isHomePage && !isScrolled;

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    const navLinks = [
        { href: '/', label: 'الرئيسية' },
        { href: '/shop', label: 'المتجر' },
        { href: '/ingredients', label: 'المكونات' },
        { href: '/about', label: 'من نحن' },
        { href: '/contact', label: 'تواصل معنا' },
    ];

    return (
        <>
            <header
                className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-cream/95 backdrop-blur-md shadow-sm border-b border-gray-100'
                    : 'bg-transparent'
                    }`}
                dir="rtl"
            >
                <div className="container mx-auto px-6">
                    <div className="flex justify-between items-center h-20">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <Link
                                href="/"
                                className={`font-display text-2xl italic font-semibold tracking-wide transition-colors ${isWhiteHeader
                                    ? 'text-white hover:text-white/80'
                                    : 'text-primary hover:text-primary-dark'
                                    }`}
                            >
                                SH <span className={`text-xs font-body not-italic tracking-widest mr-1 uppercase ${isWhiteHeader ? 'text-white/80' : 'text-gray-600'
                                    }`}>Cosmetiques</span>
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex gap-8 font-body">
                            <Link
                                href="/"
                                className={`text-sm font-medium transition-colors ${isWhiteHeader
                                    ? 'text-white hover:text-white/80'
                                    : 'text-charcoal hover:text-primary'
                                    }`}
                            >
                                الرئيسية
                            </Link>
                            <Link
                                href="/shop"
                                className={`text-sm font-medium transition-colors ${isWhiteHeader
                                    ? 'text-white hover:text-white/80'
                                    : 'text-charcoal hover:text-primary'
                                    }`}
                            >
                                المتجر
                            </Link>
                            <Link
                                href="/ingredients"
                                className={`text-sm font-medium transition-colors ${isWhiteHeader
                                    ? 'text-white hover:text-white/80'
                                    : 'text-charcoal hover:text-primary'
                                    }`}
                            >
                                المكونات
                            </Link>
                            <Link
                                href="/about"
                                className={`text-sm font-medium transition-colors ${isWhiteHeader
                                    ? 'text-white hover:text-white/80'
                                    : 'text-charcoal hover:text-primary'
                                    }`}
                            >
                                من نحن
                            </Link>
                            <Link
                                href="/contact"
                                className={`text-sm font-medium transition-colors ${isWhiteHeader
                                    ? 'text-white hover:text-white/80'
                                    : 'text-charcoal hover:text-primary'
                                    }`}
                            >
                                تواصل معنا
                            </Link>
                        </nav>

                        {/* Actions */}
                        <div className="flex items-center space-x-4 rtl:space-x-reverse">
                            <button
                                onClick={toggleCart}
                                className={`p-2 transition-colors relative ${isWhiteHeader
                                    ? 'text-white hover:text-white/80'
                                    : 'text-charcoal hover:text-primary'
                                    }`}
                                aria-label="فتح السلة"
                            >
                                <ShoppingBag className="w-5 h-5" />
                                {cartCount > 0 && (
                                    <span className="absolute -top-1 -left-1 bg-primary text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                                        {cartCount}
                                    </span>
                                )}
                            </button>
                            <button
                                className={`md:hidden p-2 transition-colors ${isWhiteHeader
                                    ? 'text-white hover:text-white/80'
                                    : 'text-charcoal hover:text-primary'
                                    }`}
                                onClick={() => setIsMobileMenuOpen(true)}
                                aria-label="فتح القائمة"
                            >
                                <Menu className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Menu - Professional Design */}
            <>
                {/* Overlay */}
                {isMobileMenuOpen && (
                    <div
                        className="fixed inset-0 bg-black/50 z-[100] transition-opacity duration-300 md:hidden"
                        onClick={() => setIsMobileMenuOpen(false)}
                    />
                )}

                {/* Drawer Panel */}
                <div
                    className={`fixed top-0 left-0 h-full w-full md:w-[380px] bg-cream shadow-2xl z-[101] transform transition-transform duration-500 ease-out md:hidden ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
                        }`}
                    dir="rtl"
                >
                    <div className="relative flex flex-col h-full">
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-primary/10">
                            <Link
                                href="/"
                                className="font-display text-2xl italic font-semibold tracking-wide text-primary"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                SH <span className="text-xs font-body not-italic tracking-widest mr-1 text-charcoal/60 uppercase">Cosmetiques</span>
                            </Link>
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="p-2 hover:bg-primary/5 rounded-full transition-colors"
                                aria-label="إغلاق القائمة"
                            >
                                <X className="w-6 h-6 text-charcoal" />
                            </button>
                        </div>

                        {/* Navigation Links */}
                        <nav className="flex-1 flex flex-col justify-center px-6 py-12 space-y-1">
                            {navLinks.map((link, index) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="group relative py-6 px-6 transition-all duration-300"
                                    style={{
                                        animation: isMobileMenuOpen ? `slideIn 0.5s ease-out ${index * 0.1}s both` : 'none'
                                    }}
                                >
                                    {/* Hover Background */}
                                    <div className="absolute inset-0 bg-primary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                    {/* Text */}
                                    <span className="relative block text-2xl font-display font-semibold text-charcoal group-hover:text-primary transition-colors duration-300">
                                        {link.label}
                                    </span>

                                    {/* Underline */}
                                    <div className="relative mt-2 h-0.5 bg-primary/20 rounded-full overflow-hidden">
                                        <div className="absolute inset-0 bg-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                                    </div>
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>
            </>

            <style jsx>{`
                @keyframes slideIn {
                    from {
                        opacity: 0;
                        transform: translateX(-20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
            `}</style>
        </>
    );
}
