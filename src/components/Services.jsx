import React from 'react';
import { DollarSign, Rocket, FileText, RefreshCw, Users, ArrowRight } from 'lucide-react';

export default function Services() {
  const services = [
    {
      id: 'sred',
      number: '01',
      title: 'SR&ED & Grant Support',
      icon: DollarSign,
      description:
        'Maximize non-dilutive government funding. We guide you through Canada’s Scientific Research & Experimental Development (SR&ED) tax incentive and provincial grant programs with meticulous technical and financial preparation.',
      deliverables: [
        'SR&ED eligibility assessment & claim structuring',
        'Federal & provincial innovation grant applications',
        'Technical narrative development & documentation audits',
        'End-to-end audit defense and CRA compliance support',
      ],
    },
    {
      id: 'bizdev',
      number: '02',
      title: 'Business Development & Growth',
      icon: Rocket,
      description:
        'Strategic roadmaps that accelerate revenue, enter new markets, and capture market share. We pinpoint commercial opportunities and streamline sales operations for sustainable scalability.',
      deliverables: [
        'Market penetration & expansion strategy',
        'Commercial partnership & alliance structuring',
        'Sales pipeline optimization & monetization models',
        'Customer acquisition & retention architecture',
      ],
    },
    {
      id: 'startup',
      number: '03',
      title: 'Start-Up & Business Planning',
      icon: FileText,
      description:
        'Turn innovative ideas into resilient, investor-ready commercial ventures. From financial models to operational blueprints, we set founders on a proven trajectory.',
      deliverables: [
        'Comprehensive investor-grade business plans',
        'Financial forecasting & pro-forma valuation models',
        'Go-to-market (GTM) execution roadmaps',
        'Governance, operational readiness & pitch advisory',
      ],
    },
    {
      id: 'turnaround',
      number: '04',
      title: 'Business Improvement & Turnaround',
      icon: RefreshCw,
      description:
        'Targeted interventions for companies facing cash-flow pressure, operational bottlenecks, or shifting market dynamics. We revitalize profitability and safeguard solvency.',
      deliverables: [
        'Operational diagnostic & cost restructuring',
        'Cash flow stabilization & working capital management',
        'Process optimization & efficiency enhancement',
        'Stakeholder & creditor negotiation advisory',
      ],
    },
    {
      id: 'coaching',
      number: '05',
      title: 'Corporate Training & Leadership Coaching',
      icon: Users,
      description:
        'Led by ICF-qualified leadership coach Dr Maryam Khodaviren. We develop decisive leaders, align cross-functional teams, and foster an organizational culture that performs.',
      deliverables: [
        'Executive one-on-one ICF leadership coaching',
        'High-performing executive team alignment sessions',
        'Strategic decision-making & change management workshops',
        'Custom corporate talent development curricula',
      ],
    },
  ];

  return (
    <section id="services" className="py-24 bg-brand-navy text-white relative overflow-hidden">
      {/* Subtle geometric light accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-navy-light/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.2em] font-semibold text-brand-gold mb-3">
              Our Services
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
              Five core disciplines for enduring commercial success.
            </h2>
          </div>
          <p className="text-sm text-slate-300 max-w-sm">
            Comprehensively addressing funding, strategy, operations, and human leadership across Canada.
          </p>
        </div>

        {/* 5 Core Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isFeatured = index === 0;

            return (
              <div
                key={service.id}
                className={`group rounded-2xl p-8 border transition-all duration-300 hover:shadow-2xl flex flex-col justify-between ${
                  isFeatured
                    ? 'bg-brand-navy-surface/90 border-brand-gold/60 shadow-lg'
                    : 'bg-brand-navy-surface/60 hover:bg-brand-navy-surface border-white/10 hover:border-brand-gold/40'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-navy transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-serif text-slate-400 group-hover:text-brand-gold text-lg font-bold transition-colors">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-serif font-bold text-white mb-3 group-hover:text-brand-gold transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-200 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="space-y-2 border-t border-white/10 pt-4 mb-6">
                    <p className="text-[11px] uppercase tracking-wider font-semibold text-slate-300">
                      Key Capabilities:
                    </p>
                    <ul className="space-y-1.5">
                      {service.deliverables.map((item, i) => (
                        <li key={i} className="text-xs text-slate-300 flex items-start space-x-2">
                          <span className="text-brand-gold font-bold mr-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="#consultation"
                    className="inline-flex items-center space-x-1.5 text-xs font-semibold uppercase tracking-wider text-slate-200 hover:text-brand-gold group-hover:translate-x-1 transition-all"
                  >
                    <span>Inquire About This Service &rarr;</span>
                  </a>
                </div>
              </div>
            );
          })}

          {/* Quick CTA Card to fill the 6th slot in 3x2 grid */}
          <div className="bg-gradient-to-br from-brand-navy-dark via-brand-navy-surface to-brand-navy text-white rounded-2xl p-8 border border-brand-gold/40 flex flex-col justify-between shadow-xl relative overflow-hidden">
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-brand-gold/15 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-4 relative">
              <span className="text-xs uppercase tracking-widest font-semibold text-brand-gold">
                Strategic Synergy
              </span>
              <h3 className="text-2xl font-serif font-bold leading-snug">
                Unsure which service best fits your stage?
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Most clients integrate grant funding alongside business development and leadership coaching. Let's design a customized roadmap matching your immediate milestones.
              </p>
            </div>

            <div className="pt-8 relative">
              <a
                href="#consultation"
                className="w-full inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-full bg-brand-gold text-brand-navy-dark font-semibold text-xs uppercase tracking-wider hover:bg-brand-gold-light transition-all shadow-md"
              >
                <span>Schedule an Evaluation</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
