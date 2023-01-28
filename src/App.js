import { Route, Switch } from "react-router-dom";
import { useEffect } from "react";
import Home from "./components/Home/Home";
import AboutMe from "./components/AboutMe/AboutMe";
import Proyects from "./components/Proyects/Proyects";
import Contact from "./components/Contact/Contact";
import LanguagesAndTools from "./components/LanguagesAndTools/LanguagesAndTools";
import AOS from "aos"
import "aos/dist/aos.css"
import "./App.css";

function App() {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/LanguagesAndTools" component={LanguagesAndTools} />
        <Route exact path="/AboutMe" component={AboutMe} />
        <Route exact path="/Proyects" component={Proyects} />
        <Route exact path="/Contact" component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
