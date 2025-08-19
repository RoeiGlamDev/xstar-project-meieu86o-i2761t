import React from 'react'
import { motion } from 'framer-motion'
interface TeamMember {
  name: string
  role: string
  image: string
}

const teamMembers: TeamMember[] = [
  {
    name: 'Alice Johnson',
    role: 'CEO & Founder',
    image: '/images/alice.jpg',/
  },
  {
    name: 'Bob Smith',
    role: 'CTO',
    image: '/images/bob.jpg',/
  },
  {
    name: 'Charlie Brown',
    role: 'Lead Developer',
    image: '/images/charlie.jpg',/
  },
]
const AboutPage: React.FC = () => {
  return (
    <div className="bg-white text-purple-600 min-h-screen p-8">
      <motion.h1
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Purple
      </motion.h1>/
      <motion.p
        className="text-lg mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        At Purple, we are at the forefront of technology innovation. Our mission is to provide cutting-edge solutions that empower businesses to thrive in a digital-first world. With a focus on minimal design and user experience, we create products that are not only functional but also aesthetically pleasing.
      </motion.p>/
      
      <motion.h2
        className="text-3xl font-semibold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Our History
      </motion.h2>/
      <motion.p
        className="text-lg mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        Founded in 2020, Purple has grown from a small startup to a leader in technology solutions. Our journey has been driven by innovation, a commitment to quality, and a passion for transforming ideas into reality.
      </motion.p>/

      <motion.h2
        className="text-3xl font-semibold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        Our Values
      </motion.h2>/
      <motion.ul
        className="list-disc list-inside text-lg mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <li>Innovation: We embrace change and strive for continuous improvement.</li>/
        <li>Integrity: We conduct our business with the highest ethical standards.</li>/
        <li>Collaboration: We believe in the power of teamwork and shared success.</li>/
        <li>User-Centric: Our focus is always on creating value for our customers.</li>/
      </motion.ul>/

      <motion.h2
        className="text-3xl font-semibold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      >
        Meet Our Team
      </motion.h2>/
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="bg-purple-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.4 + index * 0.2 }}
          >
            <img src={member.image} alt={member.name} className="rounded-full mb-4" />/
            <h3 className="text-xl font-bold">{member.name}</h3>/
            <p className="text-lg text-purple-600">{member.role}</p>/
          </motion.div>/
        ))}
      </div>/
    </div>/
  )
}
export default AboutPage;