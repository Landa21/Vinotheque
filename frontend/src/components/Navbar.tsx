const Navbar = () => {
  return (
    <nav className="absolute top-[40px] left-0 w-full z-40 flex items-center justify-between px-10 py-6 text-white bg-transparent">
      {/* Brand */}
      <div className="text-lg tracking-[0.3em] font-light">
        VINOTHÈQUE
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-10 text-sm uppercase tracking-widest">
        <a href="/shop" className="hover:opacity-70 transition">
          Shop
        </a>
        <a href="/about" className="hover:opacity-70 transition">
          About
        </a>
        <a href="/cart" className="hover:opacity-70 transition">
          Cart
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
