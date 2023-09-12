import { JsxAttribute } from "typescript"

export default function PageMarkers(){

    const numberOfPageMarkers: number = 3

    const mapMarkers:JSX.Element[] = []

    for(let i = 1; i <= numberOfPageMarkers; i++){
        mapMarkers.push(<div className="h-5 w-5 bg-white mb-5 rounded"></div>)
    }

    return(
        <section className="fixed right-20 top-1/2">
            <>{mapMarkers}</>
        </section>
    )
}