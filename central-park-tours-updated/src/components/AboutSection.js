import React from 'react';
import aboutImg from '../assets/new-photos/IMG_8259 (1).jpeg';

const AboutSection = () => {
  return (
    <section id="about" className="py-20" style={{ backgroundColor: 'var(--sage-green)' }}>
      <div className="container">
        <h2 className="section-title">About Us</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12 items-center">
          <div className="animate-fade-in" style={{animationDelay: '0.2s'}}>
            <div className="relative">
              <img 
                src={aboutImg} 
                alt="Pedicab tour in Central Park with happy customers" 
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
              <div className="absolute -bottom-6 -right-6 p-6 rounded-lg shadow-lg hidden md:block" 
                   style={{ backgroundColor: 'var(--greenwich-leaf)', color: 'white' }}>
                <p className="text-2xl font-bold">Eco-Friendly</p>
                <p className="text-sm">Pedicab Tours</p>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-in" style={{animationDelay: '0.4s'}}>
            <h3 className="text-3xl font-bold mb-6" style={{ color: 'var(--uptown-rosewood)' }}>About Us</h3>
            
            <p className="mb-6" style={{ color: 'var(--skyline-charcoal)' }}>
              We're not your average tour guides — and this isn't your average ride through the park.
            </p>
            
            <p className="mb-6" style={{ color: 'var(--skyline-charcoal)' }}>
              We're a small crew of New Yorkers who know Central Park like it's our backyard (because, well, it kind of is). From secret gardens and skyline views to movie locations and hidden gems, we give you a front-row seat to the magic of the park — all from the comfort of a smooth, eco-friendly pedicab.
            </p>
            
            <p className="mb-6" style={{ color: 'var(--skyline-charcoal)' }}>
              Think of us as your chauffeurs of charm, your VIP access to NYC's backyard, your shortcut to seeing the park like a local — without breaking a sweat.
            </p>
            
            <p className="mb-8" style={{ color: 'var(--skyline-charcoal)' }}>
              Whether you're here on a romantic escape, a family adventure, or just want to relax while soaking up the city's most iconic green space — we've got you covered.
            </p>
            
            <p className="mb-8 text-xl font-medium italic" style={{ color: 'var(--uptown-rosewood)' }}>
              Sit back. Ride slow. See everything.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg text-center" style={{ backgroundColor: 'var(--hudson-mist)' }}>
                <p className="text-3xl font-bold" style={{ color: 'var(--greenwich-leaf)' }}>100%</p>
                <p className="text-sm" style={{ color: 'var(--skyline-charcoal)' }}>Eco-Friendly</p>
              </div>
              <div className="p-4 rounded-lg text-center" style={{ backgroundColor: 'var(--hudson-mist)' }}>
                <p className="text-3xl font-bold" style={{ color: 'var(--greenwich-leaf)' }}>Local</p>
                <p className="text-sm" style={{ color: 'var(--skyline-charcoal)' }}>NYC Experts</p>
              </div>
              <div className="p-4 rounded-lg text-center" style={{ backgroundColor: 'var(--hudson-mist)' }}>
                <p className="text-3xl font-bold" style={{ color: 'var(--greenwich-leaf)' }}>5★</p>
                <p className="text-sm" style={{ color: 'var(--skyline-charcoal)' }}>Rated Tours</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
