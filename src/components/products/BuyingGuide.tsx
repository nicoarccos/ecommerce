import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { BuyingGuideProps } from '@/types/product';

const BuyingGuide: React.FC<BuyingGuideProps> = ({ guide }) => {
  const [expandedSections, setExpandedSections] = useState<number[]>([]);

  const toggleSection = (index: number) => {
    setExpandedSections(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        {guide.title}
      </h2>
      <div className="space-y-4">
        {guide.sections.map((section, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => toggleSection(index)}
              className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
            >
              <h3 className="text-lg font-semibold text-gray-900">
                {section.title}
              </h3>
              {expandedSections.includes(index) ? (
                <FaChevronUp className="w-5 h-5 text-gray-500" />
              ) : (
                <FaChevronDown className="w-5 h-5 text-gray-500" />
              )}
            </button>
            {expandedSections.includes(index) && (
              <div className="px-6 py-4 bg-gray-50">
                <div className="prose max-w-none">
                  {section.content}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuyingGuide; 