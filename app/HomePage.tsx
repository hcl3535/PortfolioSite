import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import FrontPage from "./FrontPage";
import PageMarkers from "./PageMarkers";
import Projects from "./Projects";

export default function HomePage(){
    return(
        <>  
            <FrontPage/>
  
            <Projects/>

            <AboutMe/>

            <PageMarkers/>
        </>
    )
}