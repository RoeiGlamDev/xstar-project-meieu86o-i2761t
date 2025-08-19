import React from 'react'
import { motion } from 'framer-motion'
const HeroSection = () => (
  <section className="flex flex-col items-center justify-center min-h-screen bg-white text-purple-600">
    <motion.h1
      className="text-5xl font-bold mb-4"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      Welcome to Purple
    </motion.h1>/
    <motion.p
      className="text-xl mb-8"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      Embrace the future of technology with our innovative solutions.
    </motion.p>/
    <motion.button
      className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-500 transition duration-300"
      initial={{ scale: 0.9 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      Get Started
    </motion.button>/
  </section>/
)
const FeaturesSection = () => (
  <section className="py-20 bg-purple-100">
    <div className="max-w-6xl mx-auto text-center">
      <motion.h2
        className="text-4xl font-bold text-purple-600 mb-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Features
      </motion.h2>/
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <motion.div
          className="bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition duration-300"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-semibold text-purple-600">Innovative Solutions</h3>/
          <p className="mt-2">Cutting-edge technology tailored to your needs.</p>/
        </motion.div>/
        <motion.div
          className="bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition duration-300"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold text-purple-600">Reliable Support</h3>/
          <p className="mt-2">24/7 customer service to assist you anytime.</p>/
        </motion.div>/
        <motion.div
          className="bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition duration-300"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-xl font-semibold text-purple-600">User-Centric Design</h3>/
          <p className="mt-2">An intuitive interface that enhances user experience.</p>/
        </motion.div>/
      </div>/
    </div>/
  </section>/
)
const ReviewsSection = () => (
  <section className="py-20">
    <div className="max-w-6xl mx-auto text-center">
      <motion.h2
        className="text-4xl font-bold text-purple-600 mb-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        What Our Customers Say
      </motion.h2>/
      <div className="flex flex-col md:flex-row justify-around">
        <motion.div
          className="bg-purple-100 p-6 rounded-lg mb-4 md:mb-0 w-full md:w-1/3 shadow-lg"/
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-lg italic">"Purple has transformed our operations with their technology."</p>/
          <h4 className="mt-2 font-semibold text-purple-600">- Alex Johnson</h4>/
        </motion.div>/
        <motion.div
          className="bg-purple-100 p-6 rounded-lg mb-4 md:mb-0 w-full md:w-1/3 shadow-lg"/
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg italic">"Exceptional service and support from the Purple team!"</p>/
          <h4 className="mt-2 font-semibold text-purple-600">- Sarah Williams</h4>/
        </motion.div>/
        <motion.div
          className="bg-purple-100 p-6 rounded-lg w-full md:w-1/3 shadow-lg"/
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-lg italic">"Highly recommend Purple for any tech needs!"</p>/
          <h4 className="mt-2 font-semibold text-purple-600">- Michael Smith</h4>/
        </motion.div>/
      </div>/
    </div>/
  </section>/
)
const PurpleHomepage: React.FC = () => {
  return (
    <div className="font-sans">
      <HeroSection />/
      <FeaturesSection />/
      <ReviewsSection />/
    </div>/
  )
}
export default PurpleHomepage;