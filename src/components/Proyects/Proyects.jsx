import Styles from "./Proyects.module.css";
import NavBar from "../NavBar/NavBar";
import arrP from "./";
import Swal from 'sweetalert2'

const Proyects = () => {
  let color = "Proyects";
  return (
    <div>
      <NavBar color={color} />
      <h1 className={Styles.Title}>Projects</h1>
      <div className={Styles.Container}>
        <div className={Styles.ContainerProyects}>
          {arrP.map((tech) => (
            <div data-aos="zoom-in" key={tech} className={Styles.Proyect}>
              <img className={Styles.Image} src={tech.image} alt={tech.name} />
              <div className={Styles.ContainerInvisible}>
                <h1 className={Styles.InfoTitle}>{tech.name}</h1>
                <p className={Styles.InfoSubtitle}>{tech.name}</p>
              </div>
              <div className={Styles.ContainerImages}>
                {tech.techs.map((tech) => (
                  <img
                    key={tech}
                    className={Styles.ImageTechnology}
                    src={tech}
                    alt={tech}
                  />
                ))}
              </div>
              <div className={Styles.ContainerButtons}>
                {tech.deploy === "no" ? (
                  <button
                    className={Styles.Link}
                    Target="_blank"
                    onClick={() => Swal.fire({
                      title: 'ERROR',
                      text: 'DEPLOY COMMING SOON',
                      icon: 'error',
                      confirmButtonText: 'OK'
                    })}
                  >
                    Deploy
                  </button>
                ) : tech.deploy ? (
                  <a className={Styles.Link} Target="_blank" href={tech.deploy}>
                    Deploy
                  </a>
                ) : null}
                {tech.video ? (
                  <a className={Styles.Link} Target="_blank" href={tech.video}>
                    Video
                  </a>
                ) : null}
                {tech.repository ? (
                  <a
                    className={Styles.Link}
                    Target="_blank"
                    href={tech.repository}
                  >
                    Repository
                  </a>
                ) : null}
                {tech.figma ? (
                  <a className={Styles.Link} Target="_blank" href={tech.figma}>
                    Figma
                  </a>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Proyects;
