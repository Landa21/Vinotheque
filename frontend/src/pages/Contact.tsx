import React from 'react';

const Contact = () => {
    return (
        <div className="pt-24 pb-24 px-6 max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-medium mb-8 text-primary">GET IN TOUCH</h1>
            <p className="text-muted mb-12">
                Have a question about an order or need a recommendation? We're here to help.
            </p>

            <form className="space-y-6 text-left">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col">
                        <label className="text-xs font-bold uppercase tracking-widest mb-2 text-muted">First Name</label>
                        <input type="text" className="border border-border bg-surface text-primary p-3 focus:outline-none focus:border-accent" />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-xs font-bold uppercase tracking-widest mb-2 text-muted">Last Name</label>
                        <input type="text" className="border border-border bg-surface text-primary p-3 focus:outline-none focus:border-accent" />
                    </div>
                </div>

                <div className="flex flex-col">
                    <label className="text-xs font-bold uppercase tracking-widest mb-2 text-muted">Email Address</label>
                    <input type="email" className="border border-border bg-surface text-primary p-3 focus:outline-none focus:border-accent" />
                </div>

                <div className="flex flex-col">
                    <label className="text-xs font-bold uppercase tracking-widest mb-2 text-muted">Message</label>
                    <textarea rows={6} className="border border-border bg-surface text-primary p-3 focus:outline-none focus:border-accent"></textarea>
                </div>

                <div className="text-center pt-4">
                    <button className="bg-accent text-primary px-10 py-4 font-bold uppercase tracking-widest text-sm hover:bg-accentHover transition-colors">
                        Send Message
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Contact;
