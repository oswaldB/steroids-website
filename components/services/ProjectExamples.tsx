export function ProjectExamples() {
  const examples = [
    {
      title: 'Refonte site internet avec blog',
      objective: 'Attirer plus de trafic qualifié',
      timeline: '1 mois',
      investment: '5000€',
      scope: 'Autant de retours que voulus pendant le mois',
      results: 'Blog SEO-optimisé + site redesigné pour conversions',
      service: 'Actif',
    },
    {
      title: 'Mini logiciel de gestion portail client',
      objective: 'Automatiser la relation client',
      timeline: '1 mois',
      investment: '5000€',
      scope: 'Autant de retours dans la fenêtre de temps',
      results: 'Portail fonctionnel avec accès client sécurisé',
      service: 'Actif',
    },
    {
      title: 'Capitalisation & substitution du capital au travail',
      objective: 'Remplacer 3 postes par des processus automatisés',
      timeline: '6 mois',
      investment: '30000€',
      scope: 'Architecture complète + déploiement + formation',
      results: 'Économies annuelles : 93600€ (2600€/mois × 3 postes × 12)',
      service: 'Boost',
    },
  ]

  return (
    <section className="py-20 px-6 sm:px-12 md:px-16 bg-[#0A0E27]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4 text-balance">
            Cas d'usage réels
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Découvrez comment nos clients accélèrent leur croissance avec des résultats mesurables.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {examples.map((example, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-lg p-8 hover:border-[#CEEF2C]/50 transition-all"
            >
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-xl font-bold text-white flex-1">{example.title}</h3>
                <span className="bg-[#CEEF2C]/10 border border-[#CEEF2C]/50 text-[#D8F847] text-xs font-semibold px-3 py-1 rounded">
                  {example.service}
                </span>
              </div>

              <p className="text-[#D8F847] font-medium mb-4">{example.objective}</p>

              <div className="space-y-3 mb-6 pb-6 border-b border-slate-700">
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-widest">Timeline</p>
                  <p className="text-white font-semibold">{example.timeline}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-widest">Investment</p>
                  <p className="text-white font-semibold">{example.investment}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-widest">Scope</p>
                  <p className="text-slate-300 text-sm">{example.scope}</p>
                </div>
              </div>

              <div>
                <p className="text-xs text-slate-400 uppercase tracking-widest mb-2">Résultats</p>
                <p className="text-[#CEEF2C] font-semibold">{example.results}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
