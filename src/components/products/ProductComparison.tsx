import React, { useState } from 'react';
import Image from 'next/image';
import { FaTimes } from 'react-icons/fa';
import { Product, ProductComparisonProps } from '@/types/product';

const ProductComparison: React.FC<ProductComparisonProps> = ({
  products,
  onClose,
}) => {
  const [selectedProducts, setSelectedProducts] = useState<Product[]>(products);

  const removeProduct = (productId: number) => {
    setSelectedProducts(selectedProducts.filter((p) => p.id !== productId));
  };

  const getSpecifications = () => {
    const specs = new Set<string>();
    selectedProducts.forEach((product) => {
      Object.keys(product.specifications).forEach((spec) => specs.add(spec));
    });
    return Array.from(specs);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">Compare Products</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <FaTimes className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {selectedProducts.map((product) => (
              <div key={product.id} className="relative">
                <button
                  onClick={() => removeProduct(product.id)}
                  className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
                >
                  <FaTimes className="w-4 h-4" />
                </button>
                <div className="border rounded-lg p-4">
                  <div className="relative aspect-square mb-4">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-lg font-bold text-primary mb-4">
                    ${product.price}
                  </p>
                  <div className="space-y-2">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between text-sm">
                        <span className="text-gray-600">{key}</span>
                        <span className="font-medium">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {selectedProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600">No products to compare</p>
            </div>
          )}

          {selectedProducts.length > 0 && (
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Specifications Comparison
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4">Feature</th>
                      {selectedProducts.map((product) => (
                        <th key={product.id} className="text-left py-3 px-4">
                          {product.name}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {getSpecifications().map((spec) => (
                      <tr key={spec} className="border-b">
                        <td className="py-3 px-4 font-medium">{spec}</td>
                        {selectedProducts.map((product) => (
                          <td key={product.id} className="py-3 px-4">
                            {product.specifications[spec] || '-'}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductComparison; 