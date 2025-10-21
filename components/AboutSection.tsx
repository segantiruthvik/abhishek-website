'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GraduationCap, Award, Heart, Star } from 'lucide-react'
import HomamImagesSection from './HomamImagesSection'

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
      description: "4+ years of deep study in ancient texts",
    },
    {
      icon: Award,
      title: "Spiritual Healer",
      description: "Certified in multiple healing modalities",
    },
    {
      icon: Heart,
      title: "Life Transformation",
      description: "2000+ successful client consultations",
    },
  ]

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
              <h2 className="font-serif text-4xl md:text-5xl font-black text-gradient-gold drop-shadow-2xl">
                About Abhishek
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-spiritual-gold to-transparent" />
            </div>

            <div className="space-y-6 text-cream text-lg leading-relaxed">
              {/* Educational Background */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-spiritual-gold/20">
                <h3 className="font-black text-spiritual-gold text-xl mb-4 flex items-center">
                  🎓 Educational Excellence
                </h3>
                <div className="space-y-2">
                  <p className="font-semibold">
                    <span className="text-spiritual-gold font-bold">B.E Civil Engineering</span> & <span className="text-spiritual-gold font-bold">M.Sc. Economics</span>
                  </p>
                  <p className="font-semibold text-cream/90">
                    🏛️ BITS Pilani
                  </p>
                </div>
              </div>

              {/* Creative Experience */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-spiritual-gold/20">
                <h3 className="font-black text-spiritual-gold text-xl mb-4 flex items-center">
                  🎬 Creative Experience
                </h3>
                <p className="font-semibold">
                  Worked as <span className="text-spiritual-gold font-bold">Associate Director</span> in <span className="text-spiritual-gold font-bold">three feature film projects</span>, 
                  bringing creative vision and leadership to cinematic storytelling.
                </p>
              </div>

              {/* Astrology Journey */}
              <p className="font-semibold">
                With over <span className="text-spiritual-gold font-bold">4+ years</span> of dedicated practice in <span className="text-spiritual-gold font-bold">Vedic astrology</span> and <span className="text-spiritual-gold font-bold">spiritual healing</span>, 
                I bring a unique blend of <span className="text-spiritual-gold font-bold">ancient wisdom</span> and modern understanding to guide you 
                through life's challenges.
              </p>

              {/* Approach */}
              <p className="font-semibold">
                My approach combines <span className="text-spiritual-gold font-bold">precise astrological analysis</span> with <span className="text-spiritual-gold font-bold">intuitive guidance</span>, 
                providing not just predictions but <span className="text-spiritual-gold font-bold">practical remedies</span> that create real, 
                lasting transformation in your life.
              </p>

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
                <p className="font-black mt-6 text-lg text-spiritual-gold bg-deep-indigo/10 backdrop-blur-sm rounded-lg p-4 border border-spiritual-gold/20">
                  💡 This <span className="text-cream font-black">diverse background</span> enables me to understand <span className="text-cream font-black">different life perspectives</span>, 
                  making your horoscope reading more <span className="text-cream font-black">insightful and personalized</span>.
                </p>
              </div>

              {/* Mission Statement */}
              <p className="font-semibold">
                I believe that every individual has the power to align with their <span className="text-spiritual-gold font-bold">divine purpose</span>, 
                and my mission is to help you discover and embrace your <span className="text-spiritual-gold font-bold">true potential</span>.
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
                  className="text-center p-4 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <achievement.icon className="w-8 h-8 text-spiritual-gold mx-auto mb-2" />
                  <h4 className="font-black text-dark-gray text-sm mb-1">{achievement.title}</h4>
                  <p className="text-dark-gray font-semibold text-xs">{achievement.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Homam Images Section */}
          <HomamImagesSection />
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="space-y-8"
        >
          <div className="text-center">
            <h3 className="font-serif text-3xl font-black text-cream mb-4 drop-shadow-lg">
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
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection
