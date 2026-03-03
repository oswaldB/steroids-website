import Image from 'next/image'

interface Author {
  name: string
  role: string
  avatar: string
}

interface AuthorCardProps {
  authors: Author[]
}

export function AuthorCard({ authors }: AuthorCardProps) {
  return (
    <div className="border border-slate-700/50 rounded-lg p-6 bg-slate-800/20">
      <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">
        Auteurs
      </h3>
      <div className="space-y-4">
        {authors.map((author) => (
          <div key={author.name} className="flex items-center gap-4">
            <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0">
              <Image
                src={author.avatar}
                alt={author.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">{author.name}</p>
              <p className="text-xs text-slate-500">{author.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
