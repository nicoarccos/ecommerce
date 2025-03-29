'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaSearch, FaFilter, FaShoppingCart, FaExchangeAlt, FaEye, FaInfoCircle, FaTimes } from 'react-icons/fa';
import QuickView from '@/components/products/QuickView';
import ProductComparison from '@/components/products/ProductComparison';
import BuyingGuide from '@/components/products/BuyingGuide';

// Mock data - would normally come from an API
const products = [
  {
    id: 1,
    name: 'Premium Wireless Headphones',
    price: 199.99,
    originalPrice: 249.99,
    image: '/headphones.png',
    category: 'Audio & Headphones',
    rating: 4.9,
    reviews: 128,
    stock: 15,
    isNew: true,
    discount: 20,
    description: 'Experience crystal-clear sound with our premium wireless headphones.',
    specifications: {
      'Brand': 'AudioPro',
      'Model': 'WH-1000XM4',
      'Color': 'Black',
      'Weight': '250g',
      'Connectivity': 'Bluetooth 5.0',
      'Battery Life': '40 hours',
    },
  },
  {
    id: 2,
    name: 'Smart Watch Pro',
    price: 299.99,
    image: '/headphones.png', // Placeholder
    category: 'Wearables',
    rating: 4.8,
    reviews: 89,
    stock: 8,
    isNew: true,
    description: 'Advanced smartwatch with health tracking and notifications.',
    specifications: {
      'Brand': 'TechFit',
      'Model': 'SW-200',
      'Color': 'Silver',
      'Weight': '50g',
      'Battery Life': '5 days',
      'Waterproof': 'Yes',
    },
  },
  {
    id: 3,
    name: 'Wireless Earbuds',
    price: 149.99,
    originalPrice: 179.99,
    image: '/headphones.png', // Placeholder
    category: 'Audio & Headphones',
    rating: 4.7,
    reviews: 256,
    stock: 20,
    discount: 15,
    description: 'True wireless earbuds with active noise cancellation.',
    specifications: {
      'Brand': 'AudioPro',
      'Model': 'TW-100',
      'Color': 'White',
      'Weight': '100g',
      'Connectivity': 'Bluetooth 5.0',
      'Battery Life': '24 hours',
    },
  },
  // Add more products as needed
];

const categories = [
  'All Products',
  'Audio & Headphones',
  'Smartphones & Accessories',
  'Laptops & Tablets',
  'Smart Home',
  'Gaming',
  'Wearables',
  'Accessories',
];

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Products');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [showQuickView, setShowQuickView] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const [showComparison, setShowComparison] = useState(false);
  const [productsToCompare, setProductsToCompare] = useState<typeof products>([]);
  const [showBuyingGuide, setShowBuyingGuide] = useState(false);

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'All Products' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'newest':
        return b.id - a.id;
      case 'discount':
        return (b.discount || 0) - (a.discount || 0);
      default:
        return 0;
    }
  });

  const handleQuickView = (product: typeof products[0]) => {
    setSelectedProduct(product);
    setShowQuickView(true);
  };

  const handleAddToComparison = (product: typeof products[0]) => {
    if (productsToCompare.length < 3 && !productsToCompare.find(p => p.id === product.id)) {
      setProductsToCompare([...productsToCompare, product]);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Shop Premium Tech</h1>
          <p className="text-sm md:text-base text-gray-600 mt-2">Discover the latest gadgets and tech accessories for your lifestyle</p>
        </div>

        {/* Featured Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          {categories.slice(1).map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`p-3 rounded-md text-center text-sm transition-colors ${
                selectedCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-white hover:bg-gray-50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-md shadow-sm p-4 mb-6">
          <div className="flex flex-col md:flex-row gap-3">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for gadgets and accessories..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                />
              </div>
            </div>

            {/* Sort */}
            <div className="flex-1">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
              >
                <option value="featured">Featured</option>
                <option value="newest">Newest First</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="discount">Biggest Discount</option>
              </select>
            </div>

            {/* Compare Button */}
            {productsToCompare.length > 0 && (
              <button
                onClick={() => setShowComparison(true)}
                className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors flex items-center space-x-2 text-sm"
              >
                <FaExchangeAlt className="w-4 h-4" />
                <span>Compare ({productsToCompare.length})</span>
              </button>
            )}

            {/* Buying Guide Button */}
            <button
              onClick={() => setShowBuyingGuide(true)}
              className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200 transition-colors flex items-center space-x-2 text-sm"
            >
              <FaInfoCircle className="w-4 h-4" />
              <span>Buying Guide</span>
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {sortedProducts.map((product) => (
            <div key={product.id} className="group">
              <div className="bg-white rounded-md shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative pt-[60%]">
                  <div className="absolute inset-0 flex items-center justify-center p-3">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    />
                  </div>
                  {product.isNew && (
                    <div className="absolute top-1.5 left-1.5 bg-green-500 text-white px-1.5 py-0.5 rounded-full text-[10px]">
                      New
                    </div>
                  )}
                  {product.discount && (
                    <div className="absolute top-1.5 right-1.5 bg-red-500 text-white px-1.5 py-0.5 rounded-full text-[10px]">
                      -{product.discount}%
                    </div>
                  )}
                  {product.stock < 10 && (
                    <div className="absolute bottom-1.5 right-1.5 bg-orange-500 text-white px-1.5 py-0.5 rounded-full text-[10px]">
                      Low Stock
                    </div>
                  )}
                  {/* Quick Actions */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity flex items-center justify-center space-x-1.5 opacity-0 group-hover:opacity-100">
                    <button
                      onClick={() => handleQuickView(product)}
                      className="p-1.5 bg-white rounded-full hover:bg-gray-100 transition-colors"
                    >
                      <FaEye className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => handleAddToComparison(product)}
                      className="p-1.5 bg-white rounded-full hover:bg-gray-100 transition-colors"
                    >
                      <FaExchangeAlt className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
                <div className="p-2">
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="text-[10px] text-gray-500">{product.category}</span>
                    <div className="flex items-center space-x-0.5">
                      <span className="text-[10px] text-yellow-400">★</span>
                      <span className="text-[10px] text-gray-600">{product.rating}</span>
                    </div>
                  </div>
                  <h3 className="text-xs font-semibold text-gray-900 mb-0.5 line-clamp-2">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1.5">
                      <span className="text-xs font-bold text-gray-900">${product.price}</span>
                      {product.originalPrice && (
                        <span className="text-[10px] text-gray-500 line-through">${product.originalPrice}</span>
                      )}
                    </div>
                    <button className="p-1.5 bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-colors">
                      <FaShoppingCart className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {sortedProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900">No products found</h3>
            <p className="text-gray-600 mt-2">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </div>

      {/* Quick View Modal */}
      {showQuickView && selectedProduct && (
        <QuickView
          product={selectedProduct}
          onClose={() => setShowQuickView(false)}
        />
      )}

      {/* Product Comparison Modal */}
      {showComparison && (
        <ProductComparison
          products={productsToCompare}
          onClose={() => setShowComparison(false)}
        />
      )}

      {/* Buying Guide Modal */}
      {showBuyingGuide && (
        <BuyingGuide
          onClose={() => setShowBuyingGuide(false)}
        />
      )}
    </main>
  );
};

export default ProductsPage; 