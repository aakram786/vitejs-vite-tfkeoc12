import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold">
            Mosque Name
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-4">
            <Link to="/" className="hover:text-gray-300">Home</Link>
            <Link to="/prayer-times" className="hover:text-gray-300">Prayer Times</Link>
            <Link to="/events" className="hover:text-gray-300">Events</Link>
            <Link to="/contact" className="hover:text-gray-300">Contact</Link>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <Link to="/" className="block py-2 hover:text-gray-300" onClick={toggleMenu}>Home</Link>
            <Link to="/prayer-times" className="block py-2 hover:text-gray-300" onClick={toggleMenu}>Prayer Times</Link>
            <Link to="/events" className="block py-2 hover:text-gray-300" onClick={toggleMenu}>Events</Link>
            <Link to="/contact" className="block py-2 hover:text-gray-300" onClick={toggleMenu}>Contact</Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;