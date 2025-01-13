import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-navy text-xl font-bold">Joe Lee</Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-navy hover:text-ocean"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            <Link to="/" className="text-navy hover:text-ocean px-3 py-2 text-sm font-medium">Home</Link>
            <Link to="/about" className="text-navy hover:text-ocean px-3 py-2 text-sm font-medium">About</Link>
            <Link to="/projects" className="text-navy hover:text-ocean px-3 py-2 text-sm font-medium">Projects</Link>
            <Link to="/contact" className="text-navy hover:text-ocean px-3 py-2 text-sm font-medium">Contact</Link>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden bg-white`}>
        <div className="pt-2 pb-3 space-y-1">
          <Link to="/" className="block px-3 py-2 text-navy hover:text-ocean text-base font-medium" onClick={toggleMenu}>Home</Link>
          <Link to="/about" className="block px-3 py-2 text-navy hover:text-ocean text-base font-medium" onClick={toggleMenu}>About</Link>
          <Link to="/projects" className="block px-3 py-2 text-navy hover:text-ocean text-base font-medium" onClick={toggleMenu}>Projects</Link>
          <Link to="/contact" className="block px-3 py-2 text-navy hover:text-ocean text-base font-medium" onClick={toggleMenu}>Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;