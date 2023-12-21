import Header from "../components/Header";
import Core from "../components/Coremembers";
import Footer from "../components/Footer";

function Corepage () {
    return (
        <div style={{backgroundColor:"black"}}>
  <div class="full-container">

    <div class="header-container">
        <Header/>
    </div>

    <div class="blog-container">
<Core/>
    </div>

<Footer/>
  </div>

</div>
    )
}

export default Corepage;