import Image from 'next/image'
import Link from 'next/link'

export function Careers() {
  return (
    <section id="careers" className="bg-[#0A0E27] px-6 py-20 lg:px-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#D8F847] font-semibold text-sm uppercase tracking-widest mb-4">
              Carrières
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-6 text-balance">
              À la recherche de votre prochain défi?
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed mb-8 text-pretty">
              Nous recherchons des personnes énergisées par les mêmes choses que nos clients : 
              une réflexion audacieuse, un impact réel et le courage d\'agir en premier. 
              Rejoignez une équipe où votre travail façonne l\'avenir des industries.
            </p>
            <Link
              href="/#careers"
              className="inline-flex bg-[#CEEF2C] text-black font-semibold px-8 py-3.5 rounded hover:shadow-xl hover:shadow-[#CEEF2C]/25 hover:-translate-y-0.5 transition-all"
            >
              Découvrez les carrières
            </Link>
          </div>

          <div className="relative">
            {/* Image */}
            <div className="relative rounded-lg overflow-hidden aspect-[4/3] mb-8">
              <Image
                src="/images/careers.jpg"
                alt="Équipe Steroids collaborant dans un bureau moderne"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E27]/60 to-transparent" />
            </div>

            {/* Stats Grid overlapping image */}
            <div className="grid grid-cols-2 gap-4 -mt-20 relative px-4">
              {[
                { value: '150+', label: 'Consultants mondiaux' },
                { value: '40+', label: 'Industries servies' },
                { value: '98%', label: 'Taux de rétention' },
                { value: '3x', label: 'ROI moyen pour les clients' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-[#0A0E27]/90 backdrop-blur-sm border border-slate-700/60 rounded-lg p-5 text-center"
                >
                  <div className="text-2xl sm:text-3xl font-bold text-[#D8F847] mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
