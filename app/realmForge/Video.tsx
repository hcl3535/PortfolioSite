import Iframe from 'react-iframe'

export default function Video(){
    return(
        <section className='ml-48 mr-48 h-screen scrollSnap'>
            <h1 className="text-6xl flex justify-center pt-5 mb-10">RealmForge</h1>
            <section className='flex h-3/4'>
                <section className='flex w-full aspect-video min-h-full'>
                    <Iframe url="https://www.youtube.com/embed/RG4iG_zxLS8?autoplay=1"
                    styles={{width:'100%'}}
                    id=""
                    className=""
                    display="block"
                    position="relative"/>
                </section>
            </section>
        </section>
    )
}