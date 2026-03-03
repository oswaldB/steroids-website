import Image from 'next/image'
import Link from 'next/link'

const insights = [
  {
    tag: 'Article',
    title: 'La nouvelle ère de la résilience stratégique : comment les leaders protègent leurs organisations',
    description:
      'Les perturbations s\'accélèrent. Découvrez comment les 10% les plus performants construisent des stratégies adaptables.',
    image: '/images/insight-strategy.jpg',
    href: '/insights/strategic-resilience',
  },
  {
    tag: 'Podcast',
    title: 'Voix de PDG : innover quand les enjeux sont les plus élevés',
    description:
      'Une conversation avec trois leaders transformationnels sur le courage de pivoter et la discipline de croître.',
    image: '/images/insight-podcast.jpg',
  },
  {
    tag: 'Étude de cas',
    title: 'Exploiter l\'IA pour redéfinir la croissance des revenus d\'une Fortune 500',
    description:
      'Comment nous avons aidé une entreprise mondiale à débloquer une augmentation de 23% des revenus.',
    image: '/images/insight-ai.jpg',
  },
  {
    tag: 'Blog',
    title: 'Avant et après : une décennie de transformation dans les services financiers',
    description:
      'De la banque numérique à la finance intégrée -- les forces qui façonnent l\'industrie.',
    image: '/images/insight-finance.jpg',
  },
]

export function FeaturedInsights() {
  return (
    <section id="insights" className="bg-[#0A0E27] px-6 py-20 lg:px-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-12">
          Insights en vedette
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Hero card */}
          <Link
            href={insights[0].href}
            className="group relative rounded-lg overflow-hidden border border-slate-700/50 flex flex-col justify-end min-h-[420px] hover:border-[#CEEF2C]/40 transition-all"
          >
            <Image
              src={insights[0].image}
              alt={insights[0].title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E27] via-[#0A0E27]/70 to-transparent" />
            <div className="relative p-8 lg:p-10">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#D8F847] mb-3">
                {insights[0].tag}
              </span>
              <h3 className="text-2xl lg:text-3xl font-bold text-white leading-snug mb-3 group-hover:text-[#D8F847] transition-colors text-balance">
                {insights[0].title}
              </h3>
              <p className="text-slate-300 leading-relaxed text-pretty">
                {insights[0].description}
              </p>
            </div>
          </Link>

          {/* Side cards */}
          <div className="flex flex-col gap-6">
            {insights.slice(1).map((item) => (
              <div
                key={item.title}
                className="group bg-slate-800/30 border border-slate-700/40 rounded-lg overflow-hidden hover:border-slate-700/40 transition-all flex opacity-50 cursor-not-allowed"
              >
                <div className="relative w-32 sm:w-40 shrink-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 flex flex-col justify-center">
                  <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#D8F847] mb-2">
                    {item.tag}
                  </span>
                  <h3 className="text-base font-bold text-white group-hover:text-[#D8F847] transition-colors leading-snug mb-1.5 text-balance">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed text-pretty line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
