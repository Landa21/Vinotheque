import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { cartCount } = useCart();
  return (
    <nav className="absolute top-[40px] left-0 w-full z-40 flex items-center justify-between px-10 py-6 text-white bg-transparent">
      {/* Brand */}
      <Link to="/" className="text-lg tracking-[0.3em] font-light hover:opacity-80 transition-opacity">
        VINOTHÈQUE
      </Link>

      {/* Navigation Links */}
      <div className="flex space-x-10 text-sm uppercase tracking-widest">
        <Link to="/shop" className="hover:opacity-70 transition">
          Shop
        </Link>
        <Link to="/about" className="hover:opacity-70 transition">
          About
        </Link>
        <Link to="/cart" className="hover:opacity-70 transition relative">
          <ShoppingCart />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-accent text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
              {cartCount}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
