import { useState } from "react";
import PRODUCTS from './data/products'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Shop from './pages/Shop';
const App = () => {
  const [cart, setCart] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar cart={cart} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Hero />
      <Shop products={PRODUCTS} onAddToCart={addToCart} />
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-serif mb-4">LENORA</h3>
          <p className="text-gray-400 mb-6">Where elegance meets excellence</p>
          <div className="flex justify-center gap-8 text-sm">
            <a href="#" className="hover:text-amber-400 transition-colors">About</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Contact</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Privacy</a>
          </div>
          <p className="text-gray-500 text-sm mt-8">© 2025 LENORA. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};
export default App