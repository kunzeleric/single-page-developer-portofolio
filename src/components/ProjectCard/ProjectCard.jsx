import "./index.scss";
import githubLogo from "../../assets/images/icon-github.svg";
import netlifyLogo from "../../assets/images/icon-netlify.svg";

const ProjectCard = ({data}) => {
  return (
    <div className="project__container-card">
      <figure className="project__container-card-img">
        <img src={data.imgPath} alt="Project Motivational Messages" />
        <figcaption>{data.name}</figcaption>
      </figure>
      <div className="project__container-card-group">
        <div className="project__container-card-group__container">
          <div className="project__container-card-group__container-tech">
            {
                data.technologies.map((technology, index) => (
                <span className="project__container-card-group-technology">
                    {technology}
                </span>
                ))
            }
          </div>
          <div className="project__container-card-group__container-tech">
            <a
              className="project__container-card-link"
              href={data.githubLink}
              target="_blank"
            >
              <img src={githubLogo} alt="Github Link" />
            </a>
            <a
              className="project__container-card-link"
              href={data.netlifyLink}
              target="_blank"
            >
              <img src={netlifyLogo} alt="Netlify Link" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
