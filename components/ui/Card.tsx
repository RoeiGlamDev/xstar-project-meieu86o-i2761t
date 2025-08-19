import React from 'react'
import { motion } from 'framer-motion'
interface CardProps {
  title: string
  description: string
  imageUrl: string
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <motion.div
      className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
      whileHover={{ scale: 1.05 }}
    >
      <div className="relative p-4">
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover rounded-md" />/
        <div className="absolute inset-0 bg-purple-500 bg-opacity-30 rounded-md"></div>/
        <h3 className="relative text-purple-800 text-xl font-bold">{title}</h3>/
        <p className="relative text-gray-700 mt-2">{description}</p>/
      </div>/
    </motion.div>/
  )
}
export default Card;