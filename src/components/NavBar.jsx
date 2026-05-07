import { useEffect, useState } from "react"
import {motion, AnimatePresence} from 'framer-motion'
export default function Navbar () {
    
    const [isOpen, setIsOpen] = useState(false);

    function heroScroll () {
        const heroSection = document.querySelector("#hero");
        if (heroSection) {
            heroSection.scrollIntoView({behavior: "smooth"})
        }
    }

    function skillsScroll () {
        const skillsSection = document.querySelector("#skills");
        if (skillsSection) {
            skillsSection.scrollIntoView({behavior: "smooth"})
        }
    }

    function projectsScroll () {
        const projectsSection = document.querySelector("#projects-section");
        if (projectsSection) {
            projectsSection.scrollIntoView({behavior: "smooth"})
        } 
    }

    function contactScroll () {
        const contactSection = document.querySelector("#contact");
        if (contactSection) {
            contactSection.scrollIntoView({behavior: "smooth"})
        }
    }

    function aboutScroll () {
        const aboutSection = document.querySelector("#about");
        if (aboutSection) {
            aboutSection.scrollIntoView({behavior: "smooth"})
        }
    }

    return (
        <>
            <header className={`w-full ${!isOpen ? 'bg-neutral-900/80' : 'bg-neutral-900'} duration-100 border-b sticky top-0 border-b-neutral-950 shadow-sm backdrop-blur-sm z-50`}>
                <nav className="p-6 max-w-400 mx-auto flex items-center justify-between text-neutral-100">
                    <div>
                        <a className="hover:text-olive-400 text-2xl duration-300 cursor-pointer" onClick={() => {
                            heroScroll()
                            setIsOpen(false)

                        }}>Brandon Leone</a>
                    </div>

                    <div className="md:hidden flex flex-col gap-1 items-center justify-center cursor-pointer"
                    onClick={() => setIsOpen(prev => !prev)}
                    >
                        <div className={`w-6.25 h-0.75 bg-neutral-100 rounded-xl`}></div>
                        <div className={`w-6.25 h-0.75 bg-neutral-100 rounded-xl`}></div>
                        <div className={`w-6.25 h-0.75 bg-neutral-100 rounded-xl`}></div>
                    </div>

                    <div className="text-lg md:flex gap-6 hidden">
                        <a onClick={projectsScroll} className="duration-300 cursor-pointer after:h-0.5 after:scale-x-0 hover:after:scale-x-100 after:duration-300 after:bg-olive-400 after:block">Projects</a>
                        <a onClick={aboutScroll} className="duration-300 cursor-pointer after:h-0.5 after:scale-x-0 hover:after:scale-x-100 after:duration-300 after:bg-olive-400 after:block">About</a>
                        <a onClick={skillsScroll} className="duration-300 cursor-pointer after:h-0.5 after:scale-x-0 hover:after:scale-x-100 after:duration-300 after:bg-olive-400 after:block">Skills</a>
                        <a onClick={contactScroll} className="duration-300 cursor-pointer after:h-0.5 after:scale-x-0 hover:after:scale-x-100 after:duration-300 after:bg-olive-400 after:block">Contact</a>
                    </div>
                </nav>
                <AnimatePresence>
                 { isOpen && (
                    <motion.div 
                    initial={{height: 0}}
                    animate={{height: "auto"}}
                    exit={{height: 0}}
                    transition={{duration: 0.22, ease: [0.22, 1, 0.36, 1]}}
                    className="flex origin-top overflow-hidden fixed w-full left-0 justify-center items-center text-white md:hidden bg-neutral-950">
                        <motion.div 
                        initial={{opacity: 0, y: -10}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity: 0, y: -10}}
                        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1]}}
                        className="flex flex-col gap-6 items-center justify-center">
                        <a onClick={() => {
                            setIsOpen(false)
                            
                            setTimeout(() => {
                            projectsScroll();    
                            }, 0.5);
                            
                           
                            }} className="hover:opacity-80 mt-6 cursor-pointer">Projects</a>

                            <a 
                            onClick={() => {
                            setIsOpen(false)
                            
                            setTimeout(() => {
                            aboutScroll();    
                            }, 0.5);
                            
                            
                        }}
                            className="hover:opacity-80 duration-300 cursor-pointer">About</a>
                        <a onClick={() => {
                            setIsOpen(false)
                            setTimeout(() => {
                            skillsScroll();    
                            }, 0.5);
                            
                           
                        }} className="hover:opacity-80 cursor-pointer">Skills</a>
                        <a 
                        
                        onClick={() => {
                            setIsOpen(false)
                            setTimeout(() => {
                            contactScroll()    
                            }, 0.5);
                            
                            
                        }} className="hover:opacity-80 mb-6 cursor-pointer">Contact</a>
                        </motion.div>
                    </motion.div>
                    )
                }
                </AnimatePresence>
            </header>
        </>
    )
}