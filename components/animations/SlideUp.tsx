import React from 'react'
import { motion } from 'framer-motion'
interface SlideUpProps {
  children: React.ReactNode
}

const slideUpAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}
const SlideUp: React.FC<SlideUpProps> = ({ children }) => {
  return (
    <motion.div
      variants={slideUpAnimation}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5 }}
      className="bg-white text-purple-600 p-4 rounded-lg shadow-md"
    >
      {children}
    </motion.div>/
  )
}
export default SlideUp;