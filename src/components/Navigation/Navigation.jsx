import { useLocation, Link } from 'react-router-dom';
// import React, { useContext } from 'react'
// import Brightness2Icon from '@mui/icons-material/Brightness2'
// import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded'

// import { ThemeContext } from '../../contexts/theme'
          /*
// Nav hamburgerburger selections
const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");

// Scroll to top selection
const scrollUp = document.querySelector("#scroll-up");

// Select nav links
const navLink = document.querySelectorAll(".nav-link");

// // Hamburger menu function
burger.addEventListener("click", () => {
  ul.classList.toggle("show");
  });
  
  // Close hamburger menu when a link is clicked
  navLink.forEach((link) =>
    link.addEventListener("click", () => {
      ul.classList.remove("show");
      })
      );
      
      // Function to close menu if clicked outside
      document.addEventListener("click", (event) => {
        const isClickInside = ul.contains(event.target) || burger.contains(event.target);
        
        if (!isClickInside) {
          ul.classList.remove("show");
          }
          });

          
          // scroll to top functionality
          scrollUp.addEventListener("click", () => {
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth",
              });
              });

*/

// document.addEventListener("DOMContentLoaded", () => {
//   // Function to add event listeners
//   const addEventListeners = () => {
//     const burger = document.querySelector("#burger-menu");
//     const ul = document.querySelector("nav ul");
//     const scrollUp = document.querySelector("#scroll-up");
//     const navLink = document.querySelectorAll(".nav-link");

//     if (burger && ul) {
//       // Hamburger menu function
//       burger.addEventListener("click", () => {
//         ul.classList.toggle("show");
//       });

//       // Close hamburger menu when a link is clicked
//       navLink.forEach((link) =>
//         link.addEventListener("click", () => {
//           ul.classList.remove("show");
//         })
//       );

//       // Function to close menu if clicked outside
//       document.addEventListener("click", (event) => {
//         const isClickInside = ul.contains(event.target) || burger.contains(event.target);
//         if (!isClickInside) {
//           ul.classList.remove("show");
//         }
//       });
//     }

//     if (scrollUp) {
//       // Scroll to top functionality
//       scrollUp.addEventListener("click", () => {
//         window.scrollTo({
//           top: 0,
//           left: 0,
//           behavior: "smooth",
//         });
//       });
//     }
//   };

//   // Initial add event listeners
//   addEventListeners();

//   // Add event listeners again if screen is resized
//   window.addEventListener("resize", () => {
//     // Remove previous event listeners if needed
//     document.removeEventListener("click", () => {});
//     if (document.querySelector("#burger-menu")) {
//       document.querySelector("#burger-menu").removeEventListener("click", () => {});
//     }
//     if (document.querySelector("#scroll-up")) {
//       document.querySelector("#scroll-up").removeEventListener("click", () => {});
//     }
//     document.querySelectorAll(".nav-link").forEach((link) => {
//       link.removeEventListener("click", () => {});
//     });

//     // Add event listeners again
//     addEventListeners();
//   });
// });








const Navigation = () => {
    // const [{ themeName, toggleTheme }] = useContext(ThemeContext)
    const location = useLocation();
    const hiddenPaths = ['/contact', '/resume'];
return(

<nav>
<ul className="navigation">
<li> <Link className="nav-link" to="/">Home</Link></li>

{!hiddenPaths.includes(location.pathname) &&(
    <>
      <li><a href="#about" className="nav-link">About</a></li>
      <li><a href="#projects" className="nav-link">Projects</a></li>
  </>
)}

<li> <Link className="nav-link" to="/contact">Contact</Link></li>
<li><Link to="/resume" className="nav-link">Resume</Link></li>

</ul>
{/* <button className="burger-menu" id="burger-menu">
<ion-icon class="bars" name="menu-outline"></ion-icon>
{/* <ion-icon class="times" name="close-outline"></ion-icon> */}
{/* </button> */}
</nav>
);

};

export default Navigation;