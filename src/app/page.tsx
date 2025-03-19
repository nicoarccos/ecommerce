import HeroSection from '@/components/home/HeroSection';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import CategoryList from '@/components/home/CategoryList';
import PromoSection from '@/components/home/PromoSection';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Auth Navigation */}
      <div className="bg-gray-100 py-2">
        <div className="container-custom flex justify-end space-x-4 text-sm">
          <Link href="/login" className="text-primary hover:underline">Login</Link>
          <Link href="/register" className="text-secondary hover:underline">Register</Link>
          <Link href="/forgot-password" className="text-accent hover:underline">Forgot Password</Link>
        </div>
      </div>
      
      <HeroSection />
      <div className="container-custom py-12">
        <CategoryList />
        <FeaturedProducts />
        <PromoSection />
      </div>
    </main>
  );
} 