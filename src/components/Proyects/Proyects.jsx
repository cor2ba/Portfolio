import React from "react";
import NavBar from "../NavBar/NavBar";
import Styles from "./Proyects.module.css";
import pi from "../../images/PI-RECIPES.png";
import pf from "../../images/HenryBankBackground.png";
import portfolio from "../../images/portfolio.png";
import vajillaselian from "../images/vajillaselian.png";
import css from "../../images/css.webp";
import express from "../../images/express.svg";
import html5 from "../../images/HTML5.png";
import reactnative from "../../images/reactnative.svg";
import javascript from "../../images/javascript.png";
import react from "../../images/react.png";
import redux from "../../images/redux.png";
import postgres from "../../images/Postgresql.png";
import node from "../../images/nodejs.webp";
import bettersplayerscabj from "../../images/bettersplayerscabj.png";
import climaio from "../../images/clima-io.png";
import TodoList from "../../images/TodoList.png";
import angular from "../../images/angular.png";
import mongodb from "../../images/mongodb.png";
import mongoose from "../../images/mongoose.jpg";
import typescript from "../../images/Typescript_logo_2020.svg.png";

const Proyects = () => {
  let color = "Proyects";
  return (
    <div>
      <NavBar color={color} />
      <h1 className={Styles.Title}>Projects</h1>
      <div className={Styles.Container}>
        <div className={Styles.ContainerProyects}>
          <div className={Styles.Proyect}>
            <img className={Styles.Image} src={pi} alt="pi" />
            <div className={Styles.ContainerInvisible}>
              <h1 className={Styles.InfoTitle}>PI-RECIPES</h1>
              <p className={Styles.InfoSubtitle}>
                SPA - Individual Proyect (Soy Henry).
              </p>
            </div>
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
            <div className={Styles.ContainerButtons}>
              <a
                className={Styles.Link}
                Target="_blank"
                href="https://foodfyapp.vercel.app/"
              >
                Deploy
              </a>
              <a
                className={Styles.Link}
                Target="_blank"
                href="https://github.com/cor2ba/PI-Recipes"
              >
                Repository
              </a>
            </div>
          </div>
          <div className={Styles.Proyect}>
            <img className={Styles.Image} src={pf} alt="pi" />
            <div className={Styles.ContainerInvisible}>
              <h1 className={Styles.InfoTitle}>PF-HENRYBANK</h1>
              <p className={Styles.InfoSubtitle}>
                App de banco - Final Proyect (Soy Henry).
              </p>
            </div>
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
            <div className={Styles.ContainerButtons}>
              <a
                className={Styles.Link}
                Target="_blank"
                href="https://www.youtube.com/watch?v=Dzi2UyKrlMo&ab_channel=HenryBank"
              >
                Video
              </a>
              <a
                className={Styles.Link}
                Target="_blank"
                href="https://github.com/SantiagoGomez1/client-HenryBank"
              >
                Repository
              </a>
            </div>
          </div>
          <div className={Styles.Proyect}>
            <img className={Styles.Image} src={TodoList} alt="ToDoList" />
            <div className={Styles.ContainerInvisible}>
              <h1 className={Styles.InfoTitle}>NEW</h1>
              <p className={Styles.InfoSubtitle}>SPA - ToDo List.</p>
            </div>
            <div className={Styles.ContainerImages}>
              <img
                className={Styles.ImageTechnology}
                src={typescript}
                alt="TypeScript"
              />
              <img
                className={Styles.ImageTechnology}
                src={angular}
                alt="Angular"
              />
              <img
                className={Styles.ImageTechnology}
                src={mongodb}
                alt="MongoDB"
              />
              <img
                className={Styles.ImageTechnology}
                src={express}
                alt="Express"
              />
              <img
                className={Styles.ImageTechnology}
                src={mongoose}
                alt="Mongoose"
              />
              <img className={Styles.ImageTechnology} src={html5} alt="HTML5" />
              <img className={Styles.ImageTechnology} src={css} alt="CSS" />
            </div>
            <div className={Styles.ContainerButtons}>
              <button
                className={Styles.Link}
                onClick={() => alert("Cooming soon")}
                // Target="_blank"
                // href="https://better-players-cabj.vercel.app/"
              >
                Deploy
              </button>
              <a
                className={Styles.Link}
                Target="_blank"
                href="https://github.com/cor2ba/ToDoList"
              >
                Repository
              </a>
            </div>
          </div>
          <div className={Styles.Proyect}>
            <img
              className={Styles.Image}
              src={bettersplayerscabj}
              alt="BetterPlayersCABJ"
            />
            <div className={Styles.ContainerInvisible}>
              <h1 className={Styles.InfoTitle}>C.A.B.J.</h1>
              <p className={Styles.InfoSubtitle}>
                SPA - Look the better player of the CABJ history.
              </p>
            </div>
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
            <div className={Styles.ContainerButtons}>
              <a
                className={Styles.Link}
                Target="_blank"
                href="https://better-players-cabj.vercel.app/"
              >
                Deploy
              </a>
              <a
                className={Styles.Link}
                Target="_blank"
                href="https://github.com/cor2ba/BetterPlayersCABJ"
              >
                Repository
              </a>
            </div>
          </div>
          <div className={Styles.Proyect}>
            <img className={Styles.Image} src={climaio} alt="Clima.IO" />
            <div className={Styles.ContainerInvisible}>
              <h1 className={Styles.InfoTitle}>CLIMA.IO</h1>
              <p className={Styles.InfoSubtitle}>
                SPA - Look the weather in real time.
              </p>
            </div>
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
            <div className={Styles.ContainerButtons}>
              <a
                className={Styles.Link}
                Target="_blank"
                href="https://climaio.vercel.app/"
              >
                Deploy
              </a>
              <a
                className={Styles.Link}
                Target="_blank"
                href="https://github.com/cor2ba/Clima.io"
              >
                Repository
              </a>
            </div>
          </div>

          <div className={Styles.Proyect}>
            <img
              className={Styles.Image}
              src={vajillaselian}
              alt="Vajillas Elian"
            />
            <div className={Styles.ContainerInvisible}>
              <h1 className={Styles.InfoTitle}>Vajillas Elian</h1>
              <p className={Styles.InfoSubtitle}>SPA - Crockery shop.</p>
            </div>
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
            <div className={Styles.ContainerButtons}>
              <a
                className={Styles.Link}
                Target="_blank"
                href="https://gabrielcordoba.vercel.app/"
              >
                Deploy
              </a>
              <a
                className={Styles.Link}
                Target="_blank"
                href="https://github.com/cor2ba/Vajillas-Elian"
              >
                Repository
              </a>
            </div>
          </div>

          <div className={Styles.Proyect}>
            <img className={Styles.Image} src={portfolio} alt="Portfolio" />
            <div className={Styles.ContainerInvisible}>
              <h1 className={Styles.InfoTitle}>PORTFOLIO</h1>
              <p className={Styles.InfoSubtitle}>SPA - Personal portfolio.</p>
            </div>
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
            <div className={Styles.ContainerButtons}>
              <a
                className={Styles.Link}
                Target="_blank"
                href="https://github.com/cor2ba/Portfolio"
              >
                Deploy
              </a>
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
    </div>
  );
};

export default Proyects;
