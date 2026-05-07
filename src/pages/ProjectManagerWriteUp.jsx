import { useEffect, useRef } from "react";
import ReturnNavbar from "../components/ReturnNavbar";
import { Link, useNavigate } from "react-router";
export default function ProjectManagerWriteUp () {
    
    const videoRef = useRef();

    function observerCallBack (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.play().catch(error => {});
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
    },[])

    const navigate = useNavigate();
    
    return (
        <>
            <div className="max-w-5xl p-6 mx-auto mt-12">
                <ReturnNavbar />
                <a href="https://project-management-app-nu-ashy.vercel.app/dashboard" target="_blank" className="text-olive-400 underline hover:text-olive-500 duration-300 cursor-pointer text-3xl font-semibold mb-4">Project Manager - Case Study</a>
                <p className="text-neutral-100 font-medium mb-6 text-xl max-w-[65ch]">A real-time project management tool with task tracking and team communication, built to simulate a lightweight SaaS workflow.</p>
                <video src="pManagerFinal.mp4" className="rounded" muted playsInline controls loop ref={videoRef}/>
                <p className="text-xl font-medium mt-12 text-neutral-100">Overview</p>
                <p className="mt-6 text-neutral-100 max-w-[65ch]">A full-stack project management application that allows users to create projects, manage tasks, track progress, and communicate through a built-in chat system.</p>
            
                <p className="text-xl font-medium mt-12 text-neutral-100 ">Why I Built This</p>
                <p className="mt-6 text-neutral-100 max-w-[65ch]">I wanted to simulate a real-world producitivty tool and learn how to manage complex state across multiple features, while also working with real-time data synchronization.</p>

                <p className="text-xl font-medium mt-12 text-neutral-100">Key Features</p>
                <div className="mt-6 text-neutral-100  flex flex-col gap-4">
                    <p>1. Create delete and edit projects</p>
                    <p>2. Task management with completion tracking</p>
                    <p>3. Progress metrics and completion percentages</p>
                    <p>4. Project-specific chat system</p>
                    <p>5. Dashboard with activity insights</p>
                    <p>6. Real-time updates using Firestore</p>
                </div>

                <p className="text-xl font-medium mt-12 text-neutral-100">Technical Highlights</p>
                <div className="mt-6 text-neutral-100  flex flex-col gap-4">
                    <p>1. Used Firebase Firestore for real-time database syncing (onSnapshot)</p>
                    <p>2. Designed user-scoped data structure for scalability and security</p>
                    <p>3. Built reusable components for projects, tasks, and chat</p>
                    <p>4. Computed progress metrics dynamically instead of storing them</p>
                </div>

                <p className="text-xl font-medium mt-12 text-neutral-100">Challenges & Solutions</p>
                <div className="mt-6 text-neutral-100 grid grid-cols-1 md:grid-cols-2 gap-4 bg-neutral-800/50 p-6 rounded">
                
                <p><span className="font-medium text-neutral-100">Challenge:</span> Managing complex UI state across projects, tasks, and chat</p>
                <p><span className="font-medium text-neutral-100">Solution:</span> Broke state into smaller, focused pieces and relied on derived values to reduce duplication and redundancy</p>

                <p><span className="font-medium text-neutral-100">Challenge:</span> Structuring Firestore collections efficiently</p>
                <p><span className="font-medium text-neutral-100">Solution:</span> Organized data by user and project to allow scalable querying and clear data boundaries</p>
                </div>  
                
                <p className="text-xl font-medium mt-12 text-neutral-100">What I Learned</p>
               <div className="mt-6 text-neutral-100  flex flex-col gap-4">
                        <p>1. Real-time data synchronization patterns</p>
                        <p>2. Structuring scalable frontend architecture</p>
                        <p>3. Managing multiple interconnected features in one app</p>
                        <p>4. Designing systems closer to real SaaS products</p>
                </div>

            </div>

            <div className='text-neutral-400 w-full font-medium bg-neutral-900 border-t border-neutral-800 shadow-xl backdrop-blur-sm z-20 bottom-0 p-6 text-xl'>
                    <div className='max-w-7xl mx-auto flex items-center justify-between'>
                    <Link onClick={() => {
                        navigate("/financial-tracker");
                    }} className='hover:opacity-80 cursor-pointer duration-150 group'>Previous case study</Link>
                    
                    <Link className="hover:opacity-80 cursor-pointer duration-150 group" to={`/task-tracker`}>Next case study</Link>
                    </div>
            </div>


            
        </>
    )
}