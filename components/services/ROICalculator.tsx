export function ROICalculator() {
  return (
    <section className="py-20 px-6 sm:px-12 md:px-16 bg-gradient-to-b from-[#0A0E27] to-[#0A0E27]/80">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white tracking-tight mb-4 text-balance">
            Calculer votre ROI potentiel
          </h2>
          <p className="text-lg text-slate-300">
            Découvrez les économies et gains que vous pourriez réaliser.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Capital substitution example */}
          <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-8">
            <h3 className="text-xl font-bold text-white mb-6">Substitution Capital</h3>

            <div className="space-y-4 mb-8 p-6 bg-[#CEEF2C]/5 border border-[#CEEF2C]/20 rounded">
              <div className="flex justify-between items-center">
                <span className="text-slate-300">Salaire mensuel par poste</span>
                <span className="text-white font-semibold">2600€</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-300">Nombre de postes remplacés</span>
                <span className="text-white font-semibold">3</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-300">Durée d'amortissement</span>
                <span className="text-white font-semibold">6 mois</span>
              </div>
              <div className="border-t border-slate-600 pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-[#D8F847] font-bold">Économies annuelles</span>
                  <span className="text-[#CEEF2C] font-bold text-lg">93600€</span>
                </div>
              </div>
            </div>

            <div className="text-xs text-slate-400">
              Calcul: 2600€ × 3 postes × 12 mois = <span className="text-[#CEEF2C] font-semibold">93600€/an</span>
            </div>
          </div>

          {/* Quick project example */}
          <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-8">
            <h3 className="text-xl font-bold text-white mb-6">Projet Rapide</h3>

            <div className="space-y-4 mb-8 p-6 bg-[#CEEF2C]/5 border border-[#CEEF2C]/20 rounded">
              <div className="flex justify-between items-center">
                <span className="text-slate-300">Investment Actif</span>
                <span className="text-white font-semibold">5000€</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-300">Timeline</span>
                <span className="text-white font-semibold">1 mois</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-300">Exemple: nouveaux leads générés</span>
                <span className="text-white font-semibold">+30/mois</span>
              </div>
              <div className="border-t border-slate-600 pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-[#D8F847] font-bold">Breakeven (à 500€/conversion)</span>
                  <span className="text-[#CEEF2C] font-bold text-lg">~11 leads</span>
                </div>
              </div>
            </div>

            <div className="text-xs text-slate-400">
              {'ROI en 1 mois si conversions > 10 clients'}
            </div>
          </div>
        </div>

        <div className="mt-12 p-8 bg-gradient-to-r from-[#CEEF2C]/10 to-[#D8F847]/10 border border-[#CEEF2C]/30 rounded-lg">
          <p className="text-center text-slate-200">
            Ces chiffres sont basés sur des cas réels. Votre ROI exact dépend de votre contexte.
            <span className="block text-[#CEEF2C] font-semibold mt-2">Parlons de votre cas d'usage spécifique.</span>
          </p>
        </div>
      </div>
    </section>
  )
}
