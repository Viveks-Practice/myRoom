import React from 'react';
import placeholderImage from '/home/viveks/my-social-media-profile/src/img1.png'; // Add your placeholder image in the src folder and import it here

function AboutMe() {
    return (
      <div className="about-me">
        <div className="profile-content">
          <div className="profile-picture">
            <img src={placeholderImage} alt="Profile" />
          </div>
          <div className="profile-description">
            <h2>About Me</h2>
            <p>Hello! I'm Jonathan Doe, a digital creator and adventure enthusiast based in the vibrant city of Vancouver, BC. I love exploring the great outdoors, tech innovations, and making music. Join me on my journey as I share my experiences, tips, and thoughts on life!</p>
          </div>
        </div>
        
        <div className="social-links">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a>
          {/* Add more social links as needed */}
        </div>
      </div>
    );
  }
  
  export default AboutMe;