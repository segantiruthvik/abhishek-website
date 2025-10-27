'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Star, Sparkles, Eye } from 'lucide-react'

const HeroSection = () => {
  const [stars, setStars] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([])
  const [isViewPlanVisible, setIsViewPlanVisible] = useState(false)

  useEffect(() => {
    // Generate random stars for the starfield
    const generateStars = () => {
      const newStars = Array.from({ length: 100 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 20,
      }))
      setStars(newStars)
    }
    generateStars()

    // Handle scroll for View Plan button visibility - same as floating buttons
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      // Show button after scrolling 100px
      setIsViewPlanVisible(scrollPosition > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-deep-indigo via-midnight-blue to-deep-indigo">
      {/* View Plan Button - Top Right */}
      {isViewPlanVisible && (
        <motion.button
          className="fixed top-6 right-6 z-50 bg-spiritual-gold hover:bg-yellow-400 text-deep-indigo px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-semibold text-sm"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
        >
               View Plans
        </motion.button>
      )}

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
              opacity: [0.3, 1, 0.3],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3,
              delay: star.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Planets and Celestial Bodies */}
      <div className="absolute inset-0 opacity-25">
        {/* Sun with Spikes */}
        <motion.div
          className="absolute"
          style={{ left: '15%', top: '20%' }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.7, 0.4],
            rotate: 360,
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="relative">
            {/* Sun rays */}
            <div className="absolute inset-0">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-4 bg-yellow-400 origin-bottom"
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: `translate(-50%, -100%) rotate(${i * 30}deg)`,
                  }}
                />
              ))}
            </div>
            {/* Sun core */}
            <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full relative z-10 shadow-lg shadow-yellow-400/50"></div>
          </div>
        </motion.div>
        
        {/* Moon with Craters */}
        <motion.div
          className="absolute"
          style={{ left: '80%', top: '15%' }}
          animate={{
            y: [0, -10, 0],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-6 h-6 bg-gray-300 rounded-full relative shadow-lg">
            {/* Moon craters */}
            <div className="absolute w-1 h-1 bg-gray-400 rounded-full" style={{ left: '20%', top: '30%' }}></div>
            <div className="absolute w-0.5 h-0.5 bg-gray-400 rounded-full" style={{ left: '60%', top: '50%' }}></div>
            <div className="absolute w-1.5 h-1.5 bg-gray-400 rounded-full" style={{ left: '40%', top: '20%' }}></div>
          </div>
        </motion.div>
        
        {/* Earth with Continents */}
        <motion.div
          className="absolute"
          style={{ left: '70%', top: '60%' }}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="w-7 h-7 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full relative shadow-lg">
            {/* Continents */}
            <div className="absolute w-2 h-1 bg-green-600 rounded-full" style={{ left: '30%', top: '40%', transform: 'rotate(-20deg)' }}></div>
            <div className="absolute w-1.5 h-0.8 bg-green-600 rounded-full" style={{ left: '60%', top: '20%', transform: 'rotate(30deg)' }}></div>
            <div className="absolute w-1 h-0.6 bg-green-600 rounded-full" style={{ left: '20%', top: '70%', transform: 'rotate(45deg)' }}></div>
          </div>
        </motion.div>
        
        {/* Saturn with Detailed Rings */}
        <motion.div
          className="absolute"
          style={{ left: '25%', top: '70%' }}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="relative">
            {/* Outer ring */}
            <div className="absolute w-12 h-12 border-2 border-yellow-200 rounded-full" style={{ left: '-50%', top: '-50%', transform: 'rotateX(60deg)' }}></div>
            {/* Middle ring */}
            <div className="absolute w-10 h-10 border-2 border-yellow-300 rounded-full" style={{ left: '-40%', top: '-40%', transform: 'rotateX(60deg)' }}></div>
            {/* Inner ring */}
            <div className="absolute w-8 h-8 border-2 border-yellow-400 rounded-full" style={{ left: '-30%', top: '-30%', transform: 'rotateX(60deg)' }}></div>
            {/* Saturn body */}
            <div className="w-5 h-5 bg-gradient-to-r from-yellow-300 to-orange-300 rounded-full relative z-10 shadow-lg"></div>
          </div>
        </motion.div>
      </div>

      {/* Constellations */}
      <div className="absolute inset-0 opacity-15">
        {/* Big Dipper */}
        <svg className="absolute" style={{ left: '10%', top: '10%', width: '100px', height: '60px' }}>
          <motion.path
            d="M10,20 L20,10 L30,15 L40,5 L50,10 L60,8 L70,12"
            stroke="#d4af37"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
          />
        </svg>
        
        {/* Orion */}
        <svg className="absolute" style={{ left: '75%', top: '25%', width: '80px', height: '80px' }}>
          <motion.path
            d="M20,10 L40,10 M30,10 L30,50 M20,50 L40,50"
            stroke="#d4af37"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", delay: 1 }}
          />
        </svg>
      </div>

      {/* Floating Spiritual Icons */}
      <motion.div
        className="absolute top-20 left-20 opacity-20"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <Sparkles size={40} className="text-spiritual-gold" />
      </motion.div>

      <motion.div
        className="absolute bottom-20 right-20 opacity-20"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        <Star size={35} className="text-spiritual-gold" />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-8"
        >
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-gradient-gold mb-4">
            Abhishek Chakinala
          </h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="h-1 w-32 bg-gradient-to-r from-transparent via-spiritual-gold to-transparent mx-auto mb-8"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mb-8"
        >
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-medium text-gradient-white mb-4">
            Spiritual Guide & Astrologer
          </h2>
          <p className="font-serif text-xl md:text-2xl font-bold text-gradient-white max-w-2xl mx-auto leading-relaxed">
            Precise Predictions | Deep Intuition | Real Transformation
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-4 font-serif text-sm md:text-base font-bold text-gradient-white">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              Accurate
            </motion.span>
            <span className="text-spiritual-gold">•</span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.8 }}
            >
              Insightful
            </motion.span>
            <span className="text-spiritual-gold">•</span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 2.0 }}
            >
              Spiritually Grounded
            </motion.span>
            <span className="text-spiritual-gold">•</span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 2.2 }}
            >
              Result-Oriented
            </motion.span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 2.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            className="btn-primary glow-gold relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="relative z-10">Book a Session</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-spiritual-gold opacity-0 group-hover:opacity-20"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.6 }}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
