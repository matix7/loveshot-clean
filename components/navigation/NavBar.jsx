import Logo from '../ui/Logo';
import MobileMenuButton from './MobileMenu';

export default function NavBar() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Logo />
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li><a href="/" className="text-custom-blue hover:text-custom-orange transition">Home</a></li>
            <li><a href="/shop" className="text-custom-blue hover:text-custom-orange transition">Shop</a></li>
            <li><a href="/occasions" className="text-custom-blue hover:text-custom-orange transition">Occasions</a></li>
            <li><a href="/about" className="text-custom-blue hover:text-custom-orange transition">About Us</a></li>
            <li><a href="/delivery" className="text-custom-blue hover:text-custom-orange transition">Delivery</a></li>
            <li><a href="/contact" className="text-custom-blue hover:text-custom-orange transition">Contact</a></li>
          </ul>
        </nav>
        
        {/* Mobile Menu Button */}
        <MobileMenuButton />
        
        {/* Shopping Cart */}
        <div className="flex items-center">
          <a href="/cart" aria-label="Shopping cart" className="text-custom-blue hover:text-custom-orange transition">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}
