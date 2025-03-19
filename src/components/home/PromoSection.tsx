import React from 'react';
import Link from 'next/link';

const PromoSection: React.FC = () => {
  return (
    <section className="py-16 relative">
      {/* Background decoration */}
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-gray-50 to-transparent"></div>
      <div className="absolute -bottom-5 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent"></div>
      
      <div className="container-custom relative">
        {/* Section header */}
        <div className="mb-12 text-center space-y-4">
          <div className="inline-flex items-center justify-center">
            <div className="h-px w-8 bg-accent/50"></div>
            <span className="mx-3 text-sm font-medium text-accent/80 uppercase tracking-wider">Exclusive Offers</span>
            <div className="h-px w-8 bg-accent/50"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">Special Promotions</h2>
          <p className="text-gray-600 max-w-xl mx-auto">Take advantage of these limited-time offers and special deals</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Promo Card 1 */}
          <div className="group relative rounded-2xl overflow-hidden shadow-lg border border-gray-100">
            {/* Card background with overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5"></div>
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
            
            {/* Corner accent */}
            <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-accent to-transparent transform rotate-45 translate-x-12 -translate-y-12"></div>
            </div>
            
            {/* Content container */}
            <div className="relative p-8 md:p-10 z-10">
              <div className="flex flex-col h-full min-h-[320px] justify-between">
                <div className="space-y-6">
                  <div className="inline-flex px-4 py-2 bg-accent text-white text-sm font-bold rounded-full shadow-md transform -rotate-2">
                    Special Offer
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800">Get 20% Off Your First Order</h3>
                    <p className="text-gray-600 max-w-md">
                      Sign up for our newsletter and receive an exclusive 20% discount on your first purchase. Stay updated with the latest products and promotions.
                    </p>
                  </div>
                  
                  {/* Animated counting element */}
                  <div className="flex items-center space-x-4 mt-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-white shadow-md rounded-lg text-accent font-mono font-bold text-xl">
                      2
                    </div>
                    <div className="flex items-center justify-center w-12 h-12 bg-white shadow-md rounded-lg text-accent font-mono font-bold text-xl">
                      0
                    </div>
                    <div className="flex items-center justify-center w-12 h-12 bg-white shadow-md rounded-lg text-accent font-mono font-bold text-xl">
                      %
                    </div>
                    <div className="text-sm text-gray-500 font-medium">
                      Limited time offer
                    </div>
                  </div>
                </div>
                
                {/* CTA Button */}
                <div className="mt-8">
                  <Link href="/signup" className="group relative inline-flex items-center justify-center px-8 py-3 font-bold overflow-hidden rounded-lg bg-accent text-white transition-all duration-300 ease-out hover:bg-white hover:text-accent border border-accent">
                    <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                    <span className="relative inline-flex items-center">
                      Sign Up Now
                      <svg className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute top-6 right-6 w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full transform rotate-12 animate-pulse"></div>
            <div className="absolute bottom-10 left-6 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full transform -rotate-12 animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
          
          {/* Promo Card 2 */}
          <div className="group relative rounded-2xl overflow-hidden shadow-lg border border-gray-100">
            {/* Card background with overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-secondary/5"></div>
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
            
            {/* Corner accent */}
            <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary to-transparent transform rotate-45 translate-x-12 -translate-y-12"></div>
            </div>
            
            {/* Content container */}
            <div className="relative p-8 md:p-10 z-10">
              <div className="flex flex-col h-full min-h-[320px] justify-between">
                <div className="space-y-6">
                  <div className="inline-flex px-4 py-2 bg-secondary text-white text-sm font-bold rounded-full shadow-md transform -rotate-2">
                    Free Shipping
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800">Free Shipping on Orders Over $50</h3>
                    <p className="text-gray-600 max-w-md">
                      Enjoy free standard shipping on all orders over $50 within the continental US. International shipping rates apply for other locations.
                    </p>
                  </div>
                  
                  {/* Shipping icon */}
                  <div className="flex items-center space-x-4 mt-4">
                    <div className="flex items-center justify-center w-16 h-16 bg-white/80 shadow-md rounded-full">
                      <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
                      </svg>
                    </div>
                    <div className="text-sm text-gray-500 font-medium">
                      Ships within 1-2 business days
                    </div>
                  </div>
                </div>
                
                {/* CTA Button */}
                <div className="mt-8">
                  <Link href="/products" className="group relative inline-flex items-center justify-center px-8 py-3 font-bold overflow-hidden rounded-lg bg-secondary text-white transition-all duration-300 ease-out hover:bg-white hover:text-secondary border border-secondary">
                    <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                    <span className="relative inline-flex items-center">
                      Shop Now
                      <svg className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute top-24 right-8 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full transform rotate-45 animate-pulse"></div>
            <div className="absolute bottom-16 left-8 w-8 h-8 bg-white/10 backdrop-blur-sm rounded-full transform -rotate-45 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          </div>
        </div>
        
        {/* Additional small promotion */}
        <div className="mt-10 relative rounded-xl overflow-hidden bg-gradient-to-r from-gray-900 to-gray-800 shadow-lg">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
          <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h4 className="text-white text-xl font-bold mb-2">Refer a Friend, Get $10 Off</h4>
              <p className="text-gray-300">Share your favorite products and both you and your friend will receive $10 off your next purchase</p>
            </div>
            <Link 
              href="/referral-program" 
              className="inline-flex items-center whitespace-nowrap px-6 py-3 bg-white text-gray-900 font-medium rounded-lg hover:bg-gray-200 transition-colors"
            >
              Learn More
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoSection; 