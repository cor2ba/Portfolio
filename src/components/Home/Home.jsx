import React from "react";
import NavBar from "../NavBar/NavBar";
import Presentation from "../Presentation/Presentation";

const Home = () => {
  let color = "Home";
  return (
    <div>
      <NavBar color={color} />
      <Presentation />
    </div>
  );
};

export default Home;
