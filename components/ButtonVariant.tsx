interface ButtonVariantProps {
  variant: 'primary' | 'secondary' | 'tertiary'
  children: React.ReactNode
}

export function ButtonVariant({ variant, children }: ButtonVariantProps) {
  const baseClasses = 'px-6 py-4 rounded text-center font-semibold transition-all duration-150 cursor-pointer'
  
  const variants = {
    primary: 'bg-[#CEEF2C] text-black hover:shadow-lg hover:shadow-[#CEEF2C]/30 hover:-translate-y-0.5',
    secondary: 'bg-transparent text-[#D8F847] border-2 border-[#CEEF2C] hover:bg-[#CEEF2C]/10',
    tertiary: 'bg-transparent text-slate-300 border-b-2 border-[#CEEF2C] hover:text-white'
  }

  return (
    <button className={`${baseClasses} ${variants[variant]}`}>
      {children}
    </button>
  )
}
