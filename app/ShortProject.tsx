'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ShortProject(props:any){

    const {title, tagLine, imageSRC, url} = props;
    const router = useRouter();

    function handleClick(){
        
        if(url !== undefined){
          router.push(url)
        }
    }

    return(
        <button 
        className="className='bg-slate-500 w-1/3 ml-5 mr-5 project rounded-lg"
        onClick={handleClick}>
        <section className="bg-orange-700 h-full flex flex-col justify-between bg-cover bg-center rounded-lg" style={{backgroundImage: `url(${imageSRC})`}}>
            <h1 className="mt-5 ml-5 text-2xl self-start">{title}</h1>
            <h2 className='self-center mb-10 text-2xl'>{tagLine}</h2>
        </section>
        </button>
    )
}