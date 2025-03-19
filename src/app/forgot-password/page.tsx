'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaEnvelope, FaArrowLeft } from 'react-icons/fa';
import AnimatedBackground from '@/components/auth/AnimatedBackground';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setSuccessMessage('');
    
    try {
      // Aquí iría la lógica para enviar el email de recuperación
      // Por ahora, simulamos un delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Validación básica
      if (!email) {
        throw new Error('Please enter your email address');
      }
      
      // Simulamos éxito
      setSuccessMessage(`Recovery instructions have been sent to ${email}`);
    } catch (err: any) {
      setError(err.message || 'Failed to send recovery email');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Fondo animado - usamos una variante específica para recuperación de contraseña */}
      <AnimatedBackground variant="forgot-password" />
      
      <div className="w-full max-w-md">
        <div className="relative backdrop-blur-sm bg-white/70 rounded-2xl shadow-xl overflow-hidden border border-amber-100 p-8">
          {/* Corner accents */}
          <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-accent rounded-tl-lg"></div>
          <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-accent rounded-tr-lg"></div>
          <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-accent rounded-bl-lg"></div>
          <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-accent rounded-br-lg"></div>
          
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              {/* You could add your logo here */}
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"></path>
                </svg>
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Forgot Password?</h2>
            <p className="text-gray-600 mt-2">Enter your email to receive recovery instructions</p>
          </div>
          
          {error && (
            <div className="mb-6 p-3 bg-red-50 text-sm text-red-600 rounded-lg">
              {error}
            </div>
          )}
          
          {successMessage && (
            <div className="mb-6 p-3 bg-green-50 text-sm text-green-600 rounded-lg">
              {successMessage}
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaEnvelope className="text-gray-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-colors text-sm bg-white/80"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            
            <div>
              <button
                type="submit"
                disabled={isLoading || successMessage !== ''}
                className="w-full bg-accent hover:bg-accent/90 text-white py-3 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent flex items-center justify-center"
              >
                {isLoading ? (
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : null}
                {isLoading ? 'Sending...' : 'Send Reset Instructions'}
              </button>
            </div>

            {successMessage && (
              <div className="mt-4">
                <button
                  onClick={() => window.location.href = '/login'}
                  className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 rounded-lg font-medium transition-colors focus:outline-none"
                >
                  Back to Login
                </button>
              </div>
            )}
          </form>
          
          {!successMessage && (
            <div className="text-center mt-8">
              <Link href="/login" className="inline-flex items-center text-sm font-medium text-accent hover:text-accent/80 transition-colors">
                <FaArrowLeft className="mr-2 h-4 w-4" />
                Back to Login
              </Link>
            </div>
          )}
        </div>
      </div>
    </main>
  );
} 