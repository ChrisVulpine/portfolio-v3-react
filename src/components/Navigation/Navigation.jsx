import { useLocation, Link } from 'react-router-dom';
// import React, { useContext } from 'react'
// import Brightness2Icon from '@mui/icons-material/Brightness2'
// import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded'

// import { ThemeContext } from '../../contexts/theme'


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
{/* <button
        type='button'
        onClick={toggleTheme}
        className='btn btn--icon nav__theme'
        aria-label='toggle theme'
      >
        {themeName === 'dark' ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
      </button> */}
<button className="burger-menu" id="burger-menu">
<ion-icon class="bars" name="menu-outline"></ion-icon>
<ion-icon class="times" name="close-outline"></ion-icon>
</button>
</nav>
);

};

export default Navigation;