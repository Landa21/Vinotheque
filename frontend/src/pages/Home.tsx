import React from 'react';
import Hero from '../components/Hero';

const Home = () => {
    return (
        <div className="w-full">
            {/* 1. Hero Section */}
            <Hero />

            {/* 2. Full-Width Split Section (Visual Match) */}
            <section className="w-full pb-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">

                    {/* Left Feature (e.g. Red Wines) */}
                    <div className="relative group cursor-pointer h-[80vh]">
                        <img src="/images/redbottle.jpeg" alt="Red" className="w-full h-full object-cover"/>
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                            <h3 className="text-4xl md:text-5xl font-heading font-medium text-white mb-4 tracking-widest">RED WINES</h3>
                            <span className="text-white text-sm font-bold uppercase tracking-[0.2em] border-b-2 border-transparent group-hover:border-white transition-all pb-1">Shop Collection</span>
                        </div>
                    </div>

                    {/* Right Feature (e.g. White Wines) */}
                    <div className="relative group cursor-pointer h-[80vh]">
                        <img src="/images/white_wine_feature.png" alt="White Wine" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                            <h3 className="text-4xl md:text-5xl font-heading font-medium text-white mb-4 tracking-widest">WHITE WINES</h3>
                            <span className="text-white text-sm font-bold uppercase tracking-[0.2em] border-b-2 border-transparent group-hover:border-white transition-all pb-1">Shop Collection</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Intro Text Section */}
            <section className="py-24 px-6 text-center max-w-4xl mx-auto">
                <p className="text-accent text-xs font-bold uppercase tracking-widest mb-4">Curated Selection</p>
                <h2 className="text-3xl md:text-5xl font-heading font-medium leading-tight mb-8 text-primary">
                    "Wine is the only artwork you can drink."
                </h2>
                <p className="text-muted text-lg leading-relaxed max-w-2xl mx-auto">
                    We travel the globe to bring you exclusive, small-batch wines that tell a story.
                    From the rolling hills of Tuscany to the misty vineyards of Oregon,
                    every bottle in our collection is a masterpiece waiting to be discovered.
                </p>
            </section>

            {/* 4. Feature + Stack Section (User Request) */}
            <section className="w-full pb-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0">

                    {/* Large Feature - Left (2/3) */}
                  <div className="md:col-span-2 relative group cursor-pointer h-[90vh] overflow-hidden">
            {/* 1. The Image */}
            <img 
               src="/images/Rose4.png"
                alt="Rose Wine" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            />

            {/* 2. Gradient Overlay (Optional but recommended for text legibility) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

            {/* 3. The Content Container - Centered at the Bottom */}
            <div className="absolute bottom-12 inset-x-0 flex flex-col items-center text-center p-6">
        
            {/* New Arrival - mb-6 replaces the non-standard mb50 for a clean gap */}
            <span className="flex items-center gap-2 text-accent text-xs font-bold uppercase tracking-widest mb-6">
                New Arrival
            </span>

            {/* Heading */}
        <h3 className="text-4xl md:text-5xl font-heading font-medium text-white mb-6 tracking-widest">
            ROSE GARDEN
        </h3>

        {/* Shop Now Link */}
        <span className="flex items-center gap-2 text-white text-sm font-bold uppercase tracking-widest border-b border-white pb-1 group-hover:text-accent group-hover:border-accent transition-all">
            Shop Now
        </span>
    </div>
</div>

                    {/* Stacked Features - Right (1/3) */}
                    <div className="md:col-span-1 flex flex-col h-[90vh]">
                        {/* Top Right */}
                        <div className="relative group cursor-pointer h-1/2 overflow-hidden">
                            <img src="/images/accessories.jpeg" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
                                <h3 className="text-2xl font-heading font-medium text-white tracking-widest">ACCESSORIES</h3>
                            </div>
                        </div>
                        {/* Bottom Right */}
                        <div className="relative group cursor-pointer h-1/2 overflow-hidden">
                            <img
                             src="/images/GiftBox3.jpeg"
                              className="w-full h-full object-cover"/>
                            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
                                <h3 className="text-2xl font-heading font-medium text-white tracking-widest">GIFTS</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Stack + Feature Section (Mirrored) */}
            <section className="w-full pb-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0">

                    {/* Stacked Features - Left (1/3) */}
                    <div className="md:col-span-1 flex flex-col h-[90vh]">
                        {/* Top Left */}
                        <div className="relative group cursor-pointer h-1/2 overflow-hidden">
                            <img src="/images/limited_edition_wine.png" alt="Limited Edition" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
                                <h3 className="text-2xl font-heading font-medium text-white tracking-widest">LIMITED EDITION</h3>
                            </div>
                        </div>
                        {/* Bottom Left */}
                        <div className="relative group cursor-pointer h-1/2 overflow-hidden">
                            <img src="/images/pour3.jpeg" alt="White Wine" className="w-full h-full object-contain"/>
                            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
                                <h3 className="text-2xl font-heading font-medium text-white tracking-widest">SOMMELIER'S PICK</h3>
                            </div>
                        </div>
                    </div>

                    {/* Large Feature - Right (2/3) */}
                    <div className="md:col-span-2 relative group cursor-pointer h-[90vh]">
                        <img src="/images/vintage3.jpeg" alt="Vintage Vault" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
                        <div className="absolute bottom-12 right-12 text-right">
                            <span className="text-accent text-xs font-bold uppercase tracking-widest mb-2 block">Exclusive</span>
                            <h3 className="text-4xl font-heading font-medium text-white mb-4">VINTAGE VAULT</h3>
                            <div className="flex justify-end">
                                <span className="text-white text-sm font-bold uppercase tracking-widest border-b border-white pb-1">Discover</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Feature + Stack Section (Alternating Pattern) */}
            <section className="w-full pb-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0">

                    {/* Large Feature - Left (2/3) */}
                    <div className="md:col-span-2 relative group cursor-pointer h-[90vh]">
                        <img src="https://images.unsplash.com/photo-1474722883778-792e7992910e?auto=format&fit=crop&q=80" alt="Aging Barrels" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
                        <div className="absolute bottom-12 left-12 text-left">
                            <span className="text-accent text-xs font-bold uppercase tracking-widest mb-2 block">Curator's Choice</span>
                            <h3 className="text-4xl font-heading font-medium text-white mb-4">THE ART OF AGING</h3>
                            <span className="text-white text-sm font-bold uppercase tracking-widest border-b border-white pb-1">Learn More</span>
                        </div>
                    </div>

                    {/* Stacked Features - Right (1/3) */}
                    <div className="md:col-span-1 flex flex-col h-[90vh]">
                        {/* Top Right */}
                        <div className="relative group cursor-pointer h-1/2 overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&q=80" alt="Vineyard Estate" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
                                <h3 className="text-2xl font-heading font-medium text-white tracking-widest">ESTATES</h3>
                            </div>
                        </div>
                        {/* Bottom Right */}
                        <div className="relative group cursor-pointer h-1/2 overflow-hidden">
                            <div className="w-full h-full bg-[#EAEAEA] flex items-center justify-center group-hover:bg-[#F5F5F5] transition-colors">
                                <div className="w-64 h-64 rounded-full bg-[#D4D4D4] flex items-center justify-center">
                                    <span className="text-accent font-heading text-lg tracking-widest">JOIN CLUB</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. Press Section (They talk about us) */}
            <section className="py-24 px-6 text-center border-b border-white/10">
                <h3 className="text-primary text-2xl font-heading mb-16">They talk about us</h3>
                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                    <span className="text-2xl md:text-4xl font-serif">VOGUE</span>
                    <span className="text-2xl md:text-4xl font-bold tracking-tighter">MiLK</span>
                    <span className="text-2xl md:text-3xl font-serif italic">KiDS</span>
                    <span className="text-xl md:text-3xl font-cursive">Enfants Terribles</span>
                    <span className="text-xl md:text-2xl font-serif uppercase">BAZAAR</span>
                </div>
            </section>


            {/* 4. Split Layout Section */}
            <section className="grid grid-cols-1 md:grid-cols-2 min-h-[600px] border-t border-b border-border">
                <div className="bg-surface flex items-center justify-center p-0 overflow-hidden relative">
                    <img src="https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&q=80" alt="Grapes" className="w-full h-full object-cover absolute inset-0 opacity-60" />
                </div>
                <div className="flex flex-col justify-center px-12 py-20 text-center md:text-left">
                    <span className="text-accent text-xs font-bold uppercase tracking-widest mb-4">Our Philosophy</span>
                    <h2 className="text-3xl md:text-4xl font-heading font-medium mb-6 text-primary">SUSTAINABLE & ORGANIC</h2>
                    <p className="text-muted leading-relaxed mb-8 max-w-md">
                        We believe that great wine starts in the vineyard. That's why we partner exclusively with estates that practice sustainable, organic, and biodynamic farming. Respecting the land ensures a purer expression of the grape in your glass.
                    </p>
                    <a href="/about" className="self-center md:self-start border-b border-white pb-1 text-sm font-bold uppercase tracking-widest hover:text-accent hover:border-accent transition-colors">
                        Read Our Story
                    </a>
                </div>
            </section>

            {/* 5. Journal Preview */}
            <section className="py-24 px-6 max-w-screen-xl mx-auto">
                <div className="flex justify-between items-end mb-12">
                    <h2 className="text-3xl font-heading font-medium text-primary">THE JOURNAL</h2>
                    <a href="/journal" className="hidden md:block text-xs font-bold uppercase tracking-widest text-muted hover:text-primary transition-colors">View All Articles</a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <article className="cursor-pointer group">
                        <div className="bg-surface aspect-video mb-6 overflow-hidden">
                            <div className="w-full h-full bg-surface"></div>
                        </div>
                        <span className="text-accent text-[10px] font-bold uppercase tracking-widest">Food & Wine</span>
                        <h3 className="text-xl font-heading font-medium mt-2 mb-3 group-hover:text-muted transition-colors">Pairing for the Perfect Dinner Party</h3>
                    </article>
                    <article className="cursor-pointer group">
                        <div className="bg-surface aspect-video mb-6 overflow-hidden">
                            <div className="w-full h-full bg-surface"></div>
                        </div>
                        <span className="text-accent text-[10px] font-bold uppercase tracking-widest">Winemaker Series</span>
                        <h3 className="text-xl font-heading font-medium mt-2 mb-3 group-hover:text-muted transition-colors">Interview with The winemaker</h3>
                    </article>
                </div>

                <div className="mt-12 text-center md:hidden">
                    <a href="/journal" className="text-xs font-bold uppercase tracking-widest text-muted border-b border-muted pb-1">View All Articles</a>
                </div>
            </section>

            {/* 8. Social & Subscribe Section */}
            <section className="grid grid-cols-1 md:grid-cols-2 border-b border-white/10">
                {/* Left: Instagram Feed */}
                <div className="bg-surface/50 p-12 md:p-24 flex flex-col justify-center">
                    <h3 className="text-primary text-2xl font-heading mb-2">Follow us on Instagram</h3>
                    <a href="#" className="text-accent text-lg mb-12 block hover:text-white transition-colors">@vinotheque_official</a>
                    <div className="grid grid-cols-2 gap-4">
                        <img src="https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?auto=format&fit=crop&q=80" alt="Instagram 1" className="w-full aspect-square object-cover opacity-80 cursor-pointer" />
                        <img src="https://images.unsplash.com/photo-1551751299-1b51cab2694c?auto=format&fit=crop&q=80" alt="Instagram 2" className="w-full aspect-square object-cover opacity-80 cursor-pointer" />
                        <img src="https://images.unsplash.com/photo-1528823872057-9c0182e68c43?auto=format&fit=crop&q=80" alt="Instagram 3" className="w-full aspect-square object-cover opacity-80 cursor-pointer" />
                        <img src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80" alt="Instagram 4" className="w-full aspect-square object-cover opacity-80 cursor-pointer" />
                    </div>
                </div>

                {/* Right: Subscribe Form */}
                <div className="bg-surface p-12 md:p-24 flex flex-col justify-center items-center text-center">
                    <h3 className="text-3xl font-heading text-primary mb-6">Subscribe</h3>
                    <p className="text-muted mb-8 max-w-md">Sign up with your email address to receive news and updates.</p>
                    <div className="flex w-full max-w-md gap-4">
                        <input type="email" placeholder="Email Address" className="flex-1 bg-white p-4 text-black outline-none border-none placeholder-gray-500" />
                        <button className="bg-vinotheque-mint text-vinotheque-navy font-bold uppercase tracking-widest px-8 py-4 hover:bg-white transition-colors whitespace-nowrap">Sign Up</button>
                    </div>
                    <p className="text-muted text-xs mt-8">We respect your privacy.</p>
                </div>
            </section>
        </div >
    );
};

export default Home;
