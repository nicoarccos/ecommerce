import React from 'react';
import ProductCard from '@/components/common/ProductCard';
import Link from 'next/link';

// Productos reales con imágenes y datos más detallados
const featuredProducts = [
  {
    id: 1,
    name: 'Sony WH-1000XM4 Wireless Noise Cancelling Headphones',
    description: 'Industry-leading noise cancellation with Dual Noise Sensor technology',
    price: 349.99,
    image: 'https://images.pexels.com/photos/3394665/pexels-photo-3394665.jpeg?auto=compress&cs=tinysrgb&w=1000',
    category: 'Electronics',
    rating: 4.7,
    isNew: true,
    discount: 15,
    stock: 45,
    colors: ['Black', 'Blue', 'Silver'],
  },
  {
    id: 2,
    name: 'Apple Watch Series 7 GPS + Cellular',
    description: 'Always-On Retina display with nearly 20% more screen area than Series 6',
    price: 499.99,
    image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=1000',
    category: 'Fashion',
    rating: 4.8,
    isNew: false,
    discount: 0,
    stock: 32,
    colors: ['Midnight', 'Starlight', 'Green'],
  },
  {
    id: 3,
    name: 'Organic Herbal Tea Collection Gift Set',
    description: 'Premium collection of 6 organic herbal teas in elegant packaging',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?q=80&w=1000',
    category: 'Food & Drink',
    rating: 4.5,
    isNew: true,
    discount: 0,
    stock: 78,
    ingredients: ['Chamomile', 'Peppermint', 'Lavender', 'Rooibos', 'Hibiscus', 'Lemongrass'],
  },
  {
    id: 4,
    name: 'Amazon Echo Show 10 Smart Display',
    description: '10.1" HD screen that automatically turns to face you with built-in Alexa',
    price: 249.99,
    image: 'https://images.pexels.com/photos/4790255/pexels-photo-4790255.jpeg?auto=compress&cs=tinysrgb&w=1000',
    category: 'Electronics',
    rating: 4.6,
    isNew: false,
    discount: 10,
    stock: 22,
    colors: ['Charcoal', 'Glacier White'],
  }
];

const FeaturedProducts: React.FC = () => {
  return (
    <section className="py-4 relative">
      {/* Background decoration */}
      <div className="absolute top-0 inset-x-0 h-10 bg-gradient-to-b from-gray-50 to-transparent"></div>
      <div className="absolute -top-1.5 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative">
        {/* Section header */}
        <div className="mb-3 text-center space-y-1">
          <div className="inline-flex items-center justify-center">
            <div className="h-px w-4 bg-secondary/50"></div>
            <span className="mx-1.5 text-[10px] font-medium text-secondary/80 uppercase tracking-wider">Trending Now</span>
            <div className="h-px w-4 bg-secondary/50"></div>
          </div>
          <h2 className="text-lg md:text-xl font-bold">Featured Products</h2>
          <p className="text-[10px] text-gray-600 max-w-sm mx-auto">Discover our finest selection of trending products, hand-picked for exceptional quality and value</p>
        </div>
        
        {/* Products grid with modern wrapper */}
        <div className="relative bg-white/50 backdrop-blur-sm rounded-lg shadow-md border border-gray-100 p-2 md:p-3">
          {/* Corner accents */}
          <div className="absolute -top-0.5 -left-0.5 w-3 h-3 border-t-2 border-l-2 border-primary rounded-tl-lg"></div>
          <div className="absolute -top-0.5 -right-0.5 w-3 h-3 border-t-2 border-r-2 border-primary rounded-tr-lg"></div>
          <div className="absolute -bottom-0.5 -left-0.5 w-3 h-3 border-b-2 border-l-2 border-primary rounded-bl-lg"></div>
          <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 border-b-2 border-r-2 border-primary rounded-br-lg"></div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
        
        {/* Bottom navigation */}
        <div className="mt-3 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-1 text-[10px] text-gray-500 mb-2 md:mb-0">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary/30"></span>
            <span>Showing 4 of 24 trending products</span>
          </div>
          
          <div className="flex items-center">
            <Link href="/products" className="group relative inline-flex items-center justify-center px-3 py-1 font-bold overflow-hidden rounded-md bg-primary text-white transition-all duration-300 ease-out hover:bg-white hover:text-primary border border-primary text-[10px]">
              <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              <span className="relative inline-flex items-center">
                View All Products
                <svg className="ml-1 w-2.5 h-2.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </span>
            </Link>
          </div>
        </div>
        
        {/* Floating label */}
        <div className="absolute -top-1 right-6 bg-secondary text-white text-[6px] font-bold px-1.5 py-0.5 rounded-full shadow-sm">
          Hot Deals!
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts; 