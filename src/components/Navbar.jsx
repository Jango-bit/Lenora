import { useEffect, useState } from "react";
import { 
  FiSearch as Search, 
  FiUser as User, 
  FiShoppingBag as ShoppingBag, 
  FiX as X, 
  FiMenu as Menu 
} from "react-icons/fi";
import Logo from "../assets/Logo2.jpg";

const Navbar = ({ cart, menuOpen, setMenuOpen }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* 🔹 Logo + Brand Name */}
        <div className="flex items-center gap-3">
          <img 
            src={Logo} 
            alt="Lenora Logo" 
            className="w-10 h-10 object-cover rounded-full"  // adjust size/style as needed
          />
          <h1 className="text-3xl font-serif text-gray-900 tracking-wide">
            LENORA
          </h1>
        </div>

        {/* 🔹 Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm font-medium hover:text-amber-600 transition-colors">Shop</a>
          <a href="#" className="text-sm font-medium hover:text-amber-600 transition-colors">Collections</a>
          <a href="#" className="text-sm font-medium hover:text-amber-600 transition-colors">About</a>
        </div>

        {/* 🔹 Icons Section */}
        <div className="flex items-center gap-4">
          <Search className="w-5 h-5 cursor-pointer hover:text-amber-600 transition-colors" />
          <User className="w-5 h-5 cursor-pointer hover:text-amber-600 transition-colors" />
          <div className="relative">
            <ShoppingBag className="w-5 h-5 cursor-pointer hover:text-amber-600 transition-colors" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 w-5 h-5 bg-amber-600 text-white text-xs rounded-full flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </div>
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
