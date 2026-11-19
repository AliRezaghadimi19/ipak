import React from 'react';
import { Mail, Phone, MapPin, Linkedin, ArrowUp } from 'lucide-react';

export default function Footer({ onOpenPrivacy }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-navy-dark text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-slate-800/80">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center space-x-3.5">
              <img
                src="/logo-white.png"
                alt="IPAK Business Consulting Logo"
                className="h-11 w-11 object-contain"
              />
              <span className="font-bold tracking-tight text-white text-lg font-sans">
                IPAK <span className="font-light text-slate-400">Business Consulting</span>
              </span>
            </div>

            <p className="text-brand-gold font-serif text-base italic">
              Strategy. Funding. Growth.
            </p>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Empowering Canadian businesses with commercially focused strategic advisory, SR&ED and non-dilutive grant support, and executive leadership coaching.
            </p>

            <div className="pt-2 flex items-center space-x-2 text-xs text-slate-400">
              <MapPin className="w-4 h-4 text-brand-gold" />
              <span>Vancouver, British Columbia, Canada</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <a href="#about" className="hover:text-brand-gold transition-colors">
                  About IPAK & Leadership
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-gold transition-colors">
                  Core Services & Grants
                </a>
              </li>
              <li>
                <a href="#clients" className="hover:text-brand-gold transition-colors">
                  Who We Work With
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-brand-gold transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
              <li>
                <a href="#consultation" className="hover:text-brand-gold transition-colors">
                  Book a Consultation
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details & Social */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white">
              Get in Touch
            </h4>
            
            <div className="space-y-3 text-sm text-slate-300">
              <a
                href="mailto:info@ipakservices.com"
                className="flex items-center space-x-3 text-slate-300 hover:text-brand-gold transition-colors group"
              >
                <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-brand-gold/40">
                  <Mail className="w-4 h-4 text-brand-gold" />
                </div>
                <span>info@ipakservices.com</span>
              </a>

              <a
                href="tel:+16047359199"
                className="flex items-center space-x-3 text-slate-300 hover:text-brand-gold transition-colors group"
              >
                <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-brand-gold/40">
                  <Phone className="w-4 h-4 text-brand-gold" />
                </div>
                <span>+1 (604) 735-9199</span>
              </a>

              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-slate-300 hover:text-brand-gold transition-colors group"
              >
                <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-brand-gold/40">
                  <Linkedin className="w-4 h-4 text-brand-gold" />
                </div>
                <span>LinkedIn / Dr Maryam Khodaviren</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>
            &copy; {new Date().getFullYear()} IPAK Business Consulting. All rights reserved.
          </p>

          <div className="flex items-center space-x-6">
            <button
              type="button"
              onClick={onOpenPrivacy}
              className="hover:text-slate-300 underline-offset-4 hover:underline transition-colors"
            >
              Privacy Policy
            </button>

            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center space-x-1.5 text-slate-400 hover:text-white transition-colors"
              aria-label="Scroll back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
