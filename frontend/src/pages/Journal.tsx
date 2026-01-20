import React from 'react';

const Journal = () => {
    return (
        <div className="pt-24 pb-16 px-6 max-w-[1400px] mx-auto">
            <h1 className="text-4xl md:text-5xl font-heading font-medium text-center mb-16">JOURNAL</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {[1, 2, 3, 4].map((item) => (
                    <article key={item} className="flex flex-col">
                        <div className="bg-surface aspect-video mb-6 w-full"></div>
                        <span className="text-xs font-bold tracking-widest text-accent uppercase mb-2">Taste & travel</span>
                        <h2 className="text-2xl font-heading font-medium mb-3 hover:text-accent transition-colors cursor-pointer text-primary">
                            The Art of Tasting: A Beginner's Guide to Complexity
                        </h2>
                        <p className="text-muted mb-4 line-clamp-3">
                            Understanding the subtle notes in your wine can transform your drinking experience.
                            We explore the primary flavor profiles found in our latest collection.
                        </p>
                        <a href="#" className="text-sm font-bold uppercase tracking-widest border-b border-white/20 pb-1 self-start hover:text-accent hover:border-accent transition-colors text-primary">Read More</a>
                    </article>
                ))}
            </div>
        </div>
    );
};

export default Journal;
