import { Link, useNavigate } from 'react-router';
import ReturnNavBar from '../components/ReturnNavbar'
import { useEffect, useRef } from 'react';
export default function FinancialTrackerWriteUp () {
    
const videoRef = useRef();  

function observerCallback (entries, observer) {
    entries.forEach(entry => {
        
        if (entry.isIntersecting) {
         
            entry.target.play().catch(error => {});
        } else {
            entry.target.pause();
        }
    })
}


useEffect(() => {

const observer = new IntersectionObserver(observerCallback, {threshold: 0.2})
    if (!videoRef.current) {
        return
    }

    observer.observe(videoRef.current)

    return () => observer.disconnect()
    
},[])

const navigate = useNavigate();

    return (
        <>
     
            <div className="max-w-5xl p-6 mx-auto mt-12">
                <ReturnNavBar />
                <a href="https://financial-tracker-sage.vercel.app/" target='_blank' className="text-olive-400 underline hover:text-olive-500 duration-300 cursor-pointer text-3xl font-semibold mb-4">Financial Tracker - Case Study</a>
                <p className='text-neutral-100 font-medium text-xl mb-6 max-w-[65ch] mt-2'>A full-stack finance dashboard focused on real-time analytics, performance, and scalable data handling.</p>
                <div>
                <video src="FinanceFinal.mp4" loop playsInline muted controls className="rounded" ref={videoRef}/>
                </div>
                <p className="text-xl font-medium mt-12 text-neutral-100">Overview</p>
                <p className="mt-6 text-neutral-100 max-w-[65ch] ">Finance Tracker is a full-stack web application designed to help users manage their income, expenses, and budgets through a centralized dashboard. It provides real-time insights into spending habits, category breakdowns, and budget usage</p>
            
                <p className="text-xl font-medium mt-12 text-neutral-100">Why I Built This</p>
                <p className="mt-6 text-neutral-100 max-w-[65ch]">I wanted to build a more advanced, real-world application that goes beyond basic CRUD functionality. My goal was to work with financial data, build a custom backend, and handle more complex logic like aggregation, analytics, and performance optimizations.</p>

                <p className="text-xl font-medium mt-12 text-neutral-100">Key Features</p>
                <div className="mt-6 text-neutral-100  flex flex-col gap-4">
                    <p>1. Full CRUD transaction system (income & expenses)</p>
                    <p>2. Category-based budgeting with usage tracking</p>
                    <p>3. Budget insights (percentage used, remaining, over budget categorization)</p>
                    <p>4. Data visualization (income & expense breakdown charts)</p>
                    <p>5. Weekly & monthly expense tracking</p>
                    <p>6. Expense comparisons (current vs. previous week, current vs. previous month</p>
                    <p>7. Secure authentication using JWT and authentication headers</p>
                </div>

                <p className="text-xl font-medium mt-12 text-neutral-100">Technical Highlights</p>
                <div className="mt-6 text-neutral-100  flex flex-col gap-4">
                    <p>1. Built a REST API using Node.js and Express</p>
                    <p>2. Used MongoDB aggregation pipelines to calculate totals and group + sum financial data</p>
                    <p>3. Optimized data lookup from poor performance to O(n) using object maps</p>
                    <p>4. Implemented derived state for financial metrics instead of storing redundant data</p>
                    <p>5. Structured backend routes for scalable, user-isolated data handling</p>
                </div>

                <p className="text-xl font-medium mt-12 text-neutral-100">Challenges & Solutions</p>
                <div className="mt-6 text-neutral-100 grid grid-cols-1 md:grid-cols-2 gap-4 bg-neutral-800/50 p-6 rounded">
                
                <p><span className="font-medium text-neutral-100">Challenge:</span> Efficiently combining budget limits with aggregated expense data</p>
                <p><span className="font-medium text-neutral-100">Solution:</span> Aggregated expenses by category in MongoDB and merged results with budget data on the backend before sending to the client</p>

                <p><span className="font-medium text-neutral-100">Challenge:</span> Performance issues from nested loops when mapping budget data</p>
                <p><span className="font-medium text-neutral-100">Solution:</span> Replaced nested for loops with a map based lookup structure, reducing complexity from O(n^2) to O(n)</p>

                <p><span className="font-medium text-neutral-100">Challenge:</span> Handling edge cases such as division by zero or missing data</p>
                <p><span className="font-medium text-neutral-100">Solution:</span> Added safeguards for calcualations and default values to prevent NaN errors and UI crashes</p>
                </div>  
                
                <p className="text-xl font-medium mt-12 text-neutral-100">What I Learned</p>
               <div className="mt-6 text-neutral-100  flex flex-col gap-4">
                        <p>1. How to design and structure a full backend API</p>
                        <p>2. Working with MongoDB aggregation for real-world data problems</p>
                        <p>3. Performance optimization in frontend data handling</p>
                        <p>4. Managing complex UI state across dashboard and visualizations</p>
                </div>
                
            </div>
                

                 <div className='text-neutral-400 w-full font-medium bg-neutral-900 border-t border-neutral-800 shadow-xl backdrop-blur-sm z-20 bottom-0 p-6 text-xl'>
                    <div className='max-w-7xl mx-auto flex items-center justify-between'>
                    <p onClick={() => {
                        navigate("/#projects-section");
                        history.replaceState(null,null, ' ');
                    }} className='hover:opacity-80 cursor-pointer duration-150 group font-medium'>Back to projects</p>
                    <Link className="hover:opacity-80 cursor-pointer duration-150 group font-medium" to={`/project-manager`}>Next case study</Link>
                    </div>
                </div>
        </>
    )
}