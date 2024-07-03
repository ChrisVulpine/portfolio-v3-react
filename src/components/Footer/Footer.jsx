import { useLocation, Link } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import HomeIcon from '@mui/icons-material/Home';


const Footer = () => {

    const location = useLocation();
    const hiddenPaths = ['/contact', '/resume'];

return(
<footer className="footer">
<div>
    {!hiddenPaths.includes(location.pathname) &&(
    <a className='contact-link' href="#about">
    <HomeIcon fontSize="large" /> </a>
    )}
    <a className='contact-link' href="mailto:chrisleach1191@gmail.com" target="_blank" rel="noopener noreferrer">
    <EmailIcon fontSize="large" /> </a>
    <a className='contact-link' href="https://www.linkedin.com/in/chris-leach-media/" target="_blank" rel="noopener noreferrer">
    <LinkedInIcon fontSize="large" /> </a>
    <a className='contact-link' href="https://github.com/chrisvulpine" target="_blank" rel="noopener noreferrer">
    <GitHubIcon fontSize="large" /> </a>
</div>

<div className="bottom-text">
    <p className="copy">&copy; Copyright 2024</p>
    <p className="copy">
    Website Built by Chris Leach with <FavoriteBorderIcon fontSize="small" />
    </p>
</div>
    
</footer>
    );
};

export default Footer;