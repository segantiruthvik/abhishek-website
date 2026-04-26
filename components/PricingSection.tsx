'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { CheckCircle, Clock } from 'lucide-react'

const PricingSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const pricingPlans = [
    {
      id: 1,
      title: 'General Consultation',
      price: '40',
      duration: '45 min',
      icon: Clock,
      features: [
        'Personalized advice on your key questions',
        'Covers career, relationships, health, and more',
        'Practical remedies & recommendations',
        'Live Q&A with a professional',
      ],
      color: 'from-blue-500 to-blue-600',
      delay: 0,
      description: 'A 45-minute session for clarity on your areas of concern.',
    },
  ]

  return (
    <section
      id="pricing"
      className="section-padding bg-gradient-to-b from-deep-indigo via-midnight-blue to-deep-indigo relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 bg-spiritual-gold rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-midnight-blue rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-black text-gradient-gold mb-6 drop-shadow-2xl">
            Consultation Plans
          </h2>

          <div className="h-1 w-32 bg-gradient-to-r from-spiritual-gold to-transparent mx-auto mb-8" />

          <p className="text-cream font-semibold text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Choose the plan that best suits your needs for{' '}
            <span className="text-spiritual-gold font-bold">clarity</span>,{' '}
            <span className="text-spiritual-gold font-bold">guidance</span>, and{' '}
            <span className="text-spiritual-gold font-bold">transformation</span>.
            All plans cover comprehensive areas of life with personalized spiritual guidance.
          </p>
        </motion.div>

        {/* Pricing Card */}
        <div className="flex justify-center">
          {pricingPlans.map((plan) => {
            const Icon = plan.icon

            const whatsappMessage = `Namaste Abhishek! 🙏

I visited your website and I am interested in booking a consultation.

📋 *Consultation Details:*
• Plan: ${plan.title}
• Duration: ${plan.duration}
• Investment: $${plan.price}

Please let me know your available slots and the booking process.

Thank you for your time.`

            const whatsappLink = `https://wa.me/919966907000?text=${encodeURIComponent(
              whatsappMessage
            )}`

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: plan.delay }}
                className="group relative w-full max-w-md"
              >
                <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-spiritual-gold/20 hover:border-spiritual-gold/40 transition-all duration-300 h-full flex flex-col">
                  {/* Icon Container */}
                  <motion.div
                    className={`w-14 h-14 md:w-16 md:h-16 bg-gradient-to-r ${plan.color} rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 5 }}
                  >
                    <Icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                  </motion.div>

                  {/* Plan Title */}
                  <h3 className="font-serif text-2xl font-bold text-gradient-white mb-4 text-center drop-shadow-lg">
                    {plan.title}
                  </h3>

                  {/* Price */}
                  <div className="text-center mb-6">
                    <div className="text-4xl font-black text-spiritual-gold mb-2 drop-shadow-lg">
                      ${plan.price}
                    </div>

                    <div className="text-cream font-semibold text-lg">
                      {plan.duration} Session
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-cream font-medium text-center mb-6 leading-relaxed">
                    {plan.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3 mb-8 flex-grow">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{
                          duration: 0.4,
                          delay: plan.delay + 0.3 + featureIndex * 0.05,
                        }}
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
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-spiritual-gold to-yellow-400 text-deep-indigo font-black py-2.5 px-4 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 glow-gold text-center text-sm whitespace-nowrap relative z-10 drop-shadow-lg"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Book This Plan
                  </motion.a>

                  {/* Hover Glow Effect */}
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${plan.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}
                  />

                  {/* Corner Decorations */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-spiritual-gold/50 rounded-full group-hover:bg-spiritual-gold transition-colors duration-300" />
                  <div className="absolute bottom-4 left-4 w-1 h-1 bg-spiritual-gold/30 rounded-full group-hover:bg-spiritual-gold transition-colors duration-300" />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default PricingSection
