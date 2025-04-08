"use client";

export default function ButtonPrimary({ href, text, onClick }) {
  return (
    
      href={href}
      onClick={onClick}
      className="inline-block px-6 py-3 bg-custom-orange text-white font-medium rounded hover:bg-custom-blue transition"
    >
      {text}
    </a>
  );
}
