import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navLinks = [
    { to: 'home', label: 'Home' },
    { to: 'about', label: 'About' },
    { to: 'gallery', label: 'Gallery' },
    { to: 'tours', label: 'Tours' },
    { to: 'booking', label: 'Book Now' },
    { to: 'contact', label: 'Contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container flex items-center justify-between">
        <div className="text-2xl font-bold">
          <span className={`transition-colors duration-300 ${scrolled ? 'text-primary' : 'text-white'}`}>
            Central Park Tours
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={`cursor-pointer font-medium transition-colors duration-300 hover:text-secondary ${
                scrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className={`focus:outline-none transition-colors duration-300 ${
              scrolled ? 'text-gray-800' : 'text-white'
            }`}
          >
            <FontAwesomeIcon icon={mobileMenuOpen ? faTimes : faBars} size="lg" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute w-full bg-white shadow-md transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 invisible'
        } overflow-hidden`}
      >
        <div className="container py-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-800 hover:text-secondary font-medium transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
