import { Navbar } from '@/components/home/Navbar'
import { Footer } from '@/components/home/Footer'
import { WaveBackground } from '@/components/WaveBackground'
import { ArticleHero } from '@/components/article/ArticleHero'
import { AuthorCard } from '@/components/article/AuthorCard'
import { TableOfContents } from '@/components/article/TableOfContents'
import { ArticleBody } from '@/components/article/ArticleBody'
import { RelatedArticles } from '@/components/article/RelatedArticles'

export const metadata = {
  title: 'La resilience strategique : comment les leaders preparent l\'avenir | Steroids',
  description:
    'Les entreprises les plus performantes construisent des strategies adaptatives. Decouvrez les trois piliers de la resilience strategique.',
}

const authors = [
  {
    name: 'Claire Dumont',
    role: 'Senior Partner, Strategy Practice',
    avatar: '/images/author-1.jpg',
  },
  {
    name: 'Maxime Leroy',
    role: 'Associate Partner, Transformation',
    avatar: '/images/author-2.jpg',
  },
]

const tocItems = [
  { id: 'context', label: 'Le contexte : un monde en acceleration' },
  { id: 'piliers', label: 'Les trois piliers de la resilience' },
  { id: 'donnees', label: 'Ce que disent les donnees' },
  { id: 'actions', label: 'Les actions a prendre maintenant' },
  { id: 'conclusion', label: 'Conclusion' },
]

export default function ArticlePage() {
  return (
    <div className="relative min-h-screen bg-[#0A0E27]">
      <WaveBackground />
      <div className="relative z-10">
        <Navbar />

        <ArticleHero
          tag="Article"
          title="La resilience strategique : comment les leaders preparent l'avenir"
          subtitle="Les entreprises les plus performantes ne predisent pas l'avenir. Elles construisent des organisations capables de s'adapter a n'importe quel scenario."
          image="/images/insight-strategy.jpg"
          readTime="12 min de lecture"
          date="14 fevrier 2026"
        />

        {/* Content grid: body + sidebar */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main content */}
            <div className="flex-1 min-w-0 lg:max-w-3xl">
              <ArticleBody />
            </div>

            {/* Sidebar */}
            <aside className="w-full lg:w-72 shrink-0 space-y-6">
              <AuthorCard authors={authors} />
              <TableOfContents items={tocItems} />

              {/* Share */}
              <div className="border border-slate-700/50 rounded-lg p-6 bg-slate-800/20">
                <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">
                  Partager
                </h3>
                <div className="flex gap-3">
                  {['LinkedIn', 'X', 'Email'].map((platform) => (
                    <a
                      key={platform}
                      href="#"
                      className="text-xs text-slate-400 border border-slate-700/50 rounded px-3 py-2 hover:text-teal-400 hover:border-teal-500/40 transition-colors"
                    >
                      {platform}
                    </a>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="border border-slate-700/50 rounded-lg p-6 bg-slate-800/20">
                <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">
                  Sujets
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['Strategie', 'Resilience', 'Transformation', 'Leadership', 'IA'].map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-slate-400 bg-slate-800/60 border border-slate-700/40 rounded-full px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>

        <RelatedArticles />
        <Footer />
      </div>
    </div>
  )
}
