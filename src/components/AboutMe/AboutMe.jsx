import React from "react";
import NavBar from "../NavBar/NavBar";
import Styles from "./AboutMe.module.css";

const AboutMe = () => {
  let color = "AboutMe";
  return (
    <div>
      <NavBar color={color} />
      <div className={Styles.Container}>
        <h1 data-aos="zoom-in" className={Styles.Title}>
          About Me
        </h1>
        <p data-aos="fade-right" className={Styles.Paragraphs}>
          I live in Argentina, Buenos Aires 💙🤍💙. I graduated of Full-Stack
          developer web in Henry Bootcamp 💻.
        </p>
        <p data-aos="fade-left" className={Styles.Paragraphs}>
          I´m autodidact 🤓, I think the most valuable thing is time and I don't
          like to waste it, what makes me proactive 🤖, I like team work and
          create a good work environment with colleagues 🤝🏾.
        </p>
        <p data-aos="fade-left" className={Styles.Paragraphs}>
          I am a E-Sports and Sports lover 😻. I really like the videogames like
          Counter-Strike or League of Legends 🎮 and in my free times play
          Bascketball or Football ⚽🏀.
        </p>
        <p data-aos="fade-right" className={Styles.Paragraphs}>
        I am currently working at CrESI as a full stack developer 📈.
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
