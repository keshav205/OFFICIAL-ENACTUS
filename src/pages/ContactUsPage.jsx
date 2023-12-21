
import Header from "../components/Header";
import Contactus from "../components/Contactus";
import Footer from "../components/Footer";

function ContactUsPage(){
return (
    <div style={{backgroundColor:"black"}}>
  <div class="full-container">

    <div class="header-container">
    <Header/>
    </div>
    
    <div class="contact-us-container">
<Contactus/>
    </div>

<Footer/>
  </div>

</div>
)
}

export default ContactUsPage;