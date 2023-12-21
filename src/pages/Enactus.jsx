import Header from "../components/Header";
import Contactus from "../components/Contactus";
import Core from "../components/Coremembers";
import Projects from "../components/Projects";
import Home from "../components/Home";
import Footer from "../components/Footer";
import About from "../components/About"
import "../style-home.css"

function Enactus() {
  return (
    <>
      <div className="full-container">

        <div className="header-container">
          <Header />
        </div>

        <div className="homepage-container" data-aos="fade-up">
          <div className="home-section">
            <Home />
          </div>
        </div>

        <div className="about-section" data-aos="fade-up">
          <div className="about-inner">
            <About />
          </div>
        </div>

        <div className="Core-section" data-aos="fade-up">
          <div className="Core-inner">
            <Core />
          </div>
        </div>

        <div className="project-section" data-aos="fade-up">
          <div className="project-inner">
            <Projects />
          </div>
        </div>


        <div className="contact-us-container">
          <Contactus />
        </div>

        <Footer />
      </div>

    </>
  )
}

export default Enactus;