export default function ContactSection () {
    return (
        <>

            <div className="w-full mt-18" id="contact"> 
                <div className="bg-neutral-800/50 p-6 shadow-xl rounded text-center mt-6 w-full">
                   
                   <div className="flex flex-col gap-6 mx-auto">
                   <p className="text-4xl font-semibold text-neutral-100">Let's Connect!</p>
                    <p className="text-neutral-100 text-xl">If you're interested in working together or have an opporunity, I'd love to hear from you. I'm currently seeking an internship or junior front-end/full-stack opportunities.</p>

                    <div className="flex gap-6 flex-wrap text-neutral-100 text-lg justify-center items-center">
                        <a 
                        href="mailto:brandonjleone@gmail.com" target="_blank"
                        className="border-2 border-olive-400 bg-olive-400/20 px-3 py-1.5 cursor-pointer after:content-[''] relative after:absolute after:w-full after:bg-olive-400 after:bottom-0 after:left-0 after:h-0 hover:after:h-full after:duration-300 after:z-[-1] hover:text-neutral-900 z-20 duration-300 font-medium">Email me</a>
                        <a
                        target="_blank"
                        href="https://github.com/BrandonLeone1"
                        className="border-2 border-olive-400 bg-olive-400/20 px-3 py-1.5 cursor-pointer after:content-[''] relative after:absolute after:w-full after:bg-olive-400 after:bottom-0 after:left-0 after:h-0 hover:after:h-full after:duration-300 after:z-[-1] hover:text-neutral-900 z-20 duration-300 font-medium">GitHub</a>
                        <a 
                        target="_blank"
                        href="B.L. Resume new.pdf"
                        className="border-2 border-olive-400 bg-olive-400/20 px-3 py-1.5 cursor-pointer after:content-[''] relative after:absolute after:w-full after:bg-olive-400 after:bottom-0 after:left-0 after:h-0 hover:after:h-full after:duration-300 after:z-[-1] hover:text-neutral-900 z-20 duration-300 font-medium">Resume</a>
                    </div>
                    </div>
                </div>
              </div>
      
        
        </>
    )
}