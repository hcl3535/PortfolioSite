'use client'

import { useEffect, useState } from "react"

export default function PageMarkers(){

    const numberOfPageMarkers: number = 3

    const pageMarkers:JSX.Element[] = []

    const [currentPage, setCurrentPage] = useState(0)

    useEffect(()=>{
        const scroll = () => {

            const pageLength = window.innerHeight
            const pageNumber = Math.ceil(window.scrollY / pageLength);
            
            if(pageNumber !== currentPage && pageNumber !== 0){
                setCurrentPage(pageNumber)
            }
        }
        window.addEventListener("scroll", scroll, false);
        return  () => window.removeEventListener("scroll", scroll, false);
      },[])

    for(let i = 1; i <= numberOfPageMarkers; i++){
        if(i === currentPage || i === 1 && currentPage === 0){
            pageMarkers.push(<div className="h-5 w-5 bg-red-600 mb-3 mt-3 rounded" key={i}></div>)
        } else {
            pageMarkers.push(<div className="h-5 w-5 bg-white mb-3 mt-3 rounded " key={i}></div>)
        }
    }

    return(
        <section className="fixed right-5 top-1/2 lg:right-10">
            <>{pageMarkers}</>
        </section>
    )
}