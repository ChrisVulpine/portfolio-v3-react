// import { useState, useEffect } from 'react';
// Bringing in the required component from 'react-router-dom' for linking between pages
import { Link } from 'react-router-dom';
import Project from '../components/Project/Project';

const projects = [
  {
    title: 'Marvel Versus',
    description: 'Our team created a new Marvel game! Players can form teams of their favorite characters to battle The Collector. ',
    image: './src/assets/img/marvel-vs.png',
    link: 'https://katherine-be.github.io/Marvel-Versus/',
  },
  {
    title: 'Weather Dashboard',
    description: 'I created a weather dashboard using OpenWeather API to display current weather and a 5-day forecast for any searched location.',
    image: 'src/assets/img/weather-dash.png',
    link: 'https://chrisvulpine.github.io/weather-dashboard/',
  },
  {
    title: 'Work Day Scheduler',
    description: 'I created a calendar application that allows a user to schedule events from the hours of 9:00am-6:00pm.',
    image: 'src/assets/img/scheduler.png',
    link: 'https://chrisvulpine.github.io/work-day-scheduler/',
  },
];


export default function HomePage() {
    return(
        <>
    <section className="hero" id="about">
      <img
        src="./src/assets/img/4.png"
        alt="hero-image"
      />
      <div className="bio animate__animated animate__shakeX">
        <h2 className="bio-title">Hey,</h2>
        <h3> my name is Chris Leach</h3>
        <p className="bio-text">
          and I am a developer. I have been a wedding and family photographer for 10 years, however as 2023 came to a close, I felt a desire to make a career change. My passion in life is to create things for people to enjoy.
        </p>
      </div>
    </section>
    <section className="more-about">
      <h2>More About Me</h2>
      <p>
        Now it is 2024, and I decided to pursue a passion I never really knew I had. Gaming has been part of my life since I could hold a controller. It all began with a red-hatted Italian plumber. I stumbled into coding years ago and had fun with it, but it wasn't until I looked back at it in January 2024 that a love for coding and development set in.
        </p>
    </section>


    <section className="skills fade-in-section" id="skills">
      <h2 className="skill-header">My Top Skills</h2>

      <div className="skills-wrapper">
        <div className="first-set animate__animated animate__pulse">
          <img
            src="/src/assets/img/icons8-html-5.svg"
            alt=""
            loading="lazy"
            className="icon icon-card"
          />
          <img
            src="/src/assets/img/icons8-css3.svg"
            alt=""
            loading="lazy"
            className="icon icon-card"
          />
          <img
            src="/src/assets/img/icons8-javascript.svg"
            alt=""
            loading="lazy"
            className="icon icon-card"
          />
        </div>

        <div className="">
            
          <img
            src="/src/assets/react.svg"
            alt=""
            loading="lazy"
            className="icon icon-card logo react logo-spin"
          />
          <img
            src="/src/assets/img/icons8-bootstrap.svg"
            alt=""
            loading="lazy"
            className="icon icon-card"
          />
          <img
            src="/src/assets/img/icons8-git.svg"
            alt=""
            loading="lazy"
            className="icon icon-card"
          />
        </div>
      </div>
    </section>


      <section>
    <h2 id="projects">Recent Projects</h2>
    <div className="projects" >
    
    
    
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>

      </section>



    <section className="contact fade-in-section" id="contact">
      <h2>Get In Touch With Me!</h2>
      <br>
      </br>
      <p> Use my <Link className="nav-link" to="/contact">Contact Form</Link> or the methods below!</p>
    </section>


        
        </>
    )
}