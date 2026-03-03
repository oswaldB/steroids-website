import { Metadata } from 'next'
import Image from 'next/image'
import { Navbar } from '@/components/home/Navbar'
import { Footer } from '@/components/home/Footer'
import { ContactForm } from '@/components/contact/ContactForm'
import { ContactInfo } from '@/components/contact/ContactInfo'

export const metadata: Metadata = {
  title: 'Contact | Steroids',
  description: 'Contactez notre équipe pour discuter de vos projets de transformation et d\'accélération.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0A0E27]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-24 px-6 lg:px-12 border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <p className="text-[#D8F847] font-semibold text-sm uppercase tracking-widest mb-4">
              Contactez-nous
            </p>
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 tracking-tight text-balance">
              Discutons de votre transformation
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Notre équipe est prête à répondre à vos questions et vous aider à accélérer votre croissance.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-white mb-8 tracking-tight">
                Envoyez-nous un message
              </h2>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div>
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 lg:px-12 bg-slate-800/30 border-t border-slate-700/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Pas sûr par où commencer ?</h2>
          <p className="text-slate-300 text-lg mb-8">
            Découvrez nos trois services et trouvez la formule idéale pour votre projet.
          </p>
          <a
            href="/services"
            className="inline-flex bg-[#CEEF2C] text-black font-semibold px-8 py-3.5 rounded hover:shadow-xl hover:shadow-[#CEEF2C]/25 hover:-translate-y-0.5 transition-all"
          >
            Explorer nos services
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
