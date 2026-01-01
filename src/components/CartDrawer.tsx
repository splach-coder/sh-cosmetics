'use client';

import { useCart } from '@/context/CartContext';
import Image from 'next/image';
import Link from 'next/link';
import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { useEffect } from 'react';

export default function CartDrawer() {
    const { cart, isCartOpen, toggleCart, updateQuantity, removeFromCart, cartTotal, cartCount } = useCart();

    // Prevent body scroll when cart is open
    useEffect(() => {
        if (isCartOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isCartOpen]);

    return (
        <>
            {/* Overlay */}
            {isCartOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-[100] transition-opacity duration-300"
                    onClick={toggleCart}
                />
            )}

            {/* Drawer */}
            <div
                className={`fixed top-0 left-0 h-full w-full md:w-[420px] bg-white shadow-2xl z-[101] transform transition-transform duration-300 ease-in-out ${isCartOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
                dir="rtl"
            >
                <div className="flex flex-col h-full">
                    {/* Header */}
                    <div className="flex items-center justify-between p-6 border-b border-gray-100">
                        <div className="flex items-center gap-3">
                            <ShoppingBag className="w-6 h-6 text-primary" />
                            <h2 className="text-2xl font-display text-charcoal">
                                السلة ({cartCount})
                            </h2>
                        </div>
                        <button
                            onClick={toggleCart}
                            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Cart Items */}
                    <div className="flex-1 overflow-y-auto p-6">
                        {cart.length === 0 ? (
                            <div className="flex flex-col items-center justify-center h-full text-center">
                                <ShoppingBag className="w-16 h-16 text-gray-300 mb-4" />
                                <p className="text-gray-500 font-body mb-2">السلة فارغة</p>
                                <p className="text-sm text-gray-400">ابدئي التسوق الآن!</p>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                {cart.map((item) => (
                                    <div
                                        key={item.id}
                                        className="flex gap-4 p-4 bg-cream/30 rounded-lg hover:bg-cream/50 transition-colors"
                                    >
                                        <div className="relative w-20 h-20 rounded overflow-hidden flex-shrink-0">
                                            <Image
                                                src={item.image}
                                                alt={item.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h3 className="font-display text-charcoal mb-1 truncate">
                                                {item.name}
                                            </h3>
                                            <p className="text-sm text-primary font-medium mb-2">
                                                {item.price}
                                            </p>
                                            <div className="flex items-center gap-2">
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                    className="w-7 h-7 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100 transition-colors"
                                                >
                                                    <Minus className="w-3 h-3" />
                                                </button>
                                                <span className="w-8 text-center font-medium text-sm">
                                                    {item.quantity}
                                                </span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                    className="w-7 h-7 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100 transition-colors"
                                                >
                                                    <Plus className="w-3 h-3" />
                                                </button>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="p-2 hover:bg-red-50 rounded-full transition-colors self-start"
                                        >
                                            <Trash2 className="w-4 h-4 text-red-500" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Footer */}
                    {cart.length > 0 && (
                        <div className="border-t border-gray-100 p-6 space-y-4 bg-white">
                            <div className="flex justify-between items-center text-lg">
                                <span className="font-display text-charcoal">المجموع:</span>
                                <span className="font-bold text-primary text-xl">
                                    {cartTotal.toFixed(2)} د.م.
                                </span>
                            </div>
                            <Link
                                href="/checkout"
                                onClick={toggleCart}
                                className="block w-full bg-primary hover:bg-primary-dark text-white text-center py-4 uppercase tracking-widest text-sm font-bold transition-all shadow-lg hover:shadow-xl rounded-sm"
                            >
                                إتمام الطلب
                            </Link>
                            <button
                                onClick={toggleCart}
                                className="block w-full border-2 border-gray-200 hover:border-primary text-charcoal text-center py-3 uppercase tracking-widest text-xs font-medium transition-all rounded-sm"
                            >
                                متابعة التسوق
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
