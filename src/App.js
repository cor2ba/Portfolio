import { Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import AboutMe from "./components/AboutMe/AboutMe";
import Proyects from "./components/Proyects/Proyects";
import Contact from "./components/Contact/Contact";
import LanguagesAndTools from "./components/LanguagesAndTools/LanguagesAndTools";
import "./App.css";

function App() {
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
