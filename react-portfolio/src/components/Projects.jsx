import React from 'react'
import { projectList } from '../ProjectList'

const Projects = () => {
  return (
    <div>
      <section id="projects">
        <p className="section__text__p1">Browse My Recent</p>
        <h1 className="title">Projects</h1>
        <div className="experience-details-container">
          <div className="about-containers">
            {projectList.map((project, index) => (
              <div key={index} className="details-container color-container">
                <div className="article-container">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="project-img"
                  />
                </div>
                <h2 className="experience-sub-title project-title">
                  {project.name}
                </h2>
                <div className="btn-container">
                  <button
                    className="btn btn-color-2 project-btn"
                    onClick={() =>
                      window.open(
                        project.github,
                        '_blank',
                        'noopener,noreferrer'
                      )
                    }
                  >
                    Github
                  </button>
                  <button
                    className="btn btn-color-2 project-btn"
                    onClick={() =>
                      window.open(project.live, '_blank', 'noopener,noreferrer')
                    }
                  >
                    Live Demo
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <img
          src="./assets/arrow.png"
          alt="Arrow icon"
          className="icon arrow"
          onClick={() => (window.location.href = './#contact')}
        />
      </section>
    </div>
  )
}

export default Projects