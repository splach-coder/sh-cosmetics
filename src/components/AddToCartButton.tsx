'use client';

import { useCart } from '@/context/CartContext';
import { ShoppingBag } from 'lucide-react';

interface AddToCartButtonProps {
    product: {
        id: number;
        name: string;
        price: string;
        image: string;
        priceNumeric: number;
    };
    className?: string;
    children?: React.ReactNode;
}

export default function AddToCartButton({ product, className = '', children }: AddToCartButtonProps) {
    const { addToCart } = useCart();

    const handleAddToCart = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        addToCart(product);
    };

    return (
        <button
            onClick={handleAddToCart}
            className={className || "bg-white text-charcoal px-6 py-3 uppercase text-xs tracking-widest hover:bg-primary hover:text-white transition-colors flex items-center gap-2"}
        >
            {children || (
                <>
                    <ShoppingBag className="w-4 h-4" />
                    إضافة سريعة
                </>
            )}
        </button>
    );
}
