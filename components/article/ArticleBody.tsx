export function ArticleBody() {
  return (
    <article className="prose-steroids">
      {/* Section 1 */}
      <section id="context" className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Le contexte : un monde en acceleration</h2>
        <p className="text-slate-300 leading-relaxed mb-4">
          Les entreprises font face a une convergence de disruptions sans precedent. Tensions geopolitiques, 
          transition energetique, intelligence artificielle generative, inflation des talents : les forces qui 
          redessinent le paysage strategique sont multiples, simultanees et interconnectees.
        </p>
        <p className="text-slate-300 leading-relaxed mb-4">
          Dans ce contexte, les approches traditionnelles de planification strategique a 5 ans montrent leurs 
          limites. Nos recherches montrent que 73% des plans strategiques deviennent obsoletes avant leur 
          deuxieme annee de deploiement. La question n&apos;est plus de predire l&apos;avenir, mais de construire 
          des organisations capables de s&apos;adapter en continu.
        </p>

        {/* Callout */}
        <div className="border-l-4 border-[#CEEF2C] bg-[#CEEF2C]/5 rounded-r-lg p-6 my-8">
          <p className="text-[#D8F847] font-semibold text-lg mb-2">Point cle</p>
          <p className="text-slate-300 leading-relaxed">
            73% des plans strategiques deviennent obsoletes avant leur deuxieme annee. 
            Les entreprises resilientes adoptent des cycles de revision trimestriels integrant 
            des signaux faibles en temps reel.
          </p>
        </div>
      </section>

      {/* Section 2 */}
      <section id="piliers" className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Les trois piliers de la resilience strategique</h2>
        <p className="text-slate-300 leading-relaxed mb-6">
          Notre analyse de plus de 200 entreprises sur une decennie revele trois piliers fondamentaux 
          qui distinguent les organisations les plus resilientes :
        </p>

        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded bg-[#CEEF2C]/10 border border-[#CEEF2C]/30 flex items-center justify-center shrink-0">
              <span className="text-[#D8F847] font-bold text-sm">01</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Intelligence decisionnelle en temps reel</h3>
              <p className="text-slate-400 leading-relaxed">
                Deployer des systemes qui captent, synthetisent et traduisent les signaux de marche en 
                recommandations actionnables pour les decideurs. Cela implique une fusion de data analytics, 
                IA et expertise sectorielle humaine.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-10 h-10 rounded bg-[#CEEF2C]/10 border border-[#CEEF2C]/30 flex items-center justify-center shrink-0">
              <span className="text-[#D8F847] font-bold text-sm">02</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Architecture organisationnelle modulaire</h3>
              <p className="text-slate-400 leading-relaxed">
                Structurer l&apos;entreprise en unites autonomes capables de pivoter independamment, 
                tout en preservant la coherence strategique globale. Les entreprises qui adoptent ce modele 
                reagissent 2.4x plus vite aux disruptions.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-10 h-10 rounded bg-[#CEEF2C]/10 border border-[#CEEF2C]/30 flex items-center justify-center shrink-0">
              <span className="text-[#D8F847] font-bold text-sm">03</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Culture d&apos;experimentation systematique</h3>
              <p className="text-slate-400 leading-relaxed">
                Institutionnaliser le test-and-learn a tous les niveaux de l&apos;organisation. 
                Les leaders resilients consacrent 15 a 20% de leurs ressources a des paris strategiques 
                exploratoires, avec des mecanismes de scaling rapide pour les initiatives prometteuses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section id="donnees" className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Ce que disent les donnees</h2>
        <p className="text-slate-300 leading-relaxed mb-6">
          Notre etude longitudinale sur 10 ans, couvrant 12 secteurs et 34 geographies, 
          revele des ecarts de performance significatifs :
        </p>

        {/* Data table */}
        <div className="overflow-x-auto rounded-lg border border-slate-700/50 mb-6">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-slate-700/50 bg-slate-800/40">
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-widest text-slate-400">Indicateur</th>
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-widest text-slate-400">Top 10%</th>
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-widest text-slate-400">Moyenne</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b border-slate-800/50">
                <td className="px-6 py-4 text-slate-300">TSR sur 5 ans</td>
                <td className="px-6 py-4 text-[#D8F847] font-semibold">+147%</td>
                <td className="px-6 py-4 text-slate-500">+38%</td>
              </tr>
              <tr className="border-b border-slate-800/50">
                <td className="px-6 py-4 text-slate-300">Temps de reaction aux disruptions</td>
                <td className="px-6 py-4 text-[#D8F847] font-semibold">3.2 mois</td>
                <td className="px-6 py-4 text-slate-500">11.8 mois</td>
              </tr>
              <tr className="border-b border-slate-800/50">
                <td className="px-6 py-4 text-slate-300">Retention des talents cles</td>
                <td className="px-6 py-4 text-[#D8F847] font-semibold">92%</td>
                <td className="px-6 py-4 text-slate-500">71%</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-slate-300">Marge EBITDA</td>
                <td className="px-6 py-4 text-[#D8F847] font-semibold">28.4%</td>
                <td className="px-6 py-4 text-slate-500">16.1%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-slate-600 italic">
          Source : Steroids Global Resilience Index, 2024. Echantillon : 214 entreprises, capitalisation boursiere {'>'} 1Md$.
        </p>
      </section>

      {/* Section 4 */}
      <section id="actions" className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Les actions a prendre maintenant</h2>
        <p className="text-slate-300 leading-relaxed mb-6">
          Pour les dirigeants qui souhaitent engager cette transformation, nous recommandons 
          une approche en quatre phases :
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { phase: 'Phase 1', title: 'Diagnostic', desc: 'Evaluer la maturite resiliente de votre organisation sur 12 dimensions cles.' },
            { phase: 'Phase 2', title: 'Architecture', desc: 'Redessiner la structure organisationnelle et les processus decisionnels.' },
            { phase: 'Phase 3', title: 'Activation', desc: 'Deployer les capacites technologiques et former les equipes dirigeantes.' },
            { phase: 'Phase 4', title: 'Acceleration', desc: 'Scaler les initiatives pilotes et ancrer la resilience dans la culture.' },
          ].map((item) => (
            <div key={item.phase} className="border border-slate-700/40 rounded-lg p-5 bg-slate-800/20 hover:border-[#CEEF2C]/40 transition-colors">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#D8F847] mb-2 block">{item.phase}</span>
              <h4 className="text-base font-bold text-white mb-1">{item.title}</h4>
              <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 5 */}
      <section id="conclusion" className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Conclusion</h2>
        <p className="text-slate-300 leading-relaxed mb-4">
          La resilience strategique n&apos;est pas un luxe, c&apos;est un imperatif. Les entreprises 
          qui investissent aujourd&apos;hui dans leur capacite d&apos;adaptation ne font pas que se proteger 
          contre les risques -- elles se positionnent pour capturer une part disproportionnee de la 
          valeur creee par les disruptions a venir.
        </p>
        <p className="text-slate-300 leading-relaxed">
          Chez Steroids, nous accompagnons les dirigeants les plus ambitieux dans cette transformation. 
          Parce que dans un monde qui accelere, rester immobile est le plus grand risque.
        </p>
      </section>

      {/* CTA */}
      <div className="border border-[#CEEF2C]/30 rounded-lg p-8 bg-[#CEEF2C]/5 text-center">
        <p className="text-lg font-semibold text-white mb-2">Vous souhaitez approfondir ce sujet ?</p>
        <p className="text-slate-400 mb-6 text-sm">
          Echangez avec nos experts en strategie pour un diagnostic personnalise.
        </p>
        <a
          href="#contact"
          className="inline-block bg-[#CEEF2C] text-[#0A0E27] text-sm font-semibold px-8 py-3 rounded hover:shadow-lg hover:shadow-[#CEEF2C]/25 transition-all"
        >
          Prendre rendez-vous
        </a>
      </div>
    </article>
  )
}
