// Fondoproyectos.js
import React from 'react';
import './Fondoproyectos.css';
import { useNavigate } from 'react-router-dom';
import Cardproyecto from './Cardproyecto';


const Fondoproyectos = ({ projectsData, activeTab }) => { 
  const navigate = useNavigate();

  const filteredProjects = projectsData.filter(project => project.status === activeTab);

  return (
    <div className="projects-section">
      <h2>CONOCE NUESTROS PROYECTOS</h2>
      <div className="tabs">
        <button
          className={activeTab === 'ejecutadas' ? 'active' : ''}
          onClick={() => navigate('/obras-ejecutadas')}
        >
          Obras Ejecutadas
        </button>
        <button
          className={activeTab === 'ejecucion' ? 'active' : ''}
          onClick={() => navigate('/obras-en-ejecucion')}
        >
          Obras en Ejecución
        </button>
      </div>
      {activeTab === 'ejecutadas' ? (
        <div className="timeline">
          {filteredProjects.map((project, index) => (
            <div className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`} key={index}>
              {index % 2 === 0 ? (
                <>
                  <Cardproyecto
                    title={project.title}
                    imageUrl={project.imageUrl}
                    description={project.description}
                    extraInfo={project.extraInfo}
                    year={project.year}
                  />
                  <div className="year">{project.year}</div>
                </>
              ) : (
                <>
                  <div className="year">{project.year}</div>
                  <Cardproyecto
                    title={project.title}
                    imageUrl={project.imageUrl}
                    description={project.description}
                    extraInfo={project.extraInfo}
                    year={project.year}
                  />
                </>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="projects-list">
          {filteredProjects.map((project, index) => (
            <div className="project-card-container" key={index}>
              <Cardproyecto
                title={project.title}
                imageUrl={project.imageUrl}
                description={project.description}
                extraInfo={project.extraInfo}
                year={project.year}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Fondoproyectos;