export default function ContactSection () {
    return (
        <>

            <div className="w-full mt-18" id="contact"> 
                <div className="bg-neutral-800/50 p-6 shadow-xl rounded text-center mt-6 w-full">
                   
                   <div className="flex flex-col gap-6 mx-auto">
                   <p className="text-4xl font-semibold text-neutral-100">Let's Connect!</p>
                    <p className="text-neutral-100 text-xl">If you're interested in working together or have an opportunity, I'd love to hear from you!</p>

                    <div className="flex gap-6 flex-wrap text-neutral-100 text-lg justify-center items-center">
                        <a 
                        href="mailto:brandonjleone@gmail.com" target="_blank"
                        className="text-center text-neutral-100 px-3 py-1.5 duration-200 border-2 border-olive-400 bg-olive-400/20 hover:bg-olive-400/40 hover:border-olive-300/90 font-medium">Email me</a>
                        
                        <a
                        target="_blank"
                        href="https://github.com/BrandonLeone1"
                        className="text-center text-neutral-100 px-3 py-1.5 duration-200 border-2 border-olive-400 bg-olive-400/20 hover:bg-olive-400/40 hover:border-olive-300/90 font-medium">GitHub</a>
                        
                        <a 
                        target="_blank"
                        href="B.L. Resume 5-20.pdf"
                        className="text-center text-neutral-100 px-3 py-1.5 duration-200 border-2 border-olive-400 bg-olive-400/20 hover:bg-olive-400/40 hover:border-olive-300/90 font-medium">Resume</a>
                    </div>
                    </div>
                </div>
              </div>
      
        
        </>
    )
}