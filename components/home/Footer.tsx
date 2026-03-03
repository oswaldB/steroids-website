import Link from 'next/link'

const columns = [
  {
    heading: 'Entreprise',
    links: ['À propos', 'Leadership', 'Valeurs', 'Localités'],
  },
  {
    heading: 'Expertise',
    links: ['Industries', 'Capacités', 'Tech & IA', 'Études de cas'],
  },
  {
    heading: 'Ressources',
    links: ['Insights', 'Podcast', 'Blog'],
  },
  {
    heading: 'Connecter',
    links: ['Carrières', 'Contact', 'LinkedIn', 'Twitter'],
  },
]

export function Footer() {
  return (
    <footer className="bg-[#060920] px-6 py-16 lg:px-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          {columns.map((col) => (
            <div key={col.heading}>
              <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-4">
                {col.heading}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    {link === 'Contact' ? (
                      <Link
                        href="/contact"
                        className="text-sm text-slate-500 hover:text-[#D8F847] transition-colors"
                      >
                        {link}
                      </Link>
                    ) : (
                      <a
                        href="#"
                        className="text-sm text-slate-500 hover:text-[#D8F847] transition-colors"
                      >
                        {link}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-800 pt-8">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded bg-[#CEEF2C] flex items-center justify-center">
              <span className="text-xs font-black text-black leading-none">S</span>
            </div>
            <span className="text-sm text-slate-500">
              Steroids Stratégie & Transformation
            </span>
          </div>
          <p className="text-xs text-slate-600">
            {'2026 Steroids. Tous droits réservés.'}
          </p>
        </div>
      </div>
    </footer>
  )
}
