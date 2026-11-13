import React from 'react';
import { Briefcase, Lightbulb, Zap, Building2, HeartHandshake, Shield, MapPin, Compass } from 'lucide-react';

export default function WhoWeWorkWith() {
  const clientTypes = [
    {
      title: 'Business Owners',
      icon: Briefcase,
      description: 'Navigating strategic crossroads, market headwinds, and capital allocation to protect and grow their legacy.',
    },
    {
      title: 'Entrepreneurs',
      icon: Lightbulb,
      description: 'Translating groundbreaking concepts into commercially viable businesses with disciplined execution.',
    },
    {
      title: 'Start-ups',
      icon: Zap,
      description: 'Securing early non-dilutive grant funding, establishing market readiness, and preparing for institutional investment.',
    },
    {
      title: 'SMEs',
      icon: Building2,
      description: 'Small & Medium Enterprises seeking operational efficiency, sales channel expansion, and SR&ED maximization.',
    },
    {
      title: 'Family Businesses',
      icon: HeartHandshake,
      description: 'Balancing multi-generational values with modern commercial governance, leadership succession, and sustainable growth.',
    },
    {
      title: 'Established Companies',
      icon: Shield,
      description: 'Mature enterprises pursuing turnaround initiatives, corporate restructuring, or executive leadership alignment.',
    },
  ];

  return (
    <section id="clients" className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs uppercase tracking-[0.2em] font-semibold text-brand-gold mb-3">
            Who We Work With
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950 tracking-tight leading-snug">
            Partnering with leaders across every stage of commercial maturity.
          </h2>
          <p className="mt-4 text-slate-600 text-base leading-relaxed">
            Our advisory frameworks are customized to the specific capital, operational, and leadership dynamics of your organization.
          </p>
        </div>

        {/* 6 Client Segments Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {clientTypes.map((client, idx) => {
            const Icon = client.icon;
            return (
              <div
                key={idx}
                className="p-7 rounded-2xl border border-slate-200/80 bg-slate-50/40 hover:bg-white hover:border-brand-gold/60 hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-brand-navy mb-5 group-hover:bg-brand-navy group-hover:text-brand-gold transition-colors shadow-xs">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-serif font-bold text-slate-900 mb-2">
                  {client.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {client.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Canadian Geographic Reach Card */}
        <div className="rounded-3xl bg-gradient-to-r from-brand-navy via-slate-900 to-brand-navy text-white p-8 sm:p-12 border border-slate-800 shadow-md relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 text-brand-gold text-xs font-semibold uppercase tracking-wider border border-white/10">
                <MapPin className="w-3.5 h-3.5" />
                <span>Vancouver &bull; Pan-Canadian Reach</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                Based in Vancouver and supporting businesses across Canada.
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                While headquartered on Canada's Pacific coast in Vancouver, British Columbia, we deliver advisory and grant support nationwide. We understand regional and federal economic programs—from Western Economic Diversification to federal SR&ED tax incentives.
              </p>

              <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2 text-xs text-slate-300 font-medium">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" /> British Columbia
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" /> Alberta & Prairies
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" /> Ontario & Quebec
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" /> Atlantic Canada
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 lg:text-right">
              <a
                href="#consultation"
                className="inline-flex items-center space-x-2 px-8 py-4 rounded-full bg-white text-slate-900 text-xs font-semibold uppercase tracking-wider hover:bg-brand-gold hover:text-slate-950 transition-all shadow-md group"
              >
                <span>Book a Consultation</span>
                <Compass className="w-4 h-4 text-brand-navy group-hover:rotate-45 transition-transform" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
