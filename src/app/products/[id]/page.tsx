'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaStar, FaShoppingCart, FaHeart, FaShare, FaExchangeAlt, FaTruck, FaShieldAlt, FaCheckCircle } from 'react-icons/fa';
import ProductReviews from '@/components/products/ProductReviews';
import RelatedProducts from '@/components/products/RelatedProducts';
import ProductComparison from '@/components/products/ProductComparison';
import QuickView from '@/components/products/QuickView';
import BuyingGuide from '@/components/products/BuyingGuide';
import { Product } from '@/types/product';

// Mock data - would normally come from an API
const product: Product = {
  id: 1,
  name: 'Auriculares Inalámbricos Premium',
  price: 199.99,
  originalPrice: 249.99,
  image: '/headphones.png',
  images: ['/headphones.png'],
  category: 'Audio y Auriculares',
  rating: 4.9,
  reviews: 128,
  stock: 15,
  isNew: true,
  discount: 20,
  description: `Experimenta un sonido cristalino con nuestros auriculares inalámbricos premium. 
  Con tecnología avanzada de cancelación de ruido, estos auriculares ofrecen una 
  experiencia de audio inmersiva como ninguna otra. Perfectos para amantes de la música 
  y profesionales por igual.`,
  features: [
    'Cancelación de Ruido Activa',
    '40 horas de batería',
    'Bluetooth 5.0',
    'Controles táctiles',
    'Micrófono integrado',
    'Soporte para asistente de voz',
    'Carga rápida (5 min = 5 horas)',
    'Cómodos para sesiones largas',
  ],
  specifications: {
    'Marca': 'AudioPro',
    'Modelo': 'WH-1000XM4',
    'Color': 'Negro',
    'Peso': '250g',
    'Conectividad': 'Bluetooth 5.0',
    'Duración de Batería': '40 horas',
    'Tiempo de Carga': '3 horas',
    'Carga Rápida': '5 min = 5 horas',
    'Garantía': '2 años',
    'Compatibilidad': 'iOS, Android, Windows, macOS',
  },
  benefits: [
    'Perfecto para viajes diarios',
    'Ideal para trabajo remoto',
    'Excelente para gaming y entretenimiento',
    'Adecuado para uso profesional',
  ],
  warranty: {
    type: 'Garantía Limitada',
    duration: '2 años',
    coverage: 'Defectos de fabricación',
    details: 'Reemplazo gratuito por unidades defectuosas dentro del período de garantía',
  },
  shipping: {
    free: true,
    estimated: '2-3 días hábiles',
    return: 'Devolución gratuita en 30 días',
  },
};

// Mock related products
const relatedProducts: Product[] = [
  {
    id: 2,
    name: 'Auriculares Inalámbricos Pro',
    price: 149.99,
    originalPrice: 199.99,
    image: '/headphones.png',
    images: ['/headphones.png'],
    category: 'Audio y Auriculares',
    rating: 4.8,
    reviews: 89,
    stock: 20,
    discount: 15,
    description: 'Auriculares inalámbricos premium con cancelación de ruido activa.',
    specifications: {
      'Marca': 'AudioPro',
      'Modelo': 'TW-200',
      'Color': 'Negro',
      'Peso': '100g',
      'Conectividad': 'Bluetooth 5.0',
      'Duración de Batería': '24 horas',
      'Resistente al Agua': 'No'
    },
    features: [
      'Cancelación de Ruido Activa',
      'Controles Táctiles',
      'Soporte para Asistente de Voz',
      'Resistente al Agua',
    ],
    benefits: [
      'Perfecto para entrenamientos',
      'Ideal para viajes',
      'Excelente para gaming',
    ],
    warranty: {
      type: 'Garantía Limitada',
      duration: '1 año',
      coverage: 'Defectos de fabricación',
      details: 'Reemplazo gratuito por unidades defectuosas dentro del período de garantía',
    },
    shipping: {
      free: true,
      estimated: '2-3 días hábiles',
      return: 'Devolución gratuita en 30 días',
    },
  },
  {
    id: 3,
    name: 'Smart Watch Series X',
    price: 299.99,
    image: '/headphones.png',
    images: ['/headphones.png', '/headphones.png', '/headphones.png'],
    category: 'Wearables',
    rating: 4.7,
    reviews: 156,
    stock: 12,
    isNew: true,
    description: 'Advanced smartwatch with health tracking and notifications.',
    specifications: {
      'Brand': 'TechFit',
      'Model': 'SW-300',
      'Color': 'Silver',
      'Weight': '50g',
      'Battery Life': '5 days',
      'Waterproof': 'Yes'
    },
    features: [
      'Heart Rate Monitoring',
      'Sleep Tracking',
      'GPS',
      'Water Resistant',
      'Notifications',
    ],
    benefits: [
      'Perfect for fitness tracking',
      'Great for daily wear',
      'Ideal for outdoor activities',
    ],
    warranty: {
      type: 'Limited Warranty',
      duration: '1 year',
      coverage: 'Manufacturing defects',
      details: 'Free replacement for defective units within warranty period',
    },
    shipping: {
      free: true,
      estimated: '2-3 business days',
      return: '30-day free returns',
    },
  },
  {
    id: 4,
    name: 'Bluetooth Speaker',
    price: 79.99,
    image: '/headphones.png',
    images: ['/headphones.png', '/headphones.png', '/headphones.png'],
    category: 'Audio & Headphones',
    rating: 4.6,
    reviews: 234,
    stock: 30,
    description: 'Portable Bluetooth speaker with premium sound quality.',
    specifications: {
      'Brand': 'AudioPro',
      'Model': 'BS-100',
      'Color': 'Black',
      'Weight': '500g',
      'Battery Life': '12 hours',
      'Waterproof': 'Yes'
    },
    features: [
      'Water Resistant',
      'Bluetooth 5.0',
      'Built-in Microphone',
      'Party Mode',
      'LED Lights',
    ],
    benefits: [
      'Perfect for outdoor gatherings',
      'Great for pool parties',
      'Ideal for camping',
    ],
    warranty: {
      type: 'Limited Warranty',
      duration: '1 year',
      coverage: 'Manufacturing defects',
      details: 'Free replacement for defective units within warranty period',
    },
    shipping: {
      free: true,
      estimated: '2-3 business days',
      return: '30-day free returns',
    },
  },
];

