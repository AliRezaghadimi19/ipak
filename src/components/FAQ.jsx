import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ArrowRight, Sparkles } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What specific services does IPAK Business Consulting provide?",
      answer: (
        <div className="space-y-3">
          <p>
            IPAK provides specialized advisory solutions designed around three integrated strategic pillars:
          </p>
          <ul className="space-y-2 pl-1">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-2 flex-shrink-0" />
              <span><strong className="text-brand-navy">Business Strategy & Commercial Growth:</strong> Market entry, corporate turnaround, operational restructuring, financial forecasting, and scaling roadmaps.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-2 flex-shrink-0" />
              <span><strong className="text-brand-navy">SR&ED & Non-Dilutive Government Grants:</strong> Full lifecycle management of Canadian innovation tax credits (SR&ED), federal grants (IRAP, CanExport), and provincial tech incentives.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-2 flex-shrink-0" />
              <span><strong className="text-brand-navy">Executive & Leadership Coaching:</strong> ICF-accredited leadership coaching led by Dr Maryam Khodaviren, focusing on executive presence, C-suite alignment, and high-performance organizational culture.</span>
            </li>
          </ul>
        </div>
      )
    },
    {
      question: "How does IPAK assist Canadian businesses with SR&ED and government grant programs?",
      answer: (
        <p>
          We deliver end-to-end non-dilutive capital advisory. Our team identifies qualifying scientific research and experimental development (SR&ED) expenditures, crafts rigorous technical reports matching CRA benchmarks, compiles necessary financial and payroll documentation, and supports you throughout the submission and review process. Our goal is to maximize your eligible tax refunds while minimizing time investment from your internal technical and accounting teams.
        </p>
      )
    },
    {
      question: "Do we need to be located in Vancouver to work with IPAK?",
      answer: (
        <p>
          No. While IPAK is headquartered in Vancouver, British Columbia, we partner with innovative startups, established SMEs, and commercial enterprises across all Canadian provinces—including British Columbia, Alberta, Ontario, Quebec, and Atlantic Canada. Engagements are delivered seamlessly through secure digital collaboration, with on-site executive sessions and workshops arranged as required.
        </p>
      )
    },
    {
      question: "Who is the ideal client for your advisory services?",
      answer: (
        <p>
          We partner with ambitious business owners, startup founders, CEOs, and executive leadership teams across various industries—from technology and advanced manufacturing to professional services. Our clients are typically scaling operations, commercializing new innovations, seeking government grant funding, or navigating complex strategic transitions that demand experienced, objective leadership guidance.
        </p>
      )
    },
    {
      question: "How are consulting and executive coaching engagements structured and priced?",
      answer: (
        <p>
          We structure engagements based on client goals and operational models. Options include project-based strategic scopes, milestone-based grant preparation, retained monthly advisory for ongoing executive guidance, and structured one-on-one leadership coaching packages. During our initial confidential consultation, we assess your requirements and propose a clear, transparent engagement structure tailored to your objectives.
        </p>
      )
    },
    {
      question: "How do you protect confidentiality and sensitive business information?",
      answer: (
        <p>
          Confidentiality is paramount to our practice. Prior to receiving any proprietary business details, source code summaries, or financial documentation, we execute a mutual Non-Disclosure Agreement (NDA). All client documentation is maintained within secure, encrypted Canadian cloud infrastructure conforming to strict privacy standards.
        </p>
      )
    },
    {
      question: "How quickly can we start, and what is the onboarding process?",
      answer: (
        <div className="space-y-3">
          <p>
            We can typically initiate new engagements within 3 to 5 business days:
          </p>
          <ol className="space-y-2 pl-1">
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-brand-navy/10 text-brand-navy text-[11px] font-bold mt-0.5">1</span>
              <span><strong className="text-brand-navy">Initial Discovery Call:</strong> A 30-minute consultation to understand your immediate objectives, challenges, and timelines.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-brand-navy/10 text-brand-navy text-[11px] font-bold mt-0.5">2</span>
              <span><strong className="text-brand-navy">Proposal & Roadmap:</strong> A customized scope of work outlining deliverables, timelines, and milestones.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-brand-navy/10 text-brand-navy text-[11px] font-bold mt-0.5">3</span>
              <span><strong className="text-brand-navy">Kickoff & Execution:</strong> Formal onboarding, secure documentation setup, and immediate commencement of strategic work.</span>
            </li>
          </ol>
        </div>
      )
    }
  ];

  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#FAF9F6] border-b border-brand-navy/10 relative overflow-hidden">
      {/* Subtle Ambient Background Accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-navy-subtle/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 reveal-on-scroll">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-brand-gold/30 text-brand-navy text-xs font-semibold uppercase tracking-wider mb-4 shadow-xs">
            <HelpCircle className="w-3.5 h-3.5 text-brand-gold" />
            <span>Frequently Asked Questions</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-brand-navy tracking-tight">
            Clear Answers for Strategic Decision-Making
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Everything you need to know about our business consulting, SR&ED grant recovery, executive coaching, and Canadian engagement process.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4 reveal-on-scroll">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl transition-all duration-500 border ${
                  isOpen
                    ? 'bg-white border-brand-gold/50 shadow-md ring-1 ring-brand-gold/20'
                    : 'bg-white/80 hover:bg-white border-brand-navy/10 hover:border-brand-navy/25 shadow-xs'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                  className="w-full py-5 px-6 sm:px-8 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold rounded-2xl cursor-pointer"
                >
                  <span className="flex items-center gap-4">
                    <span className={`flex-shrink-0 flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full text-xs font-bold transition-colors duration-500 ${
                      isOpen ? 'bg-brand-navy text-brand-gold' : 'bg-brand-navy-subtle text-brand-navy'
                    }`}>
                      0{index + 1}
                    </span>
                    <span className="font-serif font-bold text-base sm:text-lg text-brand-navy leading-snug">
                      {faq.question}
                    </span>
                  </span>
                  <span className={`flex-shrink-0 p-1.5 rounded-full transition-transform duration-500 ${
                    isOpen ? 'bg-brand-gold/15 text-brand-navy rotate-180' : 'bg-slate-100 text-slate-500'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>

                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden min-h-0">
                    <div className="px-6 sm:px-8 pb-6 pt-2 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100/80">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom FAQ Help CTA Card */}
        <div className="mt-12 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-brand-navy via-brand-navy-surface to-brand-navy text-white border border-brand-gold/30 shadow-xl reveal-on-scroll relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div className="space-y-2">
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white/10 text-brand-gold text-[11px] font-semibold uppercase tracking-wider border border-white/15">
                <Sparkles className="w-3 h-3 text-brand-gold" />
                <span>Confidential Advisory</span>
              </span>
              <h3 className="font-serif font-bold text-xl sm:text-2xl text-white">
                Have a specific question about your business?
              </h3>
              <p className="text-slate-200 text-sm max-w-xl leading-relaxed">
                Book an initial discovery session with Dr Maryam Khodaviren to assess your grant eligibility, growth barriers, and leadership requirements.
              </p>
            </div>
            <a
              href="#consultation"
              className="flex-shrink-0 inline-flex items-center space-x-2 px-7 py-3.5 rounded-full bg-brand-gold text-brand-navy-dark text-xs font-semibold uppercase tracking-wider hover:bg-brand-gold-light active:scale-95 transition-all shadow-md group"
            >
              <span>Schedule a Discovery Call</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
