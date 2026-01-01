import Link from 'next/link';
import { Facebook, Instagram, Mail, MapPin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-surface-dark bg-[#2A2A2A] text-white py-16 border-t border-white/5 font-body">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-right dir-rtl" dir="rtl">
                    {/* Brand Column */}
                    <div className="space-y-4">
                        <Link href="/" className="font-display text-2xl italic font-semibold tracking-wide text-primary">
                            SH <span className="text-xs font-body not-italic tracking-widest ml-1 text-gray-300 uppercase">Cosmetiques</span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            منتجات صحية عضوية نقية مستمدة من الطبيعة، صُنعت بعناية لروتينك اليومي.
                        </p>
                        <div className="flex space-x-4 pt-2 rtl:space-x-reverse justify-start">
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Instagram className="w-5 h-5" /></a>
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Facebook className="w-5 h-5" /></a>
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Mail className="w-5 h-5" /></a>
                        </div>
                    </div>

                    {/* Shop Column */}
                    <div>
                        <h4 className="font-display text-lg mb-6 text-white">المتجر</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><Link href="/shop?category=skincare" className="hover:text-primary transition-colors">العناية بالبشرة</Link></li>
                            <li><Link href="/shop?category=haircare" className="hover:text-primary transition-colors">العناية بالشعر</Link></li>
                            <li><Link href="/shop?category=health-food" className="hover:text-primary transition-colors">الغذاء الصحي</Link></li>
                            <li><Link href="/shop?category=sets" className="hover:text-primary transition-colors">المجموعات والهدايا</Link></li>
                        </ul>
                    </div>

                    {/* Company Column */}
                    <div>
                        <h4 className="font-display text-lg mb-6 text-white">الشركة</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><Link href="/about" className="hover:text-primary transition-colors">قصتنا</Link></li>
                            <li><Link href="/ingredients" className="hover:text-primary transition-colors">المكونات</Link></li>
                            <li><Link href="/contact" className="hover:text-primary transition-colors">تواصل معنا</Link></li>
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h4 className="font-display text-lg mb-6 text-white">معلومات التواصل</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li className="flex items-start gap-2">
                                <MapPin className="text-primary w-4 h-4 mt-1 shrink-0" />
                                <span>123 شارع النخيل،<br />مراكش، المغرب</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail className="text-primary w-4 h-4 shrink-0" />
                                <span>hello@shcosmetiques.ma</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500" dir="rtl">
                    <p>© 2024 SH Cosmetiques. جميع الحقوق محفوظة.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0 rtl:space-x-reverse">
                        <Link href="/privacy" className="hover:text-white transition-colors">سياسة الخصوصية</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">الشروط والأحكام</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
