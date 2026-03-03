'use client'

interface TocItem {
  id: string
  label: string
}

interface TableOfContentsProps {
  items: TocItem[]
}

export function TableOfContents({ items }: TableOfContentsProps) {
  return (
    <div className="border border-slate-700/50 rounded-lg p-6 bg-slate-800/20 sticky top-24">
      <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">
        Sommaire
      </h3>
      <nav className="space-y-2">
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="block text-sm text-slate-400 hover:text-[#D8F847] transition-colors py-1 border-l-2 border-slate-700 pl-4 hover:border-[#CEEF2C]"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  )
}
