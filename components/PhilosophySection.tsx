'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState, useEffect, useRef } from 'react'
import { Target, Brain, Zap, Heart, Eye, Shield } from 'lucide-react'

const PhilosophySection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const autoScrollInterval = useRef<NodeJS.Timeout | null>(null)
  const touchStartX = useRef<number | null>(null)

  const principles = [
    {
      icon: Target,
      title: "Precise & Straight to the Point",
      description: "I provide clear, actionable insights without unnecessary complexity. Every reading focuses on what matters most for your growth and transformation.",
      color: "from-blue-400 to-blue-600",
    },
    {
      icon: Brain,
      title: "Detailed & Logical",
      description: "My analysis combines traditional Vedic wisdom with logical reasoning, giving you comprehensive understanding of your situation and path forward.",
      color: "from-purple-400 to-purple-600",
    },
    {
      icon: Zap,
      title: "Remedy-Focused",
      description: "Beyond predictions, I provide practical remedies and rituals that create real change. Every session includes actionable steps for improvement.",
      color: "from-yellow-400 to-orange-500",
    },
    {
      icon: Heart,
      title: "Intuitively Guided",
      description: "While grounded in traditional knowledge, I trust my intuitive insights to provide personalized guidance that resonates with your unique journey.",
      color: "from-pink-400 to-red-500",
    },
    {
      icon: Eye,
      title: "Spiritually Grounded",
      description: "All my guidance comes from a place of spiritual wisdom and divine connection, ensuring your transformation aligns with your highest good.",
      color: "from-indigo-400 to-indigo-600",
    },
    {
      icon: Shield,
      title: "Result-Oriented",
      description: "My approach is designed to deliver tangible results. I measure success by the positive changes and clarity you experience in your life.",
      color: "from-green-400 to-green-600",
    },
  ]

  // Auto-scroll functionality
  useEffect(() => {
    if (!isPaused && inView) {
      autoScrollInterval.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % principles.length)
      }, 3000) // Change card every 3 seconds
    }

    return () => {
      if (autoScrollInterval.current) {
        clearInterval(autoScrollInterval.current)
      }
    }
  }, [isPaused, inView, principles.length])

  // Scroll to current index
  useEffect(() => {
    const container = scrollContainerRef.current
    if (container) {
      const cardWidth = container.offsetWidth
      const scrollPosition = currentIndex * cardWidth
      container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      })
    }
  }, [currentIndex])

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
    setIsPaused(true)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    // Prevent default scrolling behavior
    e.preventDefault()
    
    const touchX = e.touches[0].clientX
    const diff = touchStartX.current ? touchStartX.current - touchX : 0
    
    // Only allow visual drag feedback, don't update scroll position
    // The actual card change happens on touch end
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX
    const diff = touchStartX.current ? touchStartX.current - touchEndX : 0
    
    // Only change one card at a time based on swipe direction
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // Swiped right - go to next card
        if (currentIndex < principles.length - 1) {
          setCurrentIndex(currentIndex + 1)
        }
      } else {
        // Swiped left - go to previous card
        if (currentIndex > 0) {
          setCurrentIndex(currentIndex - 1)
        }
      }
    }
    
    touchStartX.current = null
    // Resume auto-scroll after 5 seconds of inactivity
    setTimeout(() => setIsPaused(false), 5000)
  }



  return (
    <section className="section-padding bg-gradient-to-b from-deep-indigo via-midnight-blue to-deep-indigo relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-spiritual-gold rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-midnight-blue rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-4 md:mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-black text-gradient-gold mb-6 drop-shadow-2xl">
            My Philosophy & Approach
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-spiritual-gold to-transparent mx-auto mb-8" />
          <p className="text-cream font-semibold text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Every reading is a <span className="text-spiritual-gold font-bold">sacred journey</span> of discovery, combining <span className="text-spiritual-gold font-bold">ancient wisdom</span> with <span className="text-spiritual-gold font-bold">practical guidance</span> 
            to help you align with your <span className="text-spiritual-gold font-bold">highest potential</span>.
          </p>
        </motion.div>

        {/* Desktop Grid View */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-spiritual-gold/20 hover:border-spiritual-gold/40 transition-all duration-300 hover:shadow-xl hover:shadow-spiritual-gold/20 h-full">
                {/* Icon Container */}
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-r ${principle.color} rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 5 }}
                >
                  <principle.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="font-serif text-xl font-black text-gradient-white mb-4 text-center drop-shadow-lg">
                  {principle.title}
                </h3>
                <p className="text-cream font-semibold text-center leading-relaxed">
                  {principle.description}
                </p>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-spiritual-gold" />
                
                {/* Corner Decoration */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-spiritual-gold/50 rounded-full group-hover:bg-spiritual-gold transition-colors duration-300" />
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-spiritual-gold/30 rounded-full group-hover:bg-spiritual-gold transition-colors duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative">

          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className="flex snap-x snap-mandatory overflow-x-hidden gap-4 scrollbar-hide pb-4"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              touchAction: 'pan-y' 
            }}
          >
            {principles.map((principle, index) => (
              <div
                key={principle.title}
                className="flex-none snap-center w-full"
              >
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-spiritual-gold/20 hover:border-spiritual-gold/40 transition-all duration-300 hover:shadow-xl hover:shadow-spiritual-gold/20 h-full">
                    {/* Icon Container */}
                    <motion.div
                      className={`w-16 h-16 bg-gradient-to-r ${principle.color} rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: 5 }}
                    >
                      <principle.icon className="w-8 h-8 text-white" />
                    </motion.div>

                    {/* Content */}
                    <h3 className="font-serif text-xl font-black text-gradient-white mb-4 text-center drop-shadow-lg">
                      {principle.title}
                    </h3>
                    <p className="text-cream font-semibold text-center leading-relaxed">
                      {principle.description}
                    </p>

                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-spiritual-gold" />
                    
                    {/* Corner Decoration */}
                    <div className="absolute top-4 right-4 w-2 h-2 bg-spiritual-gold/50 rounded-full group-hover:bg-spiritual-gold transition-colors duration-300" />
                    <div className="absolute bottom-4 left-4 w-1 h-1 bg-spiritual-gold/30 rounded-full group-hover:bg-spiritual-gold transition-colors duration-300" />
                  </div>
                </motion.div>
              </div>
            ))}
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {principles.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index)
                  setIsPaused(true)
                  setTimeout(() => setIsPaused(false), 5000)
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-spiritual-gold w-8'
                    : 'bg-spiritual-gold/30 hover:bg-spiritual-gold/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-4 md:mt-16"
        >
          <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-spiritual-gold/20 max-w-4xl mx-auto">
            <div className="absolute top-4 left-4 w-8 h-8 bg-spiritual-gold/20 rounded-full" />
            <div className="absolute bottom-4 right-4 w-6 h-6 bg-spiritual-gold/10 rounded-full" />
            
            <blockquote className="font-serif text-2xl md:text-3xl text-gradient-gold italic leading-relaxed font-bold">
              "True transformation begins when <span className="text-white font-black">ancient wisdom</span> meets <span className="text-white font-black">modern understanding</span>, 
              creating a bridge between your <span className="text-white font-black">current reality</span> and your <span className="text-white font-black">highest potential</span>."
            </blockquote>
            <cite className="block mt-6 text-cream font-bold text-lg">— Abhishek</cite>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default PhilosophySection
