// Obras.js
import React from 'react';
import DatosProyecto from './assets/data/DatosProyecto';
import Footer from './components/Footer';
import Fondoproyectos from './components/Fondoproyectos';
import Header from './components/Header';

function Obras({ tab }) {
  return (
    <div className="obras-ejecutadas">
      <Header />
      <Fondoproyectos projectsData={DatosProyecto} activeTab={tab} />      
      <Footer />
    </div>
  );
}

export default Obras;