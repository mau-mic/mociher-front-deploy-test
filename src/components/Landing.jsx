// src/components/Landing.jsx
// import React from 'react';
import React, { useEffect, useState } from 'react';
import './Landing.css';

const images = [
  require('../assets/images/img-interacion-landing1.jpg'),
  require('../assets/images/img-interacion-landing2.jpg'),
  require('../assets/images/img-interacion-landing3.jpg')
];

const preloadImages = (imageArray) => {
  return imageArray.map((src) => {
    const img = new Image();
    img.src = src;
    return img;
  });
};

const Landing = () => {
  const [backgroundIndex, setBackgroundIndex] = useState(0);

  useEffect(() => {
    const preloadedImages = preloadImages(images);
    preloadedImages.forEach(img => {
      img.onload = () => console.log(`${img.src} loaded`);
    });

    const interval = setInterval(() => {
      setBackgroundIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Cambiar imagen cada 4 seg

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="landing-section"
    style={{ backgroundImage: `url(${images[backgroundIndex]})`}}
    >
        <div className="content-landing">
          <h1>INNOVACIÓN EN 
            CADA ESTRUCTURA</h1>
          <p>Edificaciones de Calidad desde 2004</p>
          <button className="cta-button">
            <a href="#contact-section">
              COTIZA TU PROYECTO
            </a>
          </button>
        </div>
    </div>
  );
};  

export default Landing;