import React from "react";
import Styles from "./Presentation.module.css";
import me from "../../images/me.png";
import Typed from 'react-typed';

const Presentation = () => {
  return (
    <div className={Styles.Container}>
      <div className={Styles.Me}>
        <h1 data-aos="fade-right" className={Styles.Title}>
          Hi ✋, I am <h1 className={Styles.Title2}>Córdoba Gabriel</h1>
        </h1>
        <img data-aos="fade-left" className={Styles.MeImage} src={me} alt="me"></img>
      </div>
      <div data-aos="zoom-in" className={Styles.Me}>
        <Typed
          className={Styles.Subtitle}
          strings={[
            "Full Stack Developer",
            "Front End Developer",
            "Back End Developer",
          ]}
          typeSpeed={120}
          backSpeed={140}
          loop
        />
        <a
          className={Styles.CV}
          Target="_blank"
          href="https://drive.google.com/file/d/1ues0NTvacqKbJau7R8sLJJjqboS8w_zd/view"
        >
          DOWNLOAD MY CV
        </a>
      </div>
    </div>
  );
};

export default Presentation;
