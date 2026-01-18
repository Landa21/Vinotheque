import { useState } from "react";
import { Truck } from "lucide-react";

const FreeDeliveryBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 w-full bg-background text-primary text-xs uppercase tracking-widest flex items-center justify-center py-3 z-50 border-b border-border">
      {/* Content with hover effect */}
      <div className="flex items-center space-x-2 group">
        <Truck className="w-5 h-5 text-primary transition duration-300 group-hover:text-accent" />
        <span className="transition duration-300 group-hover:text-accent">
          Free Delivery on Orders Over R1000
        </span>
      </div>

      {/* Close button */}
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

export default FreeDeliveryBanner;
