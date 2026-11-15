import React, { useState } from 'react';
import { Send, CheckCircle2, Clock, Phone, Mail, MapPin, Sparkles, ArrowRight } from 'lucide-react';

export default function ConsultationForm() {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    phone: '',
    topic: 'Funding & SR&ED Grants',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const topics = [
    'Funding & SR&ED Grants',
    'Business Development & Growth',
    'Start-Up & Business Planning',
    'Business Challenges & Turnaround',
    'Corporate Training & Leadership Coaching',
    'General Inquiry',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      businessName: '',
      email: '',
      phone: '',
      topic: 'Funding & SR&ED Grants',
      message: '',
    });
    setIsSubmitted(false);
  };

  return (
    <section id="consultation" className="py-24 bg-brand-cream border-t border-brand-navy/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Context & Invitation */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] font-semibold text-brand-gold mb-3">
                Book a Consultation
              </p>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-navy tracking-tight leading-snug">
                Let’s Talk About Your Business.
              </h2>
            </div>

            <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
              Every meaningful partnership begins with a confidential conversation. Clients are invited to discuss funding options, business development, sustainable growth, start-up plans, business turnaround challenges, training, or executive leadership coaching.
            </p>

            <div className="space-y-3.5 pt-4 border-t border-brand-navy/10">
              <div className="bg-brand-navy-subtle p-3.5 rounded-xl border border-brand-navy/10 flex items-start space-x-3 text-slate-700">
                <Clock className="w-5 h-5 text-brand-navy shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-brand-navy">Direct Senior Engagement</p>
                  <p className="text-xs text-slate-600">Inquiries are reviewed directly by Dr Maryam Khodaviren and senior advisors.</p>
                </div>
              </div>

              <div className="bg-brand-navy-subtle p-3.5 rounded-xl border border-brand-navy/10 flex items-start space-x-3 text-slate-700">
                <Sparkles className="w-5 h-5 text-brand-navy shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-brand-navy">Strict Non-Disclosure</p>
                  <p className="text-xs text-slate-600">Your commercial strategy, financials, and intellectual property remain strictly confidential.</p>
                </div>
              </div>

              <div className="bg-brand-navy-subtle p-3.5 rounded-xl border border-brand-navy/10 flex items-start space-x-3 text-slate-700">
                <MapPin className="w-5 h-5 text-brand-navy shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-brand-navy">Vancouver & Nationwide</p>
                  <p className="text-xs text-slate-600">In-person consultations in Vancouver, BC, and virtual strategic sessions across Canada.</p>
                </div>
              </div>
            </div>

            {/* Quick contact tags */}
            <div className="p-5 rounded-2xl bg-white border border-brand-navy/15 text-sm space-y-2.5 shadow-xs">
              <p className="font-semibold text-xs uppercase tracking-wider text-brand-navy">
                Direct Office Contact
              </p>
              <p className="flex items-center space-x-2 text-slate-700">
                <Mail className="w-4 h-4 text-brand-gold" />
                <a href="mailto:info@ipakservices.com" className="hover:text-brand-navy underline-offset-4 hover:underline">
                  info@ipakservices.com
                </a>
              </p>
              <p className="flex items-center space-x-2 text-slate-700">
                <Phone className="w-4 h-4 text-brand-gold" />
                <a href="tel:+16047359199" className="hover:text-brand-navy">
                  +1 (604) 735-9199
                </a>
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-brand-navy/15 shadow-md relative">
              
              {isSubmitted ? (
                <div className="text-center py-12 space-y-6 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-2 max-w-md mx-auto">
                    <h3 className="text-2xl font-serif font-bold text-brand-navy">
                      Enquiry Received
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Thank you, <span className="font-semibold text-brand-navy">{formData.name}</span>. We have received your consultation request for <span className="font-semibold text-brand-navy">{formData.businessName || 'your business'}</span>.
                    </p>
                    <p className="text-xs text-slate-500">
                      Dr Maryam Khodaviren or an advisory lead will connect with you within 24 business hours at <span className="font-medium text-brand-navy">{formData.email}</span>.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center px-6 py-2.5 rounded-full border border-brand-navy/20 text-xs font-semibold uppercase tracking-wider text-brand-navy hover:bg-brand-navy-subtle transition-colors"
                  >
                    Submit another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-brand-navy/10 pb-4 mb-2">
                    <h3 className="text-xl font-serif font-bold text-brand-navy">
                      Send Your Enquiry
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Share your details and we will coordinate an initial advisory discussion.
                    </p>
                  </div>

                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-brand-navy mb-1.5">
                      Name <span className="text-brand-gold">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-navy focus:ring-2 focus:ring-brand-navy/15 text-sm text-slate-800 placeholder-slate-400 transition-all outline-none"
                    />
                  </div>

                  {/* Business Name */}
                  <div>
                    <label htmlFor="businessName" className="block text-xs font-semibold uppercase tracking-wider text-brand-navy mb-1.5">
                      Business Name <span className="text-brand-gold">*</span>
                    </label>
                    <input
                      type="text"
                      id="businessName"
                      name="businessName"
                      required
                      value={formData.businessName}
                      onChange={handleChange}
                      placeholder="Company or venture name"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-navy focus:ring-2 focus:ring-brand-navy/15 text-sm text-slate-800 placeholder-slate-400 transition-all outline-none"
                    />
                  </div>

                  {/* Email & Phone Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-brand-navy mb-1.5">
                        Email <span className="text-brand-gold">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@company.ca"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-navy focus:ring-2 focus:ring-brand-navy/15 text-sm text-slate-800 placeholder-slate-400 transition-all outline-none"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-brand-navy mb-1.5">
                        Phone <span className="text-brand-gold">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (604) 000-0000"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-navy focus:ring-2 focus:ring-brand-navy/15 text-sm text-slate-800 placeholder-slate-400 transition-all outline-none"
                      />
                    </div>
                  </div>

                  {/* Primary Focus / Topic */}
                  <div>
                    <label htmlFor="topic" className="block text-xs font-semibold uppercase tracking-wider text-brand-navy mb-1.5">
                      Discussion Area
                    </label>
                    <select
                      id="topic"
                      name="topic"
                      value={formData.topic}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-navy focus:ring-2 focus:ring-brand-navy/15 text-sm text-slate-800 bg-white transition-all outline-none"
                    >
                      {topics.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Brief Message (Optional) */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-brand-navy mb-1.5">
                      Brief Note (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your timing, funding objectives, or leadership focus..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-navy focus:ring-2 focus:ring-brand-navy/15 text-sm text-slate-800 placeholder-slate-400 transition-all outline-none resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center space-x-2 py-4 px-6 rounded-full bg-brand-navy text-white text-xs font-semibold uppercase tracking-wider hover:bg-brand-navy-light transition-all shadow-md active:scale-[0.99] disabled:opacity-70 group border border-brand-navy"
                    >
                      {isSubmitting ? (
                        <span>Submitting enquiry...</span>
                      ) : (
                        <>
                          <span>Send Enquiry</span>
                          <ArrowRight className="w-3.5 h-3.5 text-brand-gold transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-slate-400 text-center mt-3">
                      We respect your privacy. All details remain strictly confidential under NDA.
                    </p>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
