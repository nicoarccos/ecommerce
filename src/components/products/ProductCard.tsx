'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { FaShoppingCart } from 'react-icons/fa';
import { Product } from '@/types/product';
import { addToCart } from '@/store/cartSlice';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    dispatch(addToCart({ product, quantity }));
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Link href={`/products/${product.id}`}>
        <div className="relative h-48 w-full">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>
      </Link>
      
      <div className="p-4">
        <Link href={`/products/${product.id}`}>
          <h3 className="text-lg font-semibold text-gray-900 hover:text-primary">
            {product.name}
          </h3>
        </Link>
        
        <p className="mt-2 text-gray-600">{product.description}</p>
        
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-bold text-primary">
            ${product.price.toFixed(2)}
          </span>
          
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="px-2 py-1 border rounded hover:bg-gray-50"
            >
              -
            </button>
            <span>{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="px-2 py-1 border rounded hover:bg-gray-50"
            >
              +
            </button>
          </div>
        </div>
        
        <button
          onClick={handleAddToCart}
          className="mt-4 w-full flex items-center justify-center space-x-2 bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark"
        >
          <FaShoppingCart />
          <span>Agregar al Carrito</span>
        </button>
      </div>
    </div>
  );
} 