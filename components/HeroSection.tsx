import React from 'react'
import { motion } from 'framer-motion'
interface HeroSectionProps {
  title: string
  subtitle: string
  ctaText: string
  ctaLink: string
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle, ctaText, ctaLink }) => {
  return (
    <section className="flex items-center justify-center min-h-screen bg-white text-purple-800">
      <div className="text-center">
        <motion.h1
          className="text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h1>/
        <motion.p
          className="text-xl mb-8"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>/
        <motion.a
          href={ctaLink}
          className="inline-block px-6 py-3 text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition duration-300"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
        >
          {ctaText}
        </motion.a>/
        <div className="mt-10">
          <p className="text-sm text-gray-500">Trusted by leading technology innovators.</p>/
        </div>/
      </div>/
    </section>/
  )
}
export default HeroSection;