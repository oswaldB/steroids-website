interface PrincipleProps {
  number: number
  title: string
  description: string
}

export function Principle({ number, title, description }: PrincipleProps) {
  return (
    <div className="p-6 bg-[#CEEF2C]/10 border-l-4 border-[#CEEF2C] rounded">
      <div className="text-4xl font-bold text-[#D8F847] mb-2">{number}</div>
      <h3 className="text-base font-semibold text-white mb-2">{title}</h3>
      <p className="text-sm text-slate-400">{description}</p>
    </div>
  )
}
