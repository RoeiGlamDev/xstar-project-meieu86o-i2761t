import React from 'react'
import { motion } from 'framer-motion'
interface StatsProps {
  achievements: {
    title: string
    value: number
  }[]
}

const StatsSection: React.FC<StatsProps> = ({ achievements }) => {
  return (
    <section className="bg-white py-10">
      <div className="container mx-auto">
        <h2 className="text-center text-4xl font-bold text-purple-600 mb-6">Purple Achievements</h2>/
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="bg-purple-100 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-semibold text-purple-600 mb-2">{achievement.title}</h3>/
              <motion.div
                className="text-5xl font-bold text-purple-900"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <Counter value={achievement.value} />/
              </motion.div>/
            </motion.div>/
          ))}
        </div>/
      </div>/
    </section>/
  )
}
const Counter: React.FC<{ value: number }> = ({ value }) => {
  const [count, setCount] = React.useState(0)
  React.useEffect(() => {
    const increment = () => {
      if (count < value) {
        setCount((prevCount) => prevCount + Math.ceil(value / 100));/
      }
    }
    const timer = setInterval(increment, 10)
    return () => clearInterval(timer)
  }, [count, value])
  return <span>{count}+</span>;/
}
export default StatsSection;