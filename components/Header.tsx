import React from 'react'
import { motion } from 'framer-motion'
interface HeaderProps {
  logo: string
}

const Header: React.FC<HeaderProps> = ({ logo }) => {
  return (
    <header className="bg-white text-purple-700 shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <motion.div
          className="text-2xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img src={logo} alt="Purple Logo" className="h-10" />/
        </motion.div>/
        <nav className="hidden md:flex space-x-6">
          <motion.a
            href="#services"
            className="hover:text-purple-500 transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Services
          </motion.a>/
          <motion.a
            href="#reviews"
            className="hover:text-purple-500 transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Reviews
          </motion.a>/
          <motion.a
            href="#contact"
            className="hover:text-purple-500 transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Contact
          </motion.a>/
        </nav>/
        <div className="md:hidden">
          <button className="text-purple-700 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">/
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />/
            </svg>/
          </button>/
        </div>/
      </div>/
    </header>/
  )
}
export default Header;