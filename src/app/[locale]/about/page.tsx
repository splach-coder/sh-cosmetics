import Image from 'next/image';
import Link from 'next/link';
import { Leaf, Heart, Shield, Sparkles } from 'lucide-react';

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-cream" dir="rtl">

            {/* Simple Hero Banner */}
            <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center">
                <div className="absolute inset-0">
                    <Image
                        src="/images/banner-infos.jpeg"
                        alt="Natural botanical ingredients"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-charcoal/40"></div>
                </div>
                <div className="relative z-10 text-center px-6 text-white">
                    <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-4">
                        من الأرض.. إليكِ مباشرة
                    </h1>
                    <div className="w-16 h-px bg-white/50 mx-auto"></div>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-20 md:py-32">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="text-center mb-16">
                        <span className="text-xs uppercase tracking-[0.3em] text-primary block mb-3">
                            قصتنا
                        </span>
                        <h2 className="font-display text-3xl md:text-4xl text-charcoal mb-6">
                            رحلة من المزرعة إلى روتينك اليومي
                        </h2>
                    </div>

                    <div className="space-y-6 text-gray-700 leading-relaxed font-body text-base md:text-lg">
                        <p>
                            بدأت <span className="font-display italic text-primary">SH Cosmetiques</span> برؤية بسيطة: العالم الحديث مليء بالضجيج، لكن الطبيعة تملك كل الإجابات.
                        </p>
                        <p>
                            سافرنا عبر المزارع العضوية في المغرب وحول العالم لنأتي بمكونات فعالة حقاً، دون آثار جانبية كيميائية. كل منتج يمر بمراحل اختيار دقيقة لضمان النقاء والجودة.
                        </p>
                        <p>
                            نحن هنا لنقدم لكِ الطبيعة في أصفى صورها. من الجذور إلى الروتين، كل خطوة مدروسة بعناية لتمنحك تجربة عناية شمولية تحترم جسدك والبيئة.
                        </p>
                    </div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="py-20 md:py-32 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-charcoal mb-6">
                            فلسفتنا: من الجذور إلى الروتين
                        </h2>
                        <p className="text-base md:text-lg text-gray-700 leading-relaxed font-body">
                            نحن نؤمن أن الجمال لا يُصنع في المختبرات، بل ينمو في التربة. نختار أجود النباتات العضوية لنضمن أن كل قطرة زيت أو ملعقة من منتجاتنا الصحية خالية تماماً من الإضافات الكيميائية.
                        </p>
                        <p className="text-lg md:text-xl text-primary font-display italic mt-6">
                            حياة نقية، بخطوات بسيطة.
                        </p>
                    </div>

                    {/* Values Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Leaf className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="font-display text-xl mb-2 text-charcoal">100% عضوي</h3>
                            <p className="text-sm text-gray-600 font-body leading-relaxed">
                                مكونات طبيعية معتمدة من مزارع عضوية موثوقة
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Shield className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="font-display text-xl mb-2 text-charcoal">خالي من القسوة</h3>
                            <p className="text-sm text-gray-600 font-body leading-relaxed">
                                لا نختبر على الحيوانات، نحترم كل الكائنات
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Heart className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="font-display text-xl mb-2 text-charcoal">صُنع بحب</h3>
                            <p className="text-sm text-gray-600 font-body leading-relaxed">
                                كل منتج يُحضّر بعناية فائقة واهتمام بالتفاصيل
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Sparkles className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="font-display text-xl mb-2 text-charcoal">نتائج حقيقية</h3>
                            <p className="text-sm text-gray-600 font-body leading-relaxed">
                                فعالية مثبتة بمكونات طبيعية قوية ونقية
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Categories */}
            <section className="py-20 md:py-32">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-xs uppercase tracking-[0.3em] text-primary block mb-3">
                            تشكيلاتنا
                        </span>
                        <h2 className="font-display text-3xl md:text-4xl text-charcoal">
                            اكتشفي عالم الطبيعة
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {/* Skincare */}
                        <div className="group">
                            <div className="aspect-[4/5] relative mb-6 overflow-hidden">
                                <Image
                                    src="/images/product-img1.jpeg"
                                    alt="عناية بالبشرة"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <h3 className="font-display text-2xl mb-3 text-charcoal">
                                عناية نباتية لبشرة متوهجة
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed font-body mb-4">
                                من زيوت الوجه المهدئة باللافندر إلى سيروم النباتات الغني بالفيتامينات. منتجاتنا تعتمد على مضادات الأكسدة الطبيعية لتجديد شباب بشرتكِ بأمان.
                            </p>
                            <Link
                                href="/shop?category=skincare"
                                className="text-primary text-sm font-medium uppercase tracking-widest hover:text-primary-dark transition-colors border-b border-primary pb-1 inline-block"
                            >
                                اكتشفي المزيد
                            </Link>
                        </div>

                        {/* Haircare */}
                        <div className="group">
                            <div className="aspect-[4/5] relative mb-6 overflow-hidden">
                                <Image
                                    src="/images/product-img2.jpeg"
                                    alt="عناية بالشعر"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <h3 className="font-display text-2xl mb-3 text-charcoal">
                                غذاء الطبيعة لشعر قوي ولامع
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed font-body mb-4">
                                استعيدي حيوية شعرك من الجذور حتى الأطراف بتركيبات غنية بالزيوت الأساسية والمستخلصات النباتية المحفزة للنمو والصحة.
                            </p>
                            <Link
                                href="/shop?category=haircare"
                                className="text-primary text-sm font-medium uppercase tracking-widest hover:text-primary-dark transition-colors border-b border-primary pb-1 inline-block"
                            >
                                اكتشفي المزيد
                            </Link>
                        </div>

                        {/* Health Food */}
                        <div className="group">
                            <div className="aspect-[4/5] relative mb-6 overflow-hidden">
                                <Image
                                    src="/images/product-img4.jpeg"
                                    alt="غذاء صحي"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <h3 className="font-display text-2xl mb-3 text-charcoal">
                                سوبر فود لصحة شمولية
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed font-body mb-4">
                                عززي طاقتك مع مسحوق المورينجا العضوي والخلطات العشبية المختارة بعناية لدعم مناعتك وحيويتك اليومية.
                            </p>
                            <Link
                                href="/shop?category=health-food"
                                className="text-primary text-sm font-medium uppercase tracking-widest hover:text-primary-dark transition-colors border-b border-primary pb-1 inline-block"
                            >
                                اكتشفي المزيد
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 md:py-24 bg-primary/90 text-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="font-display text-3xl md:text-4xl mb-6">
                        ابدئي رحلتك نحو جمال طبيعي
                    </h2>
                    <p className="text-base md:text-lg mb-8 max-w-2xl mx-auto opacity-90 font-body leading-relaxed">
                        اكتشفي منتجاتنا المختارة بعناية واستمتعي بتجربة عناية فاخرة من قلب الطبيعة
                    </p>
                    <Link
                        href="/shop"
                        className="inline-block bg-white text-primary px-8 py-4 uppercase tracking-widest text-sm font-bold hover:bg-cream transition-all shadow-lg rounded-sm"
                    >
                        تسوقي الآن
                    </Link>
                </div>
            </section>

        </main>
    );
}
