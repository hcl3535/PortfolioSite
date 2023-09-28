'use client'

import Image from "next/image"
import ImageMarkers from "./ImageMarkers"
import { useEffect, useState } from "react"

export default function AboutMe(){

    const [imgIdx, setImgIdx] = useState(0)

    const listOfIMGS = ['/BBQ.jpg','/Woodworking.jpg','/coding.jpg']

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
        <section className="flex flex-col scrollSnap lg:ml-48 lg:mr-48 h-screen overflow-hidden">
            <h1 className="text-6xl flex justify-center pt-5 mb-5">About Me</h1>
            <section className="h-5/6">
              <section className="flex flex-col h-3/5 lg:flex-row">
                <section className="w-full flex flex-col justify-center lg:mr-10 align-middle">
                  <p className="lg:text-3xl mb-5">Hi my name is Hunter, I am a<span className="text-red-600"> software engineer </span>who enjoys creating user centric websites and leaning new technologies.</p>
                  <p className="lg:text-3xl mb-5">Some of my other hobbies include cooking <span className="text-red-600"> BBQ </span> for family and friends,<span className="text-red-600"> woodworking </span> and <span className="text-red-600"> cinematography</span> / <span className="text-red-600">photography </span>. </p>            
                </section>
                <section className=" lg:w-1/2 h-full flex flex-col justify-center overflow-hidden justify-self-center lg:ml-10 ml-7 mr-7">
                    <section className="flex flex-col self-center align-middle lg:h-1/2 animate-fade">
                        <Image src={listOfIMGS[imgIdx]} alt="Picture of me" width={1896} height={2130} key={imgIdx} className="pr-20 max-h-full h-1/2 max-w-max self-center justify-center aspect-video min-h-full about_me_pic animate-fade-left animate-duration-1000" />
                        <ImageMarkers imgIdx={imgIdx}/>
                    </section>
                </section>
              </section>
                <h1 className="lg:text-3xl self-center  text-center mt-5">This website was created with</h1>
                    <section className="flex justify-center mt-5">
                      <section className="flex flex-col">
                        <Image src='/next js.png' alt="" width={100} height={100} className="h-1/2 w-auto"/>
                        <h3 className="text-center mt-5 lg:text-xl">Next.JS</h3>
                      </section>
                      <section className="flex flex-col ">
                        <Image src='/javascript.png' alt="" width={100} height={100} className="h-1/2 w-auto" />
                        <h3 className="text-center mt-5 lg:text-xl">JavaScript</h3>
                      </section>
                      <section className="flex flex-col">
                        <Image src='/tailwind.png' alt="" width={100} height={100} className="h-1/2 w-auto"/>
                        <h3 className="text-center mt-5 text-xl">Tailwind</h3>
                      </section>
                    </section>
            </section>
        </section>
    )

}