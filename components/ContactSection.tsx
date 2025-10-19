'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { MessageCircle, Mail, Phone, Clock, CheckCircle } from 'lucide-react'

const ContactSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Create WhatsApp message
    const message = `Hello Abhishek! I'm interested in booking a session.

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

Message: ${formData.message}

Please let me know your available slots. Thank you!`
    
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/919876543210?text=${encodedMessage}`
    
    window.open(whatsappUrl, '_blank')
    setIsSubmitted(true)
  }

  const contactMethods = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Quick responses and instant booking",
      action: "Chat Now",
      color: "from-green-500 to-green-600",
      href: "https://wa.me/919876543210",
    },
    {
      icon: Mail,
      title: "Email",
      description: "Detailed consultations via email",
      action: "Send Email",
      color: "from-blue-500 to-blue-600",
      href: "mailto:abhishek@spiritualguide.com",
    },
    {
      icon: Phone,
      title: "Phone Call",
      description: "Direct voice consultation",
      action: "Call Now",
      color: "from-purple-500 to-purple-600",
      href: "tel:+919876543210",
    },
  ]

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-deep-indigo via-cream/5 to-off-white relative overflow-hidden">
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

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gradient-gold mb-6">
            Connect With Me
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-spiritual-gold to-transparent mx-auto mb-8" />
          <p className="text-deep-indigo text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            If you seek clarity, healing, and divine alignment, I'm here to guide you on your spiritual journey. 
            Choose the method that feels most comfortable for you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <h3 className="font-serif text-2xl font-bold text-deep-indigo mb-8">
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
                      <h4 className="font-semibold text-deep-indigo text-lg mb-1">
                        {method.title}
                      </h4>
                      <p className="text-deep-indigo/70 text-sm mb-2">
                        {method.description}
                      </p>
                      <span className="inline-block px-3 py-1 bg-spiritual-gold/20 text-spiritual-gold text-xs rounded-full font-medium">
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
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-spiritual-gold/20"
            >
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="w-5 h-5 text-spiritual-gold" />
                <h4 className="font-semibold text-deep-indigo">Availability</h4>
              </div>
              <div className="space-y-2 text-sm text-deep-indigo/80">
                <p>Monday - Friday: 9:00 AM - 8:00 PM</p>
                <p>Saturday: 10:00 AM - 6:00 PM</p>
                <p>Sunday: 11:00 AM - 5:00 PM</p>
                <p className="text-spiritual-gold font-medium">Emergency consultations available</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-spiritual-gold/20"
          >
            <h3 className="font-serif text-2xl font-bold text-deep-indigo mb-6">
              Send a Message
            </h3>
            
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h4 className="font-semibold text-deep-indigo text-lg mb-2">
                  Message Sent!
                </h4>
                <p className="text-deep-indigo/70">
                  Thank you for reaching out. I'll get back to you soon.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-deep-indigo mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-spiritual-gold/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-spiritual-gold/50 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-deep-indigo mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-spiritual-gold/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-spiritual-gold/50 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-deep-indigo mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-spiritual-gold/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-spiritual-gold/50 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-deep-indigo mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-spiritual-gold/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-spiritual-gold/50 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell me about your situation and what guidance you're seeking..."
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full btn-primary glow-gold"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message via WhatsApp
                </motion.button>

                <p className="text-xs text-deep-indigo/60 text-center">
                  By sending a message, you agree to our privacy policy and terms of service.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
