import React from "react";
import Navbar from "./Navbar/Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <div style={{ padding: "100px" }}>
        <section className="py-5">
          <ul className="timeline-with-icons">
            <li className="timeline-item mb-5">
              <span className="timeline-icon">
                <i
                  className="fa-solid fa-graduation-cap about-icon"
                  style={{ color: "#f76200" }}
                />
              </span>
              <h5 className="fw-bold">
                Jhulelal Institute Of Technology,Nagpur
              </h5>
              <p className="text-muted mb-2 fw-bold">2018-2021</p>
              <p className="text-muted mb-2">
                Bachelor of Enginnering in Electronics and Telecommunication
              </p>

              <p className="text-dark">9.4 CGPA</p>
            </li>
            <li className="timeline-item mb-5">
              <span className="timeline-icon">
                <i
                  className="fa-solid fa-building-columns about-icon"
                  style={{ color: "#f76200" }}
                />
              </span>
              <h5 className="fw-bold">Somayya Polytechnic,Chandrapur</h5>
              <p className="text-muted mb-2 fw-bold">2015-2028</p>
              <p className="text-muted mb-2">
                Diploma in Enginnering (Electronics and Telecommunication)
              </p>

              <p className="text-dark">83.82%</p>
            </li>
          </ul>
        </section>
        <div className="row">
          <div className="col-md-6">
            <h2
              className="d-flex justify-content-center align-items-center fw-bold mb-5"
              style={{ color: "#f76200" }}
            >
              About
            </h2>
            <p>
              Hi there! My name is Sanchit Chaple, and I have recently completed
              my Bachelor's degree in Electronics and Telecommunication in 2021.
              I am passionate about web development and have a strong focus on
              the MERN stack.I am highly motivated and eager to learn and grow
              as a developer. I am familiar with Technologies including MongoDB,
              Express, React, and Node.js. I am excited about new challenges and
              opportunities that allow me to further enhance my skills and
              contribute to innovative projects. I am confident in my ability to
              adapt and learn quickly, and I am eager to apply my knowledge and
              enthusiasm to contribute to the success of development projects.
            </p>
          </div>
          <div className="col-md-6">
            <img src="About.jpg" alt="about" className="about-img" />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
