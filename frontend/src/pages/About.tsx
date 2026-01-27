import React, { useEffect, useState } from 'react';
import { History, Grape, Wine, Award, Users } from 'lucide-react';

const About = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="bg-background text-primary min-h-screen">
            {/* Elegant Hero Section with Parallax */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center z-0 scale-110 pointer-events-none"
                    style={{
                        backgroundImage: "url('/images/about_hero_vibe.jpg')",
                        transform: `translateY(${scrollY * 0.4}px)`
                    }}
                >
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]"></div>
                </div>

                <div className="relative z-10 text-center px-6 max-w-4xl">
                    <span className="text-vinotheque-mint text-xs uppercase tracking-[0.4em] mb-4 block animate-fade-in">Est. 2026</span>
                    <h1 className="text-6xl md:text-8xl font-serif mb-8 tracking-tighter italic animate-slide-up">
                        Our Story
                    </h1>
                    <div className="w-24 h-[1px] bg-vinotheque-mint mx-auto mb-8"></div>
                    <p className="text-xl md:text-2xl font-light text-muted leading-relaxed max-w-2xl mx-auto italic">
                        "Wine is the only artwork you can drink."
                    </p>
                </div>
            </section>

            {/* The Narrative - Our Story */}
            <section className="py-32 px-6 max-w-screen-xl mx-auto relative z-10 bg-background">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-4 text-vinotheque-mint">
                            <History className="w-5 h-5" />
                            <span className="text-xs uppercase tracking-[0.3em] font-bold">The Beginning</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-serif leading-tight text-white">
                            A passion for the <br /><span className="italic text-vinotheque-mint">untold stories</span>.
                        </h2>
                        <div className="space-y-6 text-muted leading-relaxed font-light text-lg">
                            <p>
                                Vinotheque was born from a desire to bridge the gap between South Africa's most exceptional,
                                small-batch producers and those who seek more than just a beverage. We believe every bottle
                                carries the soul of the soil and the hands that nurtured it.
                            </p>
                            <p>
                                Based in the heart of Cape Town, we spend our days traversing the hidden valleys of the
                                Swartland, Stellenbosch, and Franschhoek, discovering vintages that rarely make it to
                                commercial shelves.
                            </p>
                        </div>
                    </div>
                    <div className="relative group">
                        <div className="absolute -inset-4 border border-vinotheque-mint/20 translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
                        <img
                            src="/images/vintage3.jpeg"
                            alt="Vintage bottles"
                            className="relative z-10 w-full h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
                        />
                    </div>
                </div>
            </section>

            {/* Heritage Section with Parallax */}
            <section className="relative h-[70vh] flex items-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center z-0 scale-110 pointer-events-none"
                    style={{
                        backgroundImage: "url('/images/Estate.jpeg')",
                        transform: `translateY(${(scrollY - 1000) * 0.2}px)`
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
                </div>

                <div className="relative z-10 max-w-screen-xl mx-auto px-6 w-full">
                    <div className="max-w-xl">
                        <span className="text-vinotheque-mint text-xs uppercase tracking-[0.3em] mb-4 block font-bold text-vinotheque-mint/80">The Terroir</span>
                        <h2 className="text-5xl font-serif mb-8 text-white">Rooted in Heritage</h2>
                        <p className="text-lg text-muted leading-relaxed mb-10 font-light">
                            Our selection is a tribute to the diverse South African landscape. From the ancient shale
                            soils of the Swartland to the cool Atlantic breezes of Darling, we curate wines that
                            are a pure expression of their origin.
                        </p>
                        <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-10">
                            <div>
                                <h4 className="text-white font-serif text-2xl mb-2 italic">150+</h4>
                                <p className="text-[10px] uppercase tracking-widest text-muted">Bespoke Vintages</p>
                            </div>
                            <div>
                                <h4 className="text-white font-serif text-2xl mb-2 italic">32</h4>
                                <p className="text-[10px] uppercase tracking-widest text-muted">Artisan Producers</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Philosophy - Grid */}
            <section className="py-32 px-6 bg-black relative z-10">
                <div className="max-w-screen-xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl font-serif mb-4 text-white">The Vinotheque Ethos</h2>
                        <p className="text-muted text-sm uppercase tracking-widest font-bold text-vinotheque-mint tracking-[0.3em]">Principles of refinement</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            {
                                icon: <Grape className="w-8 h-8" />,
                                title: "Purity",
                                desc: "We favor minimal intervention winemaking that respects the natural integrity of the grape."
                            },
                            {
                                icon: <Wine className="w-8 h-8" />,
                                title: "Curation",
                                desc: "Every bottle in our cellar is hand-selected by our resident sommelier for its unique character."
                            },
                            {
                                icon: <Users className="w-8 h-8" />,
                                title: "Community",
                                desc: "Supporting the pioneers and the families behind the world's most innovative small-scale labels."
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="p-10 border border-white/5 hover:border-vinotheque-mint/30 transition-all duration-500 bg-white/[0.02] group">
                                <div className="text-vinotheque-mint mb-8 transform group-hover:scale-110 transition-transform duration-500">
                                    {item.icon}
                                </div>
                                <h3 className="text-2xl font-serif mb-4 text-white italic">{item.title}</h3>
                                <p className="text-muted leading-relaxed font-light text-sm">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-32 text-center px-6 relative z-10 bg-background border-t border-white/5">
                <div className="max-w-2xl mx-auto space-y-10">
                    <Award className="w-12 h-12 text-vinotheque-mint mx-auto opacity-50" />
                    <h2 className="text-4xl font-serif text-white italic">Experience the Collection</h2>
                    <p className="text-muted leading-relaxed font-light italic">
                        Step into a world of curated excellence. Explore our latest acquisitions.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
                        <a href="/shop" className="px-12 py-4 bg-vinotheque-mint text-background font-bold uppercase tracking-widest text-xs hover:bg-white transition-all duration-500 shadow-lg shadow-vinotheque-mint/10">
                            Shop The Cellar
                        </a>
                        <a href="/contact" className="px-12 py-4 border border-white/20 text-white font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-background transition-all duration-500">
                            Our Sommelier
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
