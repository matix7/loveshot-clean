"use client";

import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  function handleSubmit(e) {
    e.preventDefault();
    // In a real implementation, this would send the email to your newsletter service
    setIsSubmitted(true);
  }
  
  return (
    <section className="bg-custom-blue py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6 text-white">Join Our Floral Community</h2>
        <p className="text-blue-100 mb-8 max-w-2xl mx-auto">Sign up for our newsletter to receive special offers, flower care tips, and updates on seasonal arrangements.</p>
        
        {isSubmitted ? (
          <div className="bg-green-100 text-green-700 p-4 rounded max-w-md mx-auto">
            <p>Thank you for subscribing! Check your email for a special welcome offer.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto flex">
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address" 
              className="flex-grow px-4 py-3 rounded-l focus:outline-none"
              required
            />
            <button 
              type="submit" 
              className="bg-custom-orange text-white px-6 py-3 rounded-r font-medium hover:bg-orange-600 transition"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
