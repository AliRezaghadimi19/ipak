import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ArrowRight, Sparkles } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What services does IPAK offer?",
      answer: (
        <p>
          IPAK is committed to helping clients find solutions that meet their individual needs. Explore our services or contact our team to learn how we can support you.
        </p>
      )
    },
    {
      question: "How do I know which service is right for me?",
      answer: (
        <p>
          Every client has different needs and goals. Our team can discuss your requirements and help you identify the most suitable options.
        </p>
      )
    },
    {
      question: "How can I get started with IPAK?",
      answer: (
        <p>
          Getting started is simple. Contact us through our website, tell us what you need, and our team will guide you through the next steps.
        </p>
      )
    },
    {
      question: "Do I need any previous experience or knowledge to use your services?",
      answer: (
        <p>
          Not necessarily. We aim to explain each process clearly so you can understand your options and make informed decisions.
        </p>
      )
    },
    {
      question: "How much do IPAK’s services cost?",
      answer: (
        <p>
          Costs may vary depending on the service and your specific requirements. Contact our team to discuss pricing and any applicable fees before proceeding.
        </p>
      )
    },
    {
      question: "How long does the process take?",
      answer: (
        <p>
          Timelines depend on the nature and complexity of the service. We aim to provide clear information about the expected process and timeframe from the beginning.
        </p>
      )
    },
    {
      question: "Can I access IPAK’s services online?",
      answer: (
        <p>
          Please contact our team to confirm which services are available remotely and whether an in-person appointment is required.
        </p>
      )
    },
    {
      question: "What makes IPAK different from other service providers?",
      answer: (
        <p>
          We believe that understanding each client’s needs, providing clear communication and identifying practical solutions are essential to delivering a positive customer experience.
        </p>
      )
    },
    {
      question: "Is my personal information kept confidential?",
      answer: (
        <p>
          We recognise the importance of protecting personal information. Please refer to our Privacy Policy for details of how information is collected, used and protected.
        </p>
      )
    },
    {
      question: "What if I have questions or need additional support?",
      answer: (
        <p>
          We’re here to help. If you have questions about our services or need further clarification, please contact our team through the website.
        </p>
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
            Everything you need to know about our business consulting, engagement process, and how we support your growth.
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
                      {index + 1 < 10 ? `0${index + 1}` : index + 1}
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
