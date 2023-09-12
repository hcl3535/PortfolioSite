import Header from "./header";
import FrontPage from "./FrontPage";
import Projects from "./Projects";
import ContactMe from "./ContactMe";
import Footer from "./Footer";
import PageMarkers from "./PageMarkers";

export default function Home(){
  return(
    <>

      <Header/>

      <FrontPage/>
  
      <Projects/>

      <ContactMe/>

      <PageMarkers/>

      <Footer/>

    </>
  )
}