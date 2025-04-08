"use client";

import { useState } from 'react';

export default function MobileMenuButton() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="md:hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="text-custom-blue p-2"
        aria-label="Toggle menu"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-md z-50 p-4">
          <ul className="space-y-4">
            <li><a href="/" className="block py-2 text-custom-blue hover:text-custom-orange transition">Home</a></li>
            <li><a href="/shop" className="block py-2 text-custom-blue hover:text-custom-orange transition">Shop</a></li>
            <li><a href="/occasions" className="block py-2 text-custom-blue hover:text-custom-orange transition">Occasions</a></li>
            <li><a href="/about" className="block py-2 text-custom-blue hover:text-custom-orange transition">About Us</a></li>
            <li><a href="/delivery" className="block py-2 text-custom-blue hover:text-custom-orange transition">Delivery</a></li>
            <li><a href="/contact" className="block py-2 text-custom-blue hover:text-custom-orange transition">Contact</a></li>
          </ul>
        </div>
      )}
    </div>
  );
}
