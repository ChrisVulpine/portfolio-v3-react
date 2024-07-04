import { useLocation, Link } from 'react-router-dom';

const Navigation = () => {
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
</nav>
);

};

export default Navigation;