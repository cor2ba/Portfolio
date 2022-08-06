import React from "react";
import NavBar from "../NavBar/NavBar";
import Styles from "./Proyects.module.css";
import pi from "../../images/PI-RECIPES.png";
import pf from "../../images/HenryBankBackground.png";
import portfolio from "../../images/portfolio.png";
import css from "../../images/css.webp";
import express from "../../images/express.svg";
import html5 from "../../images/HTML5.png";
import reactnative from "../../images/reactnative.svg";
import javascript from "../../images/javascript.png";
import react from "../../images/react.png";
import redux from "../../images/redux.png";
import postgres from "../../images/Postgresql.png";
import node from "../../images/nodejs.webp";

const Proyects = () => {
  let color = "Proyects";
  return (
    <div>
      <NavBar color={color} />
      <h1 className={Styles.Title}>Proyects</h1>
      <div className={Styles.Container}>
        <div className={Styles.ContainerProyects}>
          <div className={Styles.Proyect}>
            <img className={Styles.Image} src={pi} alt="pi" />
            <h1 className={Styles.InfoTitle}>PI-RECIPES</h1>
            <div className={Styles.ContainerImages}>
              <img
                className={Styles.ImageTechnology}
                src={javascript}
                alt="JavaScript"
              />
              <img className={Styles.ImageTechnology} src={react} alt="React" />
              <img className={Styles.ImageTechnology} src={redux} alt="Redux" />
              <img className={Styles.ImageTechnology} src={node} alt="Node" />
              <img
                className={Styles.ImageTechnology}
                src={postgres}
                alt="PostgresSQL"
              />
              <img
                className={Styles.ImageTechnology}
                src={express}
                alt="Express"
              />
              <img className={Styles.ImageTechnology} src={html5} alt="HTML5" />
              <img className={Styles.ImageTechnology} src={css} alt="CSS" />
            </div>
            <h1 className={Styles.InfoSubtitle}>
              SPA - Proyecto Individual Académico (SoyHenry)
            </h1>
            <a
              className={Styles.Link}
              Target="_blank"
              href="https://foodfyapp.vercel.app/"
            >
              Deploy
            </a>
          </div>
          <div className={Styles.Proyect}>
            <img className={Styles.Image} src={pf} alt="pi" />
            <h1 className={Styles.InfoTitle}>PF-HENRYBANK</h1>
            <div className={Styles.ContainerImages}>
              <img
                className={Styles.ImageTechnology}
                src={javascript}
                alt="JavaScript"
              />
              <img
                className={Styles.ImageTechnology}
                src={reactnative}
                alt="React Native"
              />
              <img className={Styles.ImageTechnology} src={redux} alt="Redux" />
              <img className={Styles.ImageTechnology} src={node} alt="Node" />
              <img
                className={Styles.ImageTechnology}
                src={postgres}
                alt="PostgresSQL"
              />
              <img
                className={Styles.ImageTechnology}
                src={express}
                alt="Express"
              />
              <img className={Styles.ImageTechnology} src={html5} alt="HTML5" />
              <img className={Styles.ImageTechnology} src={css} alt="CSS" />
            </div>
            <h1 className={Styles.InfoSubtitle}>
              App de banco - Proyecto Final Académico (Soy Henry)
            </h1>
            <a
              className={Styles.Link}
              Target="_blank"
              href="https://github.com/SantiagoGomez1/client-HenryBank"
            >
              Repository
            </a>
          </div>
          <div className={Styles.Proyect}>
            <img className={Styles.Image} src={portfolio} alt="Portfolio" />
            <h1 className={Styles.InfoTitle}>PORTFOLIO</h1>
            <div className={Styles.ContainerImages}>
              <img
                className={Styles.ImageTechnology}
                src={javascript}
                alt="JavaScript"
              />
              <img className={Styles.ImageTechnology} src={react} alt="React" />
              <img className={Styles.ImageTechnology} src={html5} alt="HTML5" />
              <img className={Styles.ImageTechnology} src={css} alt="CSS" />
            </div>
            <h1 className={Styles.InfoSubtitle}>SPA</h1>
            <a
              className={Styles.Link}
              Target="_blank"
              href="https://github.com/cor2ba/Portfolio"
            >
              Repository
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proyects;
