import React from 'react';
import { Instagram, Facebook, Twitter, CreditCard, ShieldCheck } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-background text-primary py-20 px-6 border-t border-white/10">
            <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center text-center">

                {/* Brand & Address */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-x-2 text-sm md:text-base mb-10 tracking-wide font-light">
                    <span className="text-vinotheque-mint font-bold tracking-wider uppercase">Vinotheque</span>
                    <span className="text-muted/60 hidden md:inline">|</span>
                    <span className="text-muted">11 Dannevirke Street, Cape Town, 8001, South Africa</span>
                    <span className="text-muted/60 hidden md:inline">|</span>
                    <a href="mailto:vinotheque@gmail.com" className="text-white hover:text-vinotheque-mint transition-colors underline-offset-4 hover:underline">
                        vinotheque@gmail.com
                    </a>
                </div>

                {/* Social Icons */}
                <div className="flex space-x-6 mb-12">
                    <a href="#" aria-label="Instagram" className="text-white hover:text-vinotheque-mint transition-all transform hover:scale-110"><Instagram className="w-5 h-5" /></a>
                    <a href="#" aria-label="Facebook" className="text-white hover:text-vinotheque-mint transition-all transform hover:scale-110"><Facebook className="w-5 h-5" /></a>
                    <a href="#" aria-label="Twitter" className="text-white hover:text-vinotheque-mint transition-all transform hover:scale-110"><Twitter className="w-5 h-5" /></a>
                </div>

                {/* Legal Warning - Crucial for Winery Sites */}
                <div className="mb-12 max-w-2xl border-y border-white/5 py-6">
                    <p className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-muted leading-relaxed">
                        Enjoy Responsibly. You must be of legal drinking age in your country to purchase alcohol.
                        Vinotheque supports the responsible service of alcohol.
                    </p>
                </div>

                {/* Main Navigation Links */}
                <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] text-white mb-12">
                    <a href="/contact" className="hover:text-vinotheque-mint transition-colors">CONTACT & WHOLESALE</a>
                    <a href="/terms" className="hover:text-vinotheque-mint transition-colors">TERMS AND CONDITIONS</a>
                    <a href="/delivery-returns" className="hover:text-vinotheque-mint transition-colors">DELIVERY & RETURNS</a>
                    <a href="/privacy-policy" className="hover:text-vinotheque-mint transition-colors">PRIVACY POLICY</a>
                </div>

                {/* Bottom Row: Copyright & Payment Mockup */}
                <div className="w-full pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-y-6">
                    <p className="text-[10px] text-muted tracking-widest uppercase">
                        © {currentYear} Vinotheque. All Rights Reserved.
                    </p>

                    {/* Payment Indicators */}
                    <div className="flex items-center gap-x-4 opacity-50 grayscale hover:grayscale-0 transition-all">
                        <CreditCard className="w-5 h-5 text-white" />
                        <span className="text-[10px] font-bold tracking-tighter text-white">VISA</span>
                        <span className="text-[10px] font-bold tracking-tighter text-white">MASTERCARD</span>
                        <span className="text-[10px] font-bold tracking-tighter text-white">AMEX</span>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;