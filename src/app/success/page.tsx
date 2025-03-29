'use client';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { clearCart } from '@/store/cartSlice';
import Link from 'next/link';

export default function SuccessPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Limpiar el carrito cuando la página se carga
    dispatch(clearCart());
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Thank you for your purchase!
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Your order has been successfully processed.
          </p>
        </div>
        <div className="mt-8">
          <Link
            href="/products"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary/90"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
} 