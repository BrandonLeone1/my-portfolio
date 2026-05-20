import { useEffect, useState } from "react"
import handleScroll from "../helpers/handleScroll";
import {motion, AnimatePresence} from 'framer-motion'
export default function Navbar () {
    
    const [isOpen, setIsOpen] = useState(false);


    return (
        <>
            <header className={`w-full ${!isOpen ? 'bg-neutral-900/80' : 'bg-neutral-900'} duration-100 border-b sticky top-0 border-b-neutral-950 shadow-sm backdrop-blur-sm z-50`}>
                <nav className="p-6 max-w-400 mx-auto flex items-center justify-between text-neutral-100">
                    <div tabIndex={`0`}>
                        <button className="hover:text-olive-400 text-2xl duration-150 cursor-pointer" onClick={() => {
                            handleScroll("hero")
                            setIsOpen(false)

                        }}>Brandon Leone</button>
                    </div>

                    <div tabIndex={`0`} className="md:hidden flex flex-col gap-1 items-center justify-center cursor-pointer"
                    onClick={() => setIsOpen(prev => !prev)}
                    >
                        <div className={`w-6.25 h-0.75 bg-neutral-100 rounded-xl`}></div>
                        <div className={`w-6.25 h-0.75 bg-neutral-100 rounded-xl`}></div>
                        <div className={`w-6.25 h-0.75 bg-neutral-100 rounded-xl`}></div>
                    </div>

                    <div className="text-lg md:flex gap-6 hidden">
                        <button onClick={() => handleScroll("projects-section")} className="duration-150 cursor-pointer after:h-0.5 after:scale-x-0 hover:after:scale-x-100 after:duration-150 after:bg-olive-400 after:block">Projects</button>
                        <button onClick={() => handleScroll("about")} className="duration-150 cursor-pointer after:h-0.5 after:scale-x-0 hover:after:scale-x-100 after:duration-150 after:bg-olive-400 after:block">About</button>
                        <button onClick={() => handleScroll("skills")} className="duration-150 cursor-pointer after:h-0.5 after:scale-x-0 hover:after:scale-x-100 after:duration-150 after:bg-olive-400 after:block">Skills</button>
                        <button onClick={() => handleScroll("contact")} className="duration-150 cursor-pointer after:h-0.5 after:scale-x-0 hover:after:scale-x-100 after:duration-150 after:bg-olive-400 after:block">Contact</button>
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
                        <button onClick={() => {
                            setIsOpen(false)
                            handleScroll("projects-section")   
                       
                            
                           
                            }} className="hover:opacity-80 mt-6 cursor-pointer">Projects</button>

                            <button 
                            onClick={() => {
                            setIsOpen(false)
                            handleScroll("about")
            
                            
                            
                        }}
                            className="hover:opacity-80 duration-300 cursor-pointer">About</button>
                        <button onClick={() => {
                            setIsOpen(false)
                            handleScroll("skills")
                            
                           
                        }} className="hover:opacity-80 cursor-pointer">Skills</button>
                        <button 
                        
                        onClick={() => {
                            setIsOpen(false)
                            handleScroll("contact")
                            
                        }} className="hover:opacity-80 mb-6 cursor-pointer">Contact</button>
                        </motion.div>
                    </motion.div>
                    )
                }
                </AnimatePresence>
            </header>
        </>
    )
}