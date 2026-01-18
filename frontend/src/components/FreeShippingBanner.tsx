import { useState } from "react";

const FreeShippingBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 w-full bg-background text-primary text-xs uppercase tracking-widest flex items-center justify-center py-3 z-50 border-b border-border">
      <span>Free Delivery on Orders Over R1000</span>

      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-6 text-sm hover:opacity-70 transition"
        aria-label="Close free delivery banner"
      >
        ✕
      </button>
    </div>
  );
};

export default FreeShippingBanner;
