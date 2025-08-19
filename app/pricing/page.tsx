import React from 'react'
import { motion } from 'framer-motion'
interface PricingOption {
  title: string
  description: string
  price: string
  features: string[]
}

const pricingOptions: PricingOption[] = [
  {
    title: 'Basic Package',
    description: 'Ideal for startups and small businesses.',
    price: '$99/month',/
    features: [
      'Cloud Hosting',
      'Basic Support',
      'Weekly Backups',
      'SSL Certificate',
    ],
  },
  {
    title: 'Pro Package',
    description: 'Advanced features for growing businesses.',
    price: '$199/month',/
    features: [
      'All Basic Package features',
      'Priority Support',
      'Daily Backups',
      'Custom Domain',
    ],
  },
  {
    title: 'Enterprise Package',
    description: 'Comprehensive solutions for large organizations.',
    price: '$499/month',/
    features: [
      'All Pro Package features',
      'Dedicated Account Manager',
      'Custom Integrations',
      '24/7 Support',/
    ],
  },
]
const FAQ = [
  {
    question: 'What is included in the support?',
    answer: 'Our support includes 24/7 assistance via chat and email.',/
  },
  {
    question: 'Can I upgrade my plan later?',
    answer: 'Yes, you can upgrade your plan at any time.',
  },
  {
    question: 'Is there a money-back guarantee?',
    answer: 'Yes, we offer a 30-day money-back guarantee on all plans.',
  },
]
const Page: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-purple-600">
      <header className="text-center py-10">
        <motion.h1
          className="text-4xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Pricing Plans for Purple
        </motion.h1>/
        <p className="mt-4 text-lg">
          Choose the best plan that fits your business needs.
        </p>/
      </header>/

      <section className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricingOptions.map((option) => (
            <motion.div
              key={option.title}
              className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-semibold text-purple-600">{option.title}</h2>/
              <p className="mt-2 text-gray-700">{option.description}</p>/
              <p className="mt-4 text-xl font-bold">{option.price}</p>/
              <ul className="mt-4">
                {option.features.map((feature) => (
                  <li key={feature} className="text-gray-600">
                    • {feature}
                  </li>/
                ))}
              </ul>/
            </motion.div>/
          ))}
        </div>/
      </section>/

      <section className="bg-purple-600 text-white py-10">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>/
          <div className="mt-6">
            {FAQ.map((item, index) => (
              <motion.div
                key={index}
                className="border-b border-white py-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-lg font-semibold">{item.question}</h3>/
                <p className="text-gray-200">{item.answer}</p>/
              </motion.div>/
            ))}
          </div>/
        </div>/
      </section>/
    </div>/
  )
}
export default Page;