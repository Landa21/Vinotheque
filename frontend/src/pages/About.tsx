import React from 'react';

const About = () => {
    return (
        <div className="pt-0">
            {/* Hero-like section for About */}
            <section className="bg-surface text-primary py-32 text-center px-6">
                <h1 className="text-5xl md:text-6xl font-heading font-medium mb-6">OUR STORY</h1>
                <p className="max-w-2xl mx-auto text-lg text-muted leading-relaxed">
                    Vinotheque was born from a passion for the untold stories behind every bottle.
                </p>
            </section>

            <section className="py-24 px-6 max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-heading font-medium mb-8 text-primary">THE PHILOSOPHY</h2>
                <p className="text-muted leading-8 mb-8">
                    We believe wine is more than a beverage; it is an experience, a memory, and a piece of art.
                    Our mission is to bring you the most exceptional, hard-to-find vintages from small-batch producers
                    who pour their soul into every grape.
                </p>
                <p className="text-muted leading-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </section>
        </div>
    );
};

export default About;
