import Header from "../components/Header";
import About from "../components/About";
import Footer from "../components/Footer";


function AboutPage() {
    return (
    <div style={{backgroundColor:"black"}}>
  <div class="full-container">

    <div class="header-container">
        <Header/>
    </div>

  
    <div class="about-section">
      <div class="about-inner">
<About/>
      </div>
      <button class="about-btn">More</button>
    </div>

<Footer/>
  </div>
</div>
    )
}

export default AboutPage;