
import HtmlImg from '../assets/img/icons8-html-5.svg';
import CssImg from '../assets/img/icons8-css3.svg';
import JsImg from '../assets/img/icons8-javascript.svg';
import BootImg from '../assets/img/icons8-bootstrap.svg';
import GitImg from '../assets/img/icons8-git.svg';
import ReactImg from '../assets/react.svg';


export default function ResumePage() {
    return(
        <>
        <h2>My Skills and Resume</h2>
        <button className="resbtn"><a href="https://drive.google.com/file/d/1vZQBc5jUAcxtYmAGdZeAWKi2nOuuUJ2f/view?usp=sharing" className="nav-link">View & Download My Resume</a></button>

        <section className="skills fade-in-section" id="skills">
      <h2 className="skill-header">My Top Skills</h2>

      <div className="skills-wrapper">
        <div className="first-set animate__animated animate__pulse">
          <img
            src={HtmlImg}
            alt=""
            loading="lazy"
            className="icon icon-card"
          />
          <img
            src={CssImg}
            alt=""
            loading="lazy"
            className="icon icon-card"
          />
          <img
            src={JsImg}
            alt=""
            loading="lazy"
            className="icon icon-card"
          />
        </div>

        <div className="">
            
          <img
            src={ReactImg}
            alt=""
            loading="lazy"
            className="icon icon-card logo react logo-spin"
          />
          <img
            src={BootImg}
            alt=""
            loading="lazy"
            className="icon icon-card"
          />
          <img
            src={GitImg}
            alt=""
            loading="lazy"
            className="icon icon-card"
          />
        </div>
      </div>
    </section>
        </>
    )
}
