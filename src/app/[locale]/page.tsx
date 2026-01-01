import Hero from '@/components/home/Hero';
import Philosophy from '@/components/home/Philosophy';
import BestSellers from '@/components/home/BestSellers';
import Testimonials from '@/components/home/Testimonials';
import Newsletter from '@/components/home/Newsletter';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <div className="pt-0">
        <Philosophy />
        <BestSellers />
        <Testimonials />
        <Newsletter />
      </div>
    </main>
  );
}