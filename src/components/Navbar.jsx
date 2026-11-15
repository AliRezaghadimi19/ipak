import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Mail, Phone } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Who We Work With', href: '#clients' },
    { name: 'Book a Consultation', href: '#consultation' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Micro-Bar (Executive Presence) */}
      <div className="hidden lg:block bg-brand-navy text-white text-[11px] py-2 border-b border-brand-navy-light/40">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          <div className="flex items-center space-x-2 text-slate-200">
            <span className="flex h-1.5 w-1.5 rounded-full bg-brand-gold"></span>
            <span className="font-medium tracking-wide">Vancouver, BC &bull; Strategic Business Advisory Across Canada</span>
          </div>
          <div className="flex items-center space-x-6 text-slate-200">
            <a href="mailto:info@ipakservices.com" className="flex items-center space-x-1.5 hover:text-brand-gold transition-colors">
              <Mail className="w-3.5 h-3.5 text-brand-gold" />
              <span>info@ipakservices.com</span>
            </a>
            <span className="text-white/20">|</span>
            <a href="tel:+16047359199" className="flex items-center space-x-1.5 hover:text-brand-gold transition-colors">
              <Phone className="w-3.5 h-3.5 text-brand-gold" />
              <span>+1 (604) 735-9199</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-white/98 backdrop-blur-md border-b border-brand-navy/15 shadow-[0_4px_20px_-4px_rgba(15,48,83,0.08)] py-3'
            : 'bg-white/90 backdrop-blur-md border-b border-brand-navy/10 shadow-xs py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="group flex items-center space-x-3.5">
            <img
              src="/logo.png"
              alt="IPAK Business Consulting Logo"
              className="h-11 w-11 object-contain transition-transform group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="font-bold tracking-tight text-brand-navy text-lg leading-tight uppercase font-sans">
                IPAK
              </span>
              <span className="text-[10px] tracking-[0.22em] uppercase text-brand-gold font-semibold">
                Business Consulting
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-700">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="transition-colors hover:text-brand-navy relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-brand-navy after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left font-medium"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Action */}
          <div className="hidden md:flex items-center">
            <a
              href="#consultation"
              className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider px-5 py-2.5 rounded-full bg-brand-navy text-white hover:bg-brand-navy-light active:scale-95 transition-all shadow-sm hover:shadow-md border border-brand-navy group"
            >
              <span>Book Consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-brand-gold" />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-brand-navy hover:bg-brand-navy-subtle transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/98 border-b border-brand-navy/15 px-6 py-6 shadow-xl space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-3 font-medium text-slate-800">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 text-base border-b border-slate-100 hover:text-brand-navy transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="pt-2">
              <a
                href="#consultation"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center space-x-2 text-center text-xs font-semibold uppercase tracking-wider px-5 py-3 rounded-full bg-brand-navy text-white shadow"
              >
                <span>Book a Consultation</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-brand-gold" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
