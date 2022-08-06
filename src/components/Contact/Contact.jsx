import React from "react";
import NavBar from "../NavBar/NavBar";
import Styles from "./Contact.module.css";

const Contact = () => {
  let color = "Contact";
  return (
    <div>
      <NavBar color={color} />
      <h1 className={Styles.Title}>Contact</h1>
    </div>
  );
};

export default Contact;
