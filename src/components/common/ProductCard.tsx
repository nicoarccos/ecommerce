import React from 'react';
import Link from 'next/link';
import { FaStar, FaRegStar, FaStarHalfAlt, FaShoppingCart, FaHeart, FaEye } from 'react-icons/fa';

interface Product {
  id: number;
  name: string;
  description?: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  isNew?: boolean;
  discount?: number;
  stock?: number;
  colors?: string[];
  ingredients?: string[];
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  // Function to render star ratings
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`star-${i}`} className="text-accent" />);
    }

    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half-star" className="text-accent" />);
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaRegStar key={`empty-star-${i}`} className="text-accent" />);
    }

    return stars;
  };

  // Calculate discounted price if applicable
  const finalPrice = product.discount 
    ? product.price - (product.price * (product.discount / 100)) 
    : product.price;

  // Determine if product is low in stock
  const isLowStock = product.stock !== undefined && product.stock < 10;

  return (
    <div className="group relative bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      {/* Wishlist button */}
      <button 
        className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-gray-400 hover:text-red-500 transition-colors"
        aria-label="Add to wishlist"
      >
        <FaHeart size={14} />
      </button>
      
      {/* Product image */}
      <Link href={`/products/${product.id}`} className="block relative pt-[100%] overflow-hidden bg-gray-100">
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Real product image */}
          <img 
            src={product.image} 
            alt={product.name} 
            className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
          
          {/* Image overlay with product info on hover */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
            {product.description && (
              <div className="bg-white/90 backdrop-blur-sm m-4 p-3 rounded-lg text-xs text-gray-700 max-h-24 overflow-y-auto">
                {product.description}
              </div>
            )}
          </div>
        </div>

        {/* Category tag */}
        <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm text-white text-xs font-medium px-2 py-1 rounded">
          {product.category}
        </div>
        
        {/* "New" label - conditionally rendered */}
        {product.isNew && (
          <div className="absolute top-10 left-3 bg-accent text-white text-xs font-bold px-2 py-1 rounded">
            NEW
          </div>
        )}
        
        {/* Discount tag - conditionally rendered */}
        {product.discount > 0 && (
          <div className="absolute bottom-3 left-3 bg-secondary text-white text-xs font-bold px-2 py-1 rounded-full">
            -{product.discount}%
          </div>
        )}
        
        {/* Low stock warning - conditionally rendered */}
        {isLowStock && (
          <div className="absolute bottom-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            Low Stock
          </div>
        )}
      </Link>

      {/* Product info */}
      <div className="p-4">
        <div className="mb-2 flex items-center justify-between text-xs">
          <div className="flex items-center">
            {renderStars(product.rating)}
            <span className="text-gray-500 ml-1">({product.rating})</span>
          </div>
          
          {/* Available colors indicator */}
          {product.colors && product.colors.length > 0 && (
            <div className="flex -space-x-1">
              {product.colors.slice(0, 3).map((color, index) => (
                <div 
                  key={index} 
                  className="w-4 h-4 rounded-full border border-white" 
                  style={{ 
                    backgroundColor: 
                      color.toLowerCase() === 'black' ? '#000' :
                      color.toLowerCase() === 'blue' ? '#3b82f6' :
                      color.toLowerCase() === 'silver' ? '#cbd5e1' :
                      color.toLowerCase() === 'midnight' ? '#1e293b' :
                      color.toLowerCase() === 'starlight' ? '#e2e8f0' :
                      color.toLowerCase() === 'green' ? '#22c55e' :
                      color.toLowerCase() === 'charcoal' ? '#4b5563' :
                      color.toLowerCase() === 'glacier white' ? '#f9fafb' : '#9ca3af'
                  }}
                  title={color}
                ></div>
              ))}
              {product.colors.length > 3 && (
                <div className="w-4 h-4 rounded-full bg-gray-100 flex items-center justify-center text-[8px] font-medium text-gray-500">
                  +{product.colors.length - 3}
                </div>
              )}
            </div>
          )}
        </div>
        
        <Link href={`/products/${product.id}`} className="block group-hover:text-primary transition-colors">
          <h3 className="font-semibold text-gray-800 mb-1 line-clamp-1">{product.name}</h3>
        </Link>

        <div className="flex justify-between items-center mt-2">
          <div>
            {product.discount > 0 && (
              <span className="text-sm text-gray-400 line-through mr-2">${product.price.toFixed(2)}</span>
            )}
            <span className="text-lg font-bold text-gray-900">${finalPrice.toFixed(2)}</span>
          </div>
          
          <div className="flex space-x-1">
            <button 
              className="flex items-center justify-center w-9 h-9 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors"
              aria-label="Add to cart"
            >
              <FaShoppingCart size={14} />
            </button>
            <button 
              className="flex items-center justify-center w-9 h-9 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
              aria-label="Quick view"
            >
              <FaEye size={14} />
            </button>
          </div>
        </div>
      </div>
      
      {/* Quick view overlay - appears on hover */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
        <Link 
          href={`/products/${product.id}`}
          className="bg-white text-primary font-medium px-4 py-2 rounded transform translate-y-4 group-hover:translate-y-0 transition-transform"
        >
          Quick View
        </Link>
      </div>
    </div>
  );
};

export default ProductCard; 