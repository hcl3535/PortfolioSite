'use client'

import { useRouter } from "next/navigation";

export default function LongProject(props: any){

    const {title, tagLine, imageSRC, url} = props;
    const router = useRouter();

    function handleClick(){

        if(url !== undefined){
          router.push(url)
        }
    }

    return(
        <button 
        className="bg-slate-500 h-2/5 lg:w-2/3 ml-5 mr-5 project rounded-lg lg:h-full"
        onClick={handleClick}>
            <section className='bg-slate-500 h-full flex flex-col justify-end lg:justify-between bg-cover bg-center rounded-lg' style={{backgroundImage: `url(${imageSRC})`}}>
                <h1 className="mt-5 ml-5 text-2xl lg:self-start lg:block">{title}</h1>
                <h2 className='self-center mb-10 text-2xl hidden lg:block'>{tagLine}</h2>
            </section>
        </button>
    )
}