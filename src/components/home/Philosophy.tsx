'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Philosophy() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} className="py-24 bg-accent/20 relative overflow-hidden text-right" dir="rtl">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Image Section - Overlapping images */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2 relative h-[500px]"
                    >
                        {/* Main Image - Moringa */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
                            animate={isInView ? { opacity: 1, scale: 1, rotate: -2 } : { opacity: 0, scale: 0.9, rotate: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="absolute top-0 left-0 w-3/4 h-3/4 z-10 hover:scale-105 transition-transform duration-700 rounded-lg overflow-hidden shadow-xl"
                        >
                            <Image
                                src="/images/product-img4.jpeg"
                                alt="مورينجا SH COSMETIQUES"
                                fill
                                className="object-cover"
                            />
                        </motion.div>

                        {/* Secondary Image - Stevia */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
                            animate={isInView ? { opacity: 1, scale: 1, rotate: 3 } : { opacity: 0, scale: 0.9, rotate: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="absolute bottom-0 right-10 w-1/2 h-1/2 z-0 rounded-lg overflow-hidden shadow-lg border-4 border-white"
                        >
                            <Image
                                src="/images/product-img2.jpeg"
                                alt="ستيفيا SH COSMETIQUES"
                                fill
                                className="object-cover"
                            />
                        </motion.div>

                        {/* Abstract Blur */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-10"></div>
                    </motion.div>

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="w-full lg:w-1/2 space-y-8 text-center lg:text-right"
                    >
                        <h2 className="font-display text-4xl lg:text-5xl text-charcoal">
                            فلسفتنا: <br />
                            <span className="italic text-primary">من الجذور إلى الروتين</span>
                        </h2>

                        <div className="space-y-6 text-gray-600 font-light text-lg font-body leading-relaxed">
                            <p>
                                نحن نؤمن أن الجمال لا يُصنع في المختبرات، بل ينمو في التربة. نختار أجود النباتات العضوية لنضمن أن كل قطرة زيت أو ملعقة من منتجاتنا الصحية خالية تماماً من الإضافات الكيميائية.
                            </p>
                            <p>
                                حياة نقية، بخطوات بسيطة. من المزرعة إليك مباشرة.
                            </p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="pt-4 flex justify-center lg:justify-start space-x-8 rtl:space-x-reverse gap-4"
                        >
                            <div className="flex flex-col items-center lg:items-start">
                                <span className="font-display text-3xl text-primary">100%</span>
                                <span className="text-xs uppercase tracking-widest mt-1">عضوي</span>
                            </div>
                            <div className="flex flex-col items-center lg:items-start">
                                <span className="font-display text-3xl text-primary">0%</span>
                                <span className="text-xs uppercase tracking-widest mt-1">مواد كيميائية</span>
                            </div>
                            <div className="flex flex-col items-center lg:items-start">
                                <span className="font-display text-3xl text-primary">آمن</span>
                                <span className="text-xs uppercase tracking-widest mt-1">وخالٍ من القسوة</span>
                            </div>
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
