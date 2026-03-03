import { PricingCard } from './PricingCard'

export function PricingSection() {
  const plans = [
    {
      name: 'Le Club',
      price: '275€',
      period: '/mois',
      description: 'Pour les entrepreneurs et petites équipes',
      features: [
        'Accès à tous les tutoriels',
        'Session live 2h par semaine',
        'Support sur vos problèmes spécifiques',
        'Communauté privée',
        'Ressources exclusives',
      ],
      cta: 'Commencer',
    },
    {
      name: 'Actif',
      price: '5000€',
      period: '/mois',
      description: 'Pour les croissances ciblées',
      features: [
        'Une tâche à la fois',
        'Multi-experts possibles',
        'Retours illimités pendant le mois',
        'Livrables rapides et itératifs',
        'Support prioritaire',
        'Roadmap ajustable',
      ],
      cta: 'Activer',
      highlight: true,
    },
    {
      name: 'Boost',
      price: '8000€',
      period: '/mois',
      description: 'Pour maximiser votre ROI',
      features: [
        'Équipe tournée vers la vitesse',
        'Multiples projets en parallèle',
        'Focus total sur ROI',
        'Reporting détaillé',
        'Stratégie d\'optimisation continue',
        'Déploiement rapide et scalable',
      ],
      cta: 'Booster',
    },
  ]

  return (
    <section className="py-20 px-6 sm:px-12 md:px-16 bg-gradient-to-b from-[#0A0E27] to-[#0A0E27]/80">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4 text-balance">
            Tarifs simples et transparents
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Choisissez le plan qui correspond à votre ambition. Tous les prix incluent support et itérations illimitées.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6">
          {plans.map((plan) => (
            <PricingCard key={plan.name} {...plan} />
          ))}
        </div>

        <div className="mt-16 p-6 bg-slate-900/50 border border-slate-700 rounded-lg text-center">
          <p className="text-slate-300">
            Besoin d'un plan personnalisé ? <span className="text-[#CEEF2C] font-semibold">Contactez-nous</span> pour une consultation gratuite.
          </p>
        </div>
      </div>
    </section>
  )
}
