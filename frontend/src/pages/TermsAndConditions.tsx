import React from 'react';
import { Shield, Scale, Truck, FileText, Undo2 } from 'lucide-react';

const TermsAndConditions = () => {
    return (
        <div className="bg-background text-primary min-h-screen pt-32 pb-20 px-6">
            <div className="max-w-4xl mx-auto">
                <header className="mb-16 text-center">
                    <h1 className="text-4xl md:text-5xl font-serif mb-4 tracking-tight">Terms & Conditions</h1>
                    <div className="w-24 h-px bg-vinotheque-mint mx-auto mb-6"></div>
                    <p className="text-muted text-sm uppercase tracking-widest">Last Updated: January 2026</p>
                </header>

                <div className="space-y-12">
                    {/* 1. Age Restriction */}
                    <section className="bg-white/5 p-8 rounded-lg border border-white/10 hover:border-vinotheque-mint/30 transition-colors">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-vinotheque-mint/10 rounded-full text-vinotheque-mint">
                                <Shield className="w-6 h-6" />
                            </div>
                            <h2 className="text-2xl font-serif">1. Age Restriction</h2>
                        </div>
                        <div className="space-y-4 text-muted leading-relaxed">
                            <p className="font-medium text-white">The "Non-Negotiable"</p>
                            <p>
                                By using this site and/or placing an order, you represent and warrant that you are at least 18 years of age.
                                We reserve the right to request proof of ID upon delivery.
                            </p>
                            <p>
                                Vinotheque is committed to responsible drinking. It is illegal to sell alcohol to anyone under the age of 18.
                            </p>
                        </div>
                    </section>

                    {/* 2. Pricing & Liquor Tax */}
                    <section className="bg-white/5 p-8 rounded-lg border border-white/10 hover:border-vinotheque-mint/30 transition-colors">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-vinotheque-mint/10 rounded-full text-vinotheque-mint">
                                <Scale className="w-6 h-6" />
                            </div>
                            <h2 className="text-2xl font-serif">2. Pricing & Liquor Tax</h2>
                        </div>
                        <div className="space-y-4 text-muted leading-relaxed">
                            <p>
                                All prices shown are in South African Rand (ZAR) and include VAT at the current rate (15%), unless otherwise stated.
                            </p>
                            <p>
                                While we strive for accuracy, in the event of a pricing error, we reserve the right to cancel orders placed at the incorrect price.
                            </p>
                        </div>
                    </section>

                    {/* 3. Delivery & Breakages */}
                    <section className="bg-white/5 p-8 rounded-lg border border-white/10 hover:border-vinotheque-mint/30 transition-colors">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-vinotheque-mint/10 rounded-full text-vinotheque-mint">
                                <Truck className="w-6 h-6" />
                            </div>
                            <h2 className="text-2xl font-serif">3. Delivery & "The Last Mile"</h2>
                        </div>
                        <div className="space-y-4 text-muted leading-relaxed">
                            <p>
                                Delivery is restricted to addresses within South Africa. Risk in the products passes to the customer upon delivery.
                            </p>
                            <p className="border-l-2 border-vinotheque-mint/50 pl-4 py-1 italic">
                                Any breakages must be reported within 24 hours of receipt with photographic evidence.
                            </p>
                            <p>
                                Due to the fragile nature of our products, we take extreme care in packaging. However, if any damage occurs during transit, please contact us immediately.
                            </p>
                        </div>
                    </section>

                    {/* 4. Liquor License Details */}
                    <section className="bg-white/5 p-8 rounded-lg border border-white/10 hover:border-vinotheque-mint/30 transition-colors">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-vinotheque-mint/10 rounded-full text-vinotheque-mint">
                                <FileText className="w-6 h-6" />
                            </div>
                            <h2 className="text-2xl font-serif">4. Liquor License Details</h2>
                        </div>
                        <div className="space-y-4 text-muted leading-relaxed">
                            <p>
                                All sales are conducted under Liquor License Number <span className="text-white font-mono">[WCP/043210]</span>.
                            </p>
                            <p>
                                No alcohol will be sold or delivered to minors. By completing a purchase, you confirm your compliance with South African liquor laws.
                            </p>
                        </div>
                    </section>

                    {/* 5. Returns & Refunds */}
                    <section className="bg-white/5 p-8 rounded-lg border border-white/10 hover:border-vinotheque-mint/30 transition-colors">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-vinotheque-mint/10 rounded-full text-vinotheque-mint">
                                <Undo2 className="w-6 h-6" />
                            </div>
                            <h2 className="text-2xl font-serif">5. Returns & Refunds (ECT Act)</h2>
                        </div>
                        <div className="space-y-4 text-muted leading-relaxed">
                            <p>
                                Due to the nature of the product, returns are only accepted for defective goods (e.g., 'corked' wine).
                                Returns based on personal taste preference are not accepted.
                            </p>
                            <p>
                                Please note that while the Electronic Communications and Transactions Act gives consumers a "cooling-off" period,
                                there are statutory exceptions for food and beverage items which apply to our products.
                            </p>
                        </div>
                    </section>
                </div>

               
            </div>
        </div>
    );
};

export default TermsAndConditions;
