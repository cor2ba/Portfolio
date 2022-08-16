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
              <h1 className={Styles.NavsTextClicked}>HOME</h1>
            ) : (
              <h1 className={Styles.NavsText}>HOME</h1>
            )}
          </Link>
          <Link className={Styles.Link} to="/LanguagesAndTools">
            {color === "LanguagesAndTools" ? (
              <h1 className={Styles.NavsTextClicked}>LANGUAGES AND TOOLS</h1>
            ) : (
              <h1 className={Styles.NavsText}>LANGUAGES AND TOOLS</h1>
            )}
          </Link>
          <Link className={Styles.Link} to="/AboutMe">
            {color === "AboutMe" ? (
              <h1 className={Styles.NavsTextClicked}>ABOUT ME</h1>
            ) : (
              <h1 className={Styles.NavsText}>ABOUT ME</h1>
            )}
          </Link>
          <Link className={Styles.Link} to="/Proyects">
            {color === "Proyects" ? (
              <h1 className={Styles.NavsTextClicked}>PROJECTS</h1>
            ) : (
              <h1 className={Styles.NavsText}>PROJECTS</h1>
            )}
          </Link>
          <Link className={Styles.Link} to="/Contact">
            {color === "Contact" ? (
              <h1 className={Styles.NavsTextClicked}>CONTACT</h1>
            ) : (
              <h1 className={Styles.NavsText}>CONTACT</h1>
            )}
          </Link>
        </div>
      </div>
      <div className={Styles.Container}>
        <Link className={Styles.Link} to="/">
          {color === "Home" ? (
            <h1 className={Styles.NavsTextClicked}>HOME</h1>
          ) : (
            <h1 className={Styles.NavsText}>HOME</h1>
          )}
        </Link>
        <Link className={Styles.Link} to="/LanguagesAndTools">
          {color === "LanguagesAndTools" ? (
            <h1 className={Styles.NavsTextClicked}>LANGUAGES AND TOOLS</h1>
          ) : (
            <h1 className={Styles.NavsText}>LANGUAGES AND TOOLS</h1>
          )}
        </Link>
        <Link className={Styles.Link} to="/AboutMe">
          {color === "AboutMe" ? (
            <h1 className={Styles.NavsTextClicked}>ABOUT ME</h1>
          ) : (
            <h1 className={Styles.NavsText}>ABOUT ME</h1>
          )}
        </Link>
        <Link className={Styles.Link} to="/Proyects">
          {color === "Proyects" ? (
            <h1 className={Styles.NavsTextClicked}>PROYECTS</h1>
          ) : (
            <h1 className={Styles.NavsText}>PROYECTS</h1>
          )}
        </Link>
        <Link className={Styles.Link} to="/Contact">
          {color === "Contact" ? (
            <h1 className={Styles.NavsTextClicked}>CONTACT</h1>
          ) : (
            <h1 className={Styles.NavsText}>CONTACT</h1>
          )}
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
