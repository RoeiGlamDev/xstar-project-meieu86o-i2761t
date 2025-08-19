import React from 'react'
import { motion } from 'framer-motion'
interface TeamMember {
  name: string
  role: string
  expertise: string
}

const team: TeamMember[] = [
  { name: 'Alice Johnson', role: 'CEO', expertise: 'Software Development' },
  { name: 'Brian Smith', role: 'CTO', expertise: 'Cybersecurity' },
  { name: 'Catherine Lee', role: 'CMO', expertise: 'Digital Marketing' },
]
const AboutSection: React.FC = () => {
  return (
    <section className="bg-white text-purple-600 p-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-6">About Purple</h2>/
        <p className="mb-4">
          At Purple, we are dedicated to revolutionizing the technology industry through innovative solutions. Our story began with a vision to simplify complex technological challenges, making them accessible to everyone. We believe that technology should empower people, not overwhelm them.
        </p>/
        <h3 className="text-2xl font-semibold mb-2">Our Mission</h3>/
        <p className="mb-4">
          Our mission at Purple is to harness cutting-edge technology to create user-friendly products that enhance productivity and streamline processes. We strive to lead with integrity, innovation, and a commitment to excellence, ensuring our clients receive the highest quality of service and support.
        </p>/
        <h3 className="text-2xl font-semibold mb-2">Meet Our Team</h3>/
        <ul className="space-y-4">
          {team.map((member, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="border-b border-purple-200 pb-2"
            >
              <h4 className="font-bold">{member.name}</h4>/
              <p className="text-purple-500">{member.role} - {member.expertise}</p>/
            </motion.li>/
          ))}
        </ul>/
        <h3 className="text-2xl font-semibold mt-6">Our Values</h3>/
        <p>
          At Purple, we value innovation, collaboration, and excellence. Our achievements reflect our dedication to pushing the boundaries of what is possible in technology, ensuring that we remain at the forefront of our industry.
        </p>/
      </motion.div>/
    </section>/
  )
}
export default AboutSection;