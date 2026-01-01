'use client';

import { Star } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const testimonials = [
    {
        id: 1,
        quote: "زيت اللافندر للوجه غيّر روتين العناية ببشرتي تماماً. ليس فقط للعناية بالبشرة، بل لحظة سلام أتطلع إليها كل يوم.",
        author: "إلارا م.",
        role: "مشترية موثقة",
        rating: 5
    },
    {
        id: 2,
        quote: "كنت متشككة من منتجات العناية العضوية، لكن السيروم النباتي سحر حقيقي. يمتص بشكل جميل، ويترك شعري ناعماً، لامعاً، وبرائحة المرج.",
        author: "سارة ج.",
        role: "مشترية موثقة",
        rating: 5
    },
    {
        id: 3,
        quote: "أخيراً، مكملات غذائية بطعم جيد كما تجعلني أشعر. مسحوق المورينجا يمنحني طاقة مستدامة دون التوتر. عنصر أساسي في مطبخي.",
        author: "ديفيد ل.",
        role: "مشتري موثق",
        rating: 4.5
    }
];

export default function Testimonials() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} className="py-16 md:py-24 bg-accent/10" dir="rtl">
            <div className="container mx-auto px-6">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                    className="flex justify-between items-end mb-12 md:mb-16"
                >
                    <div>
                        <span className="text-xs md:text-sm uppercase tracking-[0.2em] text-gray-500 block mb-2 md:mb-3">
                            حب المجتمع
                        </span>
                        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-charcoal">
                            قصص الإشراق
                        </h2>
                    </div>
                    <Link
                        href="/reviews"
                        className="hidden md:block text-xs uppercase tracking-widest text-primary hover:text-primary-dark transition-colors border-b border-primary pb-1"
                    >
                        اقرئي جميع التقييمات
                    </Link>
                </motion.div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className="bg-white p-6 md:p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border-t-4 border-primary/20"
                        >
                            {/* Quote Icon */}
                            <div className="text-6xl text-primary/10 font-serif leading-none mb-4">"</div>

                            {/* Quote Text */}
                            <p className="text-gray-700 font-body text-sm md:text-base leading-relaxed mb-6 italic">
                                {testimonial.quote}
                            </p>

                            {/* Author Info */}
                            <div className="border-t border-gray-100 pt-4">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="font-display text-sm md:text-base font-semibold text-charcoal">
                                            {testimonial.author}
                                        </p>
                                        <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">
                                            {testimonial.role}
                                        </p>
                                    </div>

                                    {/* Star Rating */}
                                    <div className="flex gap-0.5">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`w-3 h-3 md:w-4 md:h-4 ${i < Math.floor(testimonial.rating)
                                                        ? 'text-yellow-500 fill-current'
                                                        : i < testimonial.rating
                                                            ? 'text-yellow-500 fill-current opacity-50'
                                                            : 'text-gray-300'
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Mobile "Read All" Link */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mt-8 text-center md:hidden"
                >
                    <Link
                        href="/reviews"
                        className="inline-block text-xs uppercase tracking-widest text-primary hover:text-primary-dark transition-colors border-b border-primary pb-1"
                    >
                        اقرئي جميع التقييمات
                    </Link>
                </motion.div>

            </div>
        </section>
    );
}
