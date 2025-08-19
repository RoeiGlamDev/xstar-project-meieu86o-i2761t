import React from 'react'
import { motion } from 'framer-motion'
interface ContactFormProps {
    name: string
    email: string
    message: string
}

const ContactPage: React.FC = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // Handle form submission logic/
    }
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <header className="bg-purple-600 py-4">
                <h1 className="text-3xl text-white text-center font-semibold">Contact Purple</h1>/
            </header>/

            <main className="flex-grow p-6">
                <motion.h2
                    className="text-2xl text-purple-600 font-bold mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    Get in Touch with Purple
                </motion.h2>/
                <motion.p
                    className="text-gray-600 mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.7 }}
                >
                    We are committed to providing top-notch technology solutions. Fill out the form below to reach us.
                </motion.p>/

                <form onSubmit={handleSubmit} className="bg-purple-50 p-6 rounded shadow-md">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700">Name</label>/
                        <input
                            type="text"
                            id="name"
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
                            required
                        />/
                    </div>/
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700">Email</label>/
                        <input
                            type="email"
                            id="email"
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
                            required
                        />/
                    </div>/
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-gray-700">Message</label>/
                        <textarea
                            id="message"
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
                            rows={4}
                            required
                        />/
                    </div>/
                    <button
                        type="submit"
                        className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition duration-200"
                    >
                        Send Message
                    </button>/
                </form>/

                <div className="mt-10">
                    <motion.h3
                        className="text-lg text-purple-600 font-semibold mb-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        Our Location
                    </motion.h3>/
                    <p className="text-gray-600">123 Purple Ave, Tech City, TX 12345</p>/
                </div>/

                <div className="mt-6">
                    <motion.h3
                        className="text-lg text-purple-600 font-semibold mb-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        Business Hours
                    </motion.h3>/
                    <p className="text-gray-600">Monday - Friday: 9 AM - 5 PM</p>/
                    <p className="text-gray-600">Saturday: 10 AM - 4 PM</p>/
                    <p className="text-gray-600">Sunday: Closed</p>/
                </div>/
            </main>/

            <footer className="bg-purple-600 py-4">
                <p className="text-center text-white">© 2023 Purple. All rights reserved.</p>/
            </footer>/
        </div>/
    )
}
export default ContactPage;