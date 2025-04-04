import React, { useState } from 'react';
import './App.css'; // Import styles
import Slider from 'react-slick'; // Import React Slick for the carousel
import { Link } from 'react-scroll'; // Import React Scroll
import Modal from 'react-modal'; // Import React Modal
import galleryRibeyeSteak from './assets/gallery-ribeye-steak.webp';
import gallerySpecialEvent from './assets/gallery-special-event.webp';
import homeCafeFausse from './assets/home-cafe-fausse.webp';
import galleryCafeInterior from './assets/gallery-cafe-interior.webp';
import { FaCalendarAlt } from 'react-icons/fa'; // Import calendar icon

// Set the app element for accessibility
Modal.setAppElement('#root');

function App() {
  // Carousel settings
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  // State for modal visibility and success message
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    setShowSuccessMessage(true); // Show success message
    setIsModalOpen(false); // Close the modal
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Café Fausse</h1>
      </header>

      <main className="App-main">
        {/* Navigation Links */}
        <nav className="App-nav">
          <Link to="menu" smooth={true} duration={500}>Menu</Link>
          <Link to="reservations" smooth={true} duration={500}>Reservations</Link>
          <Link to="about" smooth={true} duration={500}>About Us</Link>
          <Link to="gallery" smooth={true} duration={500}>Gallery</Link>
        </nav>

        {/* Carousel Section */}
        <Slider {...carouselSettings}>
          <div>
            <img
              className="carousel-image"
              src={galleryRibeyeSteak}
              alt="Ribeye Steak"
            />
          </div>
          <div>
            <img
              className="carousel-image"
              src={gallerySpecialEvent}
              alt="Special Event"
            />
          </div>
          <div>
            <img
              className="carousel-image"
              src={homeCafeFausse}
              alt="Cafe Fausse"
            />
          </div>
          <div>
            <img
              className="carousel-image"
              src={galleryCafeInterior}
              alt="Cafe Interior"
            />
          </div>
        </Slider>

        {/* Success Message */}
        {showSuccessMessage && (
          <div className="success-message">
            <p>Your reservation has been successfully submitted! 🎉</p>
          </div>
        )}

        {/* Sections */}
        <section id="menu">
          <h2>Menu</h2>
          <p>Explore our delicious offerings...</p>
        </section>

        <section id="reservations">
          <h2>Reservations</h2>
          <button className="reservation-button" onClick={() => setIsModalOpen(true)}>
            <FaCalendarAlt style={{ marginRight: '8px' }} />
            Make a Reservation
          </button>
          </section>

        {/* Modal for Reservations */}
        <Modal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          contentLabel="Reservation Modal"
          className="reservation-modal"
          overlayClassName="reservation-overlay"
        >
          <h2>Make a Reservation</h2>
          <p>Fill out the form below to reserve your table:</p>
          <form onSubmit={handleFormSubmit}>
            <label>
              Name:
              <input type="text" placeholder="Your Name" required />
            </label>
            <br />
            <label>
              Date:
              <input type="date" required />
            </label>
            <br />
            <label>
              Time:
              <input type="time" required />
            </label>
            <br />
            <label>
              Guests:
              <input type="number" min="1" placeholder="Number of Guests" required />
            </label>
            <br />
            <button type="submit">Submit</button>
          </form>
          <button onClick={() => setIsModalOpen(false)}>Close</button>
        </Modal>

        <section id="about">
          <h2>About Us</h2>
          <p>Learn more about Café Fausse...</p>
        </section>

        <section id="gallery">
          <h2>Gallery</h2>
          <p>Check out our amazing photos...</p>
        </section>

        {/* Contact Information Section */}
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
        <p>&copy; {new Date().getFullYear()} Café Fausse. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;