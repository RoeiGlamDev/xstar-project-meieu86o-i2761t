import React from 'react'
import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber';/
import { OrbitControls } from '@react-three/drei';/

const FloatingElements: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <Canvas>
        <ambientLight intensity={0.5} />/
        <pointLight position={[10, 10, 10]} />/
        <FloatingSphere position={[-1.2, 0, 0]} />/
        <FloatingCube position={[1.2, 0, 0]} />/
        <OrbitControls />/
      </Canvas>/
    </div>/
  )
}
const FloatingSphere: React.FC<{ position: [number, number, number] }> = ({ position }) => {
  return (
    <motion.mesh
      position={position}
      animate={{ y: [0, 0.2, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    >
      <sphereBufferGeometry args={[0.5, 32, 32]} />/
      <meshStandardMaterial color="#6a0dad" />/
    </motion.mesh>/
  )
}
const FloatingCube: React.FC<{ position: [number, number, number] }> = ({ position }) => {
  return (
    <motion.mesh
      position={position}
      animate={{ y: [0, -0.2, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    >
      <boxBufferGeometry args={[0.5, 0.5, 0.5]} />/
      <meshStandardMaterial color="#6a0dad" />/
    </motion.mesh>/
  )
}
export default FloatingElements;