import "./index.scss";
import projectOne from "../../assets/images/motivationalmessages.jpg";
import projectTwo from "../../assets/images/comiccon.jpg";
import projectThree from "../../assets/images/newslandpage.jpg";
import projectFour from "../../assets/images/ecommerce.jpg";
import projectFive from "../../assets/images/movielistapi.jpg";
import projectSix from "../../assets/images/weatherapi.jpg";
import githubLogo from "../../assets/images/icon-github.svg";
import netlifyLogo from "../../assets/images/icon-netlify.svg";

document.addEventListener('scroll', function (e) {
  let top  = window.scrollY + window.innerHeight;
  let isVisible = top > document.querySelector('.project__container-cards-left').offsetTop;

if (isVisible) {
 document.querySelector('.project__container-cards-left').classList.add('animate-left');
}
});

document.addEventListener('scroll', function (e) {
  let top  = window.scrollY + window.innerHeight;
  let isVisible = top > document.querySelector('.project__container-cards-right').offsetTop;

if (isVisible) {
 document.querySelector('.project__container-cards-right').classList.add('animate-right');
}
});

const ProjectSection = () => {
  return (
    <section className="project">
      <div className="project__header">
        <h1 className="project__header-title">PROJECTS</h1>
        <a className="project__header-link" href="#">CONTACT ME</a>
      </div>
      <div className="project__container">
        <div className="project__container-cards-left">
          <div className="project__container-card">
          <figure className="project__container-card-img">
            <img src={projectOne} alt="Project Motivational Messages" />
            <figcaption>Motivational Messages Generator</figcaption>
          </figure>
          <div className="project__container-card-group">
            <div className="project__container-card-group__container">
              <div className="project__container-card-group__container-tech">
                <span className="project__container-card-group-technology">HTML</span>
                <span className="project__container-card-group-technology">CSS</span>
                <span className="project__container-card-group-technology">JavaScript</span>
            </div>
              <div className="project__container-card-group__container-tech">
                <a className="project__container-card-link" href="https://github.com/kunzeleric/random-inspiration-messages" target="_blank"><img src={githubLogo} alt="Github Link" /></a>
                <a className="project__container-card-link" href="https://random-motivational-msgs.netlify.app" target="_blank"><img src={netlifyLogo} alt="Netlify Link" /></a>
              </div>
          </div>
          </div>
          </div>
          <div className="project__container-card">
            <figure className="project__container-card-img">
              <img src={projectTwo} alt="Project Comic Con 2022 Landpage" />
              <figcaption>Comic Con Event</figcaption>
            </figure>
            <div className="project__container-card-group">
            <div className="project__container-card-group__container">
              <div className="project__container-card-group__container-tech">
                <span className="project__container-card-group-technology">HTML</span>
                <span className="project__container-card-group-technology">CSS</span>
                <span className="project__container-card-group-technology">JavaScript</span>
              </div>
              <div className="project__container-card-group__container-tech">
                <a className="project__container-card-link" href="https://github.com/kunzeleric/comicCon_LP" target="_blank"><img src={githubLogo} alt="Github Link" /></a>
                <a className="project__container-card-link" href="https://comic-con-landpage.netlify.app" target="_blank"><img src={netlifyLogo} alt="Netlify Link" /></a>
              </div>
          </div>
          </div>
          </div>
          <div className="project__container-card">
          <figure className="project__container-card-img">
            <img src={projectThree} alt="Project News Land Page" />
            <figcaption>Tech News Homepage</figcaption>
          </figure>
          <div className="project__container-card-group">
          <div className="project__container-card-group__container">
          <div className="project__container-card-group__container-tech">
            <span className="project__container-card-group-technology">HTML</span>
            <span className="project__container-card-group-technology">Bootstrap</span>
            </div>
            <div className="project__container-card-group__container-tech">
            <a className="project__container-card-link" href="https://github.com/kunzeleric/news-home-page" target="_blank"><img src={githubLogo} alt="Github Link" /></a>
            <a className="project__container-card-link" href="https://news-homepage-tech.netlify.app" target="_blank"><img src={netlifyLogo} alt="Netlify Link" /></a>
            </div>
          </div>
        </div>
          </div>
      </div>
        <div className="project__container-cards-right">
          <div className="project__container-card">
          <figure className="project__container-card-img">
            <img src={projectFour} alt="Project E-commerce DNC" />
            <figcaption>E-commerce DNC</figcaption>
          </figure>
          <div className="project__container-card-group">
            <div className="project__container-card-group__container">
              <div className="project__container-card-group__container-tech">
                <span className="project__container-card-group-technology">React</span>
                <span className="project__container-card-group-technology">Sass</span>
                <span className="project__container-card-group-technology">React Router</span>
              </div>
              <div className="project__container-card-group__container-tech">
                <a className="project__container-card-link" href="https://github.com/kunzeleric/project_Ecommerce" target="_blank"><img src={githubLogo} alt="Github Link" /></a>
                <a className="project__container-card-link" href="https://ecommerce-dnc-page.netlify.app" target="_blank"><img src={netlifyLogo} alt="Netlify Link" /></a>
              </div>
                </div>
            </div>
          </div>
          <div className="project__container-card">
          <figure className="project__container-card-img">
            <img src={projectFive} alt="Project Movies List API" />
            <figcaption>Movie List API</figcaption>
          </figure>
          <div className="project__container-card-group">
            <div className="project__container-card-group__container">
              <div className="project__container-card-group__container-tech">
                <span className="project__container-card-group-technology">React</span>
                <span className="project__container-card-group-technology">API</span>
                <span className="project__container-card-group-technology">Sass</span>
              </div>
              <div className="project__container-card-group__container-tech">
                <a className="project__container-card-link"href="https://github.com/kunzeleric/movieList_project" target="_blank"><img src={githubLogo} alt="Github Link" /></a>
                <a className="project__container-card-link" href="https://movie-list-deplayer.netlify.app" target="_blank"><img src={netlifyLogo} alt="Netlify Link" /></a>
              </div>
              </div>
          </div>
          </div>
          <div className="project__container-card">
          <figure className="project__container-card-img">
            <img src={projectSix} alt="Project API Weather" />
            <figcaption>Weather API React</figcaption>
          </figure>
          <div className="project__container-card-group">
            <div className="project__container-card-group__container">
              <div className="project__container-card-group__container-tech">
                <span className="project__container-card-group-technology">React</span>
                <span className="project__container-card-group-technology">Sass</span>
                <span className="project__container-card-group-technology">API</span>
              </div>
              <div className="project__container-card-group__container-tech">
                <a className="project__container-card-link" href="https://github.com/kunzeleric/react_Weather" target="_blank"><img src={githubLogo} alt="Github Link" /></a>
                <a className="project__container-card-link" href="https://weather-react-nowandthen.netlify.app" target="_blank"><img src={netlifyLogo} alt="Netlify Link" /></a>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
