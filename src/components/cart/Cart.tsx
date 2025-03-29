'use client';

import { useDispatch, useSelector } from 'react-redux';
import { FaTimes, FaTrash } from 'react-icons/fa';
import { RootState } from '@/store/store';
import { removeFromCart, updateQuantity } from '@/store/cartSlice';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

interface CartProps {
  onClose: () => void;
}

export default function Cart({ onClose }: CartProps) {
  const dispatch = useDispatch();
  const { items } = useSelector((state: RootState) => state.cart);

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleQuantityChange = (productId: string, quantity: number) => {
    if (quantity > 0) {
      dispatch(updateQuantity({ productId, quantity }));
    }
  };

  const handleRemoveItem = (productId: string) => {
    dispatch(removeFromCart(productId));
  };

  const handleCheckout = async () => {
    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ items }),
      });

      const { sessionId } = await response.json();
      const stripe = await stripePromise;

      if (stripe) {
        const { error } = await stripe.redirectToCheckout({
          sessionId,
        });

        if (error) {
          console.error('Error:', error);
          alert('Error al procesar el pago. Por favor, intenta de nuevo.');
        }
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error al procesar el pago. Por favor, intenta de nuevo.');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
      <div className="fixed inset-y-0 right-0 max-w-xl w-full bg-white shadow-xl">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-xl font-semibold">Carrito de Compras</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <FaTimes className="h-6 w-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            {items.length === 0 ? (
              <p className="text-gray-500 text-center">Tu carrito está vacío</p>
            ) : (
              items.map((item) => (
                <div key={item.id} className="flex items-center space-x-4 mb-4">
                  <div className="flex-1">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-gray-600">${item.price.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      className="px-2 py-1 border rounded"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      className="px-2 py-1 border rounded"
                    >
                      +
                    </button>
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="border-t p-4">
            <div className="flex justify-between mb-4">
              <span className="font-semibold">Total:</span>
              <span className="font-semibold">${total.toFixed(2)}</span>
            </div>
            <button
              onClick={handleCheckout}
              disabled={items.length === 0}
              className="w-full bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Proceder al Pago
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 