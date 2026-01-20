import React from 'react';

const Shop = () => {
    return (
        <div className="pt-24 pb-16 px-6 max-w-[1400px] mx-auto">
            <div className="mb-16 text-center">
                <h1 className="text-4xl md:text-5xl font-heading font-medium tracking-tight mb-4 text-primary">OUR WINES</h1>
                <p className="text-muted max-w-2xl mx-auto">Explore our curated selection of fine wines from around the globe.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                    <div key={item} className="group cursor-pointer">
                        <div className="bg-surface aspect-[3/4] mb-4 relative overflow-hidden">
                            <div className="absolute inset-0 bg-surface flex items-center justify-center text-muted">
                                Wine Bottle {item}
                            </div>
                            <div className="absolute inset-x-0 bottom-0 bg-surface/90 py-3 text-center translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                <button className="text-xs font-bold uppercase tracking-widest text-primary hover:text-accent">Add to Cart</button>
                            </div>
                        </div>
                        <h3 className="font-heading text-lg font-medium text-center text-primary">Chateau Example {item}</h3>
                        <p className="text-center text-muted text-sm mt-1">$45.00</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Shop;
