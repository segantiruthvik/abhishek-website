'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState, useEffect, useRef } from 'react'
import { Star } from 'lucide-react'

const TestimonialsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const autoScrollInterval = useRef<NodeJS.Timeout | null>(null)
  const touchStartX = useRef<number | null>(null)

  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      text: "Abhishek's guidance transformed my life completely. His predictions were incredibly accurate and his remedies brought peace to my family.",
      rating: 5,
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      text: "The spiritual clarity I gained from our sessions was profound. Abhishek's approach is both logical and deeply intuitive.",
      rating: 5,
    },
    {
      id: 3,
      name: "Anita Mehta",
      text: "His remedies worked wonders for my career issues. I'm grateful for his precise guidance and genuine care.",
      rating: 5,
    },
  ]

  // Auto-scroll functionality
  useEffect(() => {
    if (!isPaused && inView) {
      autoScrollInterval.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
      }, 3000) // Change card every 3 seconds
    }

    return () => {
      if (autoScrollInterval.current) {
        clearInterval(autoScrollInterval.current)
      }
    }
  }, [isPaused, inView, testimonials.length])

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
        if (currentIndex < testimonials.length - 1) {
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
    <section className="px-4 md:px-8 lg:px-16 pt-2 md:pt-20 pb-4 md:pb-20 bg-gradient-to-b from-deep-indigo via-midnight-blue to-deep-indigo relative overflow-hidden">
      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="space-y-4 md:space-y-8"
        >
          <div className="text-center">
            <h3 className="font-serif text-3xl font-black text-cream mb-4 drop-shadow-lg">
              What People Say
            </h3>
            <div className="h-1 w-16 bg-gradient-to-r from-spiritual-gold to-transparent mx-auto" />
          </div>

          {/* Desktop Grid View */}
          <div className="hidden md:grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 relative"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-spiritual-gold fill-current" />
                  ))}
                </div>
                <p className="text-dark-gray font-semibold italic mb-4 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-spiritual-gold/20 rounded-full flex items-center justify-center mr-3">
                    <span className="text-spiritual-gold font-semibold text-sm">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="font-black text-dark-gray text-sm">{testimonial.name}</p>
                    <p className="text-dark-gray font-semibold text-xs">Verified Client</p>
                  </div>
                </div>
                
                {/* Decorative Element */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-spiritual-gold/10 rounded-full" />
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
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className="flex-none snap-center w-full"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                    className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 relative"
                  >
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-spiritual-gold fill-current" />
                      ))}
                    </div>
                    <p className="text-dark-gray font-semibold italic mb-4 leading-relaxed">
                      "{testimonial.text}"
                    </p>
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-spiritual-gold/20 rounded-full flex items-center justify-center mr-3">
                        <span className="text-spiritual-gold font-semibold text-sm">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <p className="font-black text-dark-gray text-sm">{testimonial.name}</p>
                        <p className="text-dark-gray font-semibold text-xs">Verified Client</p>
                      </div>
                    </div>
                    
                    {/* Decorative Element */}
                    <div className="absolute top-4 right-4 w-8 h-8 bg-spiritual-gold/10 rounded-full" />
                  </motion.div>
                </div>
              ))}
            </div>

            {/* Indicators */}
            <div className="flex justify-center gap-2 mt-4">
              {testimonials.map((_, index) => (
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
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialsSection
