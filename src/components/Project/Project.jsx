

// eslint-disable-next-line react/prop-types
const Project = ({ title, description, image, link }) => {
  return (
    
      
      <div className="projects-container">
        <div className="project-container project-card">
          <img  src={image} alt={title} className="project-pic" />
          <h3 className="projects-title">{title}</h3>
          <p className="project-details">{description}</p>
          <button className=" checkbtn"><a href={link} target="_blank" rel="noopener noreferrer">GitHub</a></button>
          <button className=" checkbtn"><a href={link} target="_blank" rel="noopener noreferrer">Live Site</a></button>
        </div>
      </div>
  );
};




export default Project;