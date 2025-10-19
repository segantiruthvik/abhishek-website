'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState, useEffect } from 'react'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'

const TestimonialsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      location: "Mumbai, India",
      text: "Abhishek's guidance transformed my life completely. His predictions were incredibly accurate and his remedies brought peace to my family. I was going through a difficult phase in my career, and his insights helped me make the right decisions.",
      rating: 5,
      image: "PS",
      category: "Career Guidance",
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      location: "Delhi, India",
      text: "The spiritual clarity I gained from our sessions was profound. Abhishek's approach is both logical and deeply intuitive. His remedies for my health issues worked wonders, and I feel more connected to my spiritual path.",
      rating: 5,
      image: "RK",
      category: "Health & Healing",
    },
    {
      id: 3,
      name: "Anita Mehta",
      location: "Bangalore, India",
      text: "His remedies worked wonders for my career issues. I'm grateful for his precise guidance and genuine care. The gemstone recommendations he provided have brought positive energy into my life.",
      rating: 5,
      image: "AM",
      category: "Career & Finance",
    },
    {
      id: 4,
      name: "Vikram Singh",
      location: "Pune, India",
      text: "Abhishek helped me understand my relationship patterns and guided me toward finding true love. His marriage timing predictions were spot on, and I'm now happily married to my soulmate.",
      rating: 5,
      image: "VS",
      category: "Love & Relationships",
    },
    {
      id: 5,
      name: "Sunita Patel",
      location: "Ahmedabad, India",
      text: "The family harmony remedies he suggested brought peace to our household. His understanding of family dynamics is remarkable, and his guidance helped resolve long-standing conflicts.",
      rating: 5,
      image: "SP",
      category: "Family Harmony",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="section-padding bg-gradient-to-b from-deep-indigo via-midnight-blue to-deep-indigo relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-spiritual-gold rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-midnight-blue rounded-full blur-3xl" />
      </div>

      {/* Floating Stars */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-spiritual-gold rounded-full opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gradient-gold mb-6">
            What Clients Say
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-spiritual-gold to-transparent mx-auto mb-8" />
          <p className="text-cream text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Real stories of transformation and healing from people whose lives have been 
            positively changed through spiritual guidance and divine wisdom.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-spiritual-gold/20 relative overflow-hidden"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 left-6 opacity-20">
                <Quote className="w-8 h-8 text-spiritual-gold" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-spiritual-gold fill-current" />
                  ))}
                </div>

                <blockquote className="font-serif text-xl md:text-2xl text-gradient-white italic leading-relaxed mb-8 text-center">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>

                <div className="flex items-center justify-center space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-spiritual-gold to-yellow-400 rounded-full flex items-center justify-center">
                    <span className="text-green-900 font-bold text-lg">
                      {testimonials[currentTestimonial].image}
                    </span>
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold text-gradient-gold text-lg">
                      {testimonials[currentTestimonial].name}
                    </h4>
                    <p className="text-cream/70 text-sm">
                      {testimonials[currentTestimonial].location}
                    </p>
                    <span className="inline-block mt-2 px-3 py-1 bg-spiritual-gold/20 text-spiritual-gold text-xs rounded-full">
                      {testimonials[currentTestimonial].category}
                    </span>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-6 h-6 bg-spiritual-gold/20 rounded-full" />
              <div className="absolute bottom-4 left-4 w-4 h-4 bg-spiritual-gold/10 rounded-full" />
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <motion.button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full border border-spiritual-gold/30 flex items-center justify-center hover:bg-spiritual-gold/20 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-5 h-5 text-spiritual-gold" />
            </motion.button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? 'bg-spiritual-gold scale-125'
                      : 'bg-spiritual-gold/30 hover:bg-spiritual-gold/50'
                  }`}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </div>

            <motion.button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full border border-spiritual-gold/30 flex items-center justify-center hover:bg-spiritual-gold/20 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-5 h-5 text-spiritual-gold" />
            </motion.button>
          </div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Happy Clients" },
              { number: "4.9/5", label: "Average Rating" },
              { number: "98%", label: "Would Recommend" },
              { number: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-2xl md:text-3xl font-bold text-gradient-gold mb-2">
                  {stat.number}
                </div>
                <div className="text-cream/70 text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialsSection
