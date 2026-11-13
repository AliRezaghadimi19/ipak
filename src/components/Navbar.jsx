import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

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
    { name: 'Consultation', href: '#consultation' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-sm py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="group flex items-center space-x-3">
          <div className="w-10 h-10 rounded-lg bg-brand-navy flex items-center justify-center text-white font-serif font-bold text-lg tracking-wider shadow-sm transition-transform group-hover:scale-105 border border-brand-gold/30">
            IP
          </div>
          <div className="flex flex-col">
            <span className="font-bold tracking-tight text-slate-900 text-lg leading-tight uppercase font-sans">
              IPAK
            </span>
            <span className="text-[10px] tracking-[0.2em] uppercase text-brand-gold font-medium">
              Business Consulting
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-600">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="transition-colors hover:text-slate-950 hover:underline underline-offset-8 decoration-brand-gold decoration-2"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Action */}
        <div className="hidden md:flex items-center">
          <a
            href="#consultation"
            className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider px-5 py-2.5 rounded-full bg-brand-navy text-white hover:bg-slate-800 transition-all shadow-sm hover:shadow active:scale-95 group"
          >
            <span>Book Consultation</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-brand-gold" />
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 px-6 py-6 shadow-xl space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-3 font-medium text-slate-800">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-base border-b border-slate-100 hover:text-brand-gold transition-colors"
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
    </header>
  );
}
