import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faPinterest } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="pt-16 pb-8" style={{ backgroundColor: 'var(--skyline-charcoal)' }}>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--accent)' }}>Central Park Pedicabs</h3>
            <p className="mb-4 text-sm" style={{ color: 'var(--light-text)', opacity: 0.8 }}>
              Eco-friendly pedicab tours through NYC's iconic Central Park. Experience the magic with our friendly local guides.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center transition-colors" style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: 'var(--accent)' }}>
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center transition-colors" style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: 'var(--accent)' }}>
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center transition-colors" style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: 'var(--accent)' }}>
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center transition-colors" style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: 'var(--accent)' }}>
                <FontAwesomeIcon icon={faPinterest} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--accent)' }}>Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-sm hover:underline" style={{ color: 'var(--light-text)', opacity: 0.8 }}>Home</a></li>
              <li><a href="#about" className="text-sm hover:underline" style={{ color: 'var(--light-text)', opacity: 0.8 }}>About Us</a></li>
              <li><a href="#gallery" className="text-sm hover:underline" style={{ color: 'var(--light-text)', opacity: 0.8 }}>Gallery</a></li>
              <li><a href="#tours" className="text-sm hover:underline" style={{ color: 'var(--light-text)', opacity: 0.8 }}>Tours</a></li>
              <li><a href="#contact" className="text-sm hover:underline" style={{ color: 'var(--light-text)', opacity: 0.8 }}>Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--accent)' }}>Tours</h3>
            <ul className="space-y-2">
              <li><a href="#tours" className="text-sm hover:underline" style={{ color: 'var(--light-text)', opacity: 0.8 }}>Classic Park Tour</a></li>
              <li><a href="#tours" className="text-sm hover:underline" style={{ color: 'var(--light-text)', opacity: 0.8 }}>Express Highlights Tour</a></li>
              <li><a href="#tours" className="text-sm hover:underline" style={{ color: 'var(--light-text)', opacity: 0.8 }}>Sunset Magic Tour</a></li>
              <li><a href="#tours" className="text-sm hover:underline" style={{ color: 'var(--light-text)', opacity: 0.8 }}>Photo Safari Tour</a></li>
              <li><a href="#tours" className="text-sm hover:underline" style={{ color: 'var(--light-text)', opacity: 0.8 }}>Family Adventure Tour</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--accent)' }}>Contact</h3>
            <ul className="space-y-2">
              <li className="text-sm" style={{ color: 'var(--light-text)', opacity: 0.8 }}>59th Street next to Central Park, New York, NY 10022</li>
              <li className="text-sm" style={{ color: 'var(--light-text)', opacity: 0.8 }}>Phone: (212) 555-PARK</li>
              <li className="text-sm" style={{ color: 'var(--light-text)', opacity: 0.8 }}>Email: info@centralparkpedicabs.com</li>
              <li className="text-sm" style={{ color: 'var(--light-text)', opacity: 0.8 }}>Hours: Monday - Saturday, 9AM-6PM</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-700 text-center">
          <p className="text-sm" style={{ color: 'var(--light-text)', opacity: 0.6 }}>
            © {new Date().getFullYear()} Central Park Pedicabs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
