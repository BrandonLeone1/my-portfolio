export default function HeroSection () {
    
    function handleScroll () {
        const projectSection = document.querySelector("#projects-section");
        if (projectSection) {
            projectSection.scrollIntoView({behavior: "smooth"})
        }
    }
    
    return (
        <>
        <div className="flex items-center justify-center h-screen -mt-25" id="hero">
            <div className="flex flex-col gap-6 text-center items-center max-w-5xl p-6 mx-auto">
                <p className="text-4xl text-neutral-100 font-semibold">Brandon Leone</p>
                <p className="text-neutral-100 font-medium text-lg">Full-Stack Developer</p>
                <p className="text-neutral-300/80">I build modern web applications focused on real-time data, analytics, and performance</p>

                <div className="flex gap-6 text-neutral-200 text-lg font-medium items-center justify-center">    
                    <a 
                    onClick={handleScroll}
                    className="text-center text-base text-neutral-100 mx-auto px-3 py-1.5 border-2 border-olive-400 bg-olive-400/20 cursor-pointer hover:bg-olive-400 duration-200">Projects</a>
                    <a href="https://github.com/BrandonLeone1" target="_blank" className="cursor-pointer hover:text-olive-400 duration-150">GitHub <i className="fa-brands fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/brandon-leone-a1b53a391/" target="_blank" className="cursor-pointer hover:text-olive-400 duration-150">LinkedIn <i className="fa-brands fa-square-linkedin"></i></a>
                </div>
            </div>
        </div>
        </>
    )
}