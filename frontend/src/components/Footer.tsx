import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-background text-primary py-24 px-6 border-t border-white/10">
            <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center text-center">

                {/* Top Row: Brand & Contact Info */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-x-2 text-sm md:text-base mb-10 tracking-wide font-light">
                    <span className="text-vinotheque-mint font-bold tracking-wider">Vinotheque</span>
                    <span className="text-muted">11 Dannevirke Street, Copenhagen, 1763, Denmark</span>
                    <a href="mailto:hello@vinotheque.com" className="text-white hover:text-vinotheque-mint transition-colors">hello@vinotheque.com</a>
                </div>

                {/* Middle Row: Social Icons */}
                <div className="flex space-x-8 mb-16">
                    <a href="#" className="text-white hover:text-vinotheque-mint transition-colors p-2"><Instagram className="w-5 h-5" /></a>
                    <a href="#" className="text-white hover:text-vinotheque-mint transition-colors p-2"><Facebook className="w-5 h-5" /></a>
                    <a href="#" className="text-white hover:text-vinotheque-mint transition-colors p-2"><Twitter className="w-5 h-5" /></a>
                </div>

                {/* Bottom Row: Navigation Links */}
                <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] text-white">
                    <a href="/contact" className="hover:text-vinotheque-mint transition-colors">CONTACT & WHOLESALE</a>
                    <a href="#" className="hover:text-vinotheque-mint transition-colors">TERMS AND CONDITIONS</a>
                    <a href="#" className="hover:text-vinotheque-mint transition-colors">SHIPPING & RETURNS</a>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
