'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { CheckCircle, Clock, Star, Target, Briefcase, Heart, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'

const PricingSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  
  const [currentSlide, setCurrentSlide] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const pricingPlans = [
    {
      id: 1,
      title: "General Consultation",
      price: "699",
      duration: "30 min",
      icon: Clock,
      features: [
        "Career & Business guidance",
        "Love & Marriage insights", 
        "Finance & Wealth planning",
        "Health & Wellness advice",
        "Family & Relationships support"
      ],
      color: "from-blue-500 to-blue-600",
      delay: 0,
      description: "Quick overview of current challenges and immediate guidance"
    },
    {
      id: 2,
      title: "Detailed 5-Year Outlook",
      price: "899", 
      duration: "45 min",
      icon: Star,
      features: [
        "Comprehensive 5-year life blueprint",
        "Career & Business trajectory planning",
        "Love & Marriage timeline analysis",
        "Finance & Wealth accumulation strategy",
        "Health & Wellness roadmap"
      ],
      color: "from-purple-500 to-purple-600",
      delay: 0.1,
      description: "In-depth analysis with strategic planning for next 5 years"
    },
    {
      id: 3,
      title: "Extensive 15-Year Blueprint",
      price: "1099",
      duration: "1 hr",
      icon: Target,
      features: [
        "Complete 15-year life transformation plan",
        "Career & Business empire building strategy",
        "Love & Marriage long-term compatibility",
        "Finance & Wealth mastery approach",
        "Advanced spiritual guidance & remedies"
      ],
      color: "from-rose-500 to-rose-600",
      delay: 0.2,
      description: "Holistic life blueprint with advanced spiritual guidance"
    },
    {
      id: 4,
      title: "D9 Marriage Consultation",
      price: "1111",
      duration: "1 hr",
      icon: Heart,
      features: [
        "D9 Chart Analysis (Navamsa) for marriage",
        "Spouse nature & compatibility assessment",
        "Marriage timing & quality prediction",
        "Planetary strength & spiritual evolution",
        "Dharma & life purpose guidance"
      ],
      color: "from-pink-500 to-rose-600",
      delay: 0.3,
      description: "Specialized marriage-focused astrology using D9 chart analysis"
    },
    {
      id: 5,
      title: "D10 Career Consultation",
      price: "1499",
      duration: "1 hr",
      icon: Briefcase,
      features: [
        "D10 Chart Analysis (Dashamsa) for career",
        "Nakshatra Analysis for deeper insights",
        "Mahadasha/Antardasha timing analysis",
        "Career shift predictions & opportunities",
        "Professional image & reputation guidance"
      ],
      color: "from-emerald-500 to-emerald-600",
      delay: 0.4,
      description: "Specialized career-focused astrology using D10 chart analysis"
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % pricingPlans.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + pricingPlans.length) % pricingPlans.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  // Touch/swipe functionality
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState(0)
  const [dragOffset, setDragOffset] = useState(0)

  const minSwipeDistance = 30

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
    setIsDragging(true)
    setDragStart(e.targetTouches[0].clientX)
    setDragOffset(0)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    // Prevent default scrolling behavior
    e.preventDefault()
    setTouchEnd(e.targetTouches[0].clientX)
    if (isDragging) {
      const currentX = e.targetTouches[0].clientX
      setDragOffset(currentX - dragStart)
    }
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      nextSlide()
    }
    if (isRightSwipe) {
      prevSlide()
    }
    
    setIsDragging(false)
    setDragOffset(0)
  }

  return (
    <section id="pricing" className="section-padding bg-gradient-to-b from-deep-indigo via-midnight-blue to-deep-indigo relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 bg-spiritual-gold rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-midnight-blue rounded-full blur-3xl" />
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
            Consultation Plans
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-spiritual-gold to-transparent mx-auto mb-8" />
          <p className="text-cream font-semibold text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Choose the plan that best suits your needs for <span className="text-spiritual-gold font-bold">clarity</span>, <span className="text-spiritual-gold font-bold">guidance</span>, and <span className="text-spiritual-gold font-bold">transformation</span>.
            All plans cover comprehensive areas of life with personalized spiritual guidance.
          </p>
        </motion.div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: plan.delay }}
              className="group relative"
            >
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-spiritual-gold/20 hover:border-spiritual-gold/40 transition-all duration-300 h-full">
                {/* Icon Container */}
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 5 }}
                >
                  <plan.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="font-serif text-2xl font-bold text-gradient-white mb-4 text-center drop-shadow-lg">
                  {plan.title}
                </h3>
                
                <div className="text-center mb-6">
                  <div className="text-4xl font-black text-spiritual-gold mb-2 drop-shadow-lg">
                    ₹{plan.price}
                  </div>
                  <div className="text-cream font-semibold text-lg">
                    {plan.duration} Session
                  </div>
                </div>

                <p className="text-cream font-medium text-center mb-6 leading-relaxed">
                  {plan.description}
                </p>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: plan.delay + 0.3 + featureIndex * 0.05 }}
                      className="flex items-start"
                    >
                      <CheckCircle className="w-5 h-5 text-spiritual-gold mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-cream font-semibold text-sm leading-relaxed">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.a
                  href={`https://wa.me/919966907000?text=${encodeURIComponent(`Namaste Abhishek! 🙏

I visited your website and I am interested in booking a consultation.

📋 *Consultation Details:*
• Plan: ${plan.title}
• Duration: ${plan.duration}
• Investment: ₹${plan.price}

Please let me know your available slots and the booking process.

Thank you for your time.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-spiritual-gold to-yellow-400 text-deep-indigo font-black py-2.5 px-4 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 glow-gold text-center text-sm whitespace-nowrap relative z-10 drop-shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Book This Plan
                </motion.a>

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${plan.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                {/* Corner Decorations */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-spiritual-gold/50 rounded-full group-hover:bg-spiritual-gold transition-colors duration-300" />
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-spiritual-gold/30 rounded-full group-hover:bg-spiritual-gold transition-colors duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative">
          <div 
            className="overflow-hidden"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            style={{ touchAction: 'pan-y' }}
          >
            <motion.div
              ref={scrollContainerRef}
              className="flex transition-transform duration-300 ease-out"
              style={{ 
                transform: `translateX(calc(-${currentSlide * 75}% + ${isDragging ? dragOffset * 0.5 : 0}px))`,
                transition: isDragging ? 'none' : 'transform 0.3s ease-out'
              }}
            >
              {pricingPlans.map((plan, index) => (
                <div key={plan.id} className="flex-shrink-0 px-2" style={{ width: '75%' }}>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: plan.delay }}
                    className="group relative"
                  >
                    <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-spiritual-gold/20 hover:border-spiritual-gold/40 transition-all duration-300 min-h-[600px] flex flex-col">
                      {/* Icon Container */}
                      <motion.div
                        className={`w-12 h-12 bg-gradient-to-r ${plan.color} rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                        whileHover={{ rotate: 5 }}
                      >
                        <plan.icon className="w-6 h-6 text-white" />
                      </motion.div>

                      {/* Content */}
                      <h3 className="font-serif text-lg font-bold text-gradient-white mb-3 text-center drop-shadow-lg">
                        {plan.title}
                      </h3>
                      
                      <div className="text-center mb-4">
                        <div className="text-2xl font-black text-spiritual-gold mb-1 drop-shadow-lg">
                          ₹{plan.price}
                        </div>
                        <div className="text-cream font-semibold text-sm">
                          {plan.duration} Session
                        </div>
                      </div>

                      <p className="text-cream font-medium text-center mb-4 leading-relaxed text-sm flex-shrink-0">
                        {plan.description}
                      </p>

                      {/* Features List */}
                      <div className="space-y-2 mb-6 flex-grow">
                        {plan.features.map((feature, featureIndex) => (
                          <motion.div
                            key={featureIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.4, delay: plan.delay + 0.3 + featureIndex * 0.05 }}
                            className="flex items-start"
                          >
                            <CheckCircle className="w-4 h-4 text-spiritual-gold mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-cream font-semibold text-xs leading-relaxed">
                              {feature}
                            </span>
                          </motion.div>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <motion.a
                        href={`https://wa.me/919966907000?text=${encodeURIComponent(`Namaste Abhishek! 🙏

I visited your website and I am interested in booking a consultation.

📋 *Consultation Details:*
• Plan: ${plan.title}
• Duration: ${plan.duration}
• Investment: ₹${plan.price}

Please let me know your available slots and the booking process.

Thank you for your time.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-gradient-to-r from-spiritual-gold to-yellow-400 text-deep-indigo font-black py-2.5 px-4 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 glow-gold text-center text-sm whitespace-nowrap flex-shrink-0 relative z-10 drop-shadow-lg"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Book This Plan
                      </motion.a>

                      {/* Hover Glow Effect */}
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${plan.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                      
                      {/* Corner Decorations */}
                      <div className="absolute top-3 right-3 w-1.5 h-1.5 bg-spiritual-gold/50 rounded-full group-hover:bg-spiritual-gold transition-colors duration-300" />
                      <div className="absolute bottom-3 left-3 w-1 h-1 bg-spiritual-gold/30 rounded-full group-hover:bg-spiritual-gold transition-colors duration-300" />
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Arrows */}
          <motion.button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-spiritual-gold/30 hover:bg-white/30 transition-all duration-300 z-10"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="w-5 h-5 text-spiritual-gold" />
          </motion.button>

          <motion.button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-spiritual-gold/30 hover:bg-white/30 transition-all duration-300 z-10"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="w-5 h-5 text-spiritual-gold" />
          </motion.button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {pricingPlans.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-spiritual-gold scale-125'
                    : 'bg-spiritual-gold/30 hover:bg-spiritual-gold/50'
                }`}
                whileHover={{ scale: 1.2 }}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default PricingSection
