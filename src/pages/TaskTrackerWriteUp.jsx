import { useEffect, useRef } from "react";
import ReturnNavbar from "../components/ReturnNavbar";
import {Link, useNavigate} from 'react-router-dom'

export default function TaskTrackerWriteUp () {
    
   const videoRef = useRef();

    function observerCallBack (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.play().catch(error => {})
            } else {
                entry.target.pause();
            }
        })
    }

   

   useEffect(() => {
   const observer = new IntersectionObserver(observerCallBack, {threshold: 0.2});
    if (!videoRef.current) {
            return
        }

        observer.observe(videoRef.current);
        return () => observer.disconnect()
   }, [])

   const navigate = useNavigate();
    return (
        <>
            <div className="max-w-5xl p-6 mx-auto mt-12">
                <ReturnNavbar />
                <p className=" text-neutral-100 text-3xl font-semibold mb-4">Task Tracker - Case Study</p>
                <p className="text-neutral-100 font-medium mb-3 text-xl max-w-[65ch] mt-2">A full-stack Kanban-style task management application built with React, Express, MongoDB, and @dnd-kit.</p>
                
                <div className="flex gap-4 text-olive-400 mb-6 text-sm">
                <a href="https://task-tracker-full-stack-psi.vercel.app/" target="_blank" className="underline hover:opacity-80 duration-150 group">Live site <i className="fa-solid fa-arrow-right duration-150 group-hover:translate-x-0.5"></i></a>
                <a className="underline hover:opacity-80 duration-150 group" href="https://github.com/BrandonLeone1/Task-Tracker-Full-Stack" target="_blank" >GitHub <i className="fa-solid fa-arrow-right duration-150 group-hover:translate-x-0.5"></i></a>
                </div>
                <video src="kanbanv2.mp4" className="rounded" loop playsInline controls muted ref={videoRef}/>
                <p className="text-xl font-medium mt-12 text-neutral-100 ">Overview</p>
                <p className="mt-6 text-neutral-100 max-w-[65ch]">A Kanban-style task management application that allows users to organize tasks across columns with drag-and-drop functionality and real-time synchronization.</p>
            
                <p className="text-xl font-medium mt-12 text-neutral-100">Why I Built This</p>
                <p className="mt-6 text-neutral-100 max-w-[65ch]">I wanted to challenge myself with more advanced frontend state management and drag-and-drop interactions while learning how to persist complex UI behavior reliably in a backend database.</p>
                <p className="mt-6 text-neutral-100 max-w-[65ch]">This project pushed me to think carefully about various concepts such as:</p>
                
                <div className="flex flex-col gap-2 mt-6 text-neutral-100">
                <p>• State synchronization</p>
                <p>• Optimistic UI updates</p>
                <p>• Ordering system</p>
                <p>• Cross-column drag behavior</p>
                <p>• Backend consistency</p>
                </div>

                <p className="text-xl font-medium mt-12 text-neutral-100">Key Features</p>
                <div className="mt-6 text-neutral-100  flex flex-col gap-4">
                    <p>• Authentication with protected routes</p>
                    <p>• Create, edit, delete boards</p>
                    <p>• Drag-and-drop interactions</p>
                    <p>• Cross-column task movement</p>
                    <p>• Persistent task ordering</p>
                    <p>• Optimistic UI updates</p>
                    <p>• Responsive UI with Tailwind CSS</p>
                    <p>• Bulk MongoDB updates via bulkWrite</p>
                </div>

                <p className="text-xl font-medium mt-12 text-neutral-100">Technical Highlights</p>
                <div className="mt-6 text-neutral-100  flex flex-col gap-4">
                    <p className="text-lg">Drag-and-Drop System</p>
                    <p>• Implemented a full Kanban dnd workflow using @dnd-kit</p>
                    <p>• Built custom logic for:</p>
                    <p className="ml-5">- Reordering tasks within columns</p>
                    <p className="ml-5">- Moving tasks across columns</p>
                    <p className="ml-5">- Dynamically recalculating order values</p>
                    <p className="ml-5">- Maintaining stable UI state</p>

                    <p className="text-lg mt-4">Optimistic Updates</p>
                    <p>• The UI updates immediately before backend confirmation for smoother interactions, specifically around task reodering and reclassifying</p>
                    <p>• Implemented rollback handling to restore previous state if an API request fails</p>
                
                    <p className="text-lg mt-4">Bulk Database Updates</p>
                    <p>• Used mongoDB bulkWrite operations to efficiently update multiple tasks at once after drag operations</p>

                    <p className="text-lg mt-4">Authentication & Route Protection</p>
                    <p>• Implemented JWT-based authentication and protected frontend routes to restrict access to only authenticated users</p>
                </div>

                <p className="text-xl font-medium mt-12 text-neutral-100">Challenges & Solutions</p>
                <div className="mt-6 text-neutral-100 grid grid-cols-1 md:grid-cols-2 gap-4 bg-neutral-800/50 p-6 rounded">
                
                <p><span className="font-medium text-neutral-100">Challenge:</span> Cross-column drag operations occasionally caused unrelated tasks to swap order</p>
                <p><span className="font-medium text-neutral-100">Solution:</span> Refactored ordering logic so only affected columns recalculated their order values while the untouched column indexes stay the same</p>

                <p><span className="font-medium text-neutral-100">Challenge:</span> Keeping drag interactions responsive while persisting updates to MongoDB</p>
                <p><span className="font-medium text-neutral-100">Solution:</span> Implemented optimistic state updates with fallback rollback behavior if requests fail</p>
                </div>  
                
                <p className="text-xl font-medium mt-12 text-neutral-100">What I Learned</p>
               <div className="mt-6 text-neutral-100  flex flex-col gap-4">
                        <p>• Advanced drag-and-drop state management</p>
                        <p>• Designing persistent ordering systems</p>
                        <p>• Managing optimistic UI updates</p>
                        <p>• Bulk updating MongoDB documents</p>
                        <p>• Structuring scalable React state</p>
                        <p>• Coordinating frontend interactions with backend persistence</p>
                        <p>• Handling edge cases in dynamic list rendering</p>
                </div>

                 <p className="text-xl font-medium mt-12 text-neutral-100">Earlier Iteration</p>
                 
                 <div className="mt-6 flex flex-col gap-4 mb-4 text-neutral-100">
                 <p >Before Before building this version, I created an earlier Firebase-based Kanban application focused on real-time syncing and drag-and-drop fundamentals. This rebuilt version expanded the project into a full-stack architecture with custom backend APIs, JWT authentication, MongoDB persistence, more advanced ordering logic, and a more scalable structure.</p>
                 <a href="https://github.com/BrandonLeone1/kanban-final" target="_blank" className="underline hover:opacity-80 duration-150 text-sm group">View old repo (v1) <i className="fa-solid group-hover:translate-x-0.5 duration-150 fa-arrow-right"></i></a>
                </div>
            </div>

            <div className='text-neutral-400 w-full font-medium bg-neutral-900 border-t border-neutral-800 shadow-xl backdrop-blur-sm z-20 bottom-0 p-6 text-xl'>
                    <div className='max-w-7xl mx-auto flex items-center justify-between'>
                    <Link onClick={() => {
                        navigate("/financial-tracker");
                    }} className='hover:opacity-80 cursor-pointer duration-150 group'>Previous</Link>
                    <p onClick={() => {
                        navigate("/project-manager");
                    }} className='hover:opacity-80 cursor-pointer duration-150 group'>Next</p>
                    
                    </div>
            </div>

      
        </>
    )
}