import React from "react";
import "./Intro.css";
import Typewriter from "typewriter-effect";
import Navbar from "../Navbar/Navbar";

function Intro() {
  return (
    <>
      <Navbar />
      <div className="mt">
        <div className="main">
          <div className="text mt-4">
            <h2
              className="intro"
              style={{ fontWeight: "bold", color: "#000000" }}
            >
              Hello👋🏻 I am,
            </h2>
            <h1 className="main-text">
              <Typewriter
                options={{
                  strings: [
                    "React Js Developer",
                    "Frontend Developer",
                    "MERN Stack Developer",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <div className="mt-4">
              <a
                href="https://www.linkedin.com/in/sanchit-chaple/"
                className="icons"
              >
                <i
                  class="fa-brands fa-linkedin"
                  style={{ color: "#1c4997" }}
                ></i>
              </a>
              <a href="https://github.com/Sanchit2102" className="icons">
                <i class="fa-brands fa-github" style={{ color: "#000000" }}></i>
              </a>
              <a href="mailto:sanchit21chaple@gmail.com" className="icons">
                <i class="fa-solid fa-envelope"></i>
              </a>
            </div>
            <div>
              <a
                style={{ textDecoration: "none" }}
                href="resume.pdf"
                Download="Sanchit Chaple Resume"
              >
                {" "}
                <button className="button">Download Resume</button>
              </a>
            </div>
          </div>
          <div className="hero">
            <img src="1.jpg" alt="hero" className="hero-img" />
          </div>
        </div>

        <div className="middle">
        <div className="hero">
            <img src="skill.avif" alt="hero" className="hero-img" />
          </div>
          <div className="col-md-6">
          <div className="skills-stack">
              <div className="skills-heading">
                <h2 className="fw-bold">Skills</h2>
              </div>
              <div className="skills d-flex flex-row justify-content-center align-items-center">
                <div>
                  <img src="html.png" alt="html" /> HTML
                </div>
                <div>
                  <img src="css.png" alt="css" className="css" /> CSS
                </div>
                <div>
                  <img
                    src="bootstrap.png"
                    alt="bootstrap"
                    className="bootstrap"
                  />{" "}
                  BOOTSTRAP
                </div>
                <div>
                  <img src="js.png" alt="js" /> JAVASCRIPT
                </div>
                <div>
                  <img src="mongodb.png" alt="mongodb" /> MONGODB
                </div>
                <div>
                  <img src="express.png" alt="express" /> EXPRESS
                </div>
                <div>
                  <img src="react.png" alt="react" /> REACT
                </div>
                <div>
                  <img src="node.png" alt="node" /> NODE
                </div>
              </div>
            </div>
          </div>
         
        </div>

        </div>
    
    </>
  );
}

export default Intro;
