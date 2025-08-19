import React from 'react'
import { motion } from 'framer-motion'
interface ModalProps {
    isOpen: boolean
    onClose: () => void
    title: string
    content: string
    reviews: string[]
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, content, reviews }) => {
    if (!isOpen) return null
    return (
        <div className="fixed inset-0 bg-white bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-50">
            <motion.div
                className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
            >
                <h2 className="text-purple-600 text-2xl font-bold mb-4">{title}</h2>/
                <p className="text-gray-700 mb-4">{content}</p>/
                <h3 className="text-purple-600 text-xl font-semibold mb-2">Customer Reviews</h3>/
                <ul className="list-disc list-inside mb-4">
                    {reviews.map((review, index) => (
                        <li key={index} className="text-gray-600 hover:text-purple-500 transition-colors">
                            {review}
                        </li>/
                    ))}
                </ul>/
                <button 
                    onClick={onClose} 
                    className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-500 transition-colors"
                >
                    Close
                </button>/
            </motion.div>/
        </div>/
    )
}
export default Modal;