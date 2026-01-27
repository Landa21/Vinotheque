import React from 'react';
import { Eye, Lock, Cookie, Database, ShieldCheck, Mail } from 'lucide-react';

const PrivacyPolicy = () => {
    return (
        <div className="bg-background text-primary min-h-screen pt-32 pb-20 px-6 font-sans">
            <div className="max-w-4xl mx-auto">
                {/* Elegant Header */}
                <header className="mb-20 text-center">
                    <h1 className="text-5xl md:text-6xl font-serif mb-6 tracking-tight italic">Privacy Policy</h1>
                    <div className="flex items-center justify-center gap-4">
                        <div className="h-[1px] w-12 bg-vinotheque-mint/30"></div>
                        <p className="text-vinotheque-mint text-xs uppercase tracking-[0.3em] font-light">Refinement in Data Protection</p>
                        <div className="h-[1px] w-12 bg-vinotheque-mint/30"></div>
                    </div>
                </header>

                <div className="space-y-16">
                    {/* Introduction */}
                    <section className="relative">
                        <div className="absolute -left-4 top-0 w-1 h-full bg-vinotheque-mint/20"></div>
                        <div className="pl-8">
                            <h2 className="text-2xl font-serif mb-6 text-white uppercase tracking-wider">Our Commitment</h2>
                            <p className="text-muted leading-relaxed text-lg font-light">
                                At Vinotheque, we believe that privacy is the ultimate luxury. We are committed to protecting
                                your personal data with the same level of care and attention that we apply to our most
                                exquisite vintages. This policy outlines how we curate and safeguard your information
                                in accordance with the Protection of Personal Information Act (POPIA).
                            </p>
                        </div>
                    </section>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Information We Collect */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-3 text-vinotheque-mint">
                                <Database className="w-5 h-5" />
                                <h3 className="text-sm uppercase tracking-[0.2em] font-bold">Data Curation</h3>
                            </div>
                            <h4 className="text-xl font-serif text-white">Information We Collect</h4>
                            <p className="text-muted leading-relaxed font-light">
                                To provide our bespoke service, we collect personal information you provide during
                                membership registration and checkout, including your name, contact details,
                                and delivery address.
                            </p>
                        </div>

                        {/* How We Use Your Data */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-3 text-vinotheque-mint">
                                <Eye className="w-5 h-5" />
                                <h3 className="text-sm uppercase tracking-[0.2em] font-bold">Data Purpose</h3>
                            </div>
                            <h4 className="text-xl font-serif text-white">Usage & Refinement</h4>
                            <p className="text-muted leading-relaxed font-light">
                                Your information is used solely to facilitate order fulfillment, provide
                                personalised recommendations, and maintain your Vinotheque membership.
                                We do not trade your personal details with third parties for their marketing purposes.
                            </p>
                        </div>
                    </div>

                    {/* POPIA Section */}
                    <section className="bg-white/[0.02] border border-white/5 p-12 rounded-sm relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-5">
                            <ShieldCheck className="w-32 h-32" />
                        </div>
                        <div className="relative z-10 max-w-2xl">
                            <h2 className="text-2xl font-serif mb-6 text-white italic">POPIA Compliance</h2>
                            <p className="text-muted leading-relaxed mb-6 font-light">
                                As a South African establishment, we adhere strictly to the Protection of Personal Information Act.
                                We implement industry-standard security measures to prevent unauthorized access or disclosure
                                of your information.
                            </p>
                            <div className="flex flex-wrap gap-8 text-[10px] uppercase tracking-widest text-vinotheque-mint/60">
                                <span>Secured Storage</span>
                                <span>Encrypted Transit</span>
                                <span>Strict Access Control</span>
                            </div>
                        </div>
                    </section>

                    {/* Cookies & Technology */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/5 pt-16">
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-vinotheque-mint mb-2">
                                <Cookie className="w-4 h-4" />
                                <h3 className="text-[10px] uppercase tracking-widest font-bold">The Digital Palette</h3>
                            </div>
                            <h4 className="text-lg font-serif text-white">Cookies</h4>
                            <p className="text-xs text-muted leading-loose font-light">
                                We use subtle digital markers (cookies) to remember your preferences and ensure
                                a seamless journey through our cellar.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-vinotheque-mint mb-2">
                                <Lock className="w-4 h-4" />
                                <h3 className="text-[10px] uppercase tracking-widest font-bold">Financial Security</h3>
                            </div>
                            <h4 className="text-lg font-serif text-white">Payments</h4>
                            <p className="text-xs text-muted leading-loose font-light">
                                Financial transactions are handled by PCI-DSS compliant partners. We never store
                                full credit card details on our servers.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-vinotheque-mint mb-2">
                                <Mail className="w-4 h-4" />
                                <h3 className="text-[10px] uppercase tracking-widest font-bold">Direct Correspondence</h3>
                            </div>
                            <h4 className="text-lg font-serif text-white">Communication</h4>
                            <p className="text-xs text-muted leading-loose font-light">
                                You may opt-out of our editorial newsletter at any time. We respect your inbox
                                as much as your cellar.
                            </p>
                        </div>
                    </div>

                    {/* Footer Contact Info */}
                    <footer className="pt-20 text-center border-t border-white/5">
                        <p className="text-muted text-xs uppercase tracking-widest mb-4">Questions regarding your privacy?</p>
                        <a href="mailto:vinotheque@gmail.com" className="text-vinotheque-mint font-serif italic text-xl hover:text-white transition-colors">
                            vinotheque@gmail.com
                        </a>
                        <p className="mt-12 text-[10px] text-muted/30 uppercase tracking-[0.4em]">
                            Last Updated &bull; January 2026
                        </p>
                    </footer>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
