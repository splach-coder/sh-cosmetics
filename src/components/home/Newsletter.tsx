'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Newsletter() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send to your email service
        setIsSubmitted(true);
        setTimeout(() => {
            setEmail('');
            setIsSubmitted(false);
        }, 3000);
    };

    return (
        <section ref={ref} className="py-16 md:py-20 bg-primary/90 text-white relative overflow-hidden" dir="rtl">
            {/* Decorative Background Elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-white blur-3xl"></div>
                <div className="absolute bottom-10 left-10 w-40 h-40 rounded-full bg-white blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-3xl mx-auto text-center">

                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-xs md:text-sm uppercase tracking-[0.3em] text-white/80 block mb-3 md:mb-4">
                            انضمي للمجتمع
                        </span>
                        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6 leading-tight">
                            احصلي على خصم 15% على طلبك النباتي الأول
                        </h2>
                        <p className="text-sm md:text-base text-white/90 mb-8 md:mb-10 leading-relaxed max-w-2xl mx-auto font-body">
                            اشتركي للحصول على نصائح العافية، إطلاق المنتجات الجديدة، والعروض الحصرية للأعضاء فقط مباشرة إلى بريدك الإلكتروني.
                        </p>
                    </motion.div>

                    {/* Email Form */}
                    <motion.form
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        onSubmit={handleSubmit}
                        className="flex flex-col sm:flex-row gap-3 md:gap-4 max-w-xl mx-auto"
                    >
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="عنوان بريدك الإلكتروني"
                            className="flex-1 px-4 md:px-6 py-3 md:py-4 rounded-sm bg-white/10 backdrop-blur-sm border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all text-sm md:text-base"
                            dir="ltr"
                        />
                        <button
                            type="submit"
                            disabled={isSubmitted}
                            className="px-6 md:px-8 py-3 md:py-4 bg-white text-primary font-bold uppercase tracking-widest text-xs md:text-sm hover:bg-cream transition-all shadow-lg hover:shadow-xl rounded-sm disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                        >
                            {isSubmitted ? '✓ تم الاشتراك' : 'اشتركي الآن'}
                        </button>
                    </motion.form>

                    {/* Privacy Note */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-[10px] md:text-xs text-white/60 mt-4 md:mt-6"
                    >
                        نحترم خصوصيتك. يمكنك إلغاء الاشتراك في أي وقت.
                    </motion.p>

                </div>
            </div>
        </section>
    );
}
