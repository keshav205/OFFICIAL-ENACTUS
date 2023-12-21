import Footer from "../components/Footer"
import Header from "../components/Header"
import Projects from "../components/Projects"
import "../style-home.css"

function ProjectsPage(){
    return (
        <div style = {{backgroundColor : "black"}}>
        <div class="full-container">

        <div class="header-container">
<Header/>
        </div>
    
        <div class="project-container">
<Projects/>
        </div>
    
<Footer/>
      </div>
      </div>
    )
}

export default ProjectsPage;