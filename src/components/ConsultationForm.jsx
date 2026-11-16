import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, Clock, Phone, Mail, MapPin, Sparkles, ArrowRight, ShieldCheck, RefreshCw } from 'lucide-react';

export default function ConsultationForm() {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    phone: '',
    topic: 'Funding & SR&ED Grants',
    message: '',
    bot_field: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [captcha, setCaptcha] = useState({ num1: 4, num2: 7 });
  const [captchaInput, setCaptchaInput] = useState('');
  const [captchaError, setCaptchaError] = useState('');

  const generateCaptcha = () => {
    const n1 = Math.floor(Math.random() * 8) + 2;
    const n2 = Math.floor(Math.random() * 8) + 1;
    setCaptcha({ num1: n1, num2: n2 });
    setCaptchaInput('');
    setCaptchaError('');
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

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
    if (name === 'phone') {
      // Only allow numeric digits (0-9)
      const numericValue = value.replace(/\D/g, '');
      setFormData((prev) => ({ ...prev, [name]: numericValue }));
      return;
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 1. Honeypot check for bots
    if (formData.bot_field) {
      console.warn('Bot detected via honeypot.');
      return;
    }

    // 2. CAPTCHA verification
    const expected = captcha.num1 + captcha.num2;
    if (parseInt(captchaInput.trim(), 10) !== expected) {
      generateCaptcha();
      setCaptchaError('Incorrect security calculation. Please calculate again.');
      return;
    }

    setCaptchaError('');
    setIsSubmitting(true);

    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      generateCaptcha();
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
      bot_field: '',
    });
    setIsSubmitted(false);
    generateCaptcha();
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
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-brand-navy/15 shadow-md relative">
              
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

                  {/* Business Name (Optional) */}
                  <div>
                    <label htmlFor="businessName" className="block text-xs font-semibold uppercase tracking-wider text-brand-navy mb-1.5">
                      Business Name <span className="text-slate-400 font-normal lowercase">(optional)</span>
                    </label>
                    <input
                      type="text"
                      id="businessName"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleChange}
                      placeholder="Company or venture name (optional)"
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
                        pattern="^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$"
                        title="Please enter a valid email address (e.g. name@domain.com)"
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
                        inputMode="numeric"
                        pattern="[0-9]{7,15}"
                        title="Please enter numbers only (7 to 15 digits)"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. 6047359199"
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

                  {/* Honeypot field for anti-bot spam */}
                  <div style={{ display: 'none' }} aria-hidden="true">
                    <input
                      type="text"
                      name="bot_field"
                      tabIndex={-1}
                      value={formData.bot_field || ''}
                      onChange={handleChange}
                      autoComplete="off"
                    />
                  </div>

                  {/* Anti-Spam Security Verification (CAPTCHA) */}
                  <div className="p-3.5 sm:p-4 rounded-2xl bg-brand-navy-subtle/80 border border-brand-navy/15 space-y-2.5">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <label htmlFor="captchaAnswer" className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-brand-navy">
                        <ShieldCheck className="w-4 h-4 text-brand-gold shrink-0" />
                        <span>Security Verification <span className="text-brand-gold">*</span></span>
                      </label>
                      <button
                        type="button"
                        onClick={generateCaptcha}
                        title="Generate new challenge"
                        className="inline-flex items-center space-x-1 text-[11px] text-slate-500 hover:text-brand-navy transition-colors cursor-pointer py-0.5"
                      >
                        <RefreshCw className="w-3 h-3 text-brand-gold" />
                        <span>New code</span>
                      </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-2.5 sm:gap-3 items-stretch">
                      <div className="sm:col-span-5 flex items-center justify-center px-4 py-2.5 rounded-xl bg-white border border-brand-navy/20 font-mono font-bold text-brand-navy tracking-wider text-base shadow-2xs select-none text-center">
                        {captcha.num1} + {captcha.num2} = ?
                      </div>
                      <div className="sm:col-span-7 flex">
                        <input
                          type="text"
                          id="captchaAnswer"
                          name="captchaAnswer"
                          required
                          inputMode="numeric"
                          value={captchaInput}
                          onChange={(e) => {
                            setCaptchaInput(e.target.value);
                            if (captchaError) setCaptchaError('');
                          }}
                          placeholder="Enter answer"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-brand-navy focus:ring-2 focus:ring-brand-navy/15 text-sm text-slate-800 placeholder-slate-400 bg-white transition-all outline-none"
                        />
                      </div>
                    </div>

                    {captchaError && (
                      <p className="text-xs text-rose-600 flex items-center space-x-1 font-medium">
                        <span>&bull;</span>
                        <span>{captchaError}</span>
                      </p>
                    )}
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
