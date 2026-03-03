import { Navbar } from '@/components/home/Navbar'
import { Hero } from '@/components/home/Hero'
import { FeaturedInsights } from '@/components/home/FeaturedInsights'
import { HowWeHelp } from '@/components/home/HowWeHelp'
import { Careers } from '@/components/home/Careers'
import { SocietalImpact } from '@/components/home/SocietalImpact'
import { Newsletter } from '@/components/home/Newsletter'
import { Footer } from '@/components/home/Footer'
import { WaveBackground } from '@/components/WaveBackground'

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-[#0A0E27]">
      <WaveBackground />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <FeaturedInsights />
        <HowWeHelp />
        <Careers />
        <SocietalImpact />
        <Newsletter />
        <Footer />
      </div>
    </div>
  )
}
