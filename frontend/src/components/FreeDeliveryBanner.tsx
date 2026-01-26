import { useState } from "react";
import { Truck } from "lucide-react";

const FreeDeliveryBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="w-full bg-accent text-primary text-xs uppercase tracking-widest flex items-center justify-center py-3 border-b border-white/10">
      {/* Icon + Text */}
      <div className="flex items-center space-x-2 group">
        <Truck className="w-5 h-5 text-white" />
        <span className="text-white">
          Free Delivery on Orders Over R2500
        </span>
      </div>

      {/* Close Button */}
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
