'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Briefcase, 
  Heart, 
  DollarSign, 
  Shield, 
  Users, 
  Home,
  GraduationCap,
  Stethoscope,
  Car,
  Scale
} from 'lucide-react'

const ExpertiseSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const expertiseAreas = [
    {
      icon: Briefcase,
      title: "Career & Business",
      description: "Career guidance, job changes, business ventures, and professional growth",
      color: "from-blue-500 to-blue-600",
      delay: 0,
    },
    {
      icon: Heart,
      title: "Love & Marriage",
      description: "Relationship compatibility, marriage timing, and love life guidance",
      color: "from-pink-500 to-rose-600",
      delay: 0.1,
    },
    {
      icon: DollarSign,
      title: "Finance & Wealth",
      description: "Financial planning, investment guidance, and wealth accumulation",
      color: "from-green-500 to-emerald-600",
      delay: 0.2,
    },
    {
      icon: Shield,
      title: "Health & Wellness",
      description: "Physical and mental health guidance, healing, and wellness",
      color: "from-purple-500 to-violet-600",
      delay: 0.3,
    },
    {
      icon: Users,
      title: "Family & Relationships",
      description: "Family harmony, parenting guidance, and interpersonal relationships",
      color: "from-orange-500 to-red-600",
      delay: 0.4,
    },
    {
      icon: Home,
      title: "Property & Real Estate",
      description: "Property investments, home buying, and real estate decisions",
      color: "from-yellow-500 to-amber-600",
      delay: 0.5,
    },
    {
      icon: GraduationCap,
      title: "Education & Learning",
      description: "Educational choices, career paths, and skill development",
      color: "from-indigo-500 to-indigo-600",
      delay: 0.6,
    },
    {
      icon: Stethoscope,
      title: "Health Remedies",
      description: "Natural healing, Ayurvedic remedies, and health restoration",
      color: "from-teal-500 to-cyan-600",
      delay: 0.7,
    },
    {
      icon: Car,
      title: "Travel & Migration",
      description: "Travel timing, relocation guidance, and geographical changes",
      color: "from-gray-500 to-gray-600",
      delay: 0.8,
    },
    {
      icon: Scale,
      title: "Legal Matters",
      description: "Legal disputes, court cases, and justice-related guidance",
      color: "from-red-500 to-red-600",
      delay: 0.9,
    },
  ]

  return (
    <section className="section-padding bg-gradient-to-b from-deep-indigo via-midnight-blue/50 to-cream/5 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 bg-spiritual-gold rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-midnight-blue rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-spiritual-gold/20 rounded-full blur-3xl" />
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
            Areas of Expertise
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-spiritual-gold to-transparent mx-auto mb-8" />
          <p className="text-cream/90 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Comprehensive guidance across all aspects of life, helping you navigate challenges 
            and opportunities with divine wisdom and practical insights.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: area.delay }}
              className="group relative"
            >
              <motion.div
                className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-spiritual-gold/20 hover:border-spiritual-gold/40 transition-all duration-300 cursor-pointer h-full text-center"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Icon Container with Glow Animation */}
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-r ${area.color} rounded-2xl flex items-center justify-center mb-4 mx-auto relative overflow-hidden`}
                  animate={{
                    boxShadow: [
                      `0 0 20px ${area.color.split(' ')[1].replace('to-', '#')}30`,
                      `0 0 40px ${area.color.split(' ')[1].replace('to-', '#')}50`,
                      `0 0 20px ${area.color.split(' ')[1].replace('to-', '#')}30`,
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <area.icon className="w-8 h-8 text-white relative z-10" />
                  
                  {/* Animated Background Glow */}
                  <motion.div
                    className="absolute inset-0 bg-white/20 rounded-2xl"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  />
                </motion.div>

                {/* Content */}
                <h3 className="font-serif text-sm font-bold text-gradient-white mb-2 leading-tight">
                  {area.title}
                </h3>
                <p className="text-cream/70 text-xs leading-relaxed">
                  {area.description}
                </p>

                {/* Hover Glow Effect */}
                <motion.div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${area.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  whileHover={{ scale: 1.05 }}
                />
                
                {/* Corner Decorations */}
                <div className="absolute top-2 right-2 w-1 h-1 bg-spiritual-gold/50 rounded-full group-hover:bg-spiritual-gold transition-colors duration-300" />
                <div className="absolute bottom-2 left-2 w-1 h-1 bg-spiritual-gold/30 rounded-full group-hover:bg-spiritual-gold transition-colors duration-300" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "4+", label: "Years Experience" },
              { number: "2000+", label: "Clients Helped" },
              { number: "95%", label: "Success Rate" },
              { number: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient-gold mb-2">
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

export default ExpertiseSection
