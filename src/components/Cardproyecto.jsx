import React from 'react';
import './Cardproyecto.css';

const Cardproyecto = ({ title, imageUrl, description, extraInfo, year }) => {
  // Split the description into parts
  const [type, area, location, ...rest] = description.split('\n');
  const details = rest.join('\n');

  return (
    <div className="project-card">
      <div className="image-container">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="content">
        <h3>{title}</h3>
        <div className="additional-content">
          <div className="subtitle">{type}</div>
          <div className="details">{area}</div>
          <div className="details">{location}</div>
          <p>{details}</p>
        </div>
      </div>
    </div>
  );
};

export default Cardproyecto;