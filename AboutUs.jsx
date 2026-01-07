// AboutUs.jsx - Required content
import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">  // REQUIRED className
      <h1>About Paradise Nursery</h1>
      <div className="about-content">
        <h2>Our Mission</h2>
        <p>
          At Paradise Nursery, we're dedicated to bringing nature's beauty 
          into your home with our carefully curated selection of plants...
        </p>
        
        <h2>Our Services</h2>
        <ul>
          <li>Wide variety of indoor and outdoor plants</li>
          <li>Gardening supplies and tools</li>
          <li>Plant care consultation</li>
          <li>Delivery services</li>
        </ul>
        
        <h2>Why Choose Us?</h2>
        <p>
          We provide quality plants, expert advice, and excellent customer service...
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
