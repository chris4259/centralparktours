import React from 'react';
import tourImg1 from '../assets/new-photos/IMG_8257 (1).jpeg';
import tourImg2 from '../assets/new-photos/IMG_8258 (1).jpeg';
import tourImg3 from '../assets/new-photos/IMG_8260 (1).jpeg';
import tourImg4 from '../assets/new-photos/IMG_8261 (1).jpeg';
import tourImg5 from '../assets/new-photos/IMG_8262 (1).jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faRoute, faUsers, faCamera, faStar } from '@fortawesome/free-solid-svg-icons';

const ToursSection = () => {
  const tours = [
    {
      id: 'classic',
      title: 'Classic Park Tour',
      image: tourImg1,
      price: '$75',
      duration: '2 Hours',
      description: 'Our most popular tour covers all the iconic spots in Central Park. See Bethesda Fountain, Bow Bridge, Strawberry Fields, and more with expert commentary from your local guide.',
      features: ['All Major Landmarks', 'Historical Commentary', 'Photo Opportunities', 'Comfortable Pedicab']
    },
    {
      id: 'express',
      title: 'Express Highlights Tour',
      image: tourImg2,
      price: '$45',
      duration: '1 Hour',
      description: 'Perfect for visitors short on time. This tour hits the most famous spots in Central Park efficiently, giving you a taste of the park\'s magic in just one hour.',
      features: ['Key Landmarks', 'Efficient Route', 'Perfect for Busy Schedules', 'Knowledgeable Guide']
    },
    {
      id: 'sunset',
      title: 'Sunset Magic Tour',
      image: tourImg3,
      price: '$95',
      duration: '1.5 Hours',
      description: 'Experience Central Park\'s enchanting transformation as the sun sets. This romantic tour is perfect for couples and photography enthusiasts seeking magical evening views.',
      features: ['Golden Hour Views', 'Romantic Atmosphere', 'Less Crowded', 'Special Photo Spots']
    },
    {
      id: 'photo',
      title: 'Photo Safari Tour',
      image: tourImg4,
      price: '$85',
      duration: '2 Hours',
      description: 'Designed for photography lovers, this tour takes you to the most photogenic spots in Central Park, with plenty of time to capture the perfect shot at each location.',
      features: ['Instagram-Worthy Spots', 'Photography Tips', 'Flexible Pace', 'Hidden Gems']
    },
    {
      id: 'family',
      title: 'Family Adventure Tour',
      image: tourImg5,
      price: '$85',
      duration: '1.5 Hours',
      description: 'A kid-friendly tour featuring Central Park\'s playgrounds, the zoo area, model boat pond, and other attractions that children will love, with stories tailored for young explorers.',
      features: ['Kid-Friendly', 'Interactive Stories', 'Fun Facts', 'Family Photo Ops']
    }
  ];

  return (
    <section id="tours" className="py-20" style={{ backgroundColor: 'var(--light-bg)' }}>
      <div className="container">
        <h2 className="section-title">Our Tours</h2>
        <p className="section-subtitle">
          Discover Central Park&apos;s magic through our expertly guided pedicab tours
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          {tours.map((tour, index) => (
            <div key={tour.id} className="tour-card animate-fade-in" style={{animationDelay: `${0.2 * index}s`}}>
              <div className="tour-image">
                <img src={tour.image} alt={tour.title} />
              </div>
              <div className="tour-content">
                <h3 className="tour-title">{tour.title}</h3>
                <p className="tour-price">{tour.price} <span className="text-sm font-normal" style={{ color: 'var(--skyline-charcoal)', opacity: 0.7 }}>/ {tour.duration}</span></p>
                <p className="tour-description">{tour.description}</p>
                <div className="tour-features">
                  {tour.features.map((feature, i) => (
                    <span key={i} className="tour-feature">{feature}</span>
                  ))}
                </div>
                <button 
                  className="w-full py-3 rounded-lg font-bold transition-all transform hover:scale-105"
                  style={{ backgroundColor: 'var(--accent)', color: 'var(--skyline-charcoal)' }}
                >
                  Book This Tour
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-8 rounded-lg" style={{ backgroundColor: 'var(--sage-green)', boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 text-center">
            <div>
              <FontAwesomeIcon icon={faClock} size="2x" style={{ color: 'var(--skyline-charcoal)' }} />
              <h4 className="text-lg font-bold mt-3 mb-1" style={{ color: 'var(--skyline-charcoal)' }}>Flexible Timing</h4>
              <p className="text-sm" style={{ color: 'var(--skyline-charcoal)', opacity: 0.8 }}>Tours available throughout the day</p>
            </div>
            <div>
              <FontAwesomeIcon icon={faRoute} size="2x" style={{ color: 'var(--skyline-charcoal)' }} />
              <h4 className="text-lg font-bold mt-3 mb-1" style={{ color: 'var(--skyline-charcoal)' }}>Custom Routes</h4>
              <p className="text-sm" style={{ color: 'var(--skyline-charcoal)', opacity: 0.8 }}>Personalized tour experiences</p>
            </div>
            <div>
              <FontAwesomeIcon icon={faUsers} size="2x" style={{ color: 'var(--skyline-charcoal)' }} />
              <h4 className="text-lg font-bold mt-3 mb-1" style={{ color: 'var(--skyline-charcoal)' }}>Group Discounts</h4>
              <p className="text-sm" style={{ color: 'var(--skyline-charcoal)', opacity: 0.8 }}>Special rates for 3+ pedicabs</p>
            </div>
            <div>
              <FontAwesomeIcon icon={faCamera} size="2x" style={{ color: 'var(--skyline-charcoal)' }} />
              <h4 className="text-lg font-bold mt-3 mb-1" style={{ color: 'var(--skyline-charcoal)' }}>Photo Stops</h4>
              <p className="text-sm" style={{ color: 'var(--skyline-charcoal)', opacity: 0.8 }}>Plenty of time for pictures</p>
            </div>
            <div>
              <FontAwesomeIcon icon={faStar} size="2x" style={{ color: 'var(--skyline-charcoal)' }} />
              <h4 className="text-lg font-bold mt-3 mb-1" style={{ color: 'var(--skyline-charcoal)' }}>5-Star Rated</h4>
              <p className="text-sm" style={{ color: 'var(--skyline-charcoal)', opacity: 0.8 }}>Consistently top-reviewed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToursSection;
