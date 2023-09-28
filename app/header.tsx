'use client'

import { useRouter } from "next/navigation"

export default function Header(){

  const router = useRouter()

  function handleHomeButton(){
    router.push('/')
  }

  // function handleContactMe(){
  //   router.push('/#contactPage')
  // }

  return(
    <header className="flex scrollSnap header overflow-hidden"> 
      <button onClick={handleHomeButton}>
        <h1 className="whitespace-nowrap text-2xl mr-5 lg:flex mt-5">Hunter Lindsay</h1>
      </button>
      <section className="flex ml-auto">
      <button
        type="button" 
        onClick={() => window.open('HunterLindsayTechnicalResume.pdf', '_blank')}
        className=" flex ml-5 mt-5 text-red-600 text-2xl">
        <h1 className="">Resume</h1>
      </button>
      </section>
    </header>
  )
}