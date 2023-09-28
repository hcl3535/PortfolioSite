import LongProject from "./LongProject";
import ShortProject from "./ShortProject";

export default function Projects(){
    return(
        <section className=" h-screen scrollSnap">
            <h1 className="text-6xl flex justify-center pt-5">Projects</h1>
            <section className=" h-5/6 flex flex-col justify-center">
                <section className="flex flex-col justify-end ml-5 mr-5 lg:flex-row h-1/2 lg:ml-48 lg:h-1/3 lg:mr-48 lg:mb-10 overflow-hidden projectHolder">
                    
                        <ShortProject title='Jeep Weather App' tagLine='A weather App for jeep people' imageSRC='/jeepersWeather.png' url='/JeepersWeather'/>
                    
                        <LongProject title='Realm Forge' tagLine='An interactive map making tool' imageSRC='/realmforge.png' url='/realmForge'/>
                    
                </section>
                <section className="flex flex-col ml-5 mr-5 lg:flex-row h-1/2 mb-5 lg:h-1/3 lg:ml-48 lg:mr-48 overflow-hidden projectHolder">
                    
                        <LongProject title='Wizard Game' tagLine='A Video game Made using Unreal Engine 4' imageSRC='/wizzardsGame.png' url='/WizardGame'/>
                    
                        <ShortProject title='Animal Teaching Game' tagLine='Made for use in a music class' imageSRC='/animalGame.png' url='/AnimalGame'/>
                    
                </section>
            </section> 
        </section>
    )
}