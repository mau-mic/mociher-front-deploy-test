import React from 'react'
import './Misionvision.css'
import edificiosImage from '../assets/icons/edificios_myv.jpg'
import misionIcon from '../assets/icons/bx-btnmision.svg';
import visionIcon from '../assets/icons/bx-btnvision.svg';
import valoresIcon from '../assets/icons/bs-btnvalores.svg';

function Misionvision() {
    return (
        <section id="mision-vision-section" className="section-container">
      <div className='inner'>
      <h2 className="section-title">NUESTROS COMPROMISOS</h2>
      <div className="content-wrapper">
        <div className="image-container-mv">
          <img src={edificiosImage} alt="Sky and buildings" className="section-image" />
        </div>
        <div className="content-container">
          <div className="subsection">
            <h3>MISIÓN <img src={misionIcon} alt="Misión" className="icon" /></h3>
            <p>En Moviher, nos enfocamos en el bienestar social, la integridad de nuestros colaboradores, el respeto al medio ambiente y el compromiso total con nuestros clientes.</p>
            <hr />
          </div>
          <div className="subsection">
            <h3>VISIÓN <img src={visionIcon} alt="Visión" className="icon" /></h3>
            <p>Nuestra pasión por el trabajo impulsa la mejora continua y la entrega de productos de alta calidad.</p>
            <hr />
          </div>
          <div className="subsection">
            <h3>VALORES <img src={valoresIcon} alt="Valores" className="icon" /></h3>
            <p>Priorizamos la integridad en todos los procesos, asegurando plazos cumplidos y decisiones éticas. Nos comprometemos socialmente para mejorar la calidad de vida actual y futura, incorporando prácticas ecológicas en nuestros proyectos.</p>
            <hr />
          </div>
        </div>
        </div>
      </div>
    </section>
    )
}

export default Misionvision