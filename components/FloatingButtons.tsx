'use client'

import { motion } from 'framer-motion'
import { MessageCircle, Gift } from 'lucide-react'
import { useEffect, useState } from 'react'

const FloatingButtons = () => {
  const [isVisible, setIsVisible] = useState(false)
  const freeConsultationMessage = "Hi Abhishek, I visited your website and I want to have a free 15 min horoscope consultation."

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      // Show buttons after scrolling 100px
      setIsVisible(scrollPosition > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <>
      {/* WhatsApp Button - Bottom Right */}
      <motion.a
        href={`https://wa.me/919966907000?text=${encodeURIComponent('Hi Abhishek! I want to contact you for consultation.')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <MessageCircle className="w-6 h-6" />
      </motion.a>

      {/* Free Consultation Button - Bottom Left */}
      <motion.a
        href={`https://wa.me/919966907000?text=${encodeURIComponent(freeConsultationMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-50 bg-spiritual-gold hover:bg-yellow-400 text-deep-indigo px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Gift className="w-5 h-5" />
        <span className="text-sm font-medium">Book Free Session</span>
      </motion.a>
    </>
  )
}

export default FloatingButtons