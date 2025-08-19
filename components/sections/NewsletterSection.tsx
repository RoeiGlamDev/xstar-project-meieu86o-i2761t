import React, { useState } from 'react'
import { motion } from 'framer-motion'
interface NewsletterSectionProps {
  title?: string
  description?: string
}

const NewsletterSection: React.FC<NewsletterSectionProps> = ({
  title = "Stay Updated with Purple",
  description = "Subscribe to our newsletter for the latest technology insights and updates from Purple."
}) => {
  const [email, setEmail] = useState<string>('')
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [successMessage, setSuccessMessage] = useState<string>('')
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate an API call/
    setTimeout(() => {
      setSuccessMessage("Thank you for subscribing to Purple!")
      setEmail('')
      setIsSubmitting(false)
    }, 1000)
  }
  return (
    <section className="bg-white py-10 px-5 md:px-20">
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, translateY: -20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-purple-600">{title}</h2>/
        <p className="mt-2 text-gray-600">{description}</p>/
      </motion.div>/
      
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Enter your email"
          className="border border-purple-300 rounded-lg p-3 w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-purple-600 transition duration-200"/
        />/
        <button
          type="submit"
          disabled={isSubmitting}
          className={mt-4 bg-purple-600 text-white rounded-lg py-2 px-6 transition duration-200 
                      ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-purple-700'}}
        >
          {isSubmitting ? 'Subscribing...' : 'Subscribe'}
        </button>/
        {successMessage && <p className="mt-3 text-green-600">{successMessage}</p>}/
      </form>/
    </section>/
  )
}
export default NewsletterSection;