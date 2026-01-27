import React from 'react';
import { Truck, PackageSearch, RefreshCcw, HelpCircle, ShieldAlert } from 'lucide-react';

const DeliveryAndReturns = () => {
    return (
        <div className="bg-background text-primary min-h-screen pt-32 pb-20 px-6">
            <div className="max-w-4xl mx-auto">
                <header className="mb-16 text-center">
                    <h1 className="text-4xl md:text-5xl font-serif mb-4 tracking-tight">Delivery & Returns</h1>
                    <div className="w-24 h-px bg-vinotheque-mint mx-auto mb-6"></div>
                    <p className="text-muted text-sm uppercase tracking-widest">Everything you need to know about our service</p>
                </header>

                <div className="space-y-12">
                    {/* Shipping Policy */}
                    <section className="bg-white/5 p-8 rounded-lg border border-white/10 hover:border-vinotheque-mint/30 transition-colors">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-vinotheque-mint/10 rounded-full text-vinotheque-mint">
                                <Truck className="w-6 h-6" />
                            </div>
                            <h2 className="text-2xl font-serif">Shipping Policy</h2>
                        </div>
                        <div className="space-y-4 text-muted leading-relaxed">
                            <p>
                                We currently deliver exclusively within <span className="text-white">South Africa</span>.
                                We partner with leading couriers to ensure your wine arrives safely at your doorstep.
                            </p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li><span className="text-white">Cape Town:</span> 1-3 business days.</li>
                                <li><span className="text-white">Johannesburg & Durban:</span> 3-5 business days.</li>
                                <li><span className="text-white">Regional Areas:</span> 5-7 business days.</li>
                            </ul>
                            <p>
                                Orders over R2500 qualify for <span className="text-vinotheque-mint">Complimentary Delivery</span>.
                                Standard shipping rates apply for all other orders.
                            </p>
                        </div>
                    </section>

                    {/* Breakages & Damages */}
                    <section className="bg-white/5 p-8 rounded-lg border border-white/10 hover:border-vinotheque-mint/30 transition-colors shadow-lg shadow-vinotheque-mint/5">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-vinotheque-mint/10 rounded-full text-vinotheque-mint">
                                <ShieldAlert className="w-6 h-6" />
                            </div>
                            <h2 className="text-2xl font-serif">Breakages & Damages</h2>
                        </div>
                        <div className="space-y-4 text-muted leading-relaxed">
                            <p>
                                Wine is heavy and fragile. While we take every precaution, accidents sometimes happen.
                            </p>
                            <div className="bg-vinotheque-mint/5 border-l-4 border-vinotheque-mint p-4 my-4">
                                <p className="text-white font-medium">Important Requirement:</p>
                                <p className="italic">
                                    Any breakages must be reported within <span className="text-vinotheque-mint font-bold text-lg">24 hours</span> of receipt
                                    with photographic evidence of the damaged goods and packaging.
                                </p>
                            </div>
                            <p>
                                Reports received after 24 hours will unfortunately not be eligible for replacement or refund as risk passes to the customer upon successful delivery.
                            </p>
                        </div>
                    </section>

                    {/* Returns Policy */}
                    <section className="bg-white/5 p-8 rounded-lg border border-white/10 hover:border-vinotheque-mint/30 transition-colors">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-vinotheque-mint/10 rounded-full text-vinotheque-mint">
                                <RefreshCcw className="w-6 h-6" />
                            </div>
                            <h2 className="text-2xl font-serif">Returns & Refunds</h2>
                        </div>
                        <div className="space-y-4 text-muted leading-relaxed">
                            <p>
                                Due to the nature of wine being a food-grade product, our returns policy is governed by strict quality control and South African law (ECT Act).
                            </p>
                            <p className="font-medium text-white underline underline-offset-4 decoration-vinotheque-mint">Returns are accepted only for:</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li><span className="text-white">Defective Goods:</span> "Corked" wine or visible sediment in filtered wines.</li>
                                <li><span className="text-white">Incorrect Item:</span> If you received a bottle different from what you ordered.</li>
                            </ul>
                            <p className="p-4 bg-red-500/10 border border-red-500/20 rounded text-red-400">
                                <span className="font-bold">Not Eligible for Return:</span> Returns based on personal taste preference or change of mind are not accepted once the seal is broken or the product has been delivered.
                            </p>
                        </div>
                    </section>

                    {/* How to initiate a return */}
                    <section className="bg-white/5 p-8 rounded-lg border border-white/10 hover:border-vinotheque-mint/30 transition-colors">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-vinotheque-mint/10 rounded-full text-vinotheque-mint">
                                <PackageSearch className="w-6 h-6" />
                            </div>
                            <h2 className="text-2xl font-serif">Initiating a Return</h2>
                        </div>
                        <div className="space-y-4 text-muted leading-relaxed">
                            <p>
                                To start a return process, please email <a href="mailto:vinotheque@gmail.com" className="text-white underline">vinotheque@gmail.com</a> with:
                            </p>
                            <ol className="list-decimal pl-5 space-y-2">
                                <li>Your Order Number</li>
                                <li>Reason for return (description of defect)</li>
                                <li>Clear photograph of the bottle and its contents</li>
                            </ol>
                            <p>
                                Our sommelier team will review your request within 48 hours.
                            </p>
                        </div>
                    </section>
                </div>

                <div className="mt-20 text-center">
                    <p className="text-muted text-sm mb-6 flex items-center justify-center gap-2">
                        <HelpCircle className="w-4 h-4" /> Need more help?
                    </p>
                    <a href="/contact" className="inline-block px-8 py-3 bg-vinotheque-mint text-background font-bold tracking-widest uppercase text-xs hover:bg-white transition-colors duration-300">
                        Contact Support
                    </a>
                </div>
            </div>
        </div>
    );
};

export default DeliveryAndReturns;
