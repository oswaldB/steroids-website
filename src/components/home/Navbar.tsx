import { useState } from 'react'

const navLinks = [
  { label: 'Services', href: '/services' },
  { label: 'Ressources', href: '/ressources' },
  { label: 'Analyses', href: '/#insights' },
]

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-[#0A0E27]/90 backdrop-blur-md border-b border-slate-700/50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 lg:px-12">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded bg-[#CEEF2C] flex items-center justify-center">
            <span className="text-sm font-black text-[#0A0E27] leading-none">S</span>
          </div>
          <span className="text-xl font-bold text-white tracking-tight group-hover:text-[#D8F847] transition-colors">
            Steroids
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-slate-300 hover:text-[#CEEF2C] transition-colors font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/prendre-un-rendez-vous"
            className="bg-[#CEEF2C] text-[#0A0E27] text-sm font-semibold px-5 py-2.5 rounded hover:shadow-lg hover:shadow-[#CEEF2C]/25 transition-all"
          >
            <span className="block">On en parle ?</span>
            <span className="block">Remise de 3 000€</span>
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-slate-300 hover:text-[#CEEF2C] transition-colors"
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#0A0E27] border-t border-slate-700/50 px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block text-slate-300 hover:text-[#CEEF2C] transition-colors font-medium"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/prendre-un-rendez-vous"
            className="block bg-[#CEEF2C] text-[#0A0E27] text-center text-sm font-semibold px-5 py-2.5 rounded"
            onClick={() => setMenuOpen(false)}
          >
            <span className="block">On en parle ?</span>
            <span className="block">Remise de 3 000€</span>
          </a>
        </div>
      )}
    </nav>
  )
}
