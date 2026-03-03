'use client'

import { ColorSwatch } from '@/components/ColorSwatch'
import { ButtonVariant } from '@/components/ButtonVariant'
import { StrategyCard } from '@/components/StrategyCard'
import { Principle } from '@/components/Principle'
import { SpacingDemo } from '@/components/SpacingDemo'
import { WaveBackground } from '@/components/WaveBackground'
import Link from 'next/link'

export default function StyleGuidePage() {
  return (
    <div className="relative min-h-screen bg-[#0A0E27]">
      <WaveBackground />
      {/* Header */}
      <header className="relative z-10 border-b border-[#CEEF2C]/30 px-8 py-8 sm:px-12 md:px-16">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-5xl sm:text-6xl font-bold text-[#CEEF2C] tracking-tight mb-2">
              Steroids
            </h1>
            <p className="text-lg text-slate-400">Design System for Transformation & Innovation</p>
          </div>
          <Link
            href="/"
            className="text-sm text-[#CEEF2C] border border-[#CEEF2C]/40 rounded px-4 py-2 hover:bg-[#CEEF2C]/10 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </header>

      <main className="relative z-10 px-8 py-16 sm:px-12 md:px-16">
        <div className="max-w-5xl mx-auto space-y-20">
          
          {/* Section couleurs */}
          <section>
            <h2 className="text-4xl font-bold text-white mb-8 tracking-tight">Couleurs</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <ColorSwatch name="Steroids Neon" code="#CEEF2C" hex="#CEEF2C" description="Vitesse, performance, innovation" />
              <ColorSwatch name="Racing Black" code="#0A0E27" hex="#0A0E27" description="Rigueur, performance" />
              <ColorSwatch name="Pure White" code="#FFFFFF" hex="#FFFFFF" description="Clarté, confiance" />
              <ColorSwatch name="Steel Gray" code="#3D4A5C" hex="#3D4A5C" description="Sophistication, stabilité" />
              <ColorSwatch name="Velocity Silver" code="#E8E8E8" hex="#E8E8E8" description="Modernité, légèreté" />
              <ColorSwatch name="Success Green" code="#00D97E" hex="#00D97E" description="Transformation réussie" />
            </div>
          </section>

          {/* Section typographie */}
          <section>
            <h2 className="text-4xl font-bold text-white mb-8 tracking-tight">Typography</h2>
            <div className="bg-slate-800/60 backdrop-blur rounded p-8 space-y-6 border border-slate-700/50">
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-widest mb-2">Heading 1</p>
                <h3 className="text-5xl font-bold text-white">Principal Headline</h3>
              </div>
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-widest mb-2">Heading 2</p>
                <h3 className="text-4xl font-semibold text-white">Major Subtitle</h3>
              </div>
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-widest mb-2">Body Text</p>
                <p className="text-base text-slate-200 leading-relaxed">Transform your organization with proven strategies and uncompromising execution.</p>
              </div>
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-widest mb-2">Caption</p>
                <p className="text-sm text-slate-500">Secondary detail and complementary information</p>
              </div>
            </div>
          </section>

          {/* Buttons Section */}
          <section>
            <h2 className="text-4xl font-bold text-white mb-8 tracking-tight">Buttons</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <ButtonVariant variant="primary">Start Transformation</ButtonVariant>
              <ButtonVariant variant="secondary">Learn More</ButtonVariant>
              <ButtonVariant variant="tertiary">Explore</ButtonVariant>
            </div>
          </section>

          {/* Strategy Cards Section */}
          <section>
            <h2 className="text-4xl font-bold text-white mb-8 tracking-tight">Strategy Cards</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <StrategyCard title="Strategy Complete" description="Strategic diagnosis completed. Ready for execution phase." status="complete" />
              <StrategyCard title="In Progress" description="Transformation underway. 60% of roadmap completed." status="in-progress" />
              <StrategyCard title="Blocked" description="Missing resources. Immediate action required." status="blocked" />
            </div>
          </section>

          {/* Principles Section */}
          <section>
            <h2 className="text-4xl font-bold text-white mb-8 tracking-tight">Revolution UI Principles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Principle number={1} title="Performance First" description="Every pixel, every interaction matters in transformation." />
              <Principle number={2} title="Clarity & Speed" description="Hierarchical information for rapid decision-making." />
              <Principle number={3} title="Precision" description="Pixel-perfect alignment, no approximation." />
              <Principle number={4} title="Minimalism" description="Zero unnecessary decoration, pure substance." />
              <Principle number={5} title="Accessibility" description="WCAG AA minimum. Inclusive for everyone." />
            </div>
          </section>

          {/* Spacing Section */}
          <section>
            <h2 className="text-4xl font-bold text-white mb-8 tracking-tight">Spacing System (8px Grid)</h2>
            <SpacingDemo />
          </section>

        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-slate-700/50 mt-24 px-8 py-8 sm:px-12 md:px-16 text-center text-slate-400">
        <p>Steroids Strategy & Transformation | Design System v1.0</p>
        <p className="text-sm mt-2">Built on Revolution UI Principles</p>
      </footer>
    </div>
  )
}
