import "../style-project.css";
import project_img from "../asset/Project Gulsair logo.png";
function Projects() {
  return (
    <>
      <section id="projects">
        <h2>OUR PROJECT</h2>
        <div className="projects-container container">
          <div className="projects-type">
            <div className="img-container">
              <img
                src={project_img}
                style={{ objectFit: "contain" }}
                alt="error"
              />
              <h1 style={{ color: "antiquewhite" }}>Tap to know more</h1>
              <div className="img-content">
                <h3>PROJECT GULSAIR</h3>
                <a
                  href="project-page.html"
                  className="btn btn-primary"
                  target="blank"
                >
                  learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Projects;
