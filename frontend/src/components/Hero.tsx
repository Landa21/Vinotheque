import React, { useEffect, useState } from "react";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Parallax Background Layer */}
      <div
        className="absolute -inset-y-20 -inset-x-0 bg-cover bg-center will-change-transform"
        style={{
          backgroundImage: "url('https://unsplash.com/photos/MXMs8q2OjeA/download?force=true')",
          transform: `translateY(${scrollY * 0.4}px)`,
        }}
      ></div>

      {/* Optional dark overlay for text contrast */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-primary px-6">
        <h1 className="text-5xl md:text-6xl font-light tracking-widest mb-4">
          VINOTHÈQUE
        </h1>
        <p className="text-lg md:text-xl tracking-wide mb-6">
          Discover Curated Wines from the Finest Vineyards
        </p>
        <a
          href="/shop"
          className="bg-accent hover:bg-accentHover text-primary uppercase tracking-widest px-8 py-3 text-sm transition"
        >
          Shop Wines
        </a>
      </div>
    </section>
  );
};

export default Hero;
