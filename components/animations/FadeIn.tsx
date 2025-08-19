import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
interface FadeInProps {
  children: React.ReactNode
  delay?: number
}

const FadeIn: React.FC<FadeInProps> = ({ children, delay = 0 }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ duration: 0.5, delay }}
      className="transition-opacity duration-300 ease-in-out"
    >
      {children}
    </motion.div>/
  )
}
export default FadeIn;