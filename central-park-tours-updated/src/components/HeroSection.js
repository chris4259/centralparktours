import React from 'react';
import heroImg from '../assets/hero-bg-new.jpg';
import { Link } from 'react-scroll';

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen flex items-center" style={{ backgroundColor: 'var(--skyline-charcoal)' }}>
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 1
        }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}></div>
      </div>
      
      <div className="container relative z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in" style={{ color: 'white' }}>
            Central Park Pedicab Tours
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 animate-fade-in" style={{animationDelay: '0.2s', color: 'white' }}>
            Experience Central Park Through the Eyes of a Local. With the Comfort of a World-Class Concierge.
          </p>
          
          <div className="animate-fade-in" style={{animationDelay: '0.4s'}}>
            <Link 
              to="tours" 
              smooth={true} 
              duration={800} 
              className="inline-block px-8 py-4 text-lg font-bold rounded-lg transition-all transform hover:scale-105 mr-4 mb-4 md:mb-0"
              style={{ backgroundColor: 'var(--accent)', color: 'var(--skyline-charcoal)' }}
            >
              Explore Tours
            </Link>
            
            <Link 
              to="booking" 
              smooth={true} 
              duration={800}
              className="inline-block px-8 py-4 text-lg font-bold rounded-lg transition-all transform hover:scale-105"
              style={{ backgroundColor: 'var(--light-bg)', color: 'var(--skyline-charcoal)' }}
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 text-center">
        <Link 
          to="about" 
          smooth={true} 
          duration={800}
          className="inline-block animate-bounce cursor-pointer"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-10 w-10" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="white"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
