import React from "react";
import Styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
import menuimg from "../../images/hamburgermenu.png";

const NavBar = ({ color }) => {
  return (
    <div>
      <div className={Styles.ContainerResponsive}>
        <label for="menu" className={Styles.MenuImg}>
          <img className={Styles.Img} src={menuimg} alt="Menu" />
        </label>
        <input type="checkbox" id="menu" className={Styles.NavInput} />
        <div className={Styles.Menu}>
          <Link className={Styles.Link} to="/">
            {color === "Home" ? (
              <h1 className={Styles.NavsTextClicked}>Home</h1>
            ) : (
              <h1 className={Styles.NavsText}>Home</h1>
            )}
          </Link>
          <Link className={Styles.Link} to="/LanguagesAndTools">
            {color === "LanguagesAndTools" ? (
              <h1 className={Styles.NavsTextClicked}>Langueages and Tools</h1>
            ) : (
              <h1 className={Styles.NavsText}>Langueages and Tools</h1>
            )}
          </Link>
          <Link className={Styles.Link} to="/AboutMe">
            {color === "AboutMe" ? (
              <h1 className={Styles.NavsTextClicked}>About me</h1>
            ) : (
              <h1 className={Styles.NavsText}>About me</h1>
            )}
          </Link>
          <Link className={Styles.Link} to="/Proyects">
            {color === "Proyects" ? (
              <h1 className={Styles.NavsTextClicked}>Projects</h1>
            ) : (
              <h1 className={Styles.NavsText}>Projects</h1>
            )}
          </Link>
          <Link className={Styles.Link} to="/Contact">
            {color === "Contact" ? (
              <h1 className={Styles.NavsTextClicked}>Contact</h1>
            ) : (
              <h1 className={Styles.NavsText}>Contact</h1>
            )}
          </Link>
        </div>
      </div>
      <div className={Styles.Container}>
        <Link className={Styles.Link} to="/">
          {color === "Home" ? (
            <h1 className={Styles.NavsTextClicked}>Home</h1>
          ) : (
            <h1 className={Styles.NavsText}>Home</h1>
          )}
        </Link>
        <Link className={Styles.Link} to="/LanguagesAndTools">
          {color === "LanguagesAndTools" ? (
            <h1 className={Styles.NavsTextClicked}>Languages and Tools</h1>
          ) : (
            <h1 className={Styles.NavsText}>Languages and Tools</h1>
          )}
        </Link>
        <Link className={Styles.Link} to="/AboutMe">
          {color === "AboutMe" ? (
            <h1 className={Styles.NavsTextClicked}>About me</h1>
          ) : (
            <h1 className={Styles.NavsText}>About me</h1>
          )}
        </Link>
        <Link className={Styles.Link} to="/Proyects">
          {color === "Proyects" ? (
            <h1 className={Styles.NavsTextClicked}>Proyects</h1>
          ) : (
            <h1 className={Styles.NavsText}>Proyects</h1>
          )}
        </Link>
        <Link className={Styles.Link} to="/Contact">
          {color === "Contact" ? (
            <h1 className={Styles.NavsTextClicked}>Contact</h1>
          ) : (
            <h1 className={Styles.NavsText}>Contact</h1>
          )}
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
