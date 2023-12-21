
import ProjectsPage from "./pages/ProjectsPage"
import Enactus from './pages/Enactus'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import ContactUsPage from "./pages/ContactUsPage"
import CorePage from "./pages/Corepage"
import Homepage from "./pages/Homepage";
function App() {

  return (
<BrowserRouter>
<Routes>

<Route path = "/" element ={<Enactus/>}/>
<Route path = "/Home" element={<Homepage/>}/>
<Route path = "/Projects" element= {<ProjectsPage/>}/>
<Route path = "/about" element = {<AboutPage/>} />
<Route path = "/contact" element = {<ContactUsPage/>}/>
<Route path = "/Core" element = {<CorePage/>}/>

</Routes>

</BrowserRouter>
  );
}

export default App;
