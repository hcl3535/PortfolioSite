import Footer from "../Footer";
import Header from "../header";
import AboutWizardGame from "./AboutWizardGame";
import Video from "./Video";
import PageMarkersWizardsGame from "./pageMarkersWizardGame";

export default function WizzardGame(){
    return(
        <>
            <Header/>
            <AboutWizardGame/>
            {/* <Video/>
            <PageMarkersWizardsGame/> */}
            <Footer/>
        </>
    )
}