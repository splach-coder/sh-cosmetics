'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/images/banner.jpeg"
                    alt="Natural Beauty"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-charcoal/50"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
                <div className="max-w-4xl">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="font-display text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight"
                    >
                        نقاء الطبيعة..
                        <br />
                        <span className="italic text-cream">لإشراقة تفيض بالحياة</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-base md:text-lg text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed font-body"
                    >
                        اكتشفي قوة المكونات العضوية المستخلصة من قلب الطبيعة.
                        <br />
                        عناية فائقة بالصحة والجمال، صُممت خصيصاً لتعيد لكِ توازنكِ الطبيعي.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <Link
                            href="/shop"
                            className="inline-flex items-center gap-2 bg-white text-charcoal px-8 py-4 rounded-full uppercase tracking-widest text-sm font-bold hover:bg-cream transition-all shadow-lg hover:shadow-xl"
                        >
                            <span>تسوقي التشكيلة الآن</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="flex flex-col items-center gap-2 text-white/60"
                >
                    <span className="text-xs uppercase tracking-widest">تصفح</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </motion.div>
            </motion.div>
        </section>
    );
}
