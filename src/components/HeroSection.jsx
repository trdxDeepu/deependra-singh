import gsap from "gsap"
import { useEffect} from "react"


const HeroSection = () => {

    
useEffect(()=>{

    
    gsap.fromTo('div h1', {
        y: 100,
        opacity: 0,

    }, {
        y: 0,
        opacity: 1,
        duration: 1.4,
        delay: 1.2,
        stagger: 0.8
    }
    )
},[])




    return (
        <section className="mx-52 my-36">
            <div className="flex  items-center md:items-start flex-col  gap-y-4">
                <h1 className="space-x-10 text-sm md:text-2xl md:w-full w-20 text-primary tracking-wider">Hi, My name is </h1>
                <h1 className="text-3xl md:text-6xl font-bold tracking-wider text-secondary flex items-end gap-x-3">
                    <span>Deependra Singh</span>
                    <span className="block md:w-2 md:h-2 bg-secondary rounded-full mb-2"></span>
                </h1>
                <h1 className="text-3xl md:text-6xl font-bold text-slate-400 flex items-end gap-x-3 w-[200px] md:w-auto">
                    <span>I built things for Web as Front End Developer</span>
                   
                </h1>
                <h1 className="text-2xl md:text-4xl font-bold text-slate-400 mt-2 w-[200px] md:w-auto" >
                    I&apos;m a Front End Developer with the Skills of React and Next.js and have basic knowledge about Angular.
                </h1>
                
                <h1 className="mt-10 mr-8 md:mr-0 relative outline outline-1 outline-primary w-32 h-12 px-7 text-xl py-2  rounded-md bg-transparent text-secondary hover:text-black transform duration-200 ease-out isolation-auto z-10 border-2 border-primary font-semibold hover:cursor-pointer
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-primary before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 ">
                    Resume
                </h1>
            </div>
        </section>
        )
}

export default HeroSection