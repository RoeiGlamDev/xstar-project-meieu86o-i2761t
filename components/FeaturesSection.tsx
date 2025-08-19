import React from 'react'
import { motion } from 'framer-motion'
interface Feature {
  title: string
  description: string
  icon: JSX.Element
}

const features: Feature[] = [
  {
    title: 'Innovative Solutions',
    description: 'Purple leverages cutting-edge technology to deliver innovative solutions tailored to your needs.',
    icon: <svg / Your SVG icon here / />,/
  },
  {
    title: 'Seamless Integration',
    description: 'Our services integrate seamlessly with your existing systems, ensuring a smooth transition and minimal disruption.',
    icon: <svg / Your SVG icon here / />,/
  },
  {
    title: '24/7 Support',/
    description: 'Experience unparalleled customer support with our dedicated team available around the clock.',
    icon: <svg / Your SVG icon here / />,/
  },
  {
    title: 'Data Security',
    description: 'At Purple, your data security is our top priority. We implement robust measures to protect your information.',
    icon: <svg / Your SVG icon here / />,/
  },
]
const FeaturesSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-purple-600 mb-8">Purple Technology Services</h2>/
        <p className="text-gray-700 mb-10">
          Discover how Purple can transform your business with our innovative technology solutions.
        </p>/
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-purple-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-4">{feature.icon}</div>/
              <h3 className="text-xl font-semibold text-purple-600 mb-2">{feature.title}</h3>/
              <p className="text-gray-600">{feature.description}</p>/
            </motion.div>/
          ))}
        </div>/
      </div>/
    </section>/
  )
}
export default FeaturesSection;