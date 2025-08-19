import React from 'react'
import { motion } from 'framer-motion'
interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  content: string
  rating: number
  photoUrl: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Alice Johnson',
    role: 'CTO',
    company: 'Tech Innovations',
    content: 'Purple transformed our IT infrastructure with their cutting-edge solutions. Our efficiency has increased significantly!',
    rating: 5,
    photoUrl: '/images/testimonials/alice.jpg',/
  },
  {
    id: 2,
    name: 'Mark Smith',
    role: 'Product Manager',
    company: 'Smart Devices Co.',
    content: 'Working with Purple has streamlined our product development process. Their technology is top-notch!',
    rating: 4,
    photoUrl: '/images/testimonials/mark.jpg',/
  },
  {
    id: 3,
    name: 'Emily Davis',
    role: 'Operations Director',
    company: 'Future Tech',
    content: 'Thanks to Purple's bespoke solutions, we've reduced operational costs while enhancing service delivery!',
    rating: 5,
    photoUrl: '/images/testimonials/emily.jpg',/
  },
]
const TestimonialsSection: React.FC = () => {
  return (
    <section className="bg-white py-8">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-purple-600 mb-6">What Our Clients Say About Purple</h2>/
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map(testimonial => (
            <motion.div
              key={testimonial.id}
              className="bg-gray-100 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={testimonial.photoUrl}
                alt={${testimonial.name}'s photo}
                className="w-16 h-16 rounded-full mx-auto mb-4"
              />/
              <h3 className="text-xl font-semibold text-purple-600">{testimonial.name}</h3>/
              <p className="text-gray-600 mb-2">{testimonial.role} at {testimonial.company}</p>/
              <p className="text-gray-800 italic mb-4">"{testimonial.content}"</p>/
              <div className="flex justify-center">
                {[...Array(testimonial.rating)].map((_, index) => (
                  <svg key={index} className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.121-6.53L.243 7.91l6.757-.98L10 1l2.999 5.93 6.757.98-4.999 3.65 1.121 6.53z" />/
                  </svg>/
                ))}
              </div>/
            </motion.div>/
          ))}
        </div>/
      </div>/
    </section>/
  )
}
export default TestimonialsSection;'