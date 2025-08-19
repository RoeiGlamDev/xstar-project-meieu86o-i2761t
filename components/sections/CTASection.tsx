import React from 'react'
import { motion } from 'framer-motion'
interface CTASectionProps {
  title: string
  description: string
  buttonText: string
  buttonLink: string
}

const CTASection: React.FC<CTASectionProps> = ({ title, description, buttonText, buttonLink }) => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-purple-600 mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h2>/
        <motion.p
          className="text-lg text-gray-700 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {description}
        </motion.p>/
        <motion.a
          href={buttonLink}
          className="inline-block bg-purple-600 text-white py-3 px-6 rounded-lg text-lg font-semibold transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          {buttonText}
        </motion.a>/
      </div>/
    </section>/
  )
}
export default CTASection;