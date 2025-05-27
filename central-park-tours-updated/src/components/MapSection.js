import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const GoogleMap = () => {
  return (
    <div className="w-full h-full min-h-[400px] rounded-lg overflow-hidden shadow-lg">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.215281477253!2d-73.96855492346177!3d40.78246597138558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2589a018531e3%3A0xb9df1f7387a94119!2sCentral%20Park!5e0!3m2!1sen!2sus!4v1653394322297!5m2!1sen!2sus" 
        width="100%" 
        height="100%" 
        style={{ border: 0, minHeight: '400px' }} 
        allowFullScreen="" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="Central Park Map"
      ></iframe>
    </div>
  );
};

const ContactInfo = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 h-full">
      <h3 className="text-2xl font-bold text-primary mb-6">Visit Our Office</h3>
      
      <div className="space-y-6">
        <div className="flex items-start">
          <div className="flex-shrink-0 mt-1">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-secondary w-5 h-5" />
          </div>
          <div className="ml-4">
            <h4 className="text-lg font-medium text-gray-900">Our Location</h4>
            <p className="mt-1 text-gray-600">
              59th Street and 5th Avenue<br />
              New York, NY 10022<br />
              United States
            </p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 mt-1">
            <FontAwesomeIcon icon={faPhone} className="text-secondary w-5 h-5" />
          </div>
          <div className="ml-4">
            <h4 className="text-lg font-medium text-gray-900">Phone</h4>
            <p className="mt-1 text-gray-600">+1 (212) 555-1234</p>
            <p className="mt-1 text-sm text-gray-500">Mon-Fri from 9am to 6pm</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 mt-1">
            <FontAwesomeIcon icon={faEnvelope} className="text-secondary w-5 h-5" />
          </div>
          <div className="ml-4">
            <h4 className="text-lg font-medium text-gray-900">Email</h4>
            <p className="mt-1 text-gray-600">concierge@centralparktoursnyc.com</p>
            <p className="mt-1 text-sm text-gray-500">We respond within 24 hours</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const MapSection = () => {
  return (
    <section id="map" className="py-20 bg-white">
      <div className="container">
        <h2 className="section-title">Find Us</h2>
        <p className="section-subtitle">
          Our concierge desk is conveniently located at the southeast entrance of Central Park.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          <GoogleMap />
          <ContactInfo />
        </div>
      </div>
    </section>
  );
};

export default MapSection;
