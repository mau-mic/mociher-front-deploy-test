// src/components/Servicios.jsx
import React from 'react';
import './Servicios.css';
import ServicioComponente from './ServicioComponente';

import img1 from '../assets/images/Diseño-arqui.jpg';
import img2 from '../assets/images/Remodelacion-arquitectonica.jpg';
import img3 from '../assets/images/Ampliacion-arquitectonica.jpg';
import img4 from '../assets/images/Demolicion-par-total.jpg';
import img5 from '../assets/images/Contruccion-obra-civil.jpg';
import img6 from '../assets/images/Obras-ing.jpg';
import img7 from '../assets/images/Exp-tec.jpg';
import img8 from '../assets/images/Supervision-obra.jpg';
import img9 from '../assets/images/Asesoria-tecnica.jpg';
import img10 from '../assets/images/Cotizacion.jpg';

const servicios = [
  { imagen: img1, contenido: "¿Buscas un diseño que refleje tu visión? Nuestro equipo de diseño arquitectónico transforma ideas en planos detallados, listos para hacer realidad tus sueños." },
  { imagen: img2, contenido: "Transforma tu espacio con nuestras remodelaciones arquitectónicas. Garantizamos resultados que superen tus expectativas y revitalicen tu entorno." },
  { imagen: img3, contenido: "¿Necesitas más espacio? Nuestras ampliaciones arquitectónicas se integran perfectamente con tu estructura existente, ampliando tu hogar con estilo y funcionalidad." },
  { imagen: img4, contenido: "Manejamos demoliciones parciales o totales con seguridad y eficiencia, preparando el camino para nuevas construcciones o renovaciones." },
  { imagen: img5, contenido: "Construimos obras civiles con experiencia y precisión, asegurando la calidad y durabilidad en cada proyecto, desde cimientos hasta acabados." },
  { imagen: img6, contenido: "Nuestra ingeniería asegura proyectos robustos y sostenibles. Confía en nosotros para la ejecución de obras de ingeniería que soporten el paso del tiempo." },
  { imagen: img7, contenido: "No te preocupes por los detalles técnicos. Nuestros expedientes técnicos están diseñados para facilitarte el proceso, cumpliendo con todas las normativas y requisitos." },
  { imagen: img8, contenido: "Para una ejecución impecable, ofrecemos supervisión de obras, asegurando que cada fase de tu proyecto se complete a tiempo y con la más alta calidad." },
  { imagen: img9, contenido: "Nuestro asesoramiento técnico te guía en cada etapa del proyecto, desde la planificación inicial hasta la finalización, garantizando soluciones eficaces y eficientes." },
  { imagen: img10, contenido: "¡Contáctanos hoy para obtener cotizaciones personalizadas! Estamos aquí para hacer realidad tus proyectos con presupuestos claros y competitivos.", largo: true }
];

const Servicios = () => {
  return (
    <div id="services-section">
      <h2>NUESTROS SERVICIOS</h2>
      <p>Contamos con 10 servicios fundamentales en el rubro</p>
      <div className="services-grid">
        {servicios.map((servicio, index) => (
          <ServicioComponente key={index} imagen={servicio.imagen} largo={servicio.largo} contenido={servicio.contenido} />
        ))}
      </div>
    </div>
  );
};

export default Servicios;