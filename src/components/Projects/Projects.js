import React from "react";
import "./Projects.css";
import Navbar from "../Navbar/Navbar";
import { projects } from "../../ProjectDetails";

const Projects = () => {
  return (
    <>
      <Navbar />
      <div class="container">
        <div class="row">
        {projects.map((project, index) => (
          <div className="col-md-6" key={index}>
            <div className="card mx-auto" style={{ width: "24rem" ,height:"30rem"}}>
              <img src={project.imgSrc} className="card-img-top" alt={project.title} />
              <div className="card-body">
                <h5 className="card-title fw-bold" style={{color:"#f75f00"}}>{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <p className="card-text"><span className="fw-bold">TechStack:</span> {project.TechStack}</p>
                <div className="d-flex justify-content-between">
                  <button className="btn btn-dark text-light">
                    <i className="fa-brands fa-github" style={{ color: "#ffffff", paddingRight: "10px" }}></i>
                    <a href={project.githubLink} style={{ textDecoration: "none" }} className="text-light">
                      Github
                    </a>
                  </button>
                  <button className="btn btn-dark">
                    <i className="fa-solid fa-link" style={{ color: "#ffffff", paddingRight: "10px" }}></i>
                    <a href={project.liveDemoLink} style={{ textDecoration: "none" }} className="text-light">
                      Live Demo
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        
            </div>
          </div>
  
    </>
  );
};

export default Projects;
