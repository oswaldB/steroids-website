import { useState } from 'react'

export function Newsletter() {
  const [email, setEmail] = useState('')

  return (
    <section id="contact" className="bg-[#0A0E27] px-6 py-20 lg:px-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="bg-slate-800/40 border border-slate-700/40 rounded-xl p-10 lg:p-16 flex flex-col lg:flex-row items-start lg:items-center gap-10">
          <div className="flex-1">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3 text-balance">
              Le monde bouge vite. Restez en avant.
            </h2>
            <p className="text-slate-400 leading-relaxed text-pretty">
              {"Abonnez-vous aux dernières analyses Steroids sur la stratégie, la transformation et l'avenir des affaires."}
            </p>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex w-full lg:w-auto gap-3"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Entrez votre email"
              className="flex-1 lg:w-72 bg-slate-900 border border-slate-700 text-white placeholder:text-slate-600 rounded px-4 py-3 text-sm focus:outline-none focus:border-[#CEEF2C] transition-colors"
              aria-label="Adresse email"
            />
            <button
              type="submit"
              className="bg-[#CEEF2C] text-black font-semibold px-6 py-3 rounded hover:shadow-lg hover:shadow-[#CEEF2C]/25 transition-all text-sm whitespace-nowrap"
            >
              {"S'abonner"}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
