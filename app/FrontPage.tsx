import Image from "next/image"

export default function FrontPage(){
    return(
        <section className="flex">
            <section className="w-1/2 h-screen flex flex-col justify-center">
                <section className="w-1/2 m-auto">
                    <h1 className="text-8xl ">Hi, I'm</h1>
                    <h1 className="text-8xl ">Hunter</h1>
                </section>
            </section>
        <section className="w-1/2 h-screen flex flex-col justify-center overflow-hidden">
            <Image src='/hunterPortrait.png' alt="Picture of me" width={1896} height={2130} className="pr-20 max-h-full max-w-max" />
        </section>
      </section>
    )
}