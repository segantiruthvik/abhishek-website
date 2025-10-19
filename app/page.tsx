import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import PhilosophySection from '@/components/PhilosophySection'
import RemediesSection from '@/components/RemediesSection'
import ExpertiseSection from '@/components/ExpertiseSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import VisionSection from '@/components/VisionSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative">
      <HeroSection />
      <AboutSection />
      <PhilosophySection />
      <RemediesSection />
      <ExpertiseSection />
      <TestimonialsSection />
      <VisionSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
