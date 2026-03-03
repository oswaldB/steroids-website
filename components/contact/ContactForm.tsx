'use client'

import { useState } from 'react'

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
    setFormData({ name: '', email: '', company: '', service: '', message: '' })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-white mb-2">Nom *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded text-white placeholder-slate-500 focus:outline-none focus:border-[#CEEF2C] focus:ring-1 focus:ring-[#CEEF2C]/30 transition-colors"
            placeholder="Votre nom"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-white mb-2">Email *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded text-white placeholder-slate-500 focus:outline-none focus:border-[#CEEF2C] focus:ring-1 focus:ring-[#CEEF2C]/30 transition-colors"
            placeholder="votre@email.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-white mb-2">Entreprise</label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded text-white placeholder-slate-500 focus:outline-none focus:border-[#CEEF2C] focus:ring-1 focus:ring-[#CEEF2C]/30 transition-colors"
            placeholder="Votre entreprise"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-white mb-2">Service d'intérêt</label>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded text-white focus:outline-none focus:border-[#CEEF2C] focus:ring-1 focus:ring-[#CEEF2C]/30 transition-colors"
          >
            <option value="">Sélectionnez un service</option>
            <option value="club">Le Club (275€/mois)</option>
            <option value="actif">Actif (5 000€/mois)</option>
            <option value="boost">Boost (8 000€/mois)</option>
            <option value="autre">Autre</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-white mb-2">Message *</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded text-white placeholder-slate-500 focus:outline-none focus:border-[#CEEF2C] focus:ring-1 focus:ring-[#CEEF2C]/30 transition-colors resize-none"
          placeholder="Décrivez votre projet ou votre question..."
        />
      </div>

      <button
        type="submit"
        className="w-full bg-[#CEEF2C] text-black font-semibold px-8 py-3.5 rounded hover:shadow-xl hover:shadow-[#CEEF2C]/25 hover:-translate-y-0.5 transition-all"
      >
        Envoyer le message
      </button>

      {submitted && (
        <div className="p-4 bg-green-900/20 border border-green-500/30 rounded text-green-300 text-sm">
          Merci ! Votre message a été reçu. Nous vous répondrons dans les plus brefs délais.
        </div>
      )}
    </form>
  )
}
