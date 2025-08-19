import React, { useState } from 'react'
import { motion } from 'framer-motion'
interface ContactFormData {
  name: string
  email: string
  message: string
  reason: string
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
    reason: 'General Inquiry',
  })
  const [errors, setErrors] = useState<Partial<ContactFormData>>({})
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }
  const validateForm = () => {
    const newErrors: Partial<ContactFormData> = {}
    if (!formData.name) newErrors.name = 'Name is required.'
    if (!formData.email) newErrors.email = 'Email is required.'
    if (!formData.message) newErrors.message = 'Message is required.'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      // Handle form submission logic here/
      console.log('Form submitted:', formData)
    }
  }
  return (
    <section className="bg-white py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-purple-600 text-3xl font-bold mb-6 text-center">Contact Purple</h2>/
        <motion.form
          className="bg-purple-100 p-6 rounded shadow-md"
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-4">
            <label className="block text-purple-600 mb-2" htmlFor="name">Name</label>/
            <input
              className={w-full p-2 border ${errors.name ? 'border-red-500' : 'border-purple-300'} rounded}
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />/
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}/
          </div>/
          <div className="mb-4">
            <label className="block text-purple-600 mb-2" htmlFor="email">Email</label>/
            <input
              className={w-full p-2 border ${errors.email ? 'border-red-500' : 'border-purple-300'} rounded}
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />/
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}/
          </div>/
          <div className="mb-4">
            <label className="block text-purple-600 mb-2" htmlFor="reason">Reason for Contact</label>/
            <select
              className="w-full p-2 border border-purple-300 rounded"
              id="reason"
              name="reason"
              value={formData.reason}
              onChange={handleChange}
            >
              <option value="General Inquiry">General Inquiry</option>/
              <option value="Technical Support">Technical Support</option>/
              <option value="Partnership Opportunities">Partnership Opportunities</option>/
            </select>/
          </div>/
          <div className="mb-4">
            <label className="block text-purple-600 mb-2" htmlFor="message">Message</label>/
            <textarea
              className={w-full p-2 border ${errors.message ? 'border-red-500' : 'border-purple-300'} rounded}
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />/
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}/
          </div>/
          <button
            type="submit"
            className="w-full bg-purple-600 text-white p-2 rounded hover:bg-purple-700 transition duration-200"
          >
            Submit
          </button>/
        </motion.form>/
        <div className="mt-8 text-center">
          <h3 className="text-purple-600 font-bold">Business Information</h3>/
          <p className="text-gray-600">Purple Technology Solutions</p>/
          <p className="text-gray-600">123 Tech Lane</p>/
          <p className="text-gray-600">Silicon Valley, CA 90210</p>/
          <p className="text-gray-600">Business Hours: Mon-Fri 9am - 5pm</p>/
        </div>/
      </div>/
    </section>/
  )
}
export default ContactSection;