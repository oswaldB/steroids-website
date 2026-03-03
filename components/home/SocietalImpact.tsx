import Image from 'next/image'

const initiatives = [
  {
    title: 'Fondation Steroids',
    description:
      'Des programmes de stratégie pro-bono pour les ONG et entreprises sociales - gratuitement - pour amplifier leur impact.',
    image: '/images/foundation.jpg',
  },
  {
    title: 'Steroids Forward',
    description:
      'Un programme d\'apprentissage en ligne conçu pour équiper les débutants, les changements de carrière et les leaders émergents de compétences pratiques.',
    image: '/images/forward.jpg',
  },
  {
    title: 'Croissance durable',
    description:
      'Nous aidons les organisations à innover durablement, à réaliser des gains de performance durables et à construire des effectifs qui prospèrent.',
    image: '/images/sustainable.jpg',
  },
]

export function SocietalImpact() {
  return (
    <section id="about" className="bg-[#0A0E27] px-6 py-20 lg:px-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-14">
          <p className="text-[#D8F847] font-semibold text-sm uppercase tracking-widest mb-4">
            Impact sociétal
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4 text-balance">
            Partager ce que nous avons de mieux pour aider plus de gens à réussir
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {initiatives.map((item) => (
            <div
              key={item.title}
              className="group rounded-lg overflow-hidden border border-slate-700/40 hover:border-[#CEEF2C]/40 transition-all"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E27] to-transparent" />
              </div>
              <div className="p-6 -mt-8 relative">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#D8F847] transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-400 leading-relaxed text-pretty text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
