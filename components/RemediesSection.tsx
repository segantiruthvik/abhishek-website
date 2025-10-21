'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { BookOpen, Shield, Flame, Sparkles, Heart, Eye } from 'lucide-react'

const RemediesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const [expandedCard, setExpandedCard] = useState<number | null>(null)

  const remedies = [
    {
      icon: BookOpen,
      title: "Mantra Chanting",
      description: "Sacred sound vibrations that align your energy with cosmic frequencies for healing and protection.",
      details: "Personalized mantras based on your birth chart and current life challenges.",
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: Shield,
      title: "Kavacham (Protection)",
      description: "Spiritual armor created through sacred symbols and rituals to shield you from negative energies.",
      details: "Custom protection rituals and amulets designed for your specific needs.",
      color: "from-purple-500 to-violet-600",
    },
    {
      icon: Flame,
      title: "Homa (Fire Rituals)",
      description: "Sacred fire ceremonies that purify your environment and invoke divine blessings for transformation.",
      details: "Traditional fire rituals performed with specific herbs and offerings for your situation.",
      color: "from-orange-500 to-red-600",
    },
    {
      icon: Heart,
      title: "Pooja (Worship)",
      description: "Devotional practices that strengthen your connection with divine forces for guidance and support.",
      details: "Custom worship rituals and prayers tailored to your spiritual path and life goals.",
      color: "from-pink-500 to-rose-600",
    },
    {
      icon: Eye,
      title: "Meditation Guidance",
      description: "Deep meditative practices that enhance your intuition and connect you with your higher self.",
      details: "Personalized meditation techniques and spiritual practices for inner transformation.",
      color: "from-cyan-500 to-blue-600",
    },
  ]

  return (
    <section className="section-padding bg-gradient-to-b from-deep-indigo via-orange-900/20 to-deep-indigo relative overflow-hidden">
      {/* Firelight Background Effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-orange-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-red-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-yellow-500/25 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-spiritual-gold rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
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
            Sacred Remedies & Rituals
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-spiritual-gold to-transparent mx-auto mb-8" />
          <p className="text-cream/90 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Ancient healing practices that create profound transformation in your life, 
            combining traditional wisdom with personalized guidance for lasting change.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {remedies.map((remedy, index) => (
            <motion.div
              key={remedy.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <motion.div
                className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-spiritual-gold/20 hover:border-spiritual-gold/40 transition-all duration-300 cursor-pointer h-full"
                whileHover={{ scale: 1.02 }}
                onClick={() => setExpandedCard(expandedCard === index ? null : index)}
              >
                {/* Icon Container */}
                <motion.div
                  className={`w-14 h-14 bg-gradient-to-r ${remedy.color} rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 5 }}
                >
                  <remedy.icon className="w-7 h-7 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="font-serif text-xl font-bold text-gradient-white mb-3 text-center">
                  {remedy.title}
                </h3>
                <p className="text-cream/80 text-center leading-relaxed text-sm mb-4">
                  {remedy.description}
                </p>

                {/* Expandable Details */}
                <motion.div
                  initial={false}
                  animate={{ height: expandedCard === index ? 'auto' : 0, opacity: expandedCard === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="pt-4 border-t border-spiritual-gold/20">
                    <p className="text-cream/70 text-sm text-center italic">
                      {remedy.details}
                    </p>
                  </div>
                </motion.div>

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${remedy.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                {/* Corner Decorations */}
                <div className="absolute top-3 right-3 w-2 h-2 bg-spiritual-gold/50 rounded-full group-hover:bg-spiritual-gold transition-colors duration-300" />
                <div className="absolute bottom-3 left-3 w-1 h-1 bg-spiritual-gold/30 rounded-full group-hover:bg-spiritual-gold transition-colors duration-300" />

                {/* Expand Indicator */}
                <div className="absolute bottom-3 right-3">
                  <motion.div
                    animate={{ rotate: expandedCard === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-4 h-4 border-2 border-spiritual-gold rounded-full flex items-center justify-center"
                  >
                    <div className="w-1 h-1 bg-spiritual-gold rounded-full" />
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default RemediesSection
