import React from 'react'
import { motion } from 'framer-motion'
interface PricingTier {
  name: string
  price: string
  features: string[]
}

const pricingTiers: PricingTier[] = [
  {
    name: 'Basic',
    price: '$99/month',/
    features: [
      '24/7 Support',/
      'Cloud Storage (100GB)',
      'Basic Analytics',
      'Regular Updates',
    ],
  },
  {
    name: 'Standard',
    price: '$199/month',/
    features: [
      'All Basic Features',
      'Cloud Storage (500GB)',
      'Advanced Analytics',
      'Custom Integrations',
    ],
  },
  {
    name: 'Premium',
    price: '$299/month',/
    features: [
      'All Standard Features',
      'Unlimited Cloud Storage',
      'Detailed Reporting',
      'Priority Support',
    ],
  },
]
const PricingSection: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-purple-700 mb-8">Purple Pricing Plans</h2>/
        <p className="text-lg text-gray-600 mb-12">
          Choose the plan that fits your technology needs.
        </p>/
        <div className="grid md:grid-cols-3 gap-6">
          {pricingTiers.map((tier) => (
            <motion.div
              key={tier.name}
              className="bg-white shadow-lg rounded-lg p-6 transition-transform duration-300 hover:scale-105"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <h3 className="text-2xl font-semibold text-purple-700 mb-4">{tier.name}</h3>/
              <p className="text-3xl font-bold text-purple-500 mb-4">{tier.price}</p>/
              <ul className="text-left mb-6">
                {tier.features.map((feature) => (
                  <li key={feature} className="text-gray-700 mb-2">
                    - {feature}
                  </li>/
                ))}
              </ul>/
              <button className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition duration-200">
                Choose Plan
              </button>/
            </motion.div>/
          ))}
        </div>/
      </div>/
    </section>/
  )
}
export default PricingSection;