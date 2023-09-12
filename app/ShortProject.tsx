export default function ShortProject(props:any){

    const {title, tagLine} = props;
    return(
        <section className="bg-orange-700 w-1/3 ml-5 mr-5 flex flex-col justify-between">
            <h1 className="mt-5 ml-5">{title}</h1>
            <h2 className='self-center mb-10'>{tagLine}</h2>
        </section>
    )
}