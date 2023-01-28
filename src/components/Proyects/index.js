import foodify from "../../images/PI-RECIPES.png";
import henrybank from "../../images/HenryBankBackground.png";
import portfolio from "../../images/portfolio.png";
import vajillaselian from "../../images/vajillaselian.png";
import css from "../../images/css.webp";
import express from "../../images/express.svg";
import html5 from "../../images/HTML5.png";
import reactnative from "../../images/reactnative.svg";
import javascript from "../../images/javascript.svg";
import react from "../../images/react.svg";
import redux from "../../images/redux.svg";
import postgres from "../../images/Postgresql.png";
import node from "../../images/nodejs.png";
import bettersplayerscabj from "../../images/bettersplayerscabj.png";
import climaio from "../../images/clima-io.png";
import mongodb from "../../images/mongodb.png";
import mongoose from "../../images/mongoose.jpg";
import typescript from "../../images/typescript.svg";
import mapbox from "../../images/mapbox.svg";
import storybook from "../../images/storybook.svg";
import components from "../../images/components.png";
import mapify from "../../images/mapify.png";
import calendar from "../../images/calendar.png";
import drumkit from "../../images/DrumKit.png";
import quickquiz from "../../images/QuickQuiz.png";
import fasheone from "../../images/Fasheone.png";
import customvideo from "../../images/CustomVideo.png";
import flexpanels from "../../images/FlexPanels.png";
import clock from "../../images/Clock.png";
import typeahead from "../../images/TypeAhead.png";
import landinghb from "../../images/LandingHB.png";
import angular from "../../images/angular.png";
import newapp from "../../images/TodoList.png";
import countdowntimer from "../../images/Countdown Timer.png";
import whackamole from "../../images/Whack A Mole.png";
import thevoicenator5000 from "../../images/The Voiceinator 5000.png";
import landings from "../../images/landings.png";
import figma from "../../images/Figma.png";
import diseñohb from "../../images/diseñohb.png";
import streamit from "../../images/streamit.png";

