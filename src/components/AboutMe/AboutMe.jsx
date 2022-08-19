import React from "react";
import NavBar from "../NavBar/NavBar";
import Styles from "./AboutMe.module.css";
import me from "../../images/gabriel.jpg";

const AboutMe = () => {
  let color = "AboutMe";
  return (
    <div>
      <NavBar color={color} />
      <div className={Styles.Container}>
        <h1 className={Styles.Title}>About Me</h1>
        <p className={Styles.Paragraphs}>
          I live in Argentina, Buenos Aires 💙🤍💙. I graduated of Full-Stack
          developer web in Henry Bootcamp 💻.
        </p>

        <p className={Styles.Paragraphs}>
          I´m autodidact 🤓, I think the most valuable thing is time and I don't
          like to waste it, what makes me proactive 🤖, I like team work and
          create a good work environment with colleagues ✔.
        </p>
        <p className={Styles.Paragraphs}>
          I am currently looking for a job 🧐, I would like a job where I can
          expand my programming knowledge and work from home 🏠.
        </p>
        <p className={Styles.Paragraphs}>
          I am a E-Sports and Sports lover 😻. I really like the videogames like
          Counter-Strike or League of Legends 🎮 and in my free times play
          Bascketball or Football ⚽🏀.
        </p>
        <a
          className={Styles.Certificate}
          Target="_blank"
          href="https://certificates.soyhenry.com/cert?id=d8d54cb0-1a66-4aa5-9e23-61d889125069"
        >
           💛 LOOK MY HENRY CERTIFICATE 🎓
        </a>
      </div>
    </div>
  );
};

export default AboutMe;
