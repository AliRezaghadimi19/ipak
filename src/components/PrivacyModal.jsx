import React from 'react';
import { X, Shield } from 'lucide-react';

export default function PrivacyModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-slate-200 relative">
        
        <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
          <div className="flex items-center space-x-2 text-brand-navy">
            <Shield className="w-5 h-5 text-brand-gold" />
            <h3 className="text-xl font-serif font-bold text-slate-900">
              Privacy Policy
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
          <p className="font-semibold text-slate-800">
            Effective Date: November 2026 | IPAK Business Consulting (Vancouver, BC, Canada)
          </p>

          <h4 className="font-semibold text-slate-900 pt-2">1. Commitment to Privacy</h4>
          <p>
            IPAK Business Consulting is dedicated to safeguarding the privacy and confidentiality of our clients, prospective partners, and website visitors. We adhere to the Personal Information Protection Act (PIPA) of British Columbia and the federal Personal Information Protection and Electronic Documents Act (PIPEDA) of Canada.
          </p>

          <h4 className="font-semibold text-slate-900 pt-2">2. Information Collection</h4>
          <p>
            When you complete our consultation inquiry form or contact our office, we collect information such as your name, corporate entity, email address, phone number, and strategic focus areas. We use this data solely to respond to your inquiry and evaluate potential advisory services.
          </p>

          <h4 className="font-semibold text-slate-900 pt-2">3. Non-Disclosure & Confidentiality</h4>
          <p>
            All proprietary business information, intellectual property, financial projections, and SR&ED research documentation disclosed during consultations are treated under strict confidentiality and professional discretion. We never sell, lease, or distribute your personal or commercial data to third-party marketers.
          </p>

          <h4 className="font-semibold text-slate-900 pt-2">4. Contact & Inquiries</h4>
          <p>
            For any inquiries regarding our privacy standards or to request data removal, please contact our privacy officer at <a href="mailto:info@ipakservices.com" className="text-brand-navy underline">info@ipakservices.com</a>.
          </p>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full bg-slate-900 text-white text-xs font-semibold uppercase tracking-wider hover:bg-slate-800 transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
