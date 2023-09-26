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
        <section className="flex flex-col ml-48 mr-48 h-screen">
            <h1 className="text-6xl flex justify-center pt-5">Animal Game</h1>
            <section className="flex">
                <section className="w-1/2 h-2/4 flex flex-col mt-40 justify-center mr-5w">
                    <p className="text-3xl mb-5 first_Word_AnimalGame"> is a game I made for a teacher to use in her music class. This game is intended to help students interact and focus in class. </p>
                    <p className="text-3xl mb-5 ">This game uses audio queues to let the students know how they are doing.</p>
                    <a href='https://animalgame-production.up.railway.app/'>
                      <h1 className="text-3xl mb-5 first_Word_Launch"> Animal Game</h1>
                    </a>
                    <section className="mt-5 h-1/5">
                      <h1 className="text-center text-3xl mb-5">built useing</h1>
                      <section className="flex justify-center">
                      <section className="flex flex-col">
                          <Image src='/react.png' alt="" width={100} height={100} className="h-1/2 w-auto"/>
                          <h3 className="text-center mt-5 text-xl">React</h3>
                        </section>
                        <section className="flex flex-col ">
                          <Image src='/javascript.png' alt="" width={100} height={100} className="h-1/2 w-auto" />
                          <h3 className="text-center mt-5 text-xl">JavaScript</h3>
                        </section>
                      </section>
                    </section>
                </section>
                <section className="w-1/2 h-5/6 flex flex-col justify-center overflow-hidden justify-self-center ml-5">
                    <section className="flex flex-col self-center h-1/2 animate-fade">
                        <Image src={listOfIMGS[imgIdx]} alt="Picture of me" width={1896} height={2130} key={imgIdx} className="pr-20 max-h-full max-w-max self-center aspect-video min-h-full about_me_pic animate-fade-left animate-duration-1000" />
                        <ImageMarkers imgIdx={imgIdx}/>
                    </section>
                </section>
            </section>
        </section>
    )
}