// src/components/ServicioComponente.jsx
import React from 'react';
import './ServicioComponente.css';

const ServicioComponente = ({ imagen, largo, contenido }) => {
  return (
    <div className={`service-card ${largo ? 'long' : ''}`}>
      <div className="service-card-inner">
        <div className="service-card-front" style={{ backgroundImage: `url(${imagen})` }}></div>
        <div className="service-card-back">
          <p>{contenido}</p>
        </div>
      </div>
    </div>
  );
};

export default ServicioComponente;