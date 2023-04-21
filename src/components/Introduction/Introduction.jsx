import githubLogo from "../../assets/images/icon-github.svg";
import linkedinLogo from "../../assets/images/icon-linkedin.svg";
import frontendLogo from "../../assets/images/icon-frontend-mentor.svg";
import ringsImage from "../../assets/images/pattern-rings.svg";
import ericImage from "../../assets/images/southpark-eric.png";
import "./index.scss";

const Introduction = () => {
  return (
    <>
      <header className="introduction-menu">
        <p className="introduction-menu__title">erickunzel</p>
        <nav className="introduction-menu__nav">
          <a
            title="Github - Eric Kunzel"
            className="introduction-menu__nav-link"
            href="https://github.com/kunzeleric"
            target="_blank"
          >
            <img src={githubLogo} alt="Github - Eric Kunzel" />
          </a>
          <a
            title="Linkedin - Eric Kunzel"
            className="introduction-menu__nav-link"
            href="https://www.linkedin.com/in/eric-edward-k%C3%BCnzel-0b139574/"
            target="_blank"
          >
            <img src={linkedinLogo} alt="Linkedin - Eric Kunzel" />
          </a>
          <a
            title="Frontend Mentor - Eric Kunzel"
            className="introduction-menu__nav-link"
            href="#"
            target="_blank"
          >
            <img src={frontendLogo} alt="Frontend Mentor - Eric Kunzel" />
          </a>
        </nav>
      </header>

      <section className="introduction-section">
        <div className="introduction-section-left">
          <img
            className="introduction-section-left__img"
            src={ringsImage}
            alt="Rings"
          />
          <div className="introduction-section-left__info">
            <h1 className="introduction-section-left__info-title">
              Nice to meet you! <br />
              I'm <u>Eric Kunzel.</u>
            </h1>
            <p className="introduction-section-left__info-description">
              Based in Brazil, I'm looking for a new career in technology as a
              front-end developer. I love challenges and gaming, and I'm
              always eager to learn something new.
            </p>
            <a href="#contact" className="introduction-section-left__info-link">
              contact me
            </a>
          </div>
        </div>
        <div className="introduction-section-right">
          <img
            className="introduction-section-right__eric"
            src={ericImage}
            alt="Southpark version of me"
          />
        </div>
      </section>

      <div className="divider">
      <hr/>
      </div>
    </>
  );
};

export default Introduction;
