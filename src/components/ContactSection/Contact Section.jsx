import Form from "../Form/Form";
import githubLogo from "../../assets/images/icon-github.svg";
import linkedinLogo from "../../assets/images/icon-linkedin.svg";
import frontendLogo from "../../assets/images/icon-frontend-mentor.svg";
import ringsImage from "../../assets/images/pattern-rings.svg";
import "./index.scss";

const ContactSection = () => {
  return (
    <section className="footer">
        <section className="footer__contact">
          <div className="footer__contact__introduction">
            <div className="footer__contact__introduction-info">
              <h2 className="footer__contact__introduction-info-title">Contact</h2>
              <p className="footer__contact__introduction-info-msg">I would to love to hear from you! If you'd like to discuss your project, give a feedback 
                or just talk to me, please fill in this form and I'll get back to you ASAP!</p>
            </div>
          </div>
          <Form/>
        </section>
        <section className="footer__social-media">
            <div className="footer__social-media">
              <div className="footer__social-media-footer">
                <p className="footer__social-media-footer-name">erickunzel</p>
                <nav className="footer__social-media-footer-social">
                  <a className="footer__social-media-footer-social-link"><img src={githubLogo} alt="Github"/></a>
                  <a className="footer__social-media-footer-social-link"><img src={linkedinLogo} alt="Linkedin"/></a>
                  <a className="footer__social-media-footer-social-link"><img src={frontendLogo} alt="Frontend Mentor"/></a>
                </nav>
              </div>
            </div>
        </section>
        <img className="footer__ring" src={ringsImage} alt="Rings" />
      </section>
  );
};

export default ContactSection;
