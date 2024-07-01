import { useLocation, Link } from 'react-router-dom';
// import React, { useContext } from 'react'
// import Brightness2Icon from '@mui/icons-material/Brightness2'
// import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded'

// import { ThemeContext } from '../../contexts/theme'

// Nav hamburgerburger selections
// const burger = document.querySelector("#burger-menu");
// const ul = document.querySelector("nav ul");


// // Scroll to top selection
// const scrollUp = document.querySelector("#scroll-up");

// // Select nav links
// const navLink = document.querySelectorAll(".nav-link");

// // Hamburger menu function
// burger.addEventListener("click", () => {
//   ul.classList.toggle("show");
// });

// // Close hamburger menu when a link is clicked
// navLink.forEach((link) =>
//   link.addEventListener("click", () => {
//     ul.classList.remove("show");
//   })
// );

// // scroll to top functionality
// scrollUp.addEventListener("click", () => {
//   window.scrollTo({
//     top: 0,
//     left: 0,
//     behavior: "smooth",
//   });
// });



const Navigation = () => {
    // const [{ themeName, toggleTheme }] = useContext(ThemeContext)
    const location = useLocation();
return(

<nav>
<ul className="navigation">
<li> <Link className="nav-link" to="/">Home</Link></li>

{location.pathname !== '/contact' &&(
    <>
      <li><a href="#about" className="nav-link">About</a></li>
      <li><a href="#skills" className="nav-link">Skills</a></li>
      <li><a href="#projects" className="nav-link">Projects</a></li>
  </>
)}

<li> <Link className="nav-link" to="/contact">Contact</Link></li>
<li><a href="https://drive.google.com/file/d/1vZQBc5jUAcxtYmAGdZeAWKi2nOuuUJ2f/view?usp=sharing" className="nav-link">Resume</a></li>
</ul>
<button className="burger-menu" id="burger-menu">
<ion-icon class="bars" name="menu-outline"></ion-icon>
<ion-icon class="times" name="close-outline"></ion-icon>
</button>
</nav>
);

};

export default Navigation;