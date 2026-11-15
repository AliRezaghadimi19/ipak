import React from 'react';
import { Award, GraduationCap, Compass, CheckCircle2, UserCheck } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-brand-cream border-t border-brand-navy/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs uppercase tracking-[0.2em] font-semibold text-brand-gold mb-3">
            About Us
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-navy tracking-tight leading-snug">
            Practical, commercially focused business advisory.
          </h2>
        </div>

        {/* 2-Column Content: What IPAK does & Practical Approach */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: What IPAK Does & Approach */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl font-serif font-semibold text-brand-navy">
                What IPAK Does
              </h3>
              <p className="text-slate-600 leading-relaxed text-base">
                IPAK Business Consulting partners with ambitious leaders, established business owners, and innovative enterprises to solve their most pressing strategic and financial hurdles. From securing critical government grants like SR&ED to structuring scalable commercial business models, we build resilient foundations for long-term growth.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-brand-navy/10">
              <h3 className="text-xl font-serif font-semibold text-brand-navy flex items-center gap-2">
                <Compass className="w-5 h-5 text-brand-gold" />
                <span>Your Practical, Commercially Focused Approach</span>
              </h3>
              <p className="text-slate-600 leading-relaxed text-base">
                No generic formulas or abstract theories. We bring clarity to uncertainty, navigate complex financial and regulatory landscapes, and equip decision-makers with actionable roadmaps that directly strengthen balance sheets and accelerate market execution.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-start space-x-2 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-brand-navy mt-0.5 shrink-0" />
                  <span>Commercial rigor & market viability</span>
                </div>
                <div className="flex items-start space-x-2 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-brand-navy mt-0.5 shrink-0" />
                  <span>Non-dilutive grant maximization</span>
                </div>
                <div className="flex items-start space-x-2 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-brand-navy mt-0.5 shrink-0" />
                  <span>Turnaround & operational resilience</span>
                </div>
                <div className="flex items-start space-x-2 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-brand-navy mt-0.5 shrink-0" />
                  <span>Executive empowerment & team alignment</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Dr Maryam Khodaviren Profile Card */}
          <div className="lg:col-span-5">
            <div className="bg-brand-navy-subtle border border-brand-navy/20 rounded-2xl p-8 sm:p-10 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-navy/5 rounded-bl-full pointer-events-none" />

              <div className="space-y-6 relative">
                {/* Avatar / Monogram Badge */}
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full bg-brand-navy text-white flex items-center justify-center font-serif text-2xl font-bold shadow-sm border-2 border-brand-gold">
                    MK
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-brand-navy leading-tight">
                      Dr Maryam Khodaviren
                    </h3>
                    <p className="text-xs uppercase tracking-wider text-brand-gold font-semibold mt-0.5">
                      Principal Consultant & Coach
                    </p>
                  </div>
                </div>

                <p className="text-sm text-slate-700 leading-relaxed italic border-l-2 border-brand-gold pl-4 py-0.5">
                  "Bridging academic depth with pragmatic commercial strategy to empower leaders across Canada."
                </p>

                {/* Key Credentials as requested */}
                <div className="space-y-3.5 pt-2">
                  <div className="flex items-start space-x-3 text-slate-800">
                    <div className="p-2 rounded-lg bg-white text-brand-navy shadow-xs border border-brand-navy/10 mt-0.5">
                      <UserCheck className="w-4 h-4 text-brand-navy" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-brand-navy">Business Consultant</p>
                      <p className="text-xs text-slate-600">Commercially focused advisory for SMEs, founders, and enterprise transitions.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 text-slate-800">
                    <div className="p-2 rounded-lg bg-white text-brand-navy shadow-xs border border-brand-navy/10 mt-0.5">
                      <Award className="w-4 h-4 text-brand-navy" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-brand-navy">ICF-Qualified Leadership Coach</p>
                      <p className="text-xs text-slate-600">International Coaching Federation credentialed executive coaching.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 text-slate-800">
                    <div className="p-2 rounded-lg bg-white text-brand-navy shadow-xs border border-brand-navy/10 mt-0.5">
                      <GraduationCap className="w-4 h-4 text-brand-navy" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-brand-navy">PhD in Business Management</p>
                      <p className="text-xs text-slate-600">Doctorate awarded from the United Kingdom.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="#consultation"
                    className="inline-flex items-center space-x-1.5 text-xs font-semibold uppercase tracking-wider text-brand-navy hover:text-brand-navy-light transition-colors"
                  >
                    <span>Request consultation with Dr Khodaviren &rarr;</span>
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
