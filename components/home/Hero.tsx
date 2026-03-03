import Image from 'next/image'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0A0E27] px-6 py-24 sm:py-32 lg:px-12 min-h-[85vh] flex items-center">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0E27] via-[#0A0E27]/90 to-[#0A0E27]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E27] via-transparent to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto w-full">
        <div className="max-w-3xl">
          <p className="text-[#D8F847] font-semibold text-sm uppercase tracking-widest mb-6">
            Résultats garantis. ROI immédiat.
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight text-balance">
            De l'assainissement à la domination de marché en 3 phases stratégiques.
          </h1>
          <p className="mt-6 text-lg text-slate-300 leading-relaxed max-w-2xl text-pretty">
            <span className="text-[#D8F847] font-semibold">Temps 1:</span> Assainir les bases avec automatisations pour libérer les ressources.
            <span className="block mt-2"><span className="text-[#D8F847] font-semibold">Temps 2:</span> Croissance accélérée avec de nouveaux services.</span>
            <span className="block mt-2"><span className="text-[#D8F847] font-semibold">Temps 3:</span> Devenir leader incontesté du marché.</span>
            <span className="block mt-4 text-slate-200">Stratégies modernes, ambitieuses et éprouvées. Exécution à la vitesse maximale. ROI garanti.</span>
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/services"
              className="bg-[#CEEF2C] text-black font-semibold px-8 py-3.5 rounded hover:shadow-xl hover:shadow-[#CEEF2C]/25 hover:-translate-y-0.5 transition-all"
            >
              Nos services
            </Link>
            <a
              href="/#insights"
              className="border border-slate-500 text-slate-200 font-medium px-8 py-3.5 rounded hover:border-[#CEEF2C] hover:text-[#D8F847] transition-all"
            >
              Lire les derniers insights
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
