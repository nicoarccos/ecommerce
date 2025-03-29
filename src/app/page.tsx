import HeroSection from '@/components/home/HeroSection';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import CategoryList from '@/components/home/CategoryList';
import PromoSection from '@/components/home/PromoSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <div className="container-custom py-12">
        <CategoryList />
        <FeaturedProducts />
        <PromoSection />
      </div>
    </main>
  );
} 