'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const VisionSection = () => {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; delay: number }>>([])

  useEffect(() => {
    // Generate floating particles
    const generateParticles = () => {
      const newParticles = Array.from({ length: 30 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        delay: Math.random() * 5,
      }))
      setParticles(newParticles)
    }
    generateParticles()
  }, [])

  return (
    <section className="hidden md:block py-20 px-8 lg:px-16 bg-gradient-to-b from-deep-indigo via-midnight-blue/80 to-deep-indigo relative overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute bg-spiritual-gold rounded-full opacity-20"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.1, 0.6, 0.1],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Planets and Celestial Bodies */}
      <div className="absolute inset-0 opacity-20">
        {/* Mercury with Surface Features */}
        <motion.div
          className="absolute"
          style={{ left: '30%', top: '40%' }}
          animate={{
            y: [0, -8, 0],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-3 h-3 bg-gradient-to-r from-gray-400 to-gray-500 rounded-full relative shadow-lg">
            {/* Mercury's craters */}
            <div className="absolute w-0.3 h-0.3 bg-gray-600 rounded-full" style={{ left: '25%', top: '30%' }}></div>
            <div className="absolute w-0.2 h-0.2 bg-gray-600 rounded-full" style={{ left: '70%', top: '60%' }}></div>
            <div className="absolute w-0.4 h-0.4 bg-gray-600 rounded-full" style={{ left: '50%', top: '20%' }}></div>
          </div>
        </motion.div>
        
        {/* Neptune with Dark Spot */}
        <motion.div
          className="absolute"
          style={{ left: '85%', top: '30%' }}
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full relative shadow-lg">
            {/* Neptune's Great Dark Spot */}
            <div className="absolute w-1.5 h-1 bg-blue-800 rounded-full" style={{ left: '30%', top: '40%' }}></div>
            {/* Atmospheric bands */}
            <div className="absolute w-full h-0.3 bg-blue-500 top-1/4 opacity-60"></div>
            <div className="absolute w-full h-0.3 bg-blue-500 top-3/4 opacity-60"></div>
          </div>
        </motion.div>
      </div>

      {/* Constellations */}
      <div className="absolute inset-0 opacity-10">
        {/* Ursa Major */}
        <svg className="absolute" style={{ left: '5%', top: '70%', width: '70px', height: '50px' }}>
          <motion.path
            d="M10,40 L20,30 L30,35 L40,25 L50,30 L60,28 L70,32"
            stroke="#d4af37"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
          />
        </svg>
      </div>



      {/* Subtle Ray Effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-spiritual-gold rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-spiritual-gold rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container-custom relative z-10">
      </div>
    </section>
  )
}

export default VisionSection
