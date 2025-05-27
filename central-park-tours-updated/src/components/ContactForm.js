import React from 'react';
import { useForm } from '@formspree/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope, faClock } from '@fortawesome/free-solid-svg-icons';

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xdoqgwkz");
  
  return (
    <section id="contact" className="py-20" style={{ backgroundColor: 'var(--hudson-mist)', position: 'relative', zIndex: 1 }}>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <h2 className="section-title">Contact Us</h2>
        <p className="section-subtitle">
          Have questions or ready to book your Central Park adventure? Get in touch with us!
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div className="animate-fade-in" style={{animationDelay: '0.2s', position: 'relative', zIndex: 2}}>
            <div style={{ backgroundColor: '#FFFFFF', padding: '2rem', borderRadius: '0.5rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', position: 'relative', zIndex: 3 }}>
              <h3 className="text-2xl font-bold mb-6" style={{ color: 'var(--skyline-charcoal)' }}>Send Us a Message</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block mb-2 font-medium" style={{ color: 'var(--skyline-charcoal)' }}>Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    className="w-full p-3 border rounded-lg"
                    style={{ backgroundColor: 'white', border: '1px solid rgba(0, 0, 0, 0.2)', color: 'var(--skyline-charcoal)' }}
                    required 
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block mb-2 font-medium" style={{ color: 'var(--skyline-charcoal)' }}>Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    className="w-full p-3 border rounded-lg"
                    style={{ backgroundColor: 'white', border: '1px solid rgba(0, 0, 0, 0.2)', color: 'var(--skyline-charcoal)' }}
                    required 
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="block mb-2 font-medium" style={{ color: 'var(--skyline-charcoal)' }}>Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    className="w-full p-3 border rounded-lg"
                    style={{ backgroundColor: 'white', border: '1px solid rgba(0, 0, 0, 0.2)', color: 'var(--skyline-charcoal)' }}
                    required 
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block mb-2 font-medium" style={{ color: 'var(--skyline-charcoal)' }}>Your Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="5" 
                    className="w-full p-3 border rounded-lg"
                    style={{ backgroundColor: 'white', border: '1px solid rgba(0, 0, 0, 0.2)', color: 'var(--skyline-charcoal)' }}
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  disabled={state.submitting}
                  className="w-full py-3 px-6 rounded-lg font-bold transition-all transform hover:scale-105"
                  style={{ backgroundColor: 'var(--accent)', color: 'var(--skyline-charcoal)' }}
                >
                  {state.submitting ? "Sending..." : "Send Message"}
                </button>
                
                {state.succeeded && (
                  <div className="mt-4 p-3 rounded-lg" style={{ backgroundColor: 'var(--greenwich-leaf)', color: 'white' }}>
                    Thank you for your message! We'll get back to you soon.
                  </div>
                )}
              </form>
            </div>
          </div>
          
          <div className="animate-fade-in" style={{animationDelay: '0.4s', position: 'relative', zIndex: 2}}>
            <div style={{ backgroundColor: '#FFFFFF', padding: '2rem', borderRadius: '0.5rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', height: '100%', position: 'relative', zIndex: 3 }}>
              <h3 className="text-2xl font-bold mb-6" style={{ color: 'var(--skyline-charcoal)' }}>Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" style={{ color: 'var(--greenwich-leaf)' }} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1" style={{ color: 'var(--skyline-charcoal)' }}>Location</h4>
                    <p style={{ color: 'var(--skyline-charcoal)' }}>59th Street next to Central Park<br />New York, NY 10022</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <FontAwesomeIcon icon={faPhone} size="lg" style={{ color: 'var(--greenwich-leaf)' }} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1" style={{ color: 'var(--skyline-charcoal)' }}>Phone</h4>
                    <p style={{ color: 'var(--skyline-charcoal)' }}>(212) 555-PARK</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <FontAwesomeIcon icon={faEnvelope} size="lg" style={{ color: 'var(--greenwich-leaf)' }} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1" style={{ color: 'var(--skyline-charcoal)' }}>Email</h4>
                    <p style={{ color: 'var(--skyline-charcoal)' }}>info@centralparkpedicabs.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <FontAwesomeIcon icon={faClock} size="lg" style={{ color: 'var(--greenwich-leaf)' }} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1" style={{ color: 'var(--skyline-charcoal)' }}>Hours</h4>
                    <p style={{ color: 'var(--skyline-charcoal)' }}>Monday - Saturday<br />9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-bold mb-4" style={{ color: 'var(--skyline-charcoal)' }}>Find Us</h4>
                <div className="rounded-lg overflow-hidden h-64 shadow-lg">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.9729696805166!2d-73.97680132418961!3d40.76498623998503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258f07d5da561%3A0x61f6aa300ba8339d!2sGrand%20Army%20Plaza!5e0!3m2!1sen!2sus!4v1653516761432!5m2!1sen!2sus" 
                    width="100%" 
                    height="100%" 
                    style={{border: 0}} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Central Park Pedicabs Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
