// App.jsx - Required content
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* REQUIRED: Company name display */}
      <h1>Welcome to Paradise Nursery</h1>
      
      {/* Landing page content */}
      <div className="landing-page">
        <div className="hero-section">
          <h2>Your One-Stop Plant Shop</h2>
          <p>Discover beautiful plants for your home and garden</p>
          
          {/* REQUIRED: Get Started button */}
          <button className="get-started-btn">
            Get Started
          </button>
        </div>
        
        {/* Other content... */}
      </div>
    </div>
  );
}

export default App;
