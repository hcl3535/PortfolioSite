'use client'

import Image from "next/image"
import ImageMarkers from "../ImageMarkers"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export default function AboutJeepersWeather(){

    const [imgIdx, setImgIdx] = useState(0)

    const listOfIMGS = ['/jeep.png','/jeep2.png','/jeep.png']

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
            <h1 className="text-6xl flex justify-center pt-5">Jeepers Weather</h1>
            <section className="flex">
                <section className="w-1/2 h-1/4 flex flex-col mt-40 justify-center mr-5w">
                    <p className="text-3xl mb-5 first_Word_JeepersWeather"> is a weather app made for jeep people. You can input your location to get the weather in your area.</p>
                    <p className="text-3xl mb-5 ">I created this app to push my skills in accessing and using api data. I also wanted to learn the proccess of uploading an app to the play store.</p>
                    <a href='https://play.google.com/store/apps/details?id=com.JeepersWeather.app'>
                      <h1 className="text-3xl mb-5 first_Word_Launch"> Jeepers Weather</h1>
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
                        <section className="flex flex-col">
                          <Image src='/capacitor.png' alt="" width={100} height={100} className="h-1/2 w-auto"/>
                          <h3 className="text-center mt-5 text-xl">Capacitor</h3>
                        </section>
                      </section>
                    </section>
                </section>
                <section className="w-1/2 h-1/2 flex flex-col mt-10 overflow-hidden justify-center justify-self-center ml-5">
                    <section className="flex flex-col self-center h-5/6 animate-fade">
                        <Image src={listOfIMGS[imgIdx]} alt="Picture of me" width={1896} height={2130} key={imgIdx} className="pr-20 max-h-full max-w-max self-center aspect-auto min-h-full about_me_pic animate-fade-left animate-duration-1000" />
                        <ImageMarkers imgIdx={imgIdx}/>
                    </section>
                </section>
            </section>
        </section>
    )
}