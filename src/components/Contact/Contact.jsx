import React from "react";
import NavBar from "../NavBar/NavBar";
import Styles from "./Contact.module.css";
import whatsapp from "../../images/whatsapp.png";
import linkedin from "../../images/LinkedIn.png";
import github from "../../images/github_PNG83.png";
import email from "../../images/gmail.png";

const Contact = () => {
  let color = "Contact";
  return (
    <div>
      <NavBar color={color} />
      <h1 className={Styles.Title}>Contact</h1>
      <div className={Styles.Container}>
        <a
          className={Styles.Link}
          Target="_blank"
          href="https://www.linkedin.com/in/gabriel-cordoba/"
        >
          <div className={Styles.Contact}>
            <img className={Styles.Image} src={email} alt="E-Mail" />
            <h1>E-Mail</h1>
          </div>
        </a>
        <a
          className={Styles.Link}
          Target="_blank"
          href="https://api.whatsapp.com/send/?phone=5491125837761&text&type=phone_number&app_absent=0"
        >
          <div className={Styles.Contact}>
            <img className={Styles.Image} src={whatsapp} alt="WhatsApp" />
            <h1>WhatsApp</h1>
          </div>
        </a>
        <a
          className={Styles.Link}
          Target="_blank"
          href="https://www.linkedin.com/in/gabriel-cordoba/"
        >
          <div className={Styles.Contact}>
            <img className={Styles.Image} src={linkedin} alt="Linkedin" />
            <h1>Linkedin</h1>
          </div>
        </a>
        <a
          className={Styles.Link}
          Target="_blank"
          href="https://github.com/cor2ba"
        >
          <div className={Styles.Contact}>
            <img className={Styles.Image} src={github} alt="GitHub" />
            <h1>GitHub</h1>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Contact;
