import React from "react";
import Styles from "./LanguagesAndTools.module.css";
import NavBar from "../NavBar/NavBar";
import sass from "../../images/Sass.png";
import babel from "../../images/babel.svg";
import bootstrap from "../../images/Bootstrap.png";
import css from "../../images/css.webp";
import express from "../../images/express.svg";
import git from "../../images/git.svg";
import html5 from "../../images/HTML5.png";
import postman from "../../images/postman.svg";
import reactnative from "../../images/reactnative.svg";
import javascript from "../../images/javascript.png";
import react from "../../images/react.png";
import redux from "../../images/redux.png";
import postgres from "../../images/Postgresql.png";
import node from "../../images/nodejs.webp";
import github from "../../images/GitHub.png";
import figma from "../../images/Figma.png";
import trello from "../../images/Trello.png";
import sequelize from "../../images/sequelize.png";
import materialui from "../../images/material-ui.png";
import angular from "../../images/angular.png";
import mongodb from "../../images/mongodb.png";
import mongoose from "../../images/mongoose.jpg";
import typescript from "../../images/Typescript_logo_2020.svg.png"
import vercel from "../../images/vercel.png"
import railway from "../../images/railway.png"

const LanguagesAndTools = () => {
  let color = "LanguagesAndTools";
  return (
    <div>
      <NavBar color={color} />
      <h1 className={Styles.Title}>Languages and Tools:</h1>
      <div className={Styles.Technologies}>
        <div className={Styles.Technology}>
          <img className={Styles.Image} src={javascript} alt="Javascript"></img>
          <h1 className={Styles.TitleTechnology}>JavaScript</h1>
        </div>
        <div className={Styles.Technology}>
          <img className={Styles.Image} src={typescript} alt="TypeScript"></img>
          <h1 className={Styles.TitleTechnology}>TypeScript</h1>
        </div>
        <div className={Styles.Technology}>
          <img
            className={Styles.Image}
            src={reactnative}
            alt="React Native"
          ></img>
          <h1 className={Styles.TitleTechnology}>React Native</h1>
        </div>
        <div className={Styles.Technology}>
          <img className={Styles.Image} src={react} alt="React"></img>
          <h1 className={Styles.TitleTechnology}>React</h1>
        </div>
        <div className={Styles.Technology}>
          <img className={Styles.Image} src={redux} alt="Redux"></img>
          <h1 className={Styles.TitleTechnology}>Redux</h1>
        </div>
        <div className={Styles.Technology}>
          <img className={Styles.Image} src={angular} alt="Angular"></img>
          <h1 className={Styles.TitleTechnology}>Angular</h1>
        </div>
        <div className={Styles.Technology}>
          <img className={Styles.Image} src={mongodb} alt="MongoDB"></img>
          <h1 className={Styles.TitleTechnology}>MongoDB</h1>
        </div>
        <div className={Styles.Technology}>
          <img className={Styles.Image} src={mongoose} alt="Mongoose"></img>
          <h1 className={Styles.TitleTechnology}>Mongoose</h1>
        </div>
        <div className={Styles.Technology}>
          <img className={Styles.Image} src={node} alt="Node"></img>
          <h1 className={Styles.TitleTechnology}>Node Js</h1>
        </div>
        <div className={Styles.Technology}>
          <img className={Styles.Image} src={express} alt="Express"></img>
          <h1 className={Styles.TitleTechnology}>Express</h1>
        </div>
        <div className={Styles.Technology}>
          <img className={Styles.Image} src={postgres} alt="PostgresSQL"></img>
          <h1 className={Styles.TitleTechnology}>Postgres SQL</h1>
        </div>
        <div className={Styles.Technology}>
          <img className={Styles.Image} src={sequelize} alt="Sequelize"></img>
          <h1 className={Styles.TitleTechnology}>Sequelize</h1>
        </div>
        <div className={Styles.Technology}>
          <img className={Styles.Image} src={html5} alt="HTML"></img>
          <h1 className={Styles.TitleTechnology}>HTML5</h1>
        </div>
        <div className={Styles.Technology}>
          <img className={Styles.Image} src={css} alt="CSS"></img>
          <h1 className={Styles.TitleTechnology}>CSS3</h1>
        </div>
        <div className={Styles.Technology}>
          <img className={Styles.Image} src={sass} alt="Sass"></img>
          <h1 className={Styles.TitleTechnology}>Sass</h1>
        </div>
        <div className={Styles.Technology}>
          <img className={Styles.Image} src={babel} alt="Babel"></img>
          <h1 className={Styles.TitleTechnology}>Babel</h1>
        </div>
        <div className={Styles.Technology}>
          <img
            className={Styles.Image}
            src={materialui}
            alt="Material UI"
          ></img>
          <h1 className={Styles.TitleTechnology}>Material UI</h1>
        </div>
        <div className={Styles.Technology}>
          <img className={Styles.Image} src={bootstrap} alt="Bootstrap"></img>
          <h1 className={Styles.TitleTechnology}>Bootstrap</h1>
        </div>
        <div className={Styles.Technology}>
          <img className={Styles.Image} src={git} alt="Git"></img>
          <h1 className={Styles.TitleTechnology}>Git</h1>
        </div>
        <div className={Styles.Technology}>
          <img className={Styles.Image} src={github} alt="GitHub"></img>
          <h1 className={Styles.TitleTechnology}>GitHub</h1>
        </div>

        <div className={Styles.Technology}>
          <img className={Styles.Image} src={postman} alt="Postman"></img>
          <h1 className={Styles.TitleTechnology}>Postman</h1>
        </div>
        <div className={Styles.Technology}>
          <img className={Styles.Image} src={figma} alt="Figma"></img>
          <h1 className={Styles.TitleTechnology}>Figma</h1>
        </div>
        <div className={Styles.Technology}>
          <img className={Styles.Image} src={trello} alt="Trello"></img>
          <h1 className={Styles.TitleTechnology}>Trello</h1>
        </div>
        <div className={Styles.Technology}>
          <img className={Styles.Image} src={vercel} alt="Vercel"></img>
          <h1 className={Styles.TitleTechnology}>Vercel</h1>
        </div>
        <div className={Styles.Technology}>
          <img className={Styles.Image} src={railway} alt="Railway"></img>
          <h1 className={Styles.TitleTechnology}>Railway</h1>
        </div>
      </div>
    </div>
  );
};

export default LanguagesAndTools;