const arrP = [
  {
    name: "Streamit",
    image: streamit,
    subtitle: "Netflix clone.",
    techs: [ javascript, react, html5, css ],
    deploy: "https://stream1t.vercel.app/",
    repository: "https://github.com/cor2ba/Streamit",
  },
  {
    name: "Fasheone",
    image: fasheone,
    subtitle: "E-Commerce Template.",
    techs: [javascript, react, html5, css],
    deploy: "https://fasheone.vercel.app/",
    repository: "https://github.com/cor2ba/Fasheone",
  },
  {
    name: "Calendar",
    image: calendar,
    subtitle: "PWA - Calendario con recordatorios.",
    techs: [typescript, react, html5, css, mongodb, mongoose],
    deploy: "no",
    repository: "https://github.com/cor2ba/PWA-Calendar",
  },
  {
    name: "Mapify",
    image: mapify,
    subtitle: "App de geolocalización, rutas y destinos.",
    techs: [typescript, react, html5, css, mapbox],
    deploy: "https://map-ify.netlify.app/",
    repository: "https://github.com/cor2ba/Mapify",
  },
  {
    name: "Components",
    image: components,
    subtitle: "Libreria de componentes con Storybook.",
    techs: [typescript, react, html5, css, storybook],
    deploy:
      "https://cor2ba.github.io/Storybook-Components/?path=/story/ui-mylabel--basic",
    repository: "https://github.com/cor2ba/Storybook-Components",
  },
  {
    name: "Foodify",
    image: foodify,
    subtitle: "Food API, Proyecto individual (Soy Henry).",
    techs: [javascript, react, redux, postgres, express, node, html5, css],
    deploy: "https://foodfyapp.vercel.app/",
    repository: "https://github.com/cor2ba/Foodfy",
  },
  {
    name: "Henry Bank",
    image: henrybank,
    subtitle: "App de banco - Proyecto final (Soy Henry).",
    techs: [
      javascript,
      reactnative,
      redux,
      postgres,
      express,
      node,
      html5,
      css,
    ],
    video: "https://www.youtube.com/watch?v=Dzi2UyKrlMo&ab_channel=HenryBank",
    repository: "https://github.com/SantiagoGomez1/client-HenryBank",
  },
  {
    name: "Landing HB",
    image: landinghb,
    subtitle: "Landing de Henry Bank - Proyecto final (Soy Henry).",
    techs: [javascript, react, html5, css],
    deploy: "https://henrybank.netlify.app/",
    repository: "https://github.com/cor2ba/Landing-HenryBank",
  },
  {
    name: "NEW",
    image: newapp,
    subtitle: "Todo List.",
    techs: [typescript, angular, mongodb, express, mongoose, html5, css],
    deploy: "no",
    repository: "https://github.com/cor2ba/ToDoList",
  },
  {
    name: "C.A.B.J.",
    image: bettersplayerscabj,
    subtitle: "Mejores jugadores de la historia de Boca Juniors.",
    techs: [javascript, react, html5, css],
    deploy: "https://better-players-cabj.vercel.app/",
    repository: "https://github.com/cor2ba/Better-Players-CABJ",
  },
  {
    name: "CLIMA.IO",
    image: climaio,
    subtitle: "Clima en tiempo real.",
    techs: [javascript, react, html5, css],
    deploy: "https://climaio.vercel.app/",
    repository: "https://github.com/cor2ba/Clima.io",
  },
  {
    name: "Vajillas Elian",
    image: vajillaselian,
    subtitle: "Casa de vajillas.",
    techs: [javascript, react, html5, css],
    deploy: "https://vajillaselian.vercel.app/",
    repository: "https://github.com/cor2ba/Vajillas-Elian",
  },
  {
    name: "Landings",
    image: landings,
    subtitle: "6 diseños de landings para proyectos.",
    techs: [figma],
    figma:
      "https://www.figma.com/file/1BkQGT4oRQp26ZC0mIlO0j/3d-Desing?node-id=11%3A2",
  },
  {
    name: "Henry Bank",
    image: diseñohb,
    subtitle: "Diseño de toda la app",
    techs: [figma],
    deploy: "https://better-players-cabj.vercel.app/",
    repository:
      "https://www.figma.com/file/T0oIa9JoZKeQ352zGqryel/App-Wallet-Savings-plan-(Community)?node-id=102%3A2&t=WAMNAgaShQ97jd1I-0",
  },
  {
    name: "Quick Quiz",
    image: quickquiz,
    subtitle: "Juego de preguntas rapidas.",
    techs: [javascript, html5, css],
    deploy: "https://quickquizgame.vercel.app/",
    repository: "https://github.com/cor2ba/Quick-Quiz",
  },
  {
    name: "Coutdown Timer",
    image: countdowntimer,
    subtitle: "Temporizador con tiempo ajustable.",
    techs: [javascript, html5, css],
    deploy: "https://cor2ba.github.io/Countdown-Timer/",
    repository: "https://github.com/cor2ba/Countdown-Timer",
  },
  {
    name: "Whack A Mole!",
    image: whackamole,
    subtitle: 'Juego de "pegarle a los topos" con puntaje.',
    techs: [javascript, html5, css],
    deploy: "https://whackamolegame.vercel.app/",
    repository: "https://github.com/cor2ba/Whack-A-Mole",
  },
  {
    name: "The Voiceinator",
    image: thevoicenator5000,
    subtitle: "Leé tu mensaje con el lector que elijas.",
    techs: [javascript, html5, css],
    deploy: "https://cor2ba.github.io/Speech-Synthesis/",
    repository: "https://github.com/cor2ba/Speech-Synthesis",
  },
  {
    name: "Drum Kit",
    image: drumkit,
    subtitle: "TKit de sonidos de bateria.",
    techs: [javascript, html5, css],
    deploy: "https://cor2ba.github.io/Drum-Kit/",
    repository: "https://github.com/cor2ba/Drum-Kit",
  },
  {
    name: "Custom Video",
    image: customvideo,
    subtitle: "Video manipulable.",
    techs: [javascript, html5, css],
    deploy: "https://cor2ba.github.io/Custom-Video-Player/",
    repository: "https://github.com/cor2ba/Custom-Video-Player",
  },
  {
    name: "Flex Panels",
    image: flexpanels,
    subtitle: "Galeria de imágenes con estilos animados.",
    techs: [javascript, html5, css],
    deploy: "https://cor2ba.github.io/Flex-Panels/",
    repository: "https://github.com/cor2ba/Flex-Panels",
  },
  {
    name: "Clock",
    image: clock,
    subtitle: "Visualizar la hora en tiempo real.",
    techs: [javascript, html5, css],
    deploy: "https://cor2ba.github.io/Clock/",
    repository: "https://github.com/cor2ba/Clock",
  },
  {
    name: "Type Ahead",
    image: typeahead,
    subtitle: "Filtrar cuidades y saber población (USA).",
    techs: [javascript, html5, css],
    deploy: "https://cor2ba.github.io/Type-Ahead/",
    repository: "https://github.com/cor2ba/Type-Ahead",
  },
  {
    name: "Portfolio",
    image: portfolio,
    subtitle: "Portafolio personal.",
    techs: [javascript, react, html5, css],
    deploy: "https://cor2ba.github.io/Type-Ahead/",
    repository: "https://github.com/cor2ba/Type-Ahead",
  },
];

export default arrP;
