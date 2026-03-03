import Image from 'next/image'

const related = [
  {
    tag: 'Podcast',
    title: 'CEO voices : piloter l\'innovation quand les enjeux sont majeurs',
    image: '/images/insight-podcast.jpg',
  },
  {
    tag: 'Case Study',
    title: 'Comment l\'IA a redessine la croissance d\'un Fortune 500',
    image: '/images/insight-ai.jpg',
  },
  {
    tag: 'Blog Post',
    title: 'Une decennie de transformation dans les services financiers',
    image: '/images/insight-finance.jpg',
  },
]

export function RelatedArticles() {
  return (
    <section className="bg-[#060920] border-t border-slate-800 px-6 py-20 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-10">Articles recommandes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {related.map((item) => (
            <a
              key={item.title}
              href="#"
              className="group rounded-lg overflow-hidden border border-slate-700/40 hover:border-[#CEEF2C]/40 transition-all bg-slate-800/20"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E27]/80 to-transparent" />
              </div>
              <div className="p-6">
                <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#D8F847] mb-2">
                  {item.tag}
                </span>
                <h3 className="text-base font-bold text-white group-hover:text-[#D8F847] transition-colors leading-snug text-balance">
                  {item.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
