interface StrategyCardProps {
  title: string
  description: string
  status: 'complete' | 'in-progress' | 'blocked'
}

export function StrategyCard({ title, description, status }: StrategyCardProps) {
  const statusColors = {
    complete: 'bg-emerald-500',
    'in-progress': 'bg-[#CEEF2C] animate-pulse',
    blocked: 'bg-red-600'
  }

  return (
    <div className="border border-[#CEEF2C] rounded p-6 bg-[#CEEF2C]/5 hover:shadow-xl hover:shadow-[#CEEF2C]/15 hover:-translate-y-1 transition-all duration-200">
      <div className="flex items-center gap-3 mb-4">
        <div className={`w-3 h-3 rounded-full ${statusColors[status]}`} />
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>
      <p className="text-sm text-slate-400 leading-relaxed">{description}</p>
    </div>
  )
}
