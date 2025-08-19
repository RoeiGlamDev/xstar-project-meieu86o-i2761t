import React, { useState } from 'react'
import { motion } from 'framer-motion'
interface InputProps {
  label: string
  type?: string
  placeholder?: string
  required?: boolean
  value: string
  onChange: (value: string) => void
}

const Input: React.FC<InputProps> = ({ label, type = 'text', placeholder, required = false, value, onChange }) => {
  const [isFocused, setIsFocused] = useState(false)
  const [error, setError] = useState('')
  const handleBlur = () => {
    if (required && !value) {
      setError(${label} is required)
    } else {
      setError('')
    }
  }
  return (
    <div className="flex flex-col mb-4">
      <label className={text-purple-600 mb-2 transition-all ${isFocused ? 'text-purple-800' : ''}}>
        {label}
      </label>/
      <motion.input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => {
          setIsFocused(false)
          handleBlur()
        }}
        className={border-2 rounded-md p-2 transition-all focus:border-purple-600 focus:outline-none ${error ? 'border-red-500' : 'border-gray-300'} 
                    ${isFocused ? 'shadow-lg' : ''}}
      />/
      {error && <span className="text-red-500 text-sm mt-1">{error}</span>}/
    </div>/
  )
}
export default Input;