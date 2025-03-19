import React from 'react';
import Link from 'next/link';

// Mock data - would normally come from an API
const categories = [
  {
    id: 1,
    name: 'Electronics',
    icon: '📱',
    productCount: 120,
    bgColor: 'from-blue-500/20 to-blue-600/10',
    borderColor: 'border-blue-500/20',
  },
  {
    id: 2,
    name: 'Fashion',
    icon: '👕',
    productCount: 350, 
    bgColor: 'from-purple-500/20 to-purple-600/10',
    borderColor: 'border-purple-500/20',
  },
  {
    id: 3,
    name: 'Home & Garden',
    icon: '🏡',
    productCount: 230,
    bgColor: 'from-green-500/20 to-green-600/10',
    borderColor: 'border-green-500/20',
  },
  {
    id: 4,
    name: 'Beauty',
    icon: '💄',
    productCount: 185,
    bgColor: 'from-pink-500/20 to-pink-600/10',
    borderColor: 'border-pink-500/20',
  },
  {
    id: 5,
    name: 'Sports',
    icon: '⚽',
    productCount: 145,
    bgColor: 'from-amber-500/20 to-amber-600/10',
    borderColor: 'border-amber-500/20',
  },
  {
    id: 6,
    name: 'Food & Drink',
    icon: '🍽️',
    productCount: 110,
    bgColor: 'from-red-500/20 to-red-600/10',
    borderColor: 'border-red-500/20',
  },
];

const CategoryList: React.FC = () => {
  return (
    <section className="mb-16">
      <div className="mb-12 text-center space-y-4">
        <div className="inline-flex items-center justify-center">
          <div className="h-px w-8 bg-primary/50"></div>
          <span className="mx-3 text-sm font-medium text-primary/80 uppercase tracking-wider">Explore Our Store</span>
          <div className="h-px w-8 bg-primary/50"></div>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold">Shop by Category</h2>
        <p className="text-gray-600 max-w-xl mx-auto">Browse our wide range of products organized by category to find exactly what you're looking for</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-5">
        {categories.map((category) => (
          <Link 
            href={`/categories/${category.id}`} 
            key={category.id}
            className={`group relative flex flex-col h-52 items-center justify-center p-6 rounded-2xl bg-gradient-to-br ${category.bgColor} border ${category.borderColor} backdrop-blur-sm overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1`}
          >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10 bg-[url('/grid.svg')] bg-center"></div>
            
            {/* Icon container with glow effect */}
            <div className="relative mb-4 w-16 h-16 flex items-center justify-center">
              <div className="absolute inset-0 bg-white/20 rounded-full blur-md group-hover:blur-xl transition-all"></div>
              <div className="relative text-4xl z-10 group-hover:scale-110 transition-transform">{category.icon}</div>
            </div>
            
            <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">{category.name}</h3>
            
            <div className="px-3 py-1 rounded-full bg-black/10 text-xs font-medium">
              {category.productCount} Products
            </div>
            
            {/* Hover reveal arrow */}
            <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-white/0 group-hover:bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
              <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </div>
            
            {/* Corner decoration */}
            <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-white/20 to-transparent transform rotate-45 translate-x-8 -translate-y-8"></div>
            </div>
          </Link>
        ))}
      </div>
      
      {/* View All Categories button */}
      <div className="mt-10 text-center">
        <Link href="/categories" className="inline-flex items-center justify-center px-6 py-3 border border-primary/20 rounded-lg font-medium text-primary hover:bg-primary hover:text-white transition-colors">
          View All Categories
          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default CategoryList; 