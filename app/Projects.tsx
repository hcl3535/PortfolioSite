import LongProject from "./LongProject";
import ShortProject from "./ShortProject";

export default function Projects(){
    return(
        <section className="scrollSnap">
            <h1 className="text-6xl flex justify-center ">projects</h1>
            <section className="h-screen flex flex-col justify-center">
                <section className="flex h-1/3 ml-48 mr-48 mb-10">
                    <ShortProject title='Weather App' tagLine='A weather App for jeep people'/>
                    <LongProject/>
                </section>
                <section className="flex h-1/3 ml-48 mr-48">
                    <LongProject/>
                    <ShortProject/>
                </section>
            </section> 
        </section>
    )
}