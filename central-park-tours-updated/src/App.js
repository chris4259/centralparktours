import React from 'react';
import { useForm } from '@formspree/react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import GallerySection from './components/GallerySection';
import ToursSection from './components/ToursSection';
import BookingForm from './components/BookingForm';
import ContactForm from './components/ContactForm';
import MapSection from './components/MapSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <ToursSection />
      
      {/* Booking Section */}
      <section id="booking" className="py-20 bg-light-beige">
        <div className="container">
          <h2 className="section-title">Book Your Experience</h2>
          <p className="section-subtitle">
            Reserve your spot for an unforgettable journey through Central Park with our expert guides.
          </p>
          
          <div className="max-w-3xl mx-auto mt-12">
            <BookingForm />
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container">
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle">
            Have questions or special requests? Our concierge team is here to assist you.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
            <div className="animate-fade-in" style={{animationDelay: '0.2s'}}>
              <ContactForm />
            </div>
            <div className="animate-fade-in" style={{animationDelay: '0.4s'}}>
              <div className="bg-light-beige rounded-lg shadow-xl p-8 h-full">
                <h3 className="text-2xl font-bold text-primary mb-6">We're Here For You</h3>
                <p className="text-gray-700 mb-6">
                  Our dedicated concierge team is available to answer any questions and help you plan the perfect Central Park experience.
                </p>
                <p className="text-gray-700 mb-6">
                  Whether you're looking for a private tour, have special accessibility needs, or want to customize your experience, we're here to make it happen.
                </p>
                <p className="text-gray-700">
                  Contact us today and discover why we're New York's premier luxury tour service for Central Park.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <MapSection />
      <Footer />
    </div>
  );
}

export default App;
