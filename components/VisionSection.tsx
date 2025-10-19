'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'
import { Sparkles, Star, Eye } from 'lucide-react'

const VisionSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

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

  const quote = "My goal is to bring clarity where there is confusion, healing where there is pain, and divine alignment where there is disharmony. Through the ancient wisdom of Vedic astrology and the power of spiritual remedies, I help you connect with your true purpose and create lasting transformation in your life."

  return (
    <section className="section-padding bg-gradient-to-b from-deep-indigo via-midnight-blue/80 to-deep-indigo relative overflow-hidden min-h-screen flex items-center">
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

      {/* Floating Spiritual Icons */}
      <motion.div
        className="absolute top-20 left-20 opacity-10"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        <Sparkles size={60} className="text-spiritual-gold" />
      </motion.div>

      <motion.div
        className="absolute top-1/3 right-20 opacity-10"
        animate={{ rotate: -360 }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
      >
        <Eye size={50} className="text-spiritual-gold" />
      </motion.div>

      <motion.div
        className="absolute bottom-20 left-1/3 opacity-10"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <Star size={45} className="text-spiritual-gold" />
      </motion.div>

      {/* Subtle Ray Effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-spiritual-gold rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-spiritual-gold rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="max-w-5xl mx-auto text-center"
        >
          {/* Main Quote */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative"
          >
            <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-spiritual-gold/20">
              {/* Decorative Elements */}
              <div className="absolute top-6 left-6 w-12 h-12 bg-spiritual-gold/10 rounded-full" />
              <div className="absolute bottom-6 right-6 w-8 h-8 bg-spiritual-gold/5 rounded-full" />
              <div className="absolute top-1/2 left-6 w-2 h-2 bg-spiritual-gold/30 rounded-full" />
              <div className="absolute top-1/3 right-6 w-1 h-1 bg-spiritual-gold/20 rounded-full" />

              <motion.blockquote
                className="font-serif text-2xl md:text-3xl lg:text-4xl text-gradient-gold leading-relaxed mb-8"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 2, delay: 0.8 }}
              >
                "{quote}"
              </motion.blockquote>

              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 1, delay: 1.5 }}
                className="flex items-center justify-center space-x-4"
              >
                <div className="h-px bg-gradient-to-r from-transparent via-spiritual-gold to-transparent flex-1 max-w-32" />
                <cite className="font-semibold text-xl text-gradient-white">— Abhishek</cite>
                <div className="h-px bg-gradient-to-r from-transparent via-spiritual-gold to-transparent flex-1 max-w-32" />
              </motion.div>
            </div>
          </motion.div>

          {/* Vision Elements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="mt-16 grid md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: Eye,
                title: "Clarity",
                description: "Illuminating the path forward with divine wisdom and practical insights.",
              },
              {
                icon: Sparkles,
                title: "Healing",
                description: "Restoring balance and harmony through ancient remedies and spiritual practices.",
              },
              {
                icon: Star,
                title: "Alignment",
                description: "Connecting you with your true purpose and highest potential.",
              },
            ].map((vision, index) => (
              <motion.div
                key={vision.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 2 + index * 0.2 }}
                className="text-center"
              >
                <motion.div
                  className="w-16 h-16 bg-gradient-to-r from-spiritual-gold/20 to-spiritual-gold/30 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <vision.icon className="w-8 h-8 text-spiritual-gold" />
                </motion.div>
                <h3 className="font-serif text-xl font-bold text-gradient-white mb-2">
                  {vision.title}
                </h3>
                <p className="text-cream/80 text-sm leading-relaxed">
                  {vision.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 2.8 }}
            className="mt-16"
          >
            <motion.button
              className="btn-primary glow-gold text-lg px-12 py-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Begin Your Spiritual Journey
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default VisionSection
