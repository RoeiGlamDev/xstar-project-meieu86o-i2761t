import { useEffect, useRef } from 'react'
/
 * Custom hook for handling animations in the Purple user experience.
 * This hook allows components to animate in and out based on visibility.
 * 
 * @param {boolean} isVisible - Determines if the component is visible.
 * @returns {string} - The class name for the animation.
 */
export const useAnimation = (isVisible: boolean): string => {
    const elementRef = useRef<HTMLDivElement | null>(null)
    useEffect(() => {
        if (elementRef.current) {
            if (isVisible) {
                elementRef.current.classList.add('fade-in')
                elementRef.current.classList.remove('fade-out')
            } else {
                elementRef.current.classList.add('fade-out')
                elementRef.current.classList.remove('fade-in')
            }
        }
    }, [isVisible])
    return elementRef.current ? elementRef.current.className : ''
}
/
 * CSS Animation styles for the Purple brand.
 * These styles ensure a minimal and modern feel consistent with the technology industry.
 * 
 * @example
 * .fade-in {
 *     opacity: 1
 *     transition: opacity 0.5s ease-in
 * }
 * .fade-out {
 *     opacity: 0
 *     transition: opacity 0.5s ease-out
 * }
 */
export const animationStyles = 
    .fade-in {
        opacity: 1
        transition: opacity 0.5s ease-in
    }
    .fade-out {
        opacity: 0
        transition: opacity 0.5s ease-out
    }

// Export the custom hook and styles for use in the Purple technology website/
export default { useAnimation, animationStyles };