'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { CheckCircle, Clock, Star, Target } from 'lucide-react'

const PricingSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const pricingPlans = [
    {
      id: 1,
      title: "General Consultation",
      price: "699",
      duration: "30 min",
      icon: Clock,
      features: [
        "Career & Business guidance",
        "Love & Marriage insights", 
        "Finance & Wealth planning",
        "Health & Wellness advice",
        "Family & Relationships",
        "Property & Real Estate",
        "Education & Learning",
        "Health Remedies",
        "Travel & Migration",
        "Legal Matters"
      ],
      color: "from-blue-500 to-blue-600",
      delay: 0,
      description: "Quick overview of current challenges and immediate guidance"
    },
    {
      id: 2,
      title: "Detailed 5-Year Outlook",
      price: "899", 
      duration: "45 min",
      icon: Star,
      features: [
        "Comprehensive 5-year life blueprint",
        "Career & Business trajectory",
        "Love & Marriage timeline",
        "Finance & Wealth accumulation plan",
        "Health & Wellness roadmap",
        "Family & Relationships harmony",
        "Property & Real Estate investments",
        "Education & Learning path",
        "Health Remedies & healing",
        "Travel & Migration opportunities",
        "Legal Matters resolution"
      ],
      color: "from-purple-500 to-purple-600",
      delay: 0.1,
      description: "In-depth analysis with strategic planning for next 5 years"
    },
    {
      id: 3,
      title: "Extensive 15-Year Blueprint",
      price: "1099",
      duration: "1 hr",
      icon: Target,
      features: [
        "Complete 15-year life transformation plan",
        "Career & Business empire building",
        "Love & Marriage long-term compatibility",
        "Finance & Wealth mastery strategy",
        "Health & Wellness longevity plan",
        "Family & Relationships legacy building",
        "Property & Real Estate portfolio",
        "Education & Learning mastery",
        "Health Remedies & spiritual healing",
        "Travel & Migration life changes",
        "Legal Matters & protection strategies",
        "Advanced spiritual guidance & remedies"
      ],
      color: "from-rose-500 to-rose-600",
      delay: 0.2,
      description: "Holistic life blueprint with advanced spiritual guidance"
    },
  ]

  return (
    <section id="pricing" className="section-padding bg-gradient-to-b from-deep-indigo via-midnight-blue to-deep-indigo relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 bg-spiritual-gold rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-midnight-blue rounded-full blur-3xl" />
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
            Consultation Plans
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-spiritual-gold to-transparent mx-auto mb-8" />
          <p className="text-cream text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Choose the plan that best suits your needs for clarity, guidance, and transformation.
            All plans cover comprehensive areas of life with personalized spiritual guidance.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: plan.delay }}
              className="group relative"
            >
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-spiritual-gold/20 hover:border-spiritual-gold/40 transition-all duration-300 h-full">
                {/* Icon Container */}
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 5 }}
                >
                  <plan.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="font-serif text-2xl font-bold text-gradient-white mb-4 text-center">
                  {plan.title}
                </h3>
                
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-spiritual-gold mb-2">
                    ₹{plan.price}
                  </div>
                  <div className="text-cream/80 text-lg">
                    {plan.duration} Session
                  </div>
                </div>

                <p className="text-cream/80 text-center mb-6 leading-relaxed">
                  {plan.description}
                </p>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: plan.delay + 0.3 + featureIndex * 0.05 }}
                      className="flex items-start"
                    >
                      <CheckCircle className="w-5 h-5 text-spiritual-gold mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-cream/90 text-sm leading-relaxed">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.a
                  href={`https://wa.me/919966907000?text=${encodeURIComponent(`Hi Abhishek! I want to book the ${plan.title} plan for ₹${plan.price} (${plan.duration} session). Please let me know your available slots.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-spiritual-gold to-yellow-400 text-deep-indigo font-semibold py-3 px-6 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 glow-gold inline-block text-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Book This Plan
                </motion.a>

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${plan.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                {/* Corner Decorations */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-spiritual-gold/50 rounded-full group-hover:bg-spiritual-gold transition-colors duration-300" />
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-spiritual-gold/30 rounded-full group-hover:bg-spiritual-gold transition-colors duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-spiritual-gold/20 max-w-2xl mx-auto">
            <div className="absolute top-4 left-4 w-6 h-6 bg-spiritual-gold/20 rounded-full" />
            <div className="absolute bottom-4 right-4 w-4 h-4 bg-spiritual-gold/10 rounded-full" />
            
            <h3 className="font-serif text-2xl font-bold text-gradient-gold mb-4">
              Ready to Transform Your Life?
            </h3>
            <p className="text-cream/80 mb-6 leading-relaxed">
              Each consultation includes personalized remedies, spiritual guidance, and practical solutions 
              tailored to your unique life path and challenges.
            </p>
            <motion.button
              className="btn-primary glow-gold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Book Your Consultation Now
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default PricingSection
