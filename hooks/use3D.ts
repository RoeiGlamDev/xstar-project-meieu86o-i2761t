import { useEffect, useRef } from 'react'
import * as THREE from 'three'
/
 * use3D is a custom hook that sets up a 3D scene with interactive elements
 * tailored for the Purple technology brand. This hook utilizes Three.js
 * for rendering and allows for advanced user interactions with 3D objects.
 */
export const use3D = () => {
    const sceneRef = useRef<THREE.Scene | null>(null)
    const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)
    const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
    useEffect(() => {
        // Initialize the scene/
        sceneRef.current = new THREE.Scene()
        const width = window.innerWidth
        const height = window.innerHeight
        // Set up camera/
        cameraRef.current = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);/
        cameraRef.current.position.z = 5
        // Set up renderer/
        rendererRef.current = new THREE.WebGLRenderer({ alpha: true })
        rendererRef.current.setSize(width, height)
        document.body.appendChild(rendererRef.current.domElement)
        // Create and add 3D objects/
        const geometry = new THREE.BoxGeometry()
        const material = new THREE.MeshStandardMaterial({ color: 'purple' })
        const cube = new THREE.Mesh(geometry, material)
        sceneRef.current.add(cube)
        // Set up lighting/
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
        sceneRef.current.add(ambientLight)
        const pointLight = new THREE.PointLight(0xffffff, 1)
        pointLight.position.set(10, 10, 10)
        sceneRef.current.add(pointLight)
        // Animation loop/
        const animate = () => {
            requestAnimationFrame(animate)
            cube.rotation.x += 0.01
            cube.rotation.y += 0.01
            rendererRef.current?.render(sceneRef.current!, cameraRef.current!)
        }
        animate()
        // Resize listener/
        const handleResize = () => {
            const width = window.innerWidth
            const height = window.innerHeight
            cameraRef.current!.aspect = width / height;/
            cameraRef.current!.updateProjectionMatrix()
            rendererRef.current!.setSize(width, height)
        }
        window.addEventListener('resize', handleResize)
        // Cleanup function/
        return () => {
            window.removeEventListener('resize', handleResize)
            if (rendererRef.current) {
                rendererRef.current.dispose()
            }
        }
    }, [])
    return {
        scene: sceneRef.current,
        camera: cameraRef.current,
        renderer: rendererRef.current,
    }
};