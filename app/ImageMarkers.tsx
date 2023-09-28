'use client'

export default function ImageMarkers(props: any){

    const {imgIdx} = props;

    const numberOfImageMarkers = 3

    const markers = []

    for(let i = 0; i < numberOfImageMarkers; i++){
        console.log(imgIdx)
        if(i === imgIdx){
            markers.push(<div className="h-5 w-5 bg-red-600 rounded mr-2 ml-2" key={i}></div>)
        }else{
            markers.push(<div className="h-5 w-5 bg-white rounded mr-2 ml-2" key={i}></div>)
        }
    }

    return(
        <section className="flex justify-center align-middle mt-5">
            <>{markers}</>
        </section>
    )
}