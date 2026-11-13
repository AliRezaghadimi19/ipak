import React from 'react';
import { ArrowRight, ShieldCheck, TrendingUp, Sparkles, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden bg-gradient-to-b from-slate-50/70 via-white to-white">
      {/* Subtle minimal background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      {/* Decorative subtle accent blur */}
      <div className="absolute top-1/4 right-5 w-72 h-72 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-10 left-10 w-96 h-96 bg-brand-navy/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          
          {/* Subtle Location & Trust Pill */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-100/90 border border-slate-200 text-slate-700 text-xs font-medium tracking-wide">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-gold"></span>
            </span>
            <span className="flex items-center space-x-1">
              <MapPin className="w-3 h-3 text-slate-500 inline" />
              <span>Vancouver, BC &bull; Supporting Businesses Across Canada</span>
            </span>
          </div>

          {/* Main Title & Subtitle */}
          <div className="space-y-4">
            <h2 className="text-xs sm:text-sm uppercase tracking-[0.25em] font-semibold text-brand-gold">
              IPAK Business Advisory
            </h2>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-slate-950 leading-[1.12]">
              Strategy. Funding. Growth.
            </h1>
          </div>

          {/* Short Introduction */}
          <p className="text-lg sm:text-xl text-slate-600 font-light leading-relaxed max-w-2xl mx-auto">
            Practical, commercially focused advisory helping Canadian founders, SMEs, and established enterprises unlock non-dilutive capital, navigate complex challenges, and scale with confidence.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href="#consultation"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-8 py-4 rounded-full bg-brand-navy text-white text-sm font-semibold tracking-wide hover:bg-slate-800 transition-all shadow-md hover:shadow-lg active:scale-95 group border border-slate-800"
            >
              <span>Book a Consultation</span>
              <ArrowRight className="w-4 h-4 text-brand-gold transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#services"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-slate-800 text-sm font-medium tracking-wide border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all"
            >
              Explore Our Services
            </a>
          </div>

          {/* Minimal Key Highlights Strip */}
          <div className="pt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left border-t border-slate-200/80 max-w-3xl mx-auto">
            <div className="flex items-start space-x-3 p-3">
              <div className="p-2 rounded-md bg-slate-100 text-brand-navy">
                <Sparkles className="w-4 h-4 text-brand-gold" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-slate-900">Commercial Rigor</h4>
                <p className="text-xs text-slate-500 mt-0.5">Practical execution over theoretical templates.</p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-3">
              <div className="p-2 rounded-md bg-slate-100 text-brand-navy">
                <ShieldCheck className="w-4 h-4 text-brand-gold" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-slate-900">SR&ED & Grant Experts</h4>
                <p className="text-xs text-slate-500 mt-0.5">Maximizing non-dilutive government funding.</p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-3">
              <div className="p-2 rounded-md bg-slate-100 text-brand-navy">
                <TrendingUp className="w-4 h-4 text-brand-gold" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-slate-900">ICF Leadership Coaching</h4>
                <p className="text-xs text-slate-500 mt-0.5">Empowering leaders for sustainable growth.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
