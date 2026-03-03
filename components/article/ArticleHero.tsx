import Image from 'next/image'

interface ArticleHeroProps {
  tag: string
  title: string
  subtitle: string
  image: string
  readTime: string
  date: string
}

export function ArticleHero({ tag, title, subtitle, image, readTime, date }: ArticleHeroProps) {
  return (
    <section className="relative min-h-[60vh] flex items-end">
      <Image
        src={image}
        alt={title}
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E27] via-[#0A0E27]/80 to-[#0A0E27]/20" />
      <div className="relative w-full max-w-4xl mx-auto px-6 pb-12 pt-32 lg:px-0">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-slate-400 mb-6" aria-label="Breadcrumb">
          <a href="/" className="hover:text-[#D8F847] transition-colors">Accueil</a>
          <span className="text-slate-600">/</span>
          <a href="/#insights" className="hover:text-[#D8F847] transition-colors">Insights</a>
          <span className="text-slate-600">/</span>
          <span className="text-slate-500">Article</span>
        </nav>

        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#D8F847] mb-4">
          {tag}
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4 text-balance">
          {title}
        </h1>
        <p className="text-lg text-slate-300 leading-relaxed max-w-2xl text-pretty mb-6">
          {subtitle}
        </p>
        <div className="flex items-center gap-4 text-sm text-slate-500">
          <time>{date}</time>
          <span className="w-1 h-1 rounded-full bg-slate-600" />
          <span>{readTime}</span>
        </div>
      </div>
    </section>
  )
}
