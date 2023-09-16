'use client'

import { useRouter } from "next/navigation"

export default function Header(){

  const router = useRouter()

  function handleHomeButton(){
    router.push('/')
  }

  return(
    <header className="flex scrollSnap "> 
      <button onClick={handleHomeButton}>
        <h1 className="mr-40 text-3xl mt-5">Hunter Lindsay</h1>
      </button>
      <h1 className="mr-10 text-3xl mt-5">214-608-3624</h1>
      <h1 className="mr-10 text-3xl mt-5">/</h1>
      <h1 className="text-3xl mt-5">Hunterl3535@gmail.com</h1>
      <button
        type="button" 
        onClick={() => router.push('mailto:hunterl3535@gmail.com')}
        className="flex ml-auto text-red-600">
        <h1 className="text-3xl mt-5 mr-5">Contact Me</h1>
      </button>
    </header>
  )
}