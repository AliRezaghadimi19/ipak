import React from 'react';
import { Award, GraduationCap, Compass, CheckCircle2, UserCheck } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs uppercase tracking-[0.2em] font-semibold text-brand-gold mb-3">
            About IPAK
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950 tracking-tight leading-snug">
            Grounded in commercial reality. Driven by strategic vision.
          </h2>
        </div>

        {/* 2-Column Content: What IPAK does & Practical Approach */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: What IPAK Does & Approach */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl font-serif font-semibold text-slate-900">
                What IPAK Does
              </h3>
              <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
                IPAK Business Advisory partners with ambitious leaders, established business owners, and innovative enterprises to solve their most pressing strategic and financial hurdles. From securing critical government grants like SR&ED to structuring scalable business models, we build resilient foundations for long-term commercial success.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-slate-100">
              <h3 className="text-xl font-serif font-semibold text-slate-900 flex items-center gap-2">
                <Compass className="w-5 h-5 text-brand-gold" />
                <span>A Practical, Commercially Focused Approach</span>
              </h3>
              <p className="text-slate-600 leading-relaxed">
                We believe effective advisory is not about voluminous reports that sit on a shelf; it is about practical execution that directly impacts your bottom line. We bring clarity to uncertainty, turn complex grant regulations into tangible funding, and equip your leadership team with the tools to navigate rapid market evolution.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-start space-x-2 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-brand-gold mt-0.5 shrink-0" />
                  <span>Pragmatic, execution-first strategy</span>
                </div>
                <div className="flex items-start space-x-2 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-brand-gold mt-0.5 shrink-0" />
                  <span>Deep expertise in non-dilutive capital</span>
                </div>
                <div className="flex items-start space-x-2 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-brand-gold mt-0.5 shrink-0" />
                  <span>Tailored solutions, zero generic formulas</span>
                </div>
                <div className="flex items-start space-x-2 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-brand-gold mt-0.5 shrink-0" />
                  <span>Measurable outcomes & accountable growth</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Dr Maryam Khodaviren Profile Card */}
          <div className="lg:col-span-5">
            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-8 sm:p-10 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/10 rounded-bl-full pointer-events-none" />

              <div className="space-y-6 relative">
                {/* Avatar / Monogram Badge */}
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full bg-brand-navy text-white flex items-center justify-center font-serif text-2xl font-bold shadow-md border-2 border-brand-gold">
                    MK
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-slate-900 leading-tight">
                      Dr Maryam Khodaviren
                    </h3>
                    <p className="text-xs uppercase tracking-wider text-brand-gold font-semibold mt-0.5">
                      Founder & Principal Advisor
                    </p>
                  </div>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed italic border-l-2 border-brand-gold pl-4 py-1">
                  "Sustainable growth happens at the intersection of rigorous commercial strategy and authentic, empowered leadership."
                </p>

                {/* Key Credentials as requested */}
                <div className="space-y-3.5 pt-2">
                  <div className="flex items-start space-x-3 text-slate-800">
                    <div className="p-1.5 rounded bg-white text-brand-navy shadow-xs border border-slate-200/60 mt-0.5">
                      <UserCheck className="w-4 h-4 text-brand-gold" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">Business Consultant</p>
                      <p className="text-xs text-slate-500">Trusted advisory for start-ups, scale-ups, and corporate transitions.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 text-slate-800">
                    <div className="p-1.5 rounded bg-white text-brand-navy shadow-xs border border-slate-200/60 mt-0.5">
                      <Award className="w-4 h-4 text-brand-gold" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">ICF-Qualified Leadership Coach</p>
                      <p className="text-xs text-slate-500">Accredited coaching for C-suite executives, founders, and key management.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 text-slate-800">
                    <div className="p-1.5 rounded bg-white text-brand-navy shadow-xs border border-slate-200/60 mt-0.5">
                      <GraduationCap className="w-4 h-4 text-brand-gold" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">PhD in Business Management</p>
                      <p className="text-xs text-slate-500">Doctorate awarded from the United Kingdom, fusing academic rigor with market practice.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="#consultation"
                    className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-brand-navy hover:text-brand-gold transition-colors"
                  >
                    <span>Connect directly with Dr Khodaviren &rarr;</span>
                  </a>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
