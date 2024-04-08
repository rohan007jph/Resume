import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect }from 'react';
import logo1 from './logo1.jpg';


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className={`App ${isLoading ? 'loading' : ''}`}>
      {isLoading && (
        <div className="loading-spinner">
          Loading...
        </div>
      )}
    <div className="App">
      <header>
        <img src={logo1} alt="Profile" className="profile-image" />
        <h1>ROHAN MANGSULI</h1>
        <p>+91 7349726140 ⋄ Bengaluru, India</p>
        <p><a href="mailto:rohan.mangsuli1@gmail.com">rohan.mangsuli1@gmail.com</a> ⋄ <a href="https://www.linkedin.com/in/rohan-mangsuli-058ab81bb/" target="_blank" rel="noopener noreferrer">linkedin.com/Rohan</a></p>
      </header>

      <section id="objective">
        <h2>Objective</h2>
        <p>Full-stack Software Engineer skilled in Java Spring Boot, ReactJS, MongoDB, and Docker. Experienced in building scalable solutions, crafting responsive UIs, and optimizing data management. Open to collaborative opportunities in software development.</p>
      </section>

      <section id="education">
        <h2>Education</h2>
        <p>Master of Computer Science, Stanford University (Expected 2020)</p>
        <p>Relevant Coursework: A, B, C, and D.</p>
        <p>Bachelor of Computer Science, Stanford University (2014 - 2017)</p>
      </section>

      <section id="skills">
        <h2>Skills</h2>
        <p>Technical Skills: A, B, C, D</p>
        <p>Soft Skills: A, B, C, D</p>
        <p>XYZ Skills: A, B, C, D</p>
      </section>

      <section id="experience">
        <h2>Experience</h2>
        <div className="job">
          <h3>Role Name | Jan 2017 - Jan 2019</h3>
          <p>Company Name, San Francisco, CA</p>
          <ul>
            <li>Achieved X% growth for XYZ using A, B, and C skills.</li>
            <li>Led XYZ which led to X% of improvement in ABC.</li>
            <li>Developed XYZ that did A, B, and C using X, Y, and Z.</li>
          </ul>
        </div>
        {/* Repeat for other jobs */}
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <div className="project">
          <h3>Hiring Search Tool</h3>
          <p>Built a tool to search for Hiring Managers and Recruiters by using ReactJS, NodeJS, Firebase and boolean queries. Over 25000 people have used it so far, with 5000+ queries being saved and shared, and search results even better than LinkedIn! (<a href="#">Try it here</a>)</p>
        </div>
        {/* Repeat for other projects */}
      </section>

      <section id="extra-curricular">
        <h2>Extra-Curricular Activities</h2>
        <p>Actively write blog posts and social media posts (TikTok, Instagram) viewed by over 20K+ job seekers per week to help people with best practices to land their dream jobs.</p>
        <p>Sample bullet point.</p>
      </section>

      <section id="leadership">
        <h2>Leadership</h2>
        <p>Admin for the FAANGPath Discord community with over 6000+ job seekers and industry mentors. Actively involved in facilitating online events, career conversations, and more alongside other admins and a team of volunteer moderators!</p>
      </section>

      <footer>
        <p>+｡:.ﾟTHANKヽ(*´∀)ﾉﾟYOU.:｡+ﾟ</p>
      </footer>
    </div>
    </div>
  );
}

export default App;