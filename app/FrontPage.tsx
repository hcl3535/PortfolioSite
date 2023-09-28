import Image from "next/image"

export default function FrontPage(){
    return(
        <section className="flex">
            <section className="w-1/2 h-screen flex flex-col justify-center z-10">
                <section className=" m-auto flex flex-col">
                    <section className="flex">
                        <h1 className="text-8xl text-red-600">Hi</h1>
                        <h1 className="text-8xl ">, Im</h1>
                    </section>
                    <h1 className="text-8xl">Hunter</h1>
            
                </section>
            </section>
        <section className="z-0 absolute left-0 lg:w-1/2 lg:relative h-screen flex flex-col justify-center overflow-hidden ">
            <Image src='/hunterPortrait.png' alt="Picture of me" width={1896} height={2130} className="pr-20 max-h-full max-w-max" />
        </section>
      </section>
    )
}