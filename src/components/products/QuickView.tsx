'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FaTimes, FaShoppingCart, FaHeart, FaShare } from 'react-icons/fa';
import { Product, QuickViewProps } from '@/types/product';
import { X } from 'lucide-react';

const QuickView: React.FC<QuickViewProps> = ({ product, onClose }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [imageError, setImageError] = useState(false);

  // Ensure product.images exists and has at least one image
  const images = product.images || ['/images/placeholder-product.svg'];
  const defaultImage = '/images/placeholder-product.svg';

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-2xl font-bold text-gray-900">{product.name}</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-gray-500" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Galería de imágenes */}
            <div className="space-y-4">
              {/* Imagen principal */}
              <div className="relative aspect-square rounded-lg overflow-hidden bg-white">
                <Image
                  src={imageError ? defaultImage : (images[selectedImage] || defaultImage)}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                  onError={handleImageError}
                />
                {product.isNew && (
                  <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm">
                    New Arrival
                  </div>
                )}
                {product.discount && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm">
                    -{product.discount}% OFF
                  </div>
                )}
              </div>

              {/* Miniaturas */}
              {images.length > 1 && (
                <div className="grid grid-cols-4 gap-2">
                  {images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`relative aspect-square rounded-lg overflow-hidden ${
                        selectedImage === index ? 'ring-2 ring-primary' : ''
                      }`}
                    >
                      <Image
                        src={image || defaultImage}
                        alt={`${product.name} view ${index + 1}`}
                        fill
                        className="object-cover"
                        onError={handleImageError}
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Información del producto */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">{product.name}</h3>
                <div className="flex items-center mt-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(product.rating)
                            ? 'text-yellow-400'
                            : 'text-gray-300'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">
                    ({product.reviews} reviews)
                  </span>
                </div>
              </div>

              <div className="flex items-baseline space-x-2">
                <span className="text-2xl font-bold text-primary">
                  ${product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-lg text-gray-500 line-through">
                    ${product.originalPrice}
                  </span>
                )}
              </div>

              <p className="text-gray-600">{product.description}</p>

              <div className="flex items-center space-x-4">
                <div className="flex items-center border border-gray-200 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 text-gray-600 hover:text-primary"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 border-x border-gray-200">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                    className="px-4 py-2 text-gray-600 hover:text-primary"
                  >
                    +
                  </button>
                </div>
                <button className="flex-1 bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center space-x-2">
                  <FaShoppingCart />
                  <span>Add to Cart</span>
                </button>
                <button className="p-3 border border-gray-200 rounded-lg hover:border-primary hover:text-primary transition-colors">
                  <FaHeart className="w-5 h-5" />
                </button>
                <button className="p-3 border border-gray-200 rounded-lg hover:border-primary hover:text-primary transition-colors">
                  <FaShare className="w-5 h-5" />
                </button>
              </div>

              {product.stock < 10 && (
                <div className="text-orange-500 text-sm">
                  Only {product.stock} left in stock
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickView; 