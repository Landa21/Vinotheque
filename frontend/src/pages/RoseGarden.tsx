import React from 'react';
import { useCart } from '../context/CartContext';

const roseWines = [
    {
        name: "Two Sisters Rosé",
        producer: "Two Sisters Vineyards",
        price: "R 285.00",
        image: "/images/Rose collection 1.jpeg"
    },
    {
        name: "Domaine de Pontfract Rosé",
        producer: "Les Vins Bréban",
        price: "R 293.00",
        image: "/images/RoseCollection2.jpeg"
    },
    {
        name: "Craggy Range Rose",
        producer: "Ben Tombs.",
        price: "R 323.00",
        image: "/images/RoseCollection3.jpeg"
    },
    {
        name: "Artisanal Selection Rosé",
        producer: "Studio Floral",
        price: "R 315.00",
        image: "/images/Rose4.png"
    }
];

const RoseGarden = () => {
    const { addToCart } = useCart();

    return (
        <div className="pt-24 pb-16 px-6 max-w-[1400px] mx-auto">
            <div className="mb-16 text-center">
                <span className="text-accent text-xs font-bold uppercase tracking-widest mb-4 block">New Arrivals</span>
                <h1 className="text-4xl md:text-5xl font-heading font-medium tracking-tight mb-4 text-primary">ROSE GARDEN</h1>
                <p className="text-muted max-w-2xl mx-auto">Experience our newest collection of hand-picked Rosé wines, perfect for golden hour and celebration.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                {roseWines.map((wine, index) => (
                    <div key={index} className="group cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-gray-500/20 rounded-lg p-2 flex flex-col items-center">
                        <div className="bg-surface w-full aspect-[3/4] mb-4 relative overflow-hidden rounded-md">
                            <img
                                src={wine.image}
                                alt={wine.name}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                            />
                            <div className="absolute inset-x-0 bottom-0 bg-surface/95 py-4 text-center translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out border-t border-accent/20">
                                <button
                                    onClick={() => addToCart({
                                        name: wine.name,
                                        producer: wine.producer,
                                        price: wine.price,
                                        image: wine.image
                                    })}
                                    className="text-xs font-bold uppercase tracking-widest text-primary hover:text-accentLight transition-colors"
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                        <h3 className="font-heading text-lg font-medium text-center text-primary leading-tight mb-1 group-hover:text-accentLight transition-colors">{wine.name}</h3>
                        <p className="text-center text-xs font-bold tracking-widest text-muted uppercase mb-2">{wine.producer}</p>
                        <p className="text-center text-primary/80 text-sm font-light">{wine.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RoseGarden;
