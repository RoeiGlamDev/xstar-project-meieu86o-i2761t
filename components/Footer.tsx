import React from 'react'
import { motion } from 'framer-motion'
interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="bg-white text-purple-600 py-6">
      <div className="container mx-auto px-4">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-semibold">Purple</h2>/
            <p className="text-sm">Leading the way in technology solutions</p>/
          </div>/
          <div className="flex flex-col md:flex-row md:space-x-8">
            <a href="/about" className="hover:underline transition duration-200">/
              About Us
            </a>/
            <a href="/services" className="hover:underline transition duration-200">/
              Our Services
            </a>/
            <a href="/reviews" className="hover:underline transition duration-200">/
              Customer Reviews
            </a>/
            <a href="/contact" className="hover:underline transition duration-200">/
              Contact
            </a>/
          </div>/
        </motion.div>/
        <motion.div
          className="mt-6 flex justify-center space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a href="https://facebook.com/purple" target="_blank" rel="noopener noreferrer">/
            <img src="/icons/facebook.svg" alt="Facebook" className="w-6 h-6 hover:scale-110 transition-transform duration-200" />/
          </a>/
          <a href="https://twitter.com/purple" target="_blank" rel="noopener noreferrer">/
            <img src="/icons/twitter.svg" alt="Twitter" className="w-6 h-6 hover:scale-110 transition-transform duration-200" />/
          </a>/
          <a href="https://linkedin.com/company/purple" target="_blank" rel="noopener noreferrer">/
            <img src="/icons/linkedin.svg" alt="LinkedIn" className="w-6 h-6 hover:scale-110 transition-transform duration-200" />/
          </a>/
        </motion.div>/
        <motion.div
          className="mt-6 text-center text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p>&copy; {new Date().getFullYear()} Purple. All Rights Reserved.</p>/
        </motion.div>/
      </div>/
    </footer>/
  )
}
export default Footer;