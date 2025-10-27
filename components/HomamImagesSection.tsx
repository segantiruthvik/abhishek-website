'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'
import Image from 'next/image'

const HomamImagesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [loadedImages, setLoadedImages] = useState<string[]>([])
  const [loading, setLoading] = useState(true)

  // All possible Homam images - this list includes all images you might have
  const possibleImages = [
    '/homam/WhatsApp Image 2025-10-19 at 18.27.45 (1).jpeg',
    '/homam/WhatsApp Image 2025-10-19 at 18.27.45.jpeg',
    '/homam/WhatsApp Image 2025-10-19 at 18.27.46 (1).jpeg',
    '/homam/WhatsApp Image 2025-10-19 at 18.27.46.jpeg',
    '/homam/WhatsApp Image 2025-10-19 at 18.27.48.jpeg',
    '/homam/WhatsApp Image 2025-10-19 at 18.27.49 (1).jpeg',
    '/homam/WhatsApp Image 2025-10-19 at 18.27.49.jpeg',
    '/homam/WhatsApp Image 2025-10-19 at 18.27.50.jpeg',
    '/homam/WhatsApp Image 2025-10-19 at 18.27.52.jpeg',
  ]

  // Function to check if an image exists
  const checkImageExists = (src: string): Promise<boolean> => {
    return new Promise((resolve) => {
      const img = new window.Image()
      img.onload = () => resolve(true)
      img.onerror = () => resolve(false)
      img.src = src
    })
  }

  // Load only existing images
  useEffect(() => {
    const loadExistingImages = async () => {
      setLoading(true)
      const existingImages: string[] = []
      
      for (const imagePath of possibleImages) {
        const exists = await checkImageExists(imagePath)
        if (exists) {
          existingImages.push(imagePath)
        }
      }
      
      setLoadedImages(existingImages)
      setLoading(false)
    }

    loadExistingImages()
  }, [])

  useEffect(() => {
    if (loadedImages.length === 0) return

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === loadedImages.length - 1 ? 0 : prevIndex + 1
      )
    }, 3000) // Change image every 3 seconds

    return () => clearInterval(interval)
  }, [loadedImages.length])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="relative"
    >
      <div className="relative bg-gradient-to-br from-spiritual-gold/10 to-midnight-blue/10 rounded-2xl p-8 backdrop-blur-sm border border-spiritual-gold/30">
        {/* Image Container */}
        <div className="w-full h-80 bg-gradient-to-br from-spiritual-gold/10 to-midnight-blue/10 rounded-xl flex items-center justify-center relative overflow-hidden">
          {loading ? (
            <div className="text-center">
              <div className="w-24 h-24 bg-spiritual-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-spiritual-gold text-2xl animate-spin">🕉️</span>
              </div>
              <p className="text-cream font-medium">Loading Homam Images...</p>
              <p className="text-cream/80 text-sm">Please wait</p>
            </div>
          ) : loadedImages.length > 0 ? (
            loadedImages.map((image, index) => (
              <motion.div
                key={image}
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: index === currentImageIndex ? 1 : 0,
                  scale: index === currentImageIndex ? 1 : 0.8
                }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                 <Image
                   src={image}
                   alt={`Homam Image ${index + 1}`}
                   width={400}
                   height={300}
                   className="rounded-lg shadow-lg object-cover max-w-full max-h-full"
                   priority={index === 0}
                 />
              </motion.div>
            ))
          ) : (
            <div className="text-center">
              <div className="w-24 h-24 bg-spiritual-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-spiritual-gold text-2xl">🕉️</span>
              </div>
              <p className="text-cream font-medium">Sacred Homam</p>
              <p className="text-cream/80 text-sm">Divine Fire Rituals</p>
              <p className="text-cream/60 text-xs mt-2">Add your Homam images to /public/homam/ folder</p>
            </div>
          )}
        </div>

        {/* Image Indicators */}
        {loadedImages.length > 1 && (
          <div className="flex justify-center mt-4 space-x-2">
            {loadedImages.map((_, index) => (
              <motion.button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentImageIndex
                    ? 'bg-spiritual-gold scale-125'
                    : 'bg-spiritual-gold/30 hover:bg-spiritual-gold/50'
                }`}
                onClick={() => setCurrentImageIndex(index)}
                whileHover={{ scale: 1.2 }}
              />
            ))}
          </div>
        )}
        
        {/* Floating Elements */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute -top-4 -right-4 w-8 h-8 bg-spiritual-gold/30 rounded-full"
        />
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          className="absolute -bottom-4 -left-4 w-6 h-6 bg-spiritual-gold/20 rounded-full"
        />
      </div>
    </motion.div>
  )
}

export default HomamImagesSection
