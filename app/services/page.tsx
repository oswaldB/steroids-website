import { Navbar } from '@/components/home/Navbar'
import { Footer } from '@/components/home/Footer'
import { PricingSection } from '@/components/services/PricingSection'
import { ProjectExamples } from '@/components/services/ProjectExamples'
import { ROICalculator } from '@/components/services/ROICalculator'

export const metadata = {
  title: 'Services | Steroids',
  description: 'Découvrez nos trois offres: Le Club (275€), Actif (5000€) et Boost (8000€). Solutions adaptées à vos besoins.',
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#0A0E27]">
      <Navbar />

      {/* Hero */}
      <section className="relative py-20 px-6 sm:px-12 md:px-16 border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-white tracking-tight mb-6 text-balance">
            Nos services
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Trois formules flexibles pour accélérer votre transformation. Du mentorat continu au déploiement haute-vitesse, 
            trouvez le plan qui vous pousse vers vos objectifs.
          </p>
        </div>
      </section>

      {/* Pricing */}
      <PricingSection />

      {/* Project Examples */}
      <ProjectExamples />

      {/* ROI Calculator */}
      <ROICalculator />

      {/* CTA Section */}
      <section className="py-16 px-6 sm:px-12 md:px-16 bg-[#0A0E27]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Prêt à accélérer ?</h2>
          <p className="text-slate-300 mb-8 text-lg">
            Réservez une consultation gratuite de 30 minutes pour explorer le plan optimal pour vous.
          </p>
          <button className="bg-[#CEEF2C] text-[#0A0E27] font-bold px-8 py-4 rounded text-lg hover:shadow-lg hover:shadow-[#CEEF2C]/30 hover:-translate-y-0.5 transition-all">
            Réserver une consultation
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
