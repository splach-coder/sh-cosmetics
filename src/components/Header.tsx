'use client';

import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import { ShoppingBag, Menu } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useCart } from '@/context/CartContext';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const locale = useLocale();
    const { cartCount, toggleCart } = useCart();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
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
                        <Link href="/" className="font-display text-2xl italic font-semibold tracking-wide text-primary hover:text-primary-dark transition-colors">
                            SH <span className="text-xs font-body not-italic tracking-widest mr-1 text-gray-600 uppercase">Cosmetiques</span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex gap-8 font-body">
                        <Link href="/" className="text-charcoal hover:text-primary transition-colors text-sm font-medium">
                            الرئيسية
                        </Link>
                        <Link href="/shop" className="text-charcoal hover:text-primary transition-colors text-sm font-medium">
                            المتجر
                        </Link>
                        <Link href="/about" className="text-charcoal hover:text-primary transition-colors text-sm font-medium">
                            من نحن
                        </Link>
                        <Link href="/contact" className="text-charcoal hover:text-primary transition-colors text-sm font-medium">
                            تواصل معنا
                        </Link>
                    </nav>

                    {/* Actions */}
                    <div className="flex items-center space-x-4 rtl:space-x-reverse">
                        <button
                            onClick={toggleCart}
                            className="p-2 text-charcoal hover:text-primary transition-colors relative"
                        >
                            <ShoppingBag className="w-5 h-5" />
                            {cartCount > 0 && (
                                <span className="absolute -top-1 -left-1 bg-primary text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                                    {cartCount}
                                </span>
                            )}
                        </button>
                        <button className="md:hidden p-2 text-charcoal">
                            <Menu className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}
