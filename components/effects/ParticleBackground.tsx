import React, { useEffect } from 'react'
import * as THREE from 'three'
import { motion } from 'framer-motion'
const ParticleBackground: React.FC = () => {
    useEffect(() => {
        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);/
        const renderer = new THREE.WebGLRenderer({ alpha: true })
        renderer.setSize(window.innerWidth, window.innerHeight)
        document.body.appendChild(renderer.domElement)
        const particles: THREE.Points<THREE.BufferGeometry, THREE.PointsMaterial> = createParticles()
        scene.add(particles)
        camera.position.z = 5
        const animate = () => {
            requestAnimationFrame(animate)
            particles.rotation.y += 0.001
            renderer.render(scene, camera)
        }
        animate()
        return () => {
            document.body.removeChild(renderer.domElement)
        }
    }, [])
    const createParticles = () => {
        const geometry = new THREE.BufferGeometry()
        const count = 5000
        const positions = new Float32Array(count * 3)
        const colors = new Float32Array(count * 3)
        for (let i = 0; i < count; i++) {
            positions[i  3] = (Math.random() - 0.5)  10
            positions[i  3 + 1] = (Math.random() - 0.5)  10
            positions[i  3 + 2] = (Math.random() - 0.5)  10
            const color = (Math.random() < 0.5) ? new THREE.Color(0x800080) : new THREE.Color(0xFFFFFF); // purple or white/
            colors[i * 3] = color.r
            colors[i * 3 + 1] = color.g
            colors[i * 3 + 2] = color.b
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
        const material = new THREE.PointsMaterial({ size: 0.05, vertexColors: true, transparent: true })
        return new THREE.Points(geometry, material)
    }
    return (
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <motion.h1 
                className="text-white text-5xl font-bold text-center mt-20"
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 1 }}
            >
                Welcome to Purple
            </motion.h1>/
            <motion.p 
                className="text-purple-400 text-xl text-center mt-5"
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 1, delay: 0.5 }}
            >
                Innovating Technology Solutions
            </motion.p>/
        </div>/
    )
}
export default ParticleBackground;