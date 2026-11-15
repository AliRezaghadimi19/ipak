import React from 'react';
import { ArrowRight, ShieldCheck, Sparkles, MapPin, Briefcase, DollarSign, GraduationCap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden bg-gradient-to-b from-[#F5F8FC] via-[#FAF9F6] to-[#FAF8F5]">
      {/* Subtle minimal background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#0F3053_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.035] pointer-events-none" />

      {/* Decorative subtle accent blur */}
      <div className="absolute top-1/4 right-5 w-72 h-72 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-10 left-10 w-96 h-96 bg-brand-navy/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          
          {/* Micro Trust Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-brand-navy-subtle border border-brand-navy/15 text-[11px] sm:text-xs font-semibold tracking-wide text-brand-navy uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
            <span>Canadian Business Advisory & Growth Practice</span>
          </div>

          {/* Main Headline */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-extrabold text-brand-navy tracking-tight leading-[1.1]">
              Strategy. Funding. <br className="hidden sm:inline" />
              <span className="italic font-normal text-slate-800">Growth.</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto font-sans font-light leading-relaxed">
              Empowering Canadian businesses with commercially focused strategic advisory, SR&ED and non-dilutive grant support, and executive leadership coaching.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="#consultation"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-8 py-4 rounded-full bg-brand-navy text-white text-xs font-semibold uppercase tracking-wider hover:bg-brand-navy-light active:scale-95 transition-all shadow-md hover:shadow-lg group border border-brand-navy"
            >
              <span>Book a Consultation</span>
              <ArrowRight className="w-4 h-4 text-brand-gold transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#services"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-brand-navy text-xs font-semibold uppercase tracking-wider border border-brand-navy/20 hover:border-brand-navy hover:bg-brand-navy-subtle active:scale-95 transition-all shadow-2xs"
            >
              Explore Our Services
            </a>
          </div>

          {/* Highlights Ribbon */}
          <div className="pt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left max-w-4xl mx-auto">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 border border-brand-navy/10 shadow-sm hover:shadow-md hover:border-brand-navy/30 transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-10 h-10 rounded-xl bg-brand-navy-subtle text-brand-navy border border-brand-navy/10 flex items-center justify-center mb-4 group-hover:bg-brand-navy group-hover:text-white transition-colors duration-200">
                <Briefcase className="w-5 h-5 text-current" />
              </div>
              <h4 className="text-sm sm:text-base font-semibold text-brand-navy tracking-tight">
                Commercial Focus
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Direct bottom-line results over abstract theories.
              </p>
            </div>

            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 border border-brand-navy/10 shadow-sm hover:shadow-md hover:border-brand-navy/30 transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-10 h-10 rounded-xl bg-brand-navy-subtle text-brand-navy border border-brand-navy/10 flex items-center justify-center mb-4 group-hover:bg-brand-navy group-hover:text-white transition-colors duration-200">
                <DollarSign className="w-5 h-5 text-current" />
              </div>
              <h4 className="text-sm sm:text-base font-semibold text-brand-navy tracking-tight">
                SR&ED & Grant Experts
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Maximizing non-dilutive government capital.
              </p>
            </div>

            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 border border-brand-navy/10 shadow-sm hover:shadow-md hover:border-brand-navy/30 transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-10 h-10 rounded-xl bg-brand-navy-subtle text-brand-navy border border-brand-navy/10 flex items-center justify-center mb-4 group-hover:bg-brand-navy group-hover:text-white transition-colors duration-200">
                <GraduationCap className="w-5 h-5 text-current" />
              </div>
              <h4 className="text-sm sm:text-base font-semibold text-brand-navy tracking-tight">
                ICF-Qualified Coaching
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Executive leadership for sustainable growth.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
