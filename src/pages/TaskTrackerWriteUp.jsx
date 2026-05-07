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
                <a href="https://kanban-final-three.vercel.app/" target="_blank" className="text-olive-400 underline cursor-pointer hover:text-olive-500 duration-300 text-3xl font-semibold mb-2">Task Tracker - Case Study</a>
                <p className="text-neutral-100 font-medium mb-6 text-xl max-w-[65ch]">A Kanban-style task manager with drag-and-drop interactions and persistent real-time state synchronization.</p>
                <video src="taskFinal.mp4" className="rounded" loop playsInline controls muted ref={videoRef}/>
                <p className="text-xl font-medium mt-12 text-neutral-100 ">Overview</p>
                <p className="mt-6 text-neutral-100 max-w-[65ch]">A Kanban-style task management application that allows users to organize tasks across columns with drag-and-drop functionality and real-time synchronization.</p>
            
                <p className="text-xl font-medium mt-12 text-neutral-100">Why I Built This</p>
                <p className="mt-6 text-neutral-100 max-w-[65ch]">I wanted to challenge myself with more complex UI interactions, specifically drag-and-drop behavior, and understand how to persist ordering and state reliably.</p>

                <p className="text-xl font-medium mt-12 text-neutral-100">Key Features</p>
                <div className="mt-6 text-neutral-100  flex flex-col gap-4">
                    <p>1. Drag-and-drop task management across columns</p>
                    <p>2. Persistent task ordering</p>
                    <p>3. Real-time syncing across sessions</p>
                    <p>4. Task creation, editing, and deletion</p>
                    <p>5. Status-based task organization (ToDo, Started, Finished)</p>
                    <p>6. Real-time updates using Firestore</p>
                </div>

                <p className="text-xl font-medium mt-12 text-neutral-100">Technical Highlights</p>
                <div className="mt-6 text-neutral-100  flex flex-col gap-4">
                    <p>1. Implemented drag-and-drop using @dnd-kit</p>
                    <p>2. Built custom ordering logic using index positioning</p>
                    <p>3. Stored order values in the database to persist layout</p>
                    <p>4. Used Firestore onSnapshot for real-time updates</p>
                    <p>Grouped tasks dynamically by status for flexible renders</p>
                </div>

                <p className="text-xl font-medium mt-12 text-neutral-100">Challenges & Solutions</p>
                <div className="mt-6 text-neutral-100 grid grid-cols-1 md:grid-cols-2 gap-4 bg-neutral-800/50 p-6 rounded">
                
                <p><span className="font-medium text-neutral-100">Challenge:</span> Synchronizing drag-and-drop UI with real-time database updates</p>
                <p><span className="font-medium text-neutral-100">Solution:</span> Carefully coordinated UI updates with database writes to prevent visual inconsistencies</p>

                <p><span className="font-medium text-neutral-100">Challenge:</span> Maintaining consistent task order across updates</p>
                <p><span className="font-medium text-neutral-100">Solution:</span> Implemented an order-based system using index values stored in the database</p>
                </div>  
                
                <p className="text-xl font-medium mt-12 text-neutral-100">What I Learned</p>
               <div className="mt-6 text-neutral-100  flex flex-col gap-4">
                        <p>1. Handling complex UI interactions with drag-and-drop</p>
                        <p>2. Persisting UI state in a backend system</p>
                        <p>3. Managing real-time updates alongside user interactions</p>
                        <p>4. Structuring dynamic lists efficiently</p>
                </div>

               
            </div>

            <div className='text-neutral-400 w-full font-medium bg-neutral-900 border-t border-neutral-800 shadow-xl backdrop-blur-sm z-20 bottom-0 p-6 text-xl'>
                    <div className='max-w-7xl mx-auto flex items-center justify-between'>
                    <Link onClick={() => {
                        navigate("/project-manager");
                    }} className='hover:opacity-80 cursor-pointer duration-150 group'>Previous case study</Link>
                    <p onClick={() => {
                        navigate("/#projects-section");
                        history.replaceState(null,null, ' ')
                    }} className='hover:opacity-80 cursor-pointer duration-150 group'>Back to projects</p>
                    
                    </div>
            </div>

      
        </>
    )
}