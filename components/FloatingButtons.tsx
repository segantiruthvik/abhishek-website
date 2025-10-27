'use client'

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { useEffect, useState } from 'react'

const FloatingButtons = () => {
  const [isVisible, setIsVisible] = useState(false)

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
      {/* WhatsApp Quick Chat Button - Bottom Right */}
      <motion.a
        href={`https://wa.me/919966907000?text=${encodeURIComponent(`Namaste Abhishek! 🙏

I visited your website and I am interested in your astrological services.

📞 *Contact Request:*
• Purpose: Consultation inquiry
• Source: Website visit

Please let me know the best way to connect with you for guidance.

Thank you for your time.`)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <MessageCircle className="w-5 h-5" />
        <span className="text-sm font-semibold">Quick Chat</span>
      </motion.a>
    </>
  )
}

export default FloatingButtons