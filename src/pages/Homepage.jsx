import Header from "../components/Header";
import Home from "../components/Home";
import Footer from "../components/Footer";

function homePage () {
    return (
        <div style={{backgroundColor:"black"}}>
  <div class="full-container">

    <div class="header-container">
        <Header/>
    </div>

    <div class="homepage-container">
<Home/>
    </div>

<Footer/>
  </div>

</div>
    )
}

export default homePage;