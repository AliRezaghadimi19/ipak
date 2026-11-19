import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhoWeWorkWith from './components/WhoWeWorkWith';
import FAQ from './components/FAQ';
import ConsultationForm from './components/ConsultationForm';
import Footer from './components/Footer';
import PrivacyModal from './components/PrivacyModal';

export default function App() {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF9] text-slate-800 font-sans selection:bg-brand-gold selection:text-white">
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Homepage / Hero */}
        <Hero />

        {/* About Us */}
        <About />

        {/* Our Services */}
        <Services />

        {/* Who We Work With */}
        <WhoWeWorkWith />

        {/* Frequently Asked Questions */}
        <FAQ />

        {/* Book a Consultation */}
        <ConsultationForm />
      </main>

      {/* Footer */}
      <Footer onOpenPrivacy={() => setIsPrivacyOpen(true)} />

      {/* Privacy Policy Modal */}
      <PrivacyModal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
      />
    </div>
  );
}
