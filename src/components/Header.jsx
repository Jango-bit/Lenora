import React from "react";
import logo from "../assets/Logo.jpeg"; // 👈 Update path based on where you save the image

function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      {/* Left: Logo */}
      <div className="flex items-center gap-3">
        <img
          src={logo}
          alt="Logo"
          className="w-12 h-12 object-contain"
        />
        <h1 className="text-2xl font-bold text-gray-800 tracking-wide">
          LUXE BEAUTY
        </h1>
      </div>

      {/* Right: Menu (optional) */}
      <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
        <a href="#home" className="hover:text-blue-600 transition duration-300">Home</a>
        <a href="#shop" className="hover:text-blue-600 transition duration-300">Shop</a>
        <a href="#about" className="hover:text-blue-600 transition duration-300">About</a>
        <a href="#contact" className="hover:text-blue-600 transition duration-300">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
