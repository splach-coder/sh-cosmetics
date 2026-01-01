'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ShoppingBag } from 'lucide-react';
import { products } from '@/data/products';
import AddToCartButton from '@/components/AddToCartButton';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function BestSellers() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    // Show only first 4 products
    const featuredProducts = products.slice(0, 4);

    return (
        <section ref={ref} className="py-24 bg-cream" id="collection" dir="rtl">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-primary font-medium tracking-[0.2em] uppercase text-xs block mb-3">
                        المفضلات لدى عملائنا
                    </span>
                    <h2 className="font-display text-4xl md:text-5xl text-charcoal mb-4">
                        الأكثر مبيعاً
                    </h2>
                    <div className="w-16 h-px bg-primary mx-auto"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {featuredProducts.map((product, index) => (
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

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-center mt-12"
                >
                    <Link href="/shop" className="inline-flex items-center text-primary font-medium uppercase tracking-widest text-xs hover:text-primary-dark transition-colors border-b border-primary pb-1">
                        تسوقي جميع المنتجات
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
