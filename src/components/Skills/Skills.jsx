import "./index.scss";
import htmlLogo from "../../assets/images/html-icon.svg";
import jsLogo from "../../assets/images/js-icon.svg";
import sassLogo from "../../assets/images/sass-icon.svg";
import reactLogo from "../../assets/images/react-icon.svg";
import mongoLogo from "../../assets/images/mongodb-icon.svg";
import sqlLogo from "../../assets/images/sql-icon.svg";
import nodeLogo from "../../assets/images/node-icon.svg";
import cssLogo from "../../assets/images/css-icon.svg";

document.addEventListener('scroll', function (e) {
      let top  = window.scrollY + window.innerHeight;
      let isVisible = top > document.querySelector('.skills__container').offsetTop;

   if (isVisible) {
     document.querySelector('.skills__container').classList.add('animate');
   }
});

const Skills = () => {
  return (
    <>
      <section className="skills">
        <h1 className="skills__title">TECHNOLOGIES</h1>
        <div className="skills__container">
          <div className="skills__container-card">
            <img
              className="skills__container-card-img"
              src={htmlLogo}
              alt="HTML Logo"
            />
            <span className="skills__container-card-name">HTML</span>
          </div>
          <div className="skills__container-card">
            <img
              className="skills__container-card-img"
              src={cssLogo}
              alt="CSS Logo"
            />
            <span className="skills__container-card-name">CSS</span>
          </div>
          <div className="skills__container-card">
            <img
              className="skills__container-card-img"
              src={sassLogo}
              alt="Sass Logo"
            />
            <span className="skills__container-card-name">Sass</span>
          </div>
          <div className="skills__container-card">
            <img
              className="skills__container-card-img"
              src={jsLogo}
              alt="JavaScript Logo"
            />
            <span className="skills__container-card-name">JavaScript</span>
          </div>
          <div className="skills__container-card">
            <img
              className="skills__container-card-img"
              src={reactLogo}
              alt="React Logo"
            />
            <span className="skills__container-card-name">React</span>
          </div>
          <div className="skills__container-card">
            <img className="skills__container-card-img" src={nodeLogo} alt="" />
            <span className="skills__container-card-name">Node</span>
          </div>
          <div className="skills__container-card">
            <img
              className="skills__container-card-img"
              src={mongoLogo}
              alt="MongoDB Logo"
            />
            <span className="skills__container-card-name">MongoDB</span>
          </div>
          <div className="skills__container-card">
            <img
              className="skills__container-card-img"
              src={sqlLogo}
              alt="SQL Logo"
            />
            <span className="skills__container-card-name">SQL</span>
          </div>
        </div>
      </section>

      <div className="divider">
        <hr />
      </div>
    </>
  );
};

export default Skills;
