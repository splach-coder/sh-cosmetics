'use client';

import Link from 'next/link';
import Image from 'next/image';
import { products } from '@/data/products';
import AddToCartButton from '@/components/AddToCartButton';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Filter } from 'lucide-react';

export default function ShopPage() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [selectedCategory, setSelectedCategory] = useState<string>('all');

    const categories = [
        { id: 'all', name: 'الكل' },
        { id: 'health-food', name: 'الغذاء الصحي' },
        { id: 'skincare', name: 'العناية بالبشرة' },
        { id: 'haircare', name: 'العناية بالشعر' },
    ];

    const filteredProducts = selectedCategory === 'all'
        ? products
        : products.filter(p => p.category === selectedCategory);

    return (
        <main className="min-h-screen bg-cream" dir="rtl">

            {/* Hero Section */}
            <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center bg-primary/10">
                <div className="text-center px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-xs uppercase tracking-[0.3em] text-primary block mb-3">
                            اكتشفي
                        </span>
                        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-charcoal mb-4">
                            منتجاتنا العضوية
                        </h1>
                        <div className="w-16 h-px bg-primary mx-auto"></div>
                    </motion.div>
                </div>
            </section>

            {/* Category Filter */}
            <section className="py-12 md:py-16">
                <div className="container mx-auto px-6">
                    <div className="flex flex-wrap gap-4 justify-center mb-12">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                className={`px-6 py-2 text-sm font-medium uppercase tracking-wider transition-all border-b-2 ${selectedCategory === category.id
                                    ? 'border-primary text-primary'
                                    : 'border-transparent text-gray-600 hover:text-primary'
                                    }`}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>

                    {/* Products Grid */}
                    <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {filteredProducts.map((product, index) => (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, y: 50 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="group cursor-pointer"
                            >
                                <div className="relative bg-white aspect-[4/5] rounded overflow-hidden mb-4 shadow-sm group-hover:shadow-md transition-all duration-300">
                                    <Link href={`/products/${product.id}`} className="absolute inset-0 z-10" />
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />

                                    {product.tag && (
                                        <span className="absolute top-4 right-4 bg-primary text-white text-[10px] uppercase font-bold px-2 py-1 tracking-wider z-20 pointer-events-none">
                                            {product.tag}
                                        </span>
                                    )}

                                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                                        <AddToCartButton
                                            product={{
                                                id: product.id,
                                                name: product.name,
                                                price: product.price,
                                                image: product.image,
                                                priceNumeric: product.priceNumeric
                                            }}
                                            className="bg-white text-charcoal px-6 py-3 uppercase text-xs tracking-widest hover:bg-primary hover:text-white transition-colors flex items-center gap-2 pointer-events-auto z-20 relative"
                                        />
                                    </div>
                                </div>

                                <div className="text-center">
                                    <h3 className="font-display text-xl text-charcoal mb-1 group-hover:text-primary transition-colors">
                                        <Link href={`/products/${product.id}`}>{product.name}</Link>
                                    </h3>
                                    <p className="text-sm text-gray-500 mb-2 font-body">
                                        {product.description}
                                    </p>
                                    <p className="font-medium text-charcoal">
                                        {product.price}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Empty State */}
                    {filteredProducts.length === 0 && (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-center py-20"
                        >
                            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Filter className="w-10 h-10 text-gray-400" />
                            </div>
                            <h3 className="font-display text-2xl text-charcoal mb-2">
                                لا توجد منتجات
                            </h3>
                            <p className="text-gray-500 font-body mb-6">
                                لم نجد أي منتجات في هذا التصنيف
                            </p>
                            <button
                                onClick={() => setSelectedCategory('all')}
                                className="inline-block bg-primary text-white px-8 py-3 uppercase tracking-widest text-sm font-bold hover:bg-primary-dark transition-all"
                            >
                                عرض جميع المنتجات
                            </button>
                        </motion.div>
                    )}

                </div>
            </section>

        </main>
    );
}
