// import { useState, useEffect } from 'react';
// Bringing in the required component from 'react-router-dom' for linking between pages
import { Link } from 'react-router-dom';
import Project from '../components/Project/Project';

import marvelVsImg from '../assets/img/marvel-vs.png';
import weatherDashImg from '../assets/img/weather-dash.png';
import schedulerImg from '../assets/img/scheduler.png';
import employeeImg from '../assets/img/employee-tracker.png';
import jsquizImg from '../assets/img/js-quiz.png';
import ecommImg from '../assets/img/ecom-backend.png';
import HeroImg from '../assets/img/4.png';





const projects = [
  {
    title: 'Marvel Versus',
    description: 'Our team created a new Marvel game! Players can form teams of their favorite characters to battle The Collector. ',
    image: marvelVsImg,
    link: 'https://github.com/Katherine-Be/Marvel-Versus',
    liveLink: 'https://katherine-be.github.io/Marvel-Versus/',
  },
  {
    title: 'Weather Dashboard',
    description: 'I created a weather dashboard using OpenWeather API to display current weather and a 5-day forecast for any searched location.',
    image: weatherDashImg,
    link: 'https://github.com/ChrisVulpine/weather-dashboard',
    liveLink: 'https://chrisvulpine.github.io/weather-dashboard/',

  },
  {
    title: 'Work Day Scheduler',
    description: 'I created a calendar application that allows a user to schedule events from the hours of 9:00am-6:00pm.',
    image: schedulerImg,
    link: 'https://github.com/ChrisVulpine/work-day-scheduler',
    liveLink: 'https://chrisvulpine.github.io/work-day-scheduler/',

  },
  {
    title: 'Employee Tracker',
    description: 'This CMS was created to help companies keep track of their entire employee base in a CLI application.',
    image: employeeImg,
    link: 'https://github.com/ChrisVulpine/employee-tracker',
    liveLink: 'https://chrisvulpine.github.io/employee-tracker/',

  },
  {
    title: 'JavaScript Quiz',
    description: 'This is a timed JavaScript Quiz to learn the basics of JavaScript using basic HTML, CSS, and JS.',
    image: jsquizImg,
    link: 'https://github.com/ChrisVulpine/javascript-quiz',
    liveLink: 'https://chrisvulpine.github.io/javascript-quiz/',

  },
  {
    title: 'eCommerce Backend',
    description: 'This is a functioning backend for an e-commerce website. The backend takes a working Express.js API and configures it to use Sequelize in order to interact with a MySQL database. It includes routes for categories, products, and tags.',
    image: ecommImg,
    link: 'https://github.com/ChrisVulpine/e-commerce-backend',
    liveLink: 'https://drive.google.com/file/d/1OF458cBHc5I6JjINqRJFjsu0cQ7PQnMa/view',

  },
];


export default function HomePage() {
    return(
        <>
    <section className="hero" id="about">
      <img
        src= { HeroImg }
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
            liveLink={project.liveLink}
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