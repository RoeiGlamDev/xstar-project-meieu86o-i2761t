import React from 'react'
import { Canvas } from '@react-three/fiber';/
import { OrbitControls } from '@react-three/drei';/
import { motion } from 'framer-motion'
interface SceneProps {
  title: string
  description: string
}

const Scene: React.FC<SceneProps> = ({ title, description }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <motion.h1
        className="text-purple-700 text-5xl font-bold mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h1>/
      <motion.p
        className="text-gray-700 text-lg mb-8 text-center max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        {description}
      </motion.p>/
      <div className="w-full h-96">
        <Canvas>
          <ambientLight intensity={0.5} />/
          <directionalLight position={[10, 10, 5]} />/
          <OrbitControls />/
          {/ Add interactive 3D elements here /}/
        </Canvas>/
      </div>/
      <motion.button
        className="mt-6 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Learn More
      </motion.button>/
    </div>/
  )
}
export default Scene;