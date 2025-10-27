'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MessageCircle, Phone, Clock } from 'lucide-react'

const ContactSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const contactMethods = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Instant responses & seamless booking experience",
      action: "Chat Now",
      color: "from-green-500 to-green-600",
      href: "https://wa.me/919966907000",
    },
    {
      icon: Phone,
      title: "Phone Call",
      description: "Direct voice consultation & personalized guidance",
      action: "Call Now",
      color: "from-purple-500 to-purple-600",
      href: "tel:+919966907000",
    },
  ]

  return (
    <section id="contact" className="px-4 md:px-8 lg:px-16 pt-4 md:pt-20 pb-0 md:pb-0 bg-gradient-to-b from-deep-indigo via-midnight-blue to-deep-indigo relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 bg-spiritual-gold rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-midnight-blue rounded-full blur-3xl" />
      </div>

      {/* Yantra Decorative Element */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-5">
        <div className="w-96 h-96 border-2 border-spiritual-gold rounded-full flex items-center justify-center">
          <div className="w-80 h-80 border border-spiritual-gold rounded-full flex items-center justify-center">
            <div className="w-64 h-64 border-2 border-spiritual-gold rounded-full flex items-center justify-center">
              <div className="w-48 h-48 border border-spiritual-gold rounded-full" />
            </div>
          </div>
        </div>
      </div>

      <div className="container-custom relative z-10 py-4 md:py-8">
        <div className="max-w-4xl mx-auto">
          {/* Contact Methods */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 md:space-y-8"
          >
            <h3 className="font-serif text-2xl font-black text-cream mb-6 md:mb-8 drop-shadow-lg">
              Choose Your Preferred Method
            </h3>
            
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.title}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="block group"
              >
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-spiritual-gold/20 hover:border-spiritual-gold/40 transition-all duration-300 hover:shadow-xl hover:shadow-spiritual-gold/20">
                  <div className="flex items-center space-x-4">
                    <motion.div
                      className={`w-14 h-14 bg-gradient-to-r ${method.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: 5 }}
                    >
                      <method.icon className="w-7 h-7 text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <h4 className="font-black text-dark-gray text-lg mb-1">
                        {method.title}
                      </h4>
                      <p className="text-dark-gray font-semibold text-sm mb-2">
                        {method.description}
                      </p>
                      <span className="inline-block px-3 py-1 bg-deep-indigo text-white text-xs rounded-full font-black border border-spiritual-gold/30">
                        {method.action}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}

            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-spiritual-gold/20 mb-0 md:mb-0"
            >
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="w-5 h-5 text-spiritual-gold" />
                <h4 className="font-black text-dark-gray">Availability</h4>
              </div>
              <div className="space-y-2 text-sm text-dark-gray font-semibold">
                <p>Monday - Friday: <span className="text-deep-indigo font-black">9:00 AM - 8:00 PM</span></p>
                <p>Saturday: <span className="text-deep-indigo font-black">10:00 AM - 6:00 PM</span></p>
                <p>Sunday: <span className="text-deep-indigo font-black">11:00 AM - 5:00 PM</span></p>
                <p className="text-deep-indigo font-black">Emergency consultations available</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
