interface ColorSwatchProps {
  name: string
  code: string
  hex: string
  description: string
}

export function ColorSwatch({ name, code, hex, description }: ColorSwatchProps) {
  return (
    <div className="overflow-hidden rounded-lg shadow-lg">
      <div
        className="h-32 w-full flex items-center justify-center"
        style={{ backgroundColor: hex }}
      />
      <div className="bg-slate-700 p-4">
        <div className="font-semibold text-white">{name}</div>
        <div className="font-mono text-sm text-slate-300">{code}</div>
        <div className="text-xs text-slate-400 mt-2">{description}</div>
      </div>
    </div>
  )
}