// Mock reviews
const reviews = [
  {
    id: 1,
    user: {
      name: 'Juan Pérez',
      avatar: '/avatar1.png',
    },
    rating: 5,
    title: "Los mejores auriculares que he tenido",
    content: 'La calidad del sonido es increíble y la cancelación de ruido es un cambio total para mi viaje diario.',
    date: '2024-02-15',
    likes: 45,
    dislikes: 2,
    verified: true,
    images: ['/review1.png', '/review2.png'],
  },
  {
    id: 2,
    user: {
      name: 'María García',
    },
    rating: 4,
    title: 'Excelente producto, pequeños detalles',
    content: 'En general muy satisfecha con la compra. La duración de la batería es excelente, aunque los controles táctiles requieren algo de práctica.',
    date: '2024-02-10',
    likes: 32,
    dislikes: 1,
    verified: true,
  },
];

const ProductDetailPage = ({ params }: { params: { id: string } }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedTab, setSelectedTab] = useState('description');
  const [showComparison, setShowComparison] = useState(false);
  const [showQuickView, setShowQuickView] = useState(false);
  const [productsToCompare, setProductsToCompare] = useState([product]);

  const handleAddToComparison = (productToAdd: typeof product) => {
    if (productsToCompare.length < 3 && !productsToCompare.find(p => p.id === productToAdd.id)) {
      setProductsToCompare([...productsToCompare, productToAdd]);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-white to-background py-12">
      <div className="container-custom">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li>
              <Link href="/" className="hover:text-primary transition-colors">
                Inicio
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/products" className="hover:text-primary transition-colors">
                Productos
              </Link>
            </li>
            <li>/</li>
            <li className="text-gray-900 font-medium">{product.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Imagen del Producto */}
          <div className="space-y-4">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-white shadow-custom hover:shadow-xl transition-all duration-300 group">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {product.isNew && (
                <div className="absolute top-4 left-4 badge badge-new animate-float">
                  Nuevo
                </div>
              )}
              {product.discount && (
                <div className="absolute top-4 right-4 badge badge-discount animate-float">
                  -{product.discount}% OFF
                </div>
              )}
            </div>
          </div>

          {/* Información del Producto */}
          <div className="space-y-8">
            <div>
              <h1 className="heading-1 mb-4">{product.name}</h1>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`w-6 h-6 ${
                        i < Math.floor(product.rating)
                          ? 'text-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-lg text-gray-600">
                  ({product.reviews} reseñas)
                </span>
              </div>
            </div>

            <div className="flex items-baseline space-x-4">
              <span className="text-4xl font-bold text-primary">
                ${product.price}
              </span>
              {product.originalPrice && (
                <span className="text-2xl text-gray-500 line-through">
                  ${product.originalPrice}
                </span>
              )}
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center border-2 border-gray-200 rounded-xl">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-6 py-3 text-gray-600 hover:text-primary transition-colors"
                >
                  -
                </button>
                <span className="px-6 py-3 border-x-2 border-gray-200 text-lg font-medium">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                  className="px-6 py-3 text-gray-600 hover:text-primary transition-colors"
                >
                  +
                </button>
              </div>
              <button className="btn-primary flex-1">
                <FaShoppingCart className="w-6 h-6" />
                <span>Añadir al Carrito</span>
              </button>
              <button className="btn-icon">
                <FaHeart className="w-6 h-6" />
              </button>
              <button className="btn-icon">
                <FaShare className="w-6 h-6" />
              </button>
              <button
                onClick={() => setShowComparison(true)}
                className="btn-icon"
              >
                <FaExchangeAlt className="w-6 h-6" />
              </button>
            </div>

            {/* Información de Envío */}
            <div className="card p-6">
              <div className="flex items-center space-x-3 text-green-600 mb-2">
                <FaTruck className="w-6 h-6" />
                <span className="text-lg font-medium">Envío Gratuito</span>
              </div>
              <p className="text-gray-600">
                Entrega estimada: {product.shipping?.estimated}
              </p>
            </div>

            {/* Beneficios */}
            <div>
              <h2 className="heading-3 mb-4">
                Perfecto Para
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {product.benefits?.map((benefit, index) => (
                  <div key={index} className="feature-card">
                    <div className="flex items-center space-x-3">
                      <FaCheckCircle className="w-5 h-5 text-primary" />
                      <span className="text-gray-600">{benefit}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tabs */}
            <div>
              <div className="border-b-2 border-gray-200">
                <nav className="flex space-x-8">
                  {[
                    { id: 'description', label: 'Descripción' },
                    { id: 'specifications', label: 'Especificaciones' },
                    { id: 'warranty', label: 'Garantía' },
                    { id: 'reviews', label: 'Reseñas' },
                    { id: 'buying-guide', label: 'Guía de Compra' }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setSelectedTab(tab.id)}
                      className={`tab-button ${
                        selectedTab === tab.id
                          ? 'tab-button-active'
                          : 'tab-button-inactive'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </nav>
              </div>

              <div className="mt-8">
                {selectedTab === 'description' && (
                  <div className="prose max-w-none">
                    <p className="text-body text-lg">{product.description}</p>
                    <h3 className="heading-3 mt-8 mb-6">
                      Características Principales
                    </h3>
                    <ul className="grid grid-cols-2 gap-4">
                      {product.features?.map((feature, index) => (
                        <li key={index} className="feature-card">
                          <div className="flex items-center space-x-3">
                            <FaCheckCircle className="w-5 h-5 text-primary" />
                            <span className="text-gray-600">{feature}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedTab === 'specifications' && (
                  <div className="grid grid-cols-2 gap-6">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="specification-row">
                        <span className="text-gray-600 font-medium">{key}</span>
                        <span className="text-gray-900">{value}</span>
                      </div>
                    ))}
                  </div>
                )}

                {selectedTab === 'warranty' && (
                  <div className="space-y-6">
                    <div className="card p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <FaShieldAlt className="w-6 h-6 text-primary" />
                        <h3 className="heading-3">{product.warranty?.type}</h3>
                      </div>
                      <div className="space-y-2">
                        <p className="text-body">Duración: {product.warranty?.duration}</p>
                        <p className="text-body">Cobertura: {product.warranty?.coverage}</p>
                        <p className="text-body">{product.warranty?.details}</p>
                      </div>
                    </div>
                    <div className="card p-6">
                      <h3 className="heading-3 mb-4">Envío y Devoluciones</h3>
                      <div className="space-y-2">
                        <p className="text-body">{product.shipping?.return}</p>
                        <p className="text-body">
                          Entrega estimada: {product.shipping?.estimated}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {selectedTab === 'reviews' && (
                  <ProductReviews
                    productId={product.id}
                    reviews={reviews}
                    averageRating={product.rating}
                    totalReviews={product.reviews}
                  />
                )}

                {selectedTab === 'buying-guide' && (
                  <BuyingGuide category={product.category} />
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Productos Relacionados */}
        <div className="mt-16">
          <RelatedProducts
            products={relatedProducts}
            currentProductId={product.id}
          />
        </div>
      </div>

      {/* Modal de Comparación */}
      {showComparison && (
        <ProductComparison
          products={productsToCompare}
          onClose={() => setShowComparison(false)}
        />
      )}

      {/* Modal de Vista Rápida */}
      {showQuickView && (
        <QuickView
          product={product}
          onClose={() => setShowQuickView(false)}
        />
      )}
    </main>
  );
};

export default ProductDetailPage; 