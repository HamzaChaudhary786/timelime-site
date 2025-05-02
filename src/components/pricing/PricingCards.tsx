import React from 'react';

interface FeatureItem {
  icon: React.ReactNode;
  text: string;
}

interface PricingCardsProps {
  title: string;
  price: number | string;
  features: FeatureItem[];
}

const PricingCards: React.FC<PricingCardsProps> = ({ title, price, features }) => {
  return (
    <div className="border border-gray-300 rounded-xl p-6 w-full max-w-sm shadow-sm">
      <h3 className="text-2xl font-bold text-center mb-2">{title}</h3>
      <p className="text-center text-gray-600 text-xl font-semibold mb-4">${price}/mo</p>
      <button className="bg-blue-600 hover:bg-blue-700 text-white w-full py-2 rounded-lg font-semibold mb-6">
        Get Started
      </button>
      <ul className="space-y-3">
        {features.map((item, index) => (
          <li key={index} className="flex items-center space-x-3 text-gray-700">
            <span className="text-blue-600">{item.icon}</span>
            <span className="text-sm">{item.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PricingCards;
