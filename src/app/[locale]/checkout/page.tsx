'use client';

import { useCart } from '@/context/CartContext';
import Image from 'next/image';
import Link from 'next/link';
import { Truck, ShieldCheck, MapPin, Phone, User as UserIcon, Minus, Plus, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Checkout() {
    const { cart, cartTotal, updateQuantity, removeFromCart } = useCart();
    const router = useRouter();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        city: '',
        address: '',
        notes: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send the order to your backend
        alert('تم تأكيد طلبك! سيتم التواصل معك قريباً.');
        router.push('/');
    };

    const shippingCost = cartTotal >= 200 ? 0 : 30;
    const finalTotal = cartTotal + shippingCost;

    if (cart.length === 0) {
        return (
            <main className="min-h-screen bg-cream pt-28 pb-24" dir="rtl">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="font-display text-4xl mb-4">السلة فارغة</h1>
                    <p className="text-gray-600 mb-8">لم تقومي بإضافة أي منتجات بعد</p>
                    <Link href="/shop" className="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-3 uppercase tracking-widest text-sm font-bold transition-all rounded-sm">
                        تسوقي الآن
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-cream pt-28 pb-12" dir="rtl">

            {/* Header Banner */}
            <div className="bg-primary text-white text-center py-2 px-4 text-xs md:text-sm font-medium tracking-wide mb-6 md:mb-8">
                شحن مجاني للطلبات فوق 200 د.م. | توصيل سريع لجميع المناطق
            </div>

            <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                <h1 className="font-display text-3xl md:text-4xl text-center mb-8 md:mb-12 text-charcoal">
                    إتمام الطلب
                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">

                    {/* Main Form Section */}
                    <div className="lg:col-span-7 order-2 lg:order-1">

                        {/* COD Info Box */}
                        <div className="bg-white border-r-4 border-primary p-4 md:p-6 rounded shadow-sm mb-6 md:mb-10 flex items-start gap-3 md:gap-4">
                            <ShieldCheck className="text-primary w-6 h-6 md:w-8 md:h-8 shrink-0" />
                            <div>
                                <h3 className="font-display text-base md:text-lg font-semibold text-primary mb-1">تسوقي بكل طمأنينة مع SH COSMETIQUES!</h3>
                                <p className="text-xs md:text-sm text-gray-600 leading-relaxed font-body">
                                    نحن نؤمن بجودة منتجاتنا، ولأن راحتك هي أولويتنا، لا داعي للدفع مسبقاً. اطلبي منتجاتك العضوية الآن، وادفعي نقداً فقط عندما تصل الشحنة إلى باب منزلك.
                                </p>
                                <p className="text-xs text-primary font-medium mt-2">الدفع عند الاستلام | شحن سريع وآمن</p>
                            </div>
                        </div>

                        <div className="space-y-6 md:space-y-8">
                            <div className="bg-white p-4 md:p-8 rounded shadow-sm">
                                <h2 className="text-xl md:text-2xl font-display text-charcoal mb-4 md:mb-6 border-b border-gray-100 pb-3 md:pb-4">بيانات الشحن</h2>

                                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                                    <div>
                                        <h3 className="text-base md:text-lg font-medium text-charcoal mb-3 md:mb-4 flex items-center gap-2">
                                            <UserIcon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                                            المعلومات الشخصية
                                        </h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">الاسم الأول *</label>
                                                <input
                                                    type="text"
                                                    required
                                                    value={formData.firstName}
                                                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                                    className="w-full border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-primary p-2 md:p-3 text-sm md:text-base"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">اسم العائلة *</label>
                                                <input
                                                    type="text"
                                                    required
                                                    value={formData.lastName}
                                                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                                    className="w-full border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-primary p-2 md:p-3 text-sm md:text-base"
                                                />
                                            </div>
                                        </div>
                                        <div className="mt-3 md:mt-4">
                                            <label className="block text-sm font-medium text-gray-700 mb-1">رقم الجوال *</label>
                                            <input
                                                type="tel"
                                                required
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                placeholder="06xxxxxxxx"
                                                className="w-full border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-primary p-2 md:p-3 text-sm md:text-base"
                                                dir="ltr"
                                            />
                                            <p className="text-xs text-gray-500 mt-1">سيتصل بك المندوب على هذا الرقم</p>
                                        </div>
                                    </div>

                                    <div className="pt-3 md:pt-4">
                                        <h3 className="text-base md:text-lg font-medium text-charcoal mb-3 md:mb-4 flex items-center gap-2">
                                            <MapPin className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                                            العنوان
                                        </h3>
                                        <div className="space-y-3 md:space-y-4">
                                            <input
                                                type="text"
                                                required
                                                value={formData.city}
                                                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                                                placeholder="المدينة *"
                                                className="w-full border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-primary p-2 md:p-3 text-sm md:text-base"
                                            />
                                            <input
                                                type="text"
                                                required
                                                value={formData.address}
                                                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                                                placeholder="الحي / الشارع *"
                                                className="w-full border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-primary p-2 md:p-3 text-sm md:text-base"
                                            />
                                            <textarea
                                                value={formData.notes}
                                                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                                                placeholder="ملاحظات إضافية (اختياري)"
                                                rows={3}
                                                className="w-full border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-primary p-2 md:p-3 text-sm md:text-base"
                                            />
                                        </div>
                                    </div>

                                    {/* Mobile Submit Button */}
                                    <button
                                        type="submit"
                                        className="lg:hidden w-full bg-primary hover:bg-primary-dark text-white py-4 font-bold uppercase tracking-widest transition-colors shadow-lg rounded-sm flex justify-center items-center gap-2 text-sm"
                                    >
                                        <span>تأكيد الطلب</span>
                                        <Truck className="w-5 h-5" />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar: Cart Summary */}
                    <div className="lg:col-span-5 order-1 lg:order-2">
                        <div className="bg-white p-4 md:p-8 rounded shadow-sm border border-gray-100 lg:sticky lg:top-24">
                            <h2 className="text-xl md:text-2xl font-display text-charcoal mb-4 md:mb-6">ملخص الطلب</h2>

                            {/* Cart Items */}
                            <div className="space-y-4 mb-6 md:mb-8 border-b border-gray-100 pb-6 md:pb-8 max-h-[300px] md:max-h-[400px] overflow-y-auto">
                                {cart.map((item) => (
                                    <div key={item.id} className="flex gap-3 md:gap-4">
                                        <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-100 rounded overflow-hidden relative flex-shrink-0">
                                            <Image src={item.image} alt={item.name} fill className="object-cover" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h4 className="font-medium text-charcoal font-display text-sm md:text-base truncate">{item.name}</h4>
                                            <p className="text-xs md:text-sm text-primary font-medium">{item.price}</p>
                                            <div className="flex items-center gap-2 mt-1 md:mt-2">
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                    className="w-6 h-6 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100 transition-colors"
                                                >
                                                    <Minus className="w-3 h-3" />
                                                </button>
                                                <span className="w-6 text-center font-medium text-xs md:text-sm">
                                                    {item.quantity}
                                                </span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                    className="w-6 h-6 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100 transition-colors"
                                                >
                                                    <Plus className="w-3 h-3" />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-end gap-1">
                                            <span className="font-medium text-sm md:text-base">{(item.priceNumeric * item.quantity).toFixed(2)} د.م.</span>
                                            <button
                                                onClick={() => removeFromCart(item.id)}
                                                className="p-1 hover:bg-red-50 rounded transition-colors"
                                            >
                                                <Trash2 className="w-3 h-3 md:w-4 md:h-4 text-red-500" />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Totals */}
                            <div className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                                <div className="flex justify-between text-gray-600 text-sm md:text-base">
                                    <span>المجموع الفرعي</span>
                                    <span>{cartTotal.toFixed(2)} د.م.</span>
                                </div>
                                <div className="flex justify-between text-gray-600 text-sm md:text-base">
                                    <span>الشحن</span>
                                    {shippingCost === 0 ? (
                                        <span className="text-primary font-bold text-xs md:text-sm bg-primary/10 px-2 py-0.5 rounded">مجاني</span>
                                    ) : (
                                        <span>{shippingCost} د.م.</span>
                                    )}
                                </div>
                                <div className="flex justify-between text-lg md:text-xl font-bold text-charcoal border-t border-gray-100 pt-3 md:pt-4 mt-3 md:mt-4">
                                    <span>الإجمالي</span>
                                    <span>{finalTotal.toFixed(2)} د.م.</span>
                                </div>
                                <p className="text-[10px] md:text-xs text-gray-500 text-left">الدفع عند الاستلام</p>
                            </div>

                            {/* Desktop Submit Button */}
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    const form = document.querySelector('form') as HTMLFormElement;
                                    if (form) form.requestSubmit();
                                }}
                                className="hidden lg:flex w-full bg-primary hover:bg-primary-dark text-white py-4 font-bold uppercase tracking-widest transition-colors shadow-lg rounded-sm justify-center items-center gap-2 text-sm"
                            >
                                <span>تأكيد الطلب</span>
                                <Truck className="w-5 h-5" />
                            </button>

                            <p className="mt-3 md:mt-4 text-center text-[10px] md:text-xs text-gray-500 leading-relaxed px-2 md:px-4">
                                بالضغط على تأكيد الطلب، أنتِ توافقين على الدفع نقداً عند الاستلام
                            </p>

                            {/* Trust Badges */}
                            <div className="mt-6 md:mt-8 grid grid-cols-3 gap-2 text-center border-t border-gray-100 pt-4 md:pt-6">
                                <div className="flex flex-col items-center gap-1">
                                    <ShieldCheck className="w-5 h-5 md:w-6 md:h-6 text-gray-300" />
                                    <span className="text-[9px] md:text-[10px] text-gray-500 uppercase tracking-wide">ضمان الجودة</span>
                                </div>
                                <div className="flex flex-col items-center gap-1">
                                    <div className="w-5 h-5 md:w-6 md:h-6 rounded-full border border-gray-300 flex items-center justify-center text-[9px] md:text-[10px] text-gray-400 font-serif">100%</div>
                                    <span className="text-[9px] md:text-[10px] text-gray-500 uppercase tracking-wide">عضوي</span>
                                </div>
                                <div className="flex flex-col items-center gap-1">
                                    <Truck className="w-5 h-5 md:w-6 md:h-6 text-gray-300" />
                                    <span className="text-[9px] md:text-[10px] text-gray-500 uppercase tracking-wide">توصيل سريع</span>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
}
