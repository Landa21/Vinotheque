import React from 'react';

const wines = [
    {
        name: "Dawn of The Salty Tongues Rouge '24",
        producer: "Sakkie Mouton",
        price: "R 683.00",
        image: "/images/DawnoftheSaltyTongues.webp"
    },
    {
        name: "Momento Grenache Noir Botrivier '23",
        producer: "Momento",
        price: "R 600.00",
        image: "/images/momento.jpg"
    },
    {
        name: "Rebellie Grenache '22",
        producer: "Van Niekerk Vintners",
        price: "R 331.00",
        image: "/images/RebellieGrenache.jpg"
    },
    {
        name: "Prince of Peace Red Blend '24",
        producer: "Charla Haasbroek Wines",
        price: "R 431.00",
        image: "/images/PrinceofPeaceRedBlend.jpg"
    },
    {
        name: "Darling OVP Cinsault '23",
        producer: "Natte Valleij",
        price: "R 333.00",
        image: "/images/Darling.jpg"
    },
    {
        name: "Alinea Syrah MAGNUM '24",
        producer: "Alinea",
        price: "R 863.00",
        image: "/images/Alinea.jpg"
    },
    {
        name: "Nastergal Red Blend '23",
        producer: "Thistle & Weed",
        price: "R 333.00",
        image: "/images/Nastergal.jpg"
    },
    {
        name: "Swerwer Touriga Naçional '24",
        producer: "Swewer",
        price: "R 255.00",
        image: "/images/Swerwer.jpg"
    },
    {
        name: "Momento Tinta Barocca '21",
        producer: "Momento",
        price: "R 405.00",
        image: "/images/TintaBarocca.jpg"
    },
    {
        name: "Low Profile Red Blend '22",
        producer: "Sijnn",
        price: "R 363.00",
        image: "/images/LOWPROFILES.webp"
    },
    {
        name: "Kedungu Red Blend '23",
        producer: "Intellego",
        price: "R 210.00",
        image: "/images/Kedungu.jpg"
    },
    {
        name: "Tuesday's Child Cinsault '22",
        producer: "McFarlane Wines",
        price: "R 329.00",
        image: "/images/Tuesday.jpg"
    },
    {
        name: "Sijnn Red Blend '21",
        producer: "Sijnn",
        price: "R 660.00",
        image: "/images/SIJNNRED2015.webp"
    },
    {
        name: "Vino pH Pinot Noir '21",
        producer: "Vino pH",
        price: "R 380.00",
        image: "/images/VINOPH.webp"
    },
    {
        name: "Follow Your Dreams Carignan '24",
        producer: "Testalonga",
        price: "R 218.00",
        image: "/images/followyourdreams.jpg"
    },
    {
        name: "Rall Red '23",
        producer: "Rall",
        price: "R 443.00",
        image: "/images/RallRed.webp"
    },
    {
        name: "NAT Pinotage '22",
        producer: "Natte Valleij",
        price: "R 307.00",
        image: "/images/NAT.webp"
    },
    {
        name: "WholeBunch Syrah '23",
        producer: "Gabriëlskloof",
        price: "R 282.00",
        image: "/images/WholeBunch.jpg"
    },
    {
        name: "Rall Red MAGNUM '23",
        producer: "Rall",
        price: "R 1,110.00",
        image: "/images/RALLREDMAGNUM.webp"
    },
    {
        name: "Vino pH Barbera '24",
        producer: "Vino pH",
        price: "R 380.00",
        image: "/images/BARBERARESIZED.webp"
    },
    {
        name: "Barebones Cinsault '23",
        producer: "The Blacksmith",
        price: "R 222.00",
        image: "/images/Barebones-Cinsault.jpg"
    },
    {
        name: "Sarel at the Beach Syrah '23",
        producer: "Nomad Wines",
        price: "R 293.00",
        image: "/images/SarelattheBeachProductImage.webp"
    },
    {
        name: "Alinea Grenache '24",
        producer: "Natasha Jacka",
        price: "R 323.00",
        image: "/images/ALINEA_GRENACHE.webp"
    }
];

const Shop = () => {
    return (
        <div className="pt-24 pb-16 px-6 max-w-[1400px] mx-auto">
            <div className="mb-16 text-center">
                <h1 className="text-4xl md:text-5xl font-heading font-medium tracking-tight mb-4 text-primary">OUR WINES</h1>
                <p className="text-muted max-w-2xl mx-auto">Explore our curated selection of fine wines from around the globe.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                {wines.map((wine, index) => (
                    <div key={index} className="group cursor-pointer">
                        <div className="bg-surface aspect-[3/4] mb-4 relative overflow-hidden">
                            <img
                                src={wine.image}
                                alt={wine.name}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-x-0 bottom-0 bg-surface/90 py-3 text-center translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                <button className="text-xs font-bold uppercase tracking-widest text-primary hover:text-accent">Add to Cart</button>
                            </div>
                        </div>
                        <h3 className="font-heading text-lg font-medium text-center text-primary leading-tight mb-1">{wine.name}</h3>
                        <p className="text-center text-xs font-bold tracking-widest text-accent uppercase mb-2">{wine.producer}</p>
                        <p className="text-center text-muted text-sm">{wine.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Shop;
