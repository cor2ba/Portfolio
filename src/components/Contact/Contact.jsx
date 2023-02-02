import React from "react";
import NavBar from "../NavBar/NavBar";
import Styles from "./Contact.module.css";
import whatsapp from "../../images/whatsapp.png";
import linkedin from "../../images/LinkedIn.png";
import github from "../../images/github.svg";
import email from "../../images/gmail.png";

const Contact = () => {
  let color = "Contact";
  return (
    <div>
      <NavBar color={color} />
      <h1 data-aos="zoom-in" className={Styles.Title}>Contact</h1>
      <div className={Styles.Container}>
        <a
          data-aos="fade-right"
          className={Styles.Link}
          Target="_blank"
          href="mailto:cordobagabrielignacio@gmail.com"
        >
          <div className={Styles.Contact}>
            <img className={Styles.Image} src={email} alt="E-Mail" />
            <h1 className={Styles.Subtitle}>E-Mail</h1>
          </div>
        </a>
        <a
          data-aos="fade-up-right"
          className={Styles.Link}
          Target="_blank"
          href="https://api.whatsapp.com/send/?phone=5491125837761&text&type=phone_number&app_absent=0"
        >
          <div className={Styles.Contact}>
            <img className={Styles.Image} src={whatsapp} alt="WhatsApp" />
            <h1 className={Styles.Subtitle}>WhatsApp</h1>
          </div>
        </a>
        <a
          data-aos="fade-up-left"
          className={Styles.Link}
          Target="_blank"
          href="https://www.linkedin.com/in/gabriel-cordoba/"
        >
          <div className={Styles.Contact}>
            <img className={Styles.Image} src={linkedin} alt="Linkedin" />
            <h1 className={Styles.Subtitle}>LinkedIn</h1>
          </div>
        </a>
        <a
          data-aos="fade-left"
          className={Styles.Link}
          Target="_blank"
          href="https://github.com/cor2ba"
        >
          <div className={Styles.Contact}>
            <img className={Styles.Image} src={github} alt="GitHub" />
            <h1 className={Styles.Subtitle}>GitHub</h1>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Contact;
