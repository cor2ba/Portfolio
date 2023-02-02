import Styles from "./LanguagesAndTools.module.css";
import NavBar from "../NavBar/NavBar";
import arrayLAT from "./";

const LanguagesAndTools = () => {
  let color = "LanguagesAndTools";
  return (
    <div>
      <NavBar color={color} />
      <h1 data-aos="zoom-in" className={Styles.Title}>Languages and Tools:</h1>
      <div className={Styles.Technologies}>
        {arrayLAT.map((tech) => (
          <div data-aos="zoom-in" key={tech} className={Styles.Technology}>
            <img className={Styles.Image} src={tech.src} alt={tech.name}></img>
            <h1 className={Styles.TitleTechnology}>{tech.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LanguagesAndTools;
