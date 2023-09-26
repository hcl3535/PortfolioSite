'use client'

import { useRouter } from "next/navigation"

export default function Header(){

  const router = useRouter()

  function handleHomeButton(){
    router.push('/')
  }

  return(
    <header className="flex scrollSnap header overflow-hidden"> 
      <button onClick={handleHomeButton}>
        <h1 className="whitespace-nowrap text-2xl mr-10 lg:flex mt-5">Hunter Lindsay</h1>
      </button>
      <h1 className="hidden whitespace-nowrap lg:block mr-3  mt-5 text-2xl">214-608-3624</h1>
      <h1 className="hidden lg:block mr-3  mt-5 text-2xl">/</h1>
      <h1 className="hidden whitespace-nowrap lg:block mt-5 text-2xl mr-10">Hunterl3535@gmail.com</h1>
      <section className="flex ml-auto">
        <a
          type="button" 
          href="HunterLindsayTechnicalResume.pdf"
          className=" hidden lg:flex ml-auto mr-10 text-red-600 text-2xl">
          <h1 className=" mt-5 ">Resume</h1>
        </a>
        <button
          type="button" 
          onClick={() => router.push('mailto:hunterl3535@gmail.com')}
          className="flex ml-auto text-red-600 text-2xl whitespace-nowrap">
          <h1 className=" mt-5 mr-5">Contact Me</h1>
        </button>
      </section>
    </header>
  )
}