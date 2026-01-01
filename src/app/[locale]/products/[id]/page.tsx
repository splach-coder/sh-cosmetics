'use client';

import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Star, ChevronDown, Check, Truck, Shield, Leaf, Heart, Share2, Plus, Minus } from 'lucide-react';
import { products } from '@/data/products';
import AddToCartButton from '@/components/AddToCartButton';
import { use, useState } from 'react';

export default function ProductPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = use(params);
    const product = products.find((p) => p.id === parseInt(id));
    const [quantity, setQuantity] = useState(1);
    const [selectedImage, setSelectedImage] = useState(0);

    if (!product) {
        notFound();
    }

    const relatedProducts = products
        .filter((p) => p.id !== product.id)
        .slice(0, 3);

    // Simulate multiple images (in real app, product would have image array)
    const productImages = [product.image, product.image, product.image];

    return (
        <main className="min-h-screen bg-cream" dir="rtl">

            {/* Breadcrumb */}
            <nav className="container mx-auto px-6 pt-28 pb-4 text-sm text-gray-500 font-body">
                <Link href="/" className="hover:text-primary transition-colors">الرئيسية</Link>
                <span className="mx-2">/</span>
                <Link href="/shop" className="hover:text-primary transition-colors">المتجر</Link>
                <span className="mx-2">/</span>
                <span className="text-charcoal">{product.name}</span>
            </nav>

            <div className="container mx-auto px-6 pb-20">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-24">

                    {/* Left Side - Gallery */}
                    <div className="space-y-4">
                        {/* Main Image */}
                        <div className="aspect-[4/5] relative bg-white rounded-lg overflow-hidden group cursor-zoom-in">
                            <Image
                                src={productImages[selectedImage]}
                                alt={product.name}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                priority
                            />
                            {product.tag && (
                                <span className="absolute top-6 right-6 bg-primary text-white text-xs uppercase font-bold px-4 py-2 tracking-wider z-20 rounded-full">
                                    {product.tag}
                                </span>
                            )}

                            {/* Share Button */}
                            <button className="absolute top-6 left-6 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors z-20 cursor-pointer">
                                <Share2 className="w-4 h-4 text-charcoal" />
                            </button>
                        </div>

                        {/* Thumbnail Gallery */}
                        <div className="grid grid-cols-3 gap-3">
                            {productImages.map((img, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setSelectedImage(idx)}
                                    className={`aspect-square relative bg-white rounded-lg overflow-hidden border-2 transition-all ${selectedImage === idx ? 'border-primary' : 'border-transparent hover:border-gray-200'
                                        }`}
                                >
                                    <Image
                                        src={img}
                                        alt={`${product.name} ${idx + 1}`}
                                        fill
                                        className="object-cover"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right Side - Product Info */}
                    <div className="lg:sticky lg:top-24 lg:self-start">

                        {/* Title & Rating */}
                        <div className="mb-6">
                            <h1 className="font-display text-4xl lg:text-5xl text-charcoal mb-4 leading-tight">
                                {product.title || product.name}
                            </h1>

                            <div className="flex items-center gap-3 mb-4">
                                <div className="flex text-yellow-500">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-current" />
                                    ))}
                                </div>
                                <span className="text-sm text-gray-500 font-body">(128 تقييم)</span>
                            </div>

                            <p className="text-3xl font-display text-primary font-semibold">
                                {product.price}
                            </p>
                        </div>

                        {/* Description */}
                        <div className="mb-8 pb-8 border-b border-gray-200">
                            <p className="text-gray-700 font-body leading-relaxed">
                                {product.fullDescription || product.description}
                            </p>
                        </div>

                        {/* Key Benefits */}
                        <div className="mb-8 pb-8 border-b border-gray-200">
                            <h3 className="font-display text-xl mb-4 text-charcoal">المميزات الرئيسية</h3>
                            <ul className="space-y-3">
                                {product.benefits?.map((benefit, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-gray-700 text-sm font-body">
                                        <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                        <span>{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Quantity Selector */}
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-charcoal mb-3">الكمية</label>
                            <div className="flex items-center gap-4">
                                <div className="flex items-center border-2 border-gray-200 rounded-lg">
                                    <button
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                        className="w-12 h-12 flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer"
                                    >
                                        <Minus className="w-4 h-4" />
                                    </button>
                                    <span className="w-12 text-center font-medium">{quantity}</span>
                                    <button
                                        onClick={() => setQuantity(quantity + 1)}
                                        className="w-12 h-12 flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer"
                                    >
                                        <Plus className="w-4 h-4" />
                                    </button>
                                </div>
                                <span className="text-sm text-gray-500">متوفر في المخزون</span>
                            </div>
                        </div>

                        {/* Add to Cart Button */}
                        <div className="mb-8">
                            <AddToCartButton
                                product={{
                                    id: product.id,
                                    name: product.name,
                                    price: product.price,
                                    image: product.image,
                                    priceNumeric: product.priceNumeric
                                }}
                                className="w-full bg-primary hover:bg-primary-dark text-white text-center py-5 uppercase tracking-widest text-sm font-bold transition-all shadow-lg hover:shadow-xl rounded-lg flex items-center justify-center gap-3"
                            >
                                <>
                                    <span>إضافة إلى السلة</span>
                                    <span className="text-xs opacity-80">— {(product.priceNumeric * quantity).toFixed(2)} د.م.</span>
                                </>
                            </AddToCartButton>
                        </div>

                        {/* Trust Badges */}
                        <div className="grid grid-cols-2 gap-4 mb-8">
                            <div className="flex items-center gap-3 p-4 bg-white rounded-lg">
                                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                                    <Truck className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <div className="text-xs font-medium text-charcoal">شحن مجاني</div>
                                    <div className="text-[10px] text-gray-500">للطلبات فوق 200 د.م.</div>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 p-4 bg-white rounded-lg">
                                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                                    <Shield className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <div className="text-xs font-medium text-charcoal">ضمان الجودة</div>
                                    <div className="text-[10px] text-gray-500">منتجات أصلية 100%</div>
                                </div>
                            </div>
                        </div>

                        {/* Collapsible Sections */}
                        <div className="space-y-3">
                            <details className="group bg-white rounded-lg overflow-hidden">
                                <summary className="flex justify-between items-center p-5 cursor-pointer list-none font-display text-base text-charcoal hover:bg-gray-50 transition-colors">
                                    <span>طريقة الاستخدام</span>
                                    <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180" />
                                </summary>
                                <div className="px-5 pb-5 text-sm text-gray-600 leading-relaxed font-body border-t border-gray-100 pt-4">
                                    {product.usage}
                                </div>
                            </details>

                            <details className="group bg-white rounded-lg overflow-hidden">
                                <summary className="flex justify-between items-center p-5 cursor-pointer list-none font-display text-base text-charcoal hover:bg-gray-50 transition-colors">
                                    <span>المكونات</span>
                                    <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180" />
                                </summary>
                                <div className="px-5 pb-5 text-sm text-gray-600 leading-relaxed font-body border-t border-gray-100 pt-4">
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">زيت اللافندر العضوي</span>
                                        <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">فيتامين E</span>
                                        <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">زيت الجوجوبا</span>
                                        <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">مستخلص الألوفيرا</span>
                                    </div>
                                </div>
                            </details>

                            <details className="group bg-white rounded-lg overflow-hidden">
                                <summary className="flex justify-between items-center p-5 cursor-pointer list-none font-display text-base text-charcoal hover:bg-gray-50 transition-colors">
                                    <span>الشحن والإرجاع</span>
                                    <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180" />
                                </summary>
                                <div className="px-5 pb-5 text-sm text-gray-600 leading-relaxed font-body border-t border-gray-100 pt-4">
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-2">
                                            <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                            <span>توصيل سريع لجميع مدن المغرب (2-5 أيام)</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                            <span>الدفع عند الاستلام متاح</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                            <span>إمكانية الإرجاع خلال 14 يوم</span>
                                        </li>
                                    </ul>
                                </div>
                            </details>
                        </div>

                    </div>
                </div>

                {/* Why Choose This Product */}
                <section className="mb-24 bg-white rounded-2xl p-10 md:p-16">
                    <div className="text-center mb-12">
                        <h2 className="font-display text-3xl md:text-4xl text-charcoal mb-4">
                            لماذا تختارين هذا المنتج؟
                        </h2>
                        <div className="w-16 h-px bg-primary mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Leaf className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="font-display text-lg mb-2 text-charcoal">مكونات طبيعية 100%</h3>
                            <p className="text-sm text-gray-600 font-body leading-relaxed">
                                خالي من البارابين، السيليكون، والمواد الكيميائية الضارة
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Heart className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="font-display text-lg mb-2 text-charcoal">مناسب لجميع أنواع البشرة</h3>
                            <p className="text-sm text-gray-600 font-body leading-relaxed">
                                تركيبة لطيفة ومتوازنة، مثالية للبشرة الحساسة
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Shield className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="font-display text-lg mb-2 text-charcoal">معتمد ومختبر</h3>
                            <p className="text-sm text-gray-600 font-body leading-relaxed">
                                مختبر من قبل أطباء الجلدية ومعتمد عضوياً
                            </p>
                        </div>
                    </div>
                </section>

                {/* Related Products */}
                <section>
                    <div className="flex justify-between items-end mb-10">
                        <div>
                            <h2 className="font-display text-3xl md:text-4xl text-charcoal mb-2">
                                أكملي روتينك
                            </h2>
                            <p className="text-sm text-gray-600 font-body">منتجات مختارة خصيصاً لكِ</p>
                        </div>
                        <Link
                            href="/shop"
                            className="hidden md:block text-sm text-primary hover:text-primary-dark transition-colors uppercase tracking-widest font-medium border-b border-primary pb-1"
                        >
                            عرض الكل
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {relatedProducts.map(rp => (
                            <div key={rp.id} className="group">
                                <div className="relative bg-white aspect-[4/5] rounded-lg overflow-hidden mb-4 shadow-sm hover:shadow-md transition-all duration-300">
                                    <Link href={`/products/${rp.id}`} className="absolute inset-0 z-10" />
                                    <Image
                                        src={rp.image}
                                        alt={rp.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                                <div className="text-center">
                                    <h3 className="font-display text-lg text-charcoal mb-1 group-hover:text-primary transition-colors">
                                        <Link href={`/products/${rp.id}`}>{rp.name}</Link>
                                    </h3>
                                    <p className="text-sm text-gray-500 mb-2 font-body">{rp.description}</p>
                                    <p className="font-medium text-charcoal">{rp.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

            </div>
        </main>
    );
}
