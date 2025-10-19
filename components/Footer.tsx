'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Instagram, MessageCircle, Mail, Star, Sparkles } from 'lucide-react'

const Footer = () => {
  const [stars, setStars] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([])

  useEffect(() => {
    // Generate twinkling stars
    const generateStars = () => {
      const newStars = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 10,
      }))
      setStars(newStars)
    }
    generateStars()
  }, [])

  const socialLinks = [
    {
      icon: Instagram,
      href: "https://instagram.com/abhishek_spiritual",
      label: "Instagram",
      color: "hover:text-pink-500",
    },
    {
      icon: MessageCircle,
      href: "https://wa.me/919876543210",
      label: "WhatsApp",
      color: "hover:text-green-500",
    },
    {
      icon: Mail,
      href: "mailto:abhishek@spiritualguide.com",
      label: "Email",
      color: "hover:text-blue-500",
    },
  ]

  return (
    <footer className="relative bg-gradient-to-b from-deep-indigo via-midnight-blue to-deep-indigo overflow-hidden">
      {/* Animated Starfield Background */}
      <div className="absolute inset-0 opacity-30">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute w-1 h-1 bg-spiritual-gold rounded-full"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              delay: star.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Floating Spiritual Elements */}
      <motion.div
        className="absolute top-10 left-20 opacity-10"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        <Sparkles size={40} className="text-spiritual-gold" />
      </motion.div>

      <motion.div
        className="absolute bottom-20 right-20 opacity-10"
        animate={{ rotate: -360 }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
      >
        <Star size={35} className="text-spiritual-gold" />
      </motion.div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container-custom py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="font-serif text-2xl font-bold text-gradient-gold mb-4">
                  Abhishek
                </h3>
                <p className="text-cream/80 leading-relaxed mb-6 max-w-md">
                  Spiritual guide and astrologer dedicated to helping you discover your true purpose 
                  and create lasting transformation through divine wisdom and practical guidance.
                </p>
                
                {/* Social Links */}
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full border border-spiritual-gold/30 flex items-center justify-center text-spiritual-gold transition-all duration-300 hover:bg-spiritual-gold/20 hover:scale-110 ${social.color}`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-gradient-white text-lg mb-4">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {[
                  { label: "About Me", href: "#about" },
                  { label: "Philosophy", href: "#philosophy" },
                  { label: "Remedies", href: "#remedies" },
                  { label: "Contact", href: "#contact" },
                ].map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-cream/70 hover:text-spiritual-gold transition-colors duration-300 text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-gradient-white text-lg mb-4">
                Services
              </h4>
              <ul className="space-y-3">
                {[
                  "Vedic Astrology Reading",
                  "Spiritual Guidance",
                  "Remedy Consultation",
                  "Life Transformation",
                ].map((service) => (
                  <li key={service} className="text-cream/70 text-sm">
                    {service}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
            className="h-px bg-gradient-to-r from-transparent via-spiritual-gold/50 to-transparent mb-8"
          />

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className="text-cream/60 text-sm"
            >
              © 2024 Abhishek - Spiritual Guide & Astrologer. All rights reserved.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              viewport={{ once: true }}
              className="flex space-x-6 text-sm"
            >
              <a href="#" className="text-cream/60 hover:text-spiritual-gold transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-cream/60 hover:text-spiritual-gold transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-cream/60 hover:text-spiritual-gold transition-colors duration-300">
                Disclaimer
              </a>
            </motion.div>
          </div>
        </div>

        {/* Cosmic Cycle Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          viewport={{ once: true }}
          className="text-center pb-8"
        >
          <div className="inline-flex items-center space-x-2 text-cream/40 text-xs">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-4 h-4 border border-spiritual-gold/30 rounded-full"
            >
              <div className="w-1 h-1 bg-spiritual-gold rounded-full mt-1.5 ml-1.5" />
            </motion.div>
            <span>Returning to cosmic harmony</span>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
