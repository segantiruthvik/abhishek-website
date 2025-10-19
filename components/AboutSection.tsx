'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GraduationCap, Award, Heart, Star } from 'lucide-react'

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

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

  const achievements = [
    {
      icon: GraduationCap,
      title: "Vedic Astrology Expert",
      description: "15+ years of deep study in ancient texts",
    },
    {
      icon: Award,
      title: "Spiritual Healer",
      description: "Certified in multiple healing modalities",
    },
    {
      icon: Heart,
      title: "Life Transformation",
      description: "1000+ successful client consultations",
    },
  ]

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-deep-indigo via-cream/5 to-off-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-spiritual-gold rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-midnight-blue rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-16 items-center mb-20"
        >
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-gradient-gold">
                About Abhishek
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-spiritual-gold to-transparent" />
            </div>

            <div className="space-y-4 text-deep-indigo text-lg leading-relaxed">
              <p>
                With over 15 years of dedicated practice in Vedic astrology and spiritual healing, 
                I bring a unique blend of ancient wisdom and modern understanding to guide you 
                through life's challenges.
              </p>
              <p>
                My approach combines precise astrological analysis with intuitive guidance, 
                providing not just predictions but practical remedies that create real, 
                lasting transformation in your life.
              </p>
              <p>
                I believe that every individual has the power to align with their divine purpose, 
                and my mission is to help you discover and embrace your true potential.
              </p>
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <achievement.icon className="w-8 h-8 text-spiritual-gold mx-auto mb-2" />
                  <h4 className="font-semibold text-deep-indigo text-sm mb-1">{achievement.title}</h4>
                  <p className="text-deep-indigo/70 text-xs">{achievement.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image/Visual Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-spiritual-gold/20 to-midnight-blue/20 rounded-2xl p-8 backdrop-blur-sm border border-spiritual-gold/30">
              {/* Spiritual Symbol Placeholder */}
              <div className="w-full h-80 bg-gradient-to-br from-spiritual-gold/10 to-midnight-blue/10 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-spiritual-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-12 h-12 text-spiritual-gold" />
                  </div>
                  <p className="text-deep-indigo font-medium">Sacred Geometry</p>
                  <p className="text-deep-indigo/70 text-sm">Divine Connection</p>
                </div>
              </div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-8 h-8 bg-spiritual-gold/30 rounded-full"
              />
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-midnight-blue/30 rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="space-y-8"
        >
          <div className="text-center">
            <h3 className="font-serif text-3xl font-bold text-deep-indigo mb-4">
              What People Say
            </h3>
            <div className="h-1 w-16 bg-gradient-to-r from-spiritual-gold to-transparent mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
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
                <p className="text-deep-indigo/80 italic mb-4 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-spiritual-gold/20 rounded-full flex items-center justify-center mr-3">
                    <span className="text-spiritual-gold font-semibold text-sm">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-deep-indigo text-sm">{testimonial.name}</p>
                    <p className="text-deep-indigo/60 text-xs">Verified Client</p>
                  </div>
                </div>
                
                {/* Decorative Element */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-spiritual-gold/10 rounded-full" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection
