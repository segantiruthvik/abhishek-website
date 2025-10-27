'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { MessageCircle, Star, Sparkles } from 'lucide-react'

const Footer = () => {
  const [stars, setStars] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([])

  useEffect(() => {
    // Generate twinkling stars
    const generateStars = () => {
      const newStars = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 10,
      }))
      setStars(newStars)
    }
    generateStars()
  }, [])

  const socialLinks = [
    {
      icon: MessageCircle,
      href: "https://wa.me/919966907000",
      label: "WhatsApp",
      color: "hover:text-green-500",
    },
  ]

  return (
    <footer className="hidden md:block relative bg-gradient-to-b from-deep-indigo via-midnight-blue to-deep-indigo overflow-hidden">
      {/* Animated Starfield Background */}
      <div className="absolute inset-0 opacity-30">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute w-1 h-1 bg-spiritual-gold rounded-full"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              delay: star.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Planets and Celestial Bodies */}
      <div className="absolute inset-0 opacity-20">
        {/* Jupiter with Great Red Spot */}
        <motion.div
          className="absolute"
          style={{ left: '20%', top: '30%' }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-6 h-6 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full relative shadow-lg">
            {/* Jupiter's bands */}
            <div className="absolute w-full h-0.5 bg-orange-300 top-1/3"></div>
            <div className="absolute w-full h-0.5 bg-orange-300 top-2/3"></div>
            {/* Great Red Spot */}
            <div className="absolute w-1.5 h-1 bg-red-500 rounded-full" style={{ left: '60%', top: '40%' }}></div>
          </div>
        </motion.div>
        
        {/* Mars with Polar Ice Cap */}
        <motion.div
          className="absolute"
          style={{ left: '60%', top: '40%' }}
          animate={{
            y: [0, -5, 0],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-4 h-4 bg-gradient-to-r from-red-400 to-red-600 rounded-full relative shadow-lg">
            {/* Polar ice cap */}
            <div className="absolute w-3 h-0.5 bg-white rounded-full top-0"></div>
            {/* Surface features */}
            <div className="absolute w-0.5 h-0.5 bg-red-600 rounded-full" style={{ left: '30%', top: '60%' }}></div>
            <div className="absolute w-0.3 h-0.3 bg-red-600 rounded-full" style={{ left: '70%', top: '40%' }}></div>
          </div>
        </motion.div>
        
        {/* Venus with Atmospheric Glow */}
        <motion.div
          className="absolute"
          style={{ left: '80%', top: '60%' }}
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="relative">
            {/* Atmospheric glow */}
            <div className="absolute w-7 h-7 bg-yellow-100 rounded-full opacity-30" style={{ left: '-12.5%', top: '-12.5%' }}></div>
            {/* Venus body */}
            <div className="w-5 h-5 bg-gradient-to-r from-yellow-200 to-yellow-300 rounded-full relative z-10 shadow-lg"></div>
          </div>
        </motion.div>
      </div>

      {/* Constellations */}
      <div className="absolute inset-0 opacity-10">
        {/* Cassiopeia */}
        <svg className="absolute" style={{ left: '15%', top: '60%', width: '60px', height: '40px' }}>
          <motion.path
            d="M10,20 L20,10 L30,20 L40,10 L50,20"
            stroke="#d4af37"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
          />
        </svg>
        
        {/* Leo */}
        <svg className="absolute" style={{ left: '70%', top: '20%', width: '50px', height: '50px' }}>
          <motion.path
            d="M10,25 L20,15 L30,20 L35,35 L25,40 L15,35"
            stroke="#d4af37"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 6, repeat: Infinity, repeatType: "reverse", delay: 2 }}
          />
        </svg>
      </div>

      {/* Floating Spiritual Elements */}
      <motion.div
        className="absolute top-10 left-20 opacity-10"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        <Sparkles size={40} className="text-spiritual-gold" />
      </motion.div>

      <motion.div
        className="absolute bottom-20 right-20 opacity-10"
        animate={{ rotate: -360 }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
      >
        <Star size={35} className="text-spiritual-gold" />
      </motion.div>

      <div className="relative z-10">
      </div>
    </footer>
  )
}

export default Footer
