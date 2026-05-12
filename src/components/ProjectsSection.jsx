import { useState } from 'react'
import {Link, ScrollRestoration} from 'react-router-dom'

export default function ProjectsSection () {

    

    return (
        <>
    
            <div className="max-w-7xl mx-auto p-6" id='projects-section'>

                <div className="flex flex-col gap-4" >
                <p className="text-neutral-100 text-4xl font-semibold">Projects</p>
                
                <p className="text-neutral-100 font-medium text-xl max-w-[65ch]">These projects reflect my focus on building full-stack applications with real world constraints
                    such as data consistency, performance optimixation, and state management complexity.
                </p>
                
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] bg-neutral-800/50  lg:min-h-120 lg:place-items-center gap-6 p-6 rounded mt-18">
                    
                    
                    <div className="flex flex-col gap-4 order-2">
                        <p className="text-neutral-100 text-2xl font-medium">Personal Finance Manager</p>
                        <p className="text-neutral-100 max-w-[65ch] text-lg">Full-stack finance dashboard built to handle real-time transaction tracking, MongoDB aggregation pipelines, and performance-heavy data visualization.</p>
                        
                         <div className='gap-3 flex-wrap flex items-center font-medium text-sm '>
                                <a href="https://financial-tracker-sage.vercel.app/" target='_blank' className="text-center text-base text-neutral-100 px-3 py-1.5 duration-200 border-2 border-olive-400 bg-olive-400/20 hover:bg-olive-400/40 hover:border-olive-300/90">Live site</a>
                                <a href="https://github.com/BrandonLeone1/Financial-Tracker" target='_blank' className="text-center duration-150 text-neutral-100 hover:opacity-80">GitHub <i className="fa-brands fa-github"></i></a>
                                <Link to={'financial-tracker'} className="text-center duration-150 text-neutral-100 group hover:opacity-80">Case study <i className="fa-solid text-neutral-100 fa-arrow-right group-hover:translate-x-0.5 duration-150"></i></Link>
                        </div>
                        
                        <div className='text-neutral-100 space-y-4 mt-4 max-w-[65ch]'>
                            <p className='border-l border-olive-400/30 py-1 px-2'>Reduced data processing complexing from O(n^2) to O(n) using hashmap-based lookups</p>
                            <p className='border-l border-olive-400/30 py-1 px-2'>Shifted financial aggregations to MongoDb improving dashboard performance and reducing client load upon render</p>
                            <p className='border-l border-olive-400/30 py-1 px-2 hidden md:block'>Implemented stateless JWT authentication for secure, scalable user sessions</p>
                        </div>

                    </div>
                    
                    <div className='lg:order-2'>
                        <Link 
                        to="/financial-tracker" >
                        <div className="after:content-[''] group after:bg-black/80 after:backdrop-blur-[1px] after:h-full after:opacity-0 hover:after:opacity-100 items-center justify-center flex after:duration-300 after:w-full after:block relative after:absolute after:inset-0">
                        
                    <p className='text-neutral-100 text-center absolute z-10 text-lg  cursor-pointer duration-150 origin-bottom overflow-hidden opacity-0 -translate-y-5 group-hover:opacity-100 group-hover:translate-y-0'>View case study <i className="fa-solid fa-magnifying-glass"></i></p>
                        <img src="financialRealFinal.png" className="rounded-lg w-full brightness-95 "/>
                        </div>

                        </Link> 

                    </div>

              
                </div>

                </div>
            </div>

             <div className="max-w-5xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">


                <div className='bg-neutral-800/50 rounded shadow-xl p-6 flex flex-col gap-4'>
                    
                      <Link to={'task-tracker'}>
                     <div className="after:content-[''] group after:bg-black/80 after:backdrop-blur-[1px] after:h-full after:opacity-0 hover:after:opacity-100 items-center justify-center flex after:duration-300 after:w-full after:block relative after:absolute after:inset-0">
                    <p className='text-neutral-100 text-center absolute z-10 text-lg  cursor-pointer duration-150 origin-bottom overflow-hidden opacity-0 -translate-y-5 group-hover:opacity-100 group-hover:translate-y-0'>View case study <i className="fa-solid fa-magnifying-glass"></i></p>
                    <img src="boardViewOutput.png" className="w-full rounded-lg brightness-95 "/>
                    </div>
                    </Link>

                    <p className='text-neutral-100 text-xl font-medium'>Task Tracker (KanBan Board)</p>
                    <p className='text-neutral-100 max-w-[65ch] text-lg'>A drag-and-drop task management application using @dnd-kit with optimistic UI and persistent ordering.</p>
                    
                       <div className='flex gap-3 flex-wrap text-sm font-medium items-center'>
                        <a href="https://task-tracker-full-stack-psi.vercel.app/" target='_blank' className="text-center text-base text-neutral-100 px-3 py-1.5 duration-200 border-2 border-olive-400 bg-olive-400/20 hover:bg-olive-400/40 hover:border-olive-300/90">Live site</a>
                        <a href="https://github.com/BrandonLeone1/Task-Tracker-Full-Stack" target='_blank' className="text-center  duration-150 text-neutral-100 hover:opacity-80">GitHub <i className="fa-brands fa-github"></i></a>
                        <Link to={'task-tracker'} className="text-center z-10 after:z-[-1] duration-150 text-neutral-100 hover:opacity-80 group">Case study <i className="fa-solid text-neutral-100 fa-arrow-right group-hover:translate-x-0.5 duration-150"></i></Link>
                    </div>
                    
                    <div className='text-neutral-100 space-y-4 mt-4 max-w-[65ch] text-sm'>
                        <p className='border-l border-olive-400/30 py-1 px-2'>Cross-column movements with persistent ordering</p>
                        <p className='border-l border-olive-400/30 py-1 px-2'>MongoDB bulkWrite operations for efficient batch task updates</p>
                        <p className='border-l border-olive-400/30 px-2 py-1 hidden md:block'>Multiple boards per user with tasks scoped per board</p>    
                    </div>


                 
                
                </div>

                <div className='bg-neutral-800/50 rounded shadow-xl p-6 flex flex-col gap-4'>


                <Link to={'project-manager'}>
                <div className="after:content-[''] group after:bg-black/80 after:backdrop-blur-[1px] after:h-full after:opacity-0 hover:after:opacity-100 items-center justify-center flex after:duration-300 after:w-full after:block relative after:absolute after:inset-0">
                <p className='text-neutral-100 text-center absolute z-10 text-lg  cursor-pointer duration-150 origin-bottom overflow-hidden opacity-0 -translate-y-5 group-hover:opacity-100 group-hover:translate-y-0'>View case study <i className="fa-solid fa-magnifying-glass"></i></p>
                <img src="projectManagerPicOutputv2.png" className="w-full rounded-lg brightness-95 "/>
                </div>
                </Link>

                <p className='text-neutral-100 text-xl font-medium'>Project Manager App</p>
                <p className='text-neutral-100 max-w-[65ch] text-lg'>A full stack project management app with real-time task tracking and project-based chat.</p>
                
                <div className='flex gap-3  flex-wrap text-sm font-medium items-center'>
                <a href="https://project-management-app-nu-ashy.vercel.app/dashboard" target='_blank' className="text-center text-base text-neutral-100 px-3 py-1.5 duration-200 border-2 border-olive-400 bg-olive-400/20 hover:bg-olive-400/40 hover:border-olive-300/90">Live site</a>
                <a href="https://github.com/BrandonLeone1/project-management-app" target='_blank' className="text-center  duration-150 text-neutral-100 hover:opacity-80">GitHub <i className="fa-brands fa-github"></i></a>
                <Link to={'project-manager'} className="text-center z-10 after:z-[-1] duration-150 text-neutral-100 hover:opacity-80 group">Case study <i className="fa-solid text-neutral-100 fa-arrow-right group-hover:translate-x-0.5 duration-150"></i></Link>
                </div>
                
                <div className='text-neutral-100 space-y-4 mt-4 max-w-[65ch] text-sm'>
                    <p className='border-l border-olive-400/30 px-2 py-1'>Real-time Firestore syncing (onSnapshot)</p>
                    <p className='border-l border-olive-400/30 px-2 py-1'>Task progress tracking with computed metrics</p>
                    <p className='border-l border-olive-400/30 px-2 py-1 hidden md:block'>Project & user-scoped chat system</p>
                </div>
                

                
                
                </div>

                
             </div>
        </>
    )
}