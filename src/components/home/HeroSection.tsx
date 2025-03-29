import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-primary/90 to-primary/70 text-white">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent via-secondary to-accent"></div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-4 left-4 w-16 h-16 bg-accent rounded-full filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-4 right-4 w-16 h-16 bg-secondary rounded-full filter blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <div className="h-px w-4 bg-accent"></div>
                <span className="text-accent font-medium tracking-wider uppercase text-xs">Next-Gen Shopping</span>
              </div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                Discover <span className="text-accent">Amazing</span> Products
              </h1>
              <p className="text-sm md:text-base text-gray-100/80 max-w-md">
                Your one-stop e-commerce platform for all your shopping needs with the best deals and quality products.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-3">
              <Link href="/products" className="group relative inline-flex items-center justify-center overflow-hidden rounded-md bg-secondary px-4 py-2 font-bold text-sm transition">
                <span className="ease absolute inset-0 flex h-full w-full -translate-y-full items-center justify-center bg-white transition-all duration-300 group-hover:translate-y-0">
                  <span className="text-secondary">Shop Now</span>
                </span>
                <span className="ease flex items-center transition-all duration-300 group-hover:translate-y-full">
                  Shop Now
                  <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </span>
              </Link>
              
              <Link href="/categories" className="group relative inline-flex items-center justify-center overflow-hidden rounded-md border border-white/30 px-4 py-2 font-bold text-sm backdrop-blur-sm hover:bg-white/10 transition">
                Browse Categories
                <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
            
            <div className="flex items-center space-x-2 text-xs">
              <div className="flex -space-x-1">
                <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center text-[10px]">+1K</div>
                <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center text-[10px]">+5K</div>
                <div className="w-6 h-6 rounded-full bg-white text-primary flex items-center justify-center text-[10px]">+10K</div>
              </div>
              <span className="text-white/80">People trust our products daily</span>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative w-full aspect-square md:aspect-auto md:h-[300px] rounded-lg overflow-hidden bg-gradient-to-tr from-gray-800 to-gray-700 shadow-lg border border-white/10">
              {/* Product showcase - replace with actual featured product image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-2/3 aspect-square animate-float">
                  <div className="absolute -inset-2 bg-white/5 rounded-full blur-xl"></div>
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-full h-full rounded-full bg-white/10 backdrop-blur-md p-4 flex items-center justify-center">
                      <div className="text-center p-3 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10">
                        <div className="w-full h-24 relative mb-2">
                          <Image 
                            src="/headphones.png"
                            alt="Premium Headphones"
                            fill
                            className="object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                            priority
                          />
                        </div>
                        <div className="text-sm font-bold text-white">Premium Headphones</div>
                        <div className="text-accent mt-1 font-bold text-xs">$199.99</div>
                        <div className="mt-1">
                          <span className="inline-block bg-white/10 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium">
                            Noise Cancelling
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative dots pattern */}
              <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-1 p-1">
                {Array(36).fill(0).map((_, i) => (
                  <div key={i} className="w-1 h-1 rounded-full bg-white/20"></div>
                ))}
              </div>
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-2 -left-2 bg-accent text-white px-2 py-1 rounded-md shadow-md text-xs font-bold">
              NEW ARRIVAL
            </div>
            
            {/* Floating stats */}
            <div className="absolute -top-2 -right-2 bg-white text-primary px-2 py-1 rounded-md shadow-md text-xs font-bold">
              ⭐ 4.9/5
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 