'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import HomamImagesSection from './HomamImagesSection'

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })



  return (
    <section id="about" className="section-padding bg-gradient-to-b from-deep-indigo via-midnight-blue to-deep-indigo relative overflow-hidden">
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
          className="grid lg:grid-cols-2 gap-4 md:gap-16 items-center mb-4 md:mb-20"
        >
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >


            <div className="space-y-6 text-cream text-lg leading-relaxed">
              {/* Diverse Client Portfolio */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-spiritual-gold/20">
                <h3 className="font-black text-spiritual-gold text-xl mb-4 flex items-center">
                  🌟 Distinguished Client Portfolio
                </h3>
                <p className="font-black mb-6 text-lg">
                  My clients span across <span className="text-spiritual-gold font-black">diverse professional fields</span>, including:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center space-x-2 bg-deep-indigo/20 backdrop-blur-sm rounded-lg p-3 border border-spiritual-gold/30">
                    <span className="text-spiritual-gold text-lg">🏏</span>
                    <span className="font-black text-cream">International Women's Cricket Players</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-deep-indigo/20 backdrop-blur-sm rounded-lg p-3 border border-spiritual-gold/30">
                    <span className="text-spiritual-gold text-lg">🏛️</span>
                    <span className="font-black text-cream">Civil Servants</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-deep-indigo/20 backdrop-blur-sm rounded-lg p-3 border border-spiritual-gold/30">
                    <span className="text-spiritual-gold text-lg">👔</span>
                    <span className="font-black text-cream">Government Officers</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-deep-indigo/20 backdrop-blur-sm rounded-lg p-3 border border-spiritual-gold/30">
                    <span className="text-spiritual-gold text-lg">🎭</span>
                    <span className="font-black text-cream">Actors & Writers</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-deep-indigo/20 backdrop-blur-sm rounded-lg p-3 border border-spiritual-gold/30">
                    <span className="text-spiritual-gold text-lg">🎬</span>
                    <span className="font-black text-cream">Directors & Producers</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-deep-indigo/20 backdrop-blur-sm rounded-lg p-3 border border-spiritual-gold/30">
                    <span className="text-spiritual-gold text-lg">🎵</span>
                    <span className="font-black text-cream">Singers</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-deep-indigo/20 backdrop-blur-sm rounded-lg p-3 border border-spiritual-gold/30">
                    <span className="text-spiritual-gold text-lg">🎨</span>
                    <span className="font-black text-cream">VFX Artists</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-deep-indigo/20 backdrop-blur-sm rounded-lg p-3 border border-spiritual-gold/30">
                    <span className="text-spiritual-gold text-lg">📹</span>
                    <span className="font-black text-cream">DoP's</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-deep-indigo/20 backdrop-blur-sm rounded-lg p-3 border border-spiritual-gold/30">
                    <span className="text-spiritual-gold text-lg">🏛️</span>
                    <span className="font-black text-cream">Political Leaders</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-deep-indigo/20 backdrop-blur-sm rounded-lg p-3 border border-spiritual-gold/30">
                    <span className="text-spiritual-gold text-lg">💃</span>
                    <span className="font-black text-cream">Dancers</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-deep-indigo/20 backdrop-blur-sm rounded-lg p-3 border border-spiritual-gold/30">
                    <span className="text-spiritual-gold text-lg">⚙️</span>
                    <span className="font-black text-cream">Engineers</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-deep-indigo/20 backdrop-blur-sm rounded-lg p-3 border border-spiritual-gold/30">
                    <span className="text-spiritual-gold text-lg">💻</span>
                    <span className="font-black text-cream">Software Professionals</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Homam Images Section */}
          <HomamImagesSection />
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection
