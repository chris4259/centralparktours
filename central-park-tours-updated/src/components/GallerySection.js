import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import galleryImg1 from '../assets/new-photos/IMG_8251 (1).jpeg';
import galleryImg2 from '../assets/new-photos/IMG_8252 (1).jpeg';
import galleryImg3 from '../assets/new-photos/IMG_8253 (1).jpeg';
import galleryImg4 from '../assets/new-photos/IMG_8254 (1).jpeg';
import galleryImg5 from '../assets/new-photos/IMG_8255 (1).jpeg';
import galleryImg6 from '../assets/new-photos/IMG_8256 (1).jpeg';

const GallerySection = () => {
  const galleryImages = [
    { img: galleryImg1, caption: "Iconic Central Park Views" },
    { img: galleryImg2, caption: "Bow Bridge Experience" },
    { img: galleryImg3, caption: "Happy Customers Enjoying Their Tour" },
    { img: galleryImg4, caption: "Pedicab Tours for Families" },
    { img: galleryImg5, caption: "Group Tours Available" },
    { img: galleryImg6, caption: "Explore Hidden Gems" },
  ];

  const testimonials = [
    {
      text: "Our guide knew every corner of Central Park and shared fascinating stories we would have never discovered on our own. The pedicab was comfortable and such a fun way to see the park!",
      name: "Sarah M.",
      location: "Chicago, IL"
    },
    {
      text: "We booked the sunset tour and it was magical! Our guide took us to the perfect photo spots and was so knowledgeable about the park's history. Highlight of our NYC trip!",
      name: "James & Tina",
      location: "London, UK"
    },
    {
      text: "As a senior with mobility issues, this pedicab tour was perfect. I got to see all the beautiful spots in Central Park without exhaustion. Our guide was patient and accommodating.",
      name: "Eleanor R.",
      location: "Phoenix, AZ"
    }
  ];

  return (
    <section id="gallery" className="py-20" style={{ backgroundColor: 'var(--light-bg)' }}>
      <div className="container">
        <h2 className="section-title">Gallery</h2>
        <p className="section-subtitle">
          Explore the beauty and magic of Central Park through our pedicab tours
        </p>
        
        <div className="gallery-grid">
          {galleryImages.map((item, index) => (
            <div key={index} className="gallery-item">
              <img src={item.img} alt={item.caption} />
              <div className="gallery-caption">
                <h4 className="text-lg font-bold">{item.caption}</h4>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-10" style={{ color: 'var(--skyline-charcoal)' }}>What Our Guests Say</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card" style={{ backgroundColor: 'var(--light-bg)', boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)' }}>
                <p className="testimonial-text" style={{ color: 'var(--skyline-charcoal)' }}>{testimonial.text}</p>
                <div className="testimonial-author">
                  <div>
                    <p className="testimonial-author-name" style={{ color: 'var(--skyline-charcoal)' }}>{testimonial.name}</p>
                    <p className="testimonial-author-title" style={{ color: 'var(--skyline-charcoal)', opacity: 0.7 }}>{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
