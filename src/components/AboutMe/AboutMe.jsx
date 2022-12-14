import React from "react";
import NavBar from "../NavBar/NavBar";
import Styles from "./AboutMe.module.css";

const AboutMe = () => {
  let color = "AboutMe";
  return (
    <div>
      <NavBar color={color} />
      <div className={Styles.Container}>
        <h1 className={Styles.Title}>About Me</h1>
        <p className={Styles.Paragraphs}>
          I live in Argentina, Buenos Aires ๐๐ค๐. I graduated of Full-Stack
          developer web in Henry Bootcamp ๐ป.
        </p>

        <p className={Styles.Paragraphs}>
          Iยดm autodidact ๐ค, I think the most valuable thing is time and I don't
          like to waste it, what makes me proactive ๐ค, I like team work and
          create a good work environment with colleagues ๐ค๐พ.
        </p>
        <p className={Styles.Paragraphs}>
          I am currently looking for a job ๐ง, I would like a job where I can
          expand my programming knowledge and work from home ๐ .
        </p>
        <p className={Styles.Paragraphs}>
          I am a E-Sports and Sports lover ๐ป. I really like the videogames like
          Counter-Strike or League of Legends ๐ฎ and in my free times play
          Bascketball or Football โฝ๐.
        </p>
        <a
          className={Styles.Certificate}
          Target="_blank"
          href="https://certificates.soyhenry.com/cert?id=d8d54cb0-1a66-4aa5-9e23-61d889125069"
        >
           ๐ LOOK MY HENRY CERTIFICATE ๐
        </a>
      </div>
    </div>
  );
};

export default AboutMe;
