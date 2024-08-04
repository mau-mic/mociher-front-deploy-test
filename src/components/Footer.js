// src/components/Footer.js
import React from 'react';
import './Footer.css';
import facebookIcon from '../assets/icons/bxl-facebook-circle.svg';
import instagramIcon from '../assets/icons/bxl-instagram.svg';
import linkedinIcon from '../assets/icons/bxl-linkedin.svg';
import youtubeIcon from '../assets/icons/bxl-youtube.svg';
import heartIcon from '../assets/icons/bx-heart.svg';

const Footer = () => {
  return (
    <footer className="footer">
			<div className="footer-container">

				<div className="footer-content">
					<div className="footer-section follow-us">
						<h2>Síguenos en nuestras Redes</h2>
						<p>Y conoce más sobre nuestros proyectos</p>
					</div>
					<div className="footer-section contact">
						<div className="social-icons">
							<a href="#"><img src={facebookIcon} alt="Facebook" /></a>
							<a href="#"><img src={instagramIcon} alt="Instagram" /></a>
							<a href="#"><img src={linkedinIcon} alt="LinkedIn" /></a>
							<a href="#"><img src={youtubeIcon} alt="YouTube" /></a>
						</div>
						<p>proyectos@moviher.com</p>
					</div>
				</div>
				<div className="footer-bottom">
					<p>Powered by <strong>IBC</strong></p>
					<div className="footer-logo">
						{/* //Modificar por logo Moviher x IBC */}
						<img src={heartIcon} alt="Heart" /> 
					</div>
				</div>
			</div>
    </footer>
  );
};

export default Footer;