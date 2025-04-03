// src/App.js
import React from 'react';
import './App.css'; // We'll import some basic styles

import galleryCafeInterior from './assets/gallery-cafe-interior.webp';
import galleryRibeyeSteak from './assets/gallery-ribeye-steak.webp';
import gallerySpecialEvent from './assets/gallery-special-event.webp';
import homeCafeFausse from './assets/home-cafe-fausse.webp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* FR-1: Display Café Fausse’s name prominently. */}
        <h1>Café Fausse</h1>
      </header>

      <main className="App-main">
        {/* FR-4: Provide navigation links */}
        <nav className="App-nav">
          <a href="#menu">Menu</a>
          <a href="#reservations">Reservations</a>
          <a href="#about">About Us</a>
          <a href="#gallery">Gallery</a>
        </nav>

        {/* FR-3: Include high-quality images and a consistent theme. */}
        {/* Placeholder for images - We'll add actual images later */}
        <div className="placeholder-image-area">
          <img className="resized-image" src={galleryCafeInterior} alt="Cafe Interior" />
        </div>

        {/* FR-2: Show contact information and hours */}
        <section className="contact-info">
          <h2>Visit Us</h2>
          <p>
            <strong>Address:</strong><br />
            1234 Culinary Ave, Suite 100<br />
            Washington, DC 20002
          </p>
          <p>
            <strong>Phone:</strong> (202) 555-4567
          </p>
          <div>
            <strong>Hours:</strong>
            <ul>
              <li>Monday–Saturday: 5:00 PM – 11:00 PM</li>
              <li>Sunday: 5:00 PM – 9:00 PM</li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="App-footer">
        {/* Optional Footer Content */}
        <p>&copy; {new Date().getFullYear()} Café Fausse. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;