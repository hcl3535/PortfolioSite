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
        <section className="flex flex-col scrollSnap ml-48 mr-48 h-screen">
            <h1 className="text-6xl flex justify-center pt-5">About Me</h1>
            <section className="flex">
                <section className="w-1/2 h-screen flex flex-col mt-40">
                    <p className="text-3xl mb-5">I enjoy cooking BBQ, and building things weather its using my hands woodworking, or developing a website.</p>
                    <p className="text-3xl">I am hard working and excited to use my creativity and technology skills to build applications. </p>
                </section>
                <section className="w-1/2 h-screen flex flex-col justify-center overflow-hidden justify-self-center">
                    <section className="flex flex-col self-center h-1/2 animate-fade">
                        <Image src={listOfIMGS[imgIdx]} alt="Picture of me" width={1896} height={2130} key={imgIdx} className="pr-20 max-h-full max-w-max self-center aspect-video min-h-full about_me_pic animate-fade-left animate-duration-1000" />
                        <ImageMarkers imgIdx={imgIdx}/>
                    </section>
                </section>
            </section>
        </section>
    )
}