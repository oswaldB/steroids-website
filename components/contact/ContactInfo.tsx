import Link from 'next/link'

export function ContactInfo() {
  const contactDetails = [
    {
      title: 'Email',
      content: 'contact@steroids.pro',
      href: 'mailto:contact@steroids.pro',
    },
    {
      title: 'Téléphone',
      content: '+33 1 XX XX XX XX',
      href: 'tel:+33123456789',
    },
    {
      title: 'Localisation',
      content: 'Paris, France',
      href: '#',
    },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-bold text-white mb-3">Informations de contact</h3>
        <p className="text-slate-300 leading-relaxed">
          Nous serions ravis de discuter de vos projets de transformation et d'accélération. Contactez-nous pour une consultation gratuite.
        </p>
      </div>

      <div className="space-y-6">
        {contactDetails.map((detail) => (
          <div key={detail.title}>
            <h4 className="text-sm font-semibold text-[#CEEF2C] uppercase tracking-widest mb-2">
              {detail.title}
            </h4>
            <a
              href={detail.href}
              className="text-lg text-white hover:text-[#D8F847] transition-colors"
            >
              {detail.content}
            </a>
          </div>
        ))}
      </div>

      <div className="pt-8 border-t border-slate-700/50">
        <h4 className="text-sm font-semibold text-[#CEEF2C] uppercase tracking-widest mb-4">
          Horaires
        </h4>
        <div className="space-y-2 text-slate-300">
          <p>Lundi - Vendredi: 9h00 - 18h00</p>
          <p>Samedi - Dimanche: Fermé</p>
        </div>
      </div>

      <div className="pt-8 border-t border-slate-700/50">
        <h4 className="text-sm font-semibold text-[#CEEF2C] uppercase tracking-widest mb-4">
          Suivez-nous
        </h4>
        <div className="flex gap-4">
          <a href="#" className="text-slate-400 hover:text-[#CEEF2C] transition-colors">
            LinkedIn
          </a>
          <a href="#" className="text-slate-400 hover:text-[#CEEF2C] transition-colors">
            Twitter
          </a>
          <a href="#" className="text-slate-400 hover:text-[#CEEF2C] transition-colors">
            GitHub
          </a>
        </div>
      </div>
    </div>
  )
}
