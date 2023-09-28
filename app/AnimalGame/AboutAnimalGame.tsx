'use client'

import Image from "next/image"
import ImageMarkers from "../ImageMarkers"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export default function AboutAnimalGame(){

    const [imgIdx, setImgIdx] = useState(0)

    const listOfIMGS = ['/animalGame.png','/animalgame2.png','/animalGame.png']

    useEffect(() => {
  
        const intreval = setInterval(() =>{
          if(imgIdx === listOfIMGS.length - 1){
            setImgIdx(0)
            return
          }
          
          setImgIdx(imgIdx + 1)
        }, 7000)

        const fadeIntreval = setInterval(() =>{
            
          }, 6000)

        return() => {
          clearInterval(intreval)
          clearInterval(fadeIntreval)
        }

      },[imgIdx])

      

      return(
        <section className="flex flex-col lg:ml-48 lg:mr-48 h-screen">
            <h1 className="text-4xl lg:text-6xl flex justify-center pt-5">Animal Game</h1>
            <section className="flex flex-col h-4/6">
              <section className="flex flex-col lg:flex-row lg:h-3/5">
                <section className="lg:w-1/2  lg:h-1/2 flex flex-col  mt-2 lg:mt-40 lg:justify-center mr-5w ">
                    <p className="lg:text-2xl mb-5 first_Word_AnimalGame"> is a game I made for a teacher to use in her music class. This game is intended to help students interact and focus in class.</p>
                    <p className="lg:text-2xl mb-5 ">This game uses audio queues to let the students know how they are doing.</p>
                    {/* <p className="lg:text-2xl mb-5 ">This is a FullStack application that many users are allready useing alongside their D&D games.</p> */}
                    <a href='https://www.realmforge.site/'>
                      <h1 className="lg:text-3xl mb-5 first_Word_Launch"> Animal Game</h1>
                    </a>     
                  </section>
                  <section className="h-1/5 w-full lg:w-1/2 lg:h-5/6 lg:flex flex-col justify-center overflow-hidden justify-self-center lg:ml-5 ">
                    <section className="flex flex-col h-full self-center lg:h-1/2 animate-fade">
                        <Image src={listOfIMGS[imgIdx]} alt="Picture of me" width={1896} height={2130} key={imgIdx} className="lg:pr-20 max-h-full h-4/6 max-w-max self-center aspect-video lg:min-h-full about_me_pic animate-fade-left animate-duration-1000" />
                        <ImageMarkers imgIdx={imgIdx}/>
                    </section>
                  </section>
                </section>
                {/* <section className="mt-5">
                      <h1 className="text-center lg:text-3xl mb-5">built useing</h1>
                      <section className="flex justify-center">
                        <section className="flex flex-col">
                          <Image src='/react.png' alt="" width={100} height={100} className="h-1/2 w-auto"/>
                          <h3 className="text-center mt-5 lg:text-xl">React</h3>
                        </section>
                        <section className="flex flex-col ">
                          <Image src='/javascript.png' alt="" width={100} height={100} className="h-1/2 w-auto" />
                          <h3 className="text-center mt-5 lg:text-xl">JavaScript</h3>
                        </section>
                        <section className="flex flex-col">
                          <Image src='/Node.png' alt="" width={100} height={100} className="h-1/2 w-auto"/>
                          <h3 className="text-center mt-5 lg:text-xl">Node</h3>
                        </section>
                        <section className="flex flex-col">
                          <Image src='/postgresql.png' alt="" width={100} height={100} className="h-1/2 w-auto"/>
                          <h3 className="text-center mt-5 lg:text-xl">Postgresql</h3>
                        </section>
                      </section>
                    </section> */}
            </section>
        </section>
    )
}