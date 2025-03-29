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
      stars.push(<FaStar key={`star-${i}`} className="text-accent text-sm" />);
    }

    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half-star" className="text-accent text-sm" />);
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaRegStar key={`empty-star-${i}`} className="text-accent text-sm" />);
    }

    return stars;
  };

  // Calculate discounted price if applicable
  const finalPrice = product.discount && product.discount > 0
    ? product.price - (product.price * (product.discount / 100)) 
    : product.price;

  // Determine if product is low in stock
  const isLowStock = product.stock !== undefined && product.stock < 10;
  const hasDiscount = product.discount !== undefined && product.discount > 0;

  return (
    <div className="group relative bg-white rounded-sm shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
      {/* Wishlist button */}
      <button 
        className="absolute top-0.5 right-0.5 z-10 w-4 h-4 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-gray-400 hover:text-red-500 transition-colors"
        aria-label="Add to wishlist"
      >
        <FaHeart size={6} />
      </button>
      
      {/* Product image */}
      <Link href={`/products/${product.id}`} className="block relative pt-[40%] overflow-hidden bg-gray-100">
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Real product image */}
          <img 
            src={product.image} 
            alt={product.name} 
            className="absolute inset-0 w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-500"
          />
          
          {/* Image overlay with product info on hover */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
            {product.description && (
              <div className="bg-white/90 backdrop-blur-sm m-1 p-0.5 rounded text-[6px] text-gray-700 max-h-8 overflow-y-auto">
                {product.description}
              </div>
            )}
          </div>
        </div>

        {/* Category tag */}
        <div className="absolute top-0.5 left-0.5 bg-black/60 backdrop-blur-sm text-white text-[4px] font-medium px-0.5 py-0.5 rounded">
          {product.category}
        </div>
        
        {/* "New" label - conditionally rendered */}
        {product.isNew && (
          <div className="absolute top-3 left-0.5 bg-accent text-white text-[4px] font-bold px-0.5 py-0.5 rounded">
            NEW
          </div>
        )}
        
        {/* Discount tag - conditionally rendered */}
        {hasDiscount && (
          <div className="absolute bottom-0.5 left-0.5 bg-secondary text-white text-[4px] font-bold px-0.5 py-0.5 rounded-full">
            -{product.discount}%
          </div>
        )}
        
        {/* Low stock warning - conditionally rendered */}
        {isLowStock && (
          <div className="absolute bottom-0.5 right-0.5 bg-red-500 text-white text-[4px] font-bold px-0.5 py-0.5 rounded-full">
            Low Stock
          </div>
        )}
      </Link>

      {/* Product info */}
      <div className="p-1">
        <div className="mb-0.5 flex items-center justify-between text-[4px]">
          <div className="flex items-center">
            {renderStars(product.rating)}
            <span className="text-gray-500 ml-0.5">({product.rating})</span>
          </div>
          
          {/* Available colors indicator */}
          {product.colors && product.colors.length > 0 && (
            <div className="flex -space-x-0.5">
              {product.colors.slice(0, 3).map((color, index) => (
                <div 
                  key={index} 
                  className="w-1 h-1 rounded-full border border-white" 
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
                <div className="w-1 h-1 rounded-full bg-gray-100 flex items-center justify-center text-[3px] font-medium text-gray-500">
                  +{product.colors.length - 3}
                </div>
              )}
            </div>
          )}
        </div>
        
        <Link href={`/products/${product.id}`} className="block group-hover:text-primary transition-colors">
          <h3 className="font-semibold text-gray-800 text-[8px] mb-0.5 line-clamp-1">{product.name}</h3>
        </Link>

        <div className="flex justify-between items-center mt-0.5">
          <div>
            {hasDiscount && (
              <span className="text-[6px] text-gray-400 line-through mr-0.5">${product.price.toFixed(2)}</span>
            )}
            <span className="text-[10px] font-bold text-gray-900">${finalPrice.toFixed(2)}</span>
          </div>
          
          <div className="flex space-x-0.5">
            <button 
              className="flex items-center justify-center w-4 h-4 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors"
              aria-label="Add to cart"
            >
              <FaShoppingCart size={6} />
            </button>
            <button 
              className="flex items-center justify-center w-4 h-4 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
              aria-label="Quick view"
            >
              <FaEye size={6} />
            </button>
          </div>
        </div>
      </div>
      
      {/* Quick view overlay - appears on hover */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
        <Link 
          href={`/products/${product.id}`}
          className="bg-white text-primary font-medium px-1 py-0.5 rounded text-[6px] transform translate-y-4 group-hover:translate-y-0 transition-transform"
        >
          Quick View
        </Link>
      </div>
    </div>
  );
};

export default ProductCard; 