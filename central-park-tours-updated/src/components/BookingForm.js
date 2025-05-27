import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faClock, faUsers, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    tour: '',
    date: '',
    time: '',
    guests: '',
    name: '',
    email: '',
    special: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Thank you for your booking request! We will contact you shortly to confirm your reservation.');
  };
  
  return (
    <section id="booking" className="py-20" style={{ backgroundColor: 'var(--hudson-mist)', position: 'relative', zIndex: 1 }}>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <h2 className="section-title" style={{ color: 'var(--skyline-charcoal)' }}>Book Your Experience</h2>
        <p className="section-subtitle" style={{ color: 'var(--skyline-charcoal)' }}>
          Reserve your spot for an unforgettable journey through Central Park with our expert guides.
        </p>
        
        <div className="max-w-4xl mx-auto mt-12">
          <div style={{ 
            backgroundColor: '#FFFFFF', 
            padding: '2rem', 
            borderRadius: '0.5rem', 
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            position: 'relative',
            zIndex: 3
          }}>
            <h3 className="text-2xl font-bold mb-6 text-center" style={{ color: 'var(--skyline-charcoal)' }}>Book Your Experience</h3>
            <p className="text-center mb-8" style={{ color: 'var(--skyline-charcoal)' }}>
              Reserve your spot for an unforgettable journey through Central Park with our expert guides.
            </p>
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="flex items-center mb-2 font-medium" style={{ color: 'var(--skyline-charcoal)' }}>
                    <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" style={{ color: 'var(--greenwich-leaf)' }} />
                    Select a Tour
                  </label>
                  <select 
                    name="tour" 
                    value={formData.tour} 
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg"
                    style={{ backgroundColor: 'white', border: '1px solid rgba(0, 0, 0, 0.2)', color: 'var(--skyline-charcoal)' }}
                    required
                  >
                    <option value="">-- Select Tour --</option>
                    <option value="classic">Classic Park Tour</option>
                    <option value="express">Express Highlights Tour</option>
                    <option value="sunset">Sunset Magic Tour</option>
                    <option value="photo">Photo Safari Tour</option>
                    <option value="family">Family Adventure Tour</option>
                  </select>
                </div>
                
                <div>
                  <label className="flex items-center mb-2 font-medium" style={{ color: 'var(--skyline-charcoal)' }}>
                    <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" style={{ color: 'var(--greenwich-leaf)' }} />
                    Preferred Date
                  </label>
                  <input 
                    type="date" 
                    name="date" 
                    value={formData.date} 
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg"
                    style={{ backgroundColor: 'white', border: '1px solid rgba(0, 0, 0, 0.2)', color: 'var(--skyline-charcoal)' }}
                    required
                  />
                </div>
                
                <div>
                  <label className="flex items-center mb-2 font-medium" style={{ color: 'var(--skyline-charcoal)' }}>
                    <FontAwesomeIcon icon={faClock} className="mr-2" style={{ color: 'var(--greenwich-leaf)' }} />
                    Preferred Time
                  </label>
                  <select 
                    name="time" 
                    value={formData.time} 
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg"
                    style={{ backgroundColor: 'white', border: '1px solid rgba(0, 0, 0, 0.2)', color: 'var(--skyline-charcoal)' }}
                    required
                  >
                    <option value="">-- Select Time --</option>
                    <option value="9:00">9:00 AM</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="12:00">12:00 PM</option>
                    <option value="13:00">1:00 PM</option>
                    <option value="14:00">2:00 PM</option>
                    <option value="15:00">3:00 PM</option>
                    <option value="16:00">4:00 PM</option>
                    <option value="17:00">5:00 PM</option>
                  </select>
                </div>
                
                <div>
                  <label className="flex items-center mb-2 font-medium" style={{ color: 'var(--skyline-charcoal)' }}>
                    <FontAwesomeIcon icon={faUsers} className="mr-2" style={{ color: 'var(--greenwich-leaf)' }} />
                    Number of Guests
                  </label>
                  <select 
                    name="guests" 
                    value={formData.guests} 
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg"
                    style={{ backgroundColor: 'white', border: '1px solid rgba(0, 0, 0, 0.2)', color: 'var(--skyline-charcoal)' }}
                    required
                  >
                    <option value="">-- Select Guests --</option>
                    <option value="1">1 Person</option>
                    <option value="2">2 People</option>
                    <option value="3">3 People</option>
                    <option value="4">4 People</option>
                    <option value="5">5+ People</option>
                  </select>
                </div>
                
                <div>
                  <label className="flex items-center mb-2 font-medium" style={{ color: 'var(--skyline-charcoal)' }}>
                    <FontAwesomeIcon icon={faUser} className="mr-2" style={{ color: 'var(--greenwich-leaf)' }} />
                    Your Name
                  </label>
                  <input 
                    type="text" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg"
                    style={{ backgroundColor: 'white', border: '1px solid rgba(0, 0, 0, 0.2)', color: 'var(--skyline-charcoal)' }}
                    required
                  />
                </div>
                
                <div>
                  <label className="flex items-center mb-2 font-medium" style={{ color: 'var(--skyline-charcoal)' }}>
                    <FontAwesomeIcon icon={faEnvelope} className="mr-2" style={{ color: 'var(--greenwich-leaf)' }} />
                    Your Email
                  </label>
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg"
                    style={{ backgroundColor: 'white', border: '1px solid rgba(0, 0, 0, 0.2)', color: 'var(--skyline-charcoal)' }}
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block mb-2 font-medium" style={{ color: 'var(--skyline-charcoal)' }}>
                  Special Requests or Accommodations
                </label>
                <textarea 
                  name="special" 
                  value={formData.special} 
                  onChange={handleChange}
                  rows="4" 
                  className="w-full p-3 border rounded-lg"
                  style={{ backgroundColor: 'white', border: '1px solid rgba(0, 0, 0, 0.2)', color: 'var(--skyline-charcoal)' }}
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full py-4 px-6 rounded-lg font-bold text-lg transition-all transform hover:scale-105"
                style={{ backgroundColor: 'var(--accent)', color: 'var(--skyline-charcoal)' }}
              >
                Book Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
