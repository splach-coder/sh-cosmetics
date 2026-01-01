'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Leaf, Sparkles, Heart, Shield, Zap, Sun } from 'lucide-react';
import Link from 'next/link';

export default function IngredientsPage() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const benefits = [
        {
            icon: Shield,
            title: 'تعزيز المناعة',
            description: 'غنية بمضادات الأكسدة القوية التي تحمي جسمك وتقوي دفاعاته الطبيعية ضد الأمراض'
        },
        {
            icon: Zap,
            title: 'طاقة مستدامة',
            description: 'تمنحك نشاطاً طبيعياً طوال اليوم دون أي منبهات صناعية أو سكريات مضافة'
        },
        {
            icon: Sparkles,
            title: 'بشرة متألقة',
            description: 'تحفز إنتاج الكولاجين الطبيعي وتساعد في تجديد خلايا البشرة من الداخل'
        },
        {
            icon: Heart,
            title: 'صحة القلب',
            description: 'تساعد في تنظيم مستويات الكوليسترول وضغط الدم بفضل مركباتها النباتية الفريدة'
        },
        {
            icon: Sun,
            title: 'مضاد للالتهابات',
            description: 'خصائص طبيعية مضادة للالتهابات تساعد في تخفيف آلام المفاصل والعضلات'
        },
        {
            icon: Leaf,
            title: 'تنقية الجسم',
            description: 'تساعد في تطهير الجسم من السموم وتحسين وظائف الكبد والكلى بشكل طبيعي'
        }
    ];

    const nutritionFacts = [
        { nutrient: 'البروتين', value: '27%', description: 'أكثر من اللحوم' },
        { nutrient: 'فيتامين A', value: '4× أكثر', description: 'من الجزر' },
        { nutrient: 'الكالسيوم', value: '4× أكثر', description: 'من الحليب' },
        { nutrient: 'فيتامين C', value: '7× أكثر', description: 'من البرتقال' },
        { nutrient: 'البوتاسيوم', value: '3× أكثر', description: 'من الموز' },
        { nutrient: 'الحديد', value: '3× أكثر', description: 'من السبانخ' }
    ];

    return (
        <main className="min-h-screen bg-cream" dir="rtl">

            {/* Hero Section */}
            <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center bg-gradient-to-br from-primary/20 via-sage/10 to-cream">
                <div className="text-center px-6 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-xs uppercase tracking-[0.3em] text-primary block mb-3">
                            المكونات السحرية
                        </span>
                        <h1 className="font-display text-4xl md:text-5xl lg:text-7xl text-charcoal mb-6 leading-tight">
                            المورينجا
                            <br />
                            <span className="text-primary italic">شجرة الحياة</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 font-body leading-relaxed max-w-2xl mx-auto">
                            اكتشفي السر الذي استخدمته الحضارات القديمة لآلاف السنين. طعام خارق واحد يحتوي على كل ما يحتاجه جسمك.
                        </p>
                        <div className="w-16 h-px bg-primary mx-auto mt-6"></div>
                    </motion.div>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-20 md:py-32">
                <div className="container mx-auto px-6 max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-charcoal mb-6">
                            ليست مجرد مكمل غذائي...
                            <br />
                            <span className="text-primary italic">إنها ثورة صحية</span>
                        </h2>
                    </motion.div>

                    <div className="space-y-8 text-gray-700 leading-relaxed font-body text-base md:text-lg">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-xl md:text-2xl font-display text-charcoal leading-relaxed"
                        >
                            تخيلي نباتاً واحداً يحتوي على <span className="text-primary font-bold">92 عنصراً غذائياً</span>، <span className="text-primary font-bold">46 مضاد أكسدة</span>، و<span className="text-primary font-bold">36 مركب مضاد للالتهابات</span>. هذا هو سحر المورينجا.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            في قلب الهند القديمة، كانت المورينجا تُعرف بـ "شجرة المعجزات". استخدمها الفراعنة لتحنيط ملوكهم، واعتمد عليها المحاربون لزيادة قوتهم وتحملهم. اليوم، العلم الحديث يؤكد ما عرفته الحضارات منذ آلاف السنين.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            كل ورقة من أوراق المورينجا هي مخزن طبيعي للفيتامينات والمعادن. إنها ليست مجرد "سوبر فود" عادي - إنها الملكة المتوجة على عرش الأطعمة الخارقة.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="bg-primary/5 border-r-4 border-primary p-6 md:p-8 rounded-lg"
                        >
                            <p className="text-lg md:text-xl font-display italic text-primary">
                                "ملعقة واحدة صغيرة من مسحوق المورينجا تحتوي على قيمة غذائية تعادل وجبة كاملة من الخضروات والفواكه."
                            </p>
                            <p className="text-sm text-gray-600 mt-3">- منظمة الصحة العالمية</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Benefits Grid */}
            <section ref={ref} className="py-20 md:py-32 bg-white">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16 max-w-3xl mx-auto"
                    >
                        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-charcoal mb-6">
                            فوائد تغير حياتك
                        </h2>
                        <p className="text-base md:text-lg text-gray-600 font-body leading-relaxed">
                            من الطاقة الصباحية إلى النوم العميق، المورينجا ترافقك في كل لحظة من يومك
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={benefit.title}
                                initial={{ opacity: 0, y: 50 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="group bg-cream p-8 rounded-lg hover:shadow-lg transition-all duration-300"
                            >
                                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                                    <benefit.icon className="w-8 h-8 text-primary" />
                                </div>
                                <h3 className="font-display text-2xl mb-3 text-charcoal">
                                    {benefit.title}
                                </h3>
                                <p className="text-sm text-gray-600 font-body leading-relaxed">
                                    {benefit.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Nutrition Facts */}
            <section className="py-20 md:py-32 bg-gradient-to-br from-primary/10 to-sage/5">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16 max-w-3xl mx-auto"
                    >
                        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-charcoal mb-6">
                            قوة غذائية لا تُصدق
                        </h2>
                        <p className="text-base md:text-lg text-gray-600 font-body leading-relaxed">
                            مقارنة المورينجا بالأطعمة التقليدية - النتائج ستذهلك
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
                        {nutritionFacts.map((fact, index) => (
                            <motion.div
                                key={fact.nutrient}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className="text-3xl md:text-4xl font-display text-primary mb-2">
                                    {fact.value}
                                </div>
                                <div className="text-sm font-bold text-charcoal mb-1">
                                    {fact.nutrient}
                                </div>
                                <div className="text-xs text-gray-500">
                                    {fact.description}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-center mt-12"
                    >
                        <p className="text-sm text-gray-600 font-body">
                            * بناءً على دراسات علمية موثقة من منظمة الصحة العالمية
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* How to Use */}
            <section className="py-20 md:py-32 bg-white">
                <div className="container mx-auto px-6 max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-charcoal mb-6">
                            كيف تستخدمينها؟
                        </h2>
                        <p className="text-base md:text-lg text-gray-600 font-body leading-relaxed">
                            بساطة الاستخدام، عظمة النتائج
                        </p>
                    </motion.div>

                    <div className="space-y-6">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="flex gap-6 items-start bg-cream p-6 rounded-lg"
                        >
                            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl shrink-0">
                                1
                            </div>
                            <div>
                                <h3 className="font-display text-xl text-charcoal mb-2">في الصباح</h3>
                                <p className="text-gray-600 font-body leading-relaxed">
                                    أضيفي ملعقة صغيرة إلى عصيرك الصباحي أو السموذي. ابدئي يومك بجرعة مركزة من الطاقة والحيوية.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="flex gap-6 items-start bg-cream p-6 rounded-lg"
                        >
                            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl shrink-0">
                                2
                            </div>
                            <div>
                                <h3 className="font-display text-xl text-charcoal mb-2">مع الزبادي</h3>
                                <p className="text-gray-600 font-body leading-relaxed">
                                    امزجيها مع الزبادي والعسل لوجبة خفيفة غنية بالبروبيوتيك والمغذيات.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="flex gap-6 items-start bg-cream p-6 rounded-lg"
                        >
                            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl shrink-0">
                                3
                            </div>
                            <div>
                                <h3 className="font-display text-xl text-charcoal mb-2">في الماء الدافئ</h3>
                                <p className="text-gray-600 font-body leading-relaxed">
                                    ذوبيها في كوب من الماء الدافئ مع قطرات من الليمون لمشروب تنقية صباحي قوي.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="flex gap-6 items-start bg-cream p-6 rounded-lg"
                        >
                            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl shrink-0">
                                4
                            </div>
                            <div>
                                <h3 className="font-display text-xl text-charcoal mb-2">في الطبخ</h3>
                                <p className="text-gray-600 font-body leading-relaxed">
                                    أضيفيها إلى الحساء، السلطات، أو حتى المخبوزات لتعزيز القيمة الغذائية لوجباتك.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 md:py-24 bg-gradient-to-br from-primary to-primary-dark text-white">
                <div className="container mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6">
                            جربي قوة الطبيعة الحقيقية
                        </h2>
                        <p className="text-base md:text-lg mb-8 max-w-2xl mx-auto opacity-90 font-body leading-relaxed">
                            مورينجا SH Cosmetiques - 100% عضوية، خالية من الإضافات، مليئة بالحياة
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link
                                href="/shop"
                                className="inline-block bg-white text-primary px-8 py-4 uppercase tracking-widest text-sm font-bold hover:bg-cream transition-all shadow-lg rounded-sm"
                            >
                                اشتري الآن
                            </Link>
                            <Link
                                href="/products/1"
                                className="inline-block border-2 border-white text-white px-8 py-4 uppercase tracking-widest text-sm font-bold hover:bg-white hover:text-primary transition-all rounded-sm"
                            >
                                اعرفي المزيد
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

        </main>
    );
}
