import ProjectCard from "../ProjectCard/ProjectCard";
import "./index.scss";

document.addEventListener('scroll', function (e) {
  let top  = window.scrollY + window.innerHeight;
  let isVisible = top > document.querySelector('.project__container-cards').offsetTop;

if (isVisible) {
 document.querySelector('.project__container-cards').classList.add('animate');
}
});

const ProjectSection = ({data}) => {
  return (
    <section className="project">
      <div className="project__header">
        <h1 className="project__header-title">PROJECTS</h1>
        <a className="project__header-link" href="#contact">CONTACT ME</a>
      </div>
      <div className="project__container">
        <div className="project__container-cards">
          {
            data.map((project, index) => (
              <ProjectCard data={project} key={index}/>
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
