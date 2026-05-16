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
                <p className="text-neutral-100 text-3xl font-semibold mb-4">Financial Analytics Platform - Case Study</p>
                <p className='text-neutral-100 font-medium text-xl mb-3 max-w-[65ch] mt-2'>Full-stack finance dashboard built to handle real-time transaction tracking, MongoDB aggregation pipelines, and performance-heavy data visualization.</p>
                
                <div className="flex gap-4 text-olive-400 mb-6 text-sm">
                <a href="https://sql-finance-analytics-platform.vercel.app/" target="_blank" className="hover:opacity-80 duration-150 group">Live site <i className="fa-solid fa-arrow-right duration-150 group-hover:translate-x-0.5"></i></a>
                <a className="hover:opacity-80 duration-150 group" href="https://github.com/BrandonLeone1/SQL-Finance-Analytics-Platform" target="_blank" >GitHub <i className="fa-solid fa-arrow-right duration-150 group-hover:translate-x-0.5"></i></a>
                </div>

                <div>
                <video src="SQLFINAL.mp4" loop playsInline muted controls className="rounded" ref={videoRef}/>
                </div>
                
                <p className="text-xl font-medium mt-12 text-neutral-100">Overview</p>
                <p className="mt-6 text-neutral-100 max-w-[65ch] ">This project is a full-stack financial analytics system designed to help users track spending, manage budgets, and analyze financial behavior through structured data aggregation and visualization.</p>
                <p className="mt-2 text-neutral-100 max-w-[65ch]">The goal was to move beyond CRUD applications and build a system where backend data modeling and aggregation logic directly power frontend insights.</p>
                
                <p className="text-xl font-medium mt-12 text-neutral-100">Problem</p>
                <p className="mt-6 text-neutral-100 max-w-[65ch]">Most personal finance apps either:</p>
                <p className="mt-3 text-neutral-100 max-w-[65ch] ml-2">• Store data but rely heavily on frontend calculations, or</p>
                <p className="mt-3 text-neutral-100 max-w-[65ch] ml-2">• Lack efficient aggregation of financial insights</p>

                <p className="text-xl font-medium mt-12 text-neutral-100">Solution</p>
                <p className="mt-6 text-neutral-100 max-w-[65ch]">I designed a system where:</p>
                <p className="mt-3 text-neutral-100 max-w-[65ch] ml-2">• PostgreSQL handles structured financial storage</p>
                <p className="mt-3 text-neutral-100 max-w-[65ch] ml-2">• All aggregations are performed at the SQL layer</p>
                <p className="mt-3 text-neutral-100 max-w-[65ch] ml-2">• The frontend only renders derived results</p>
                <p className="mt-3 text-neutral-100 max-w-[65ch] ml-2">• Authentication isolates all user data at the database level</p>
                
                <p className="text-xl font-medium mt-12 text-neutral-100">Database Design</p>
                <p className="mt-6 text-neutral-100 max-w-[65ch]">The system uses a relational model:</p>
                <p className="mt-3 text-neutral-100 max-w-[65ch] ml-2">• Users own transactions and budgets</p>
                <p className="mt-3 text-neutral-100 max-w-[65ch] ml-2">• Transactions are categorized by income/expense</p>
                <p className="mt-3 text-neutral-100 max-w-[65ch] ml-2">• Budgets have category-based limits</p>
                <p className="mt-3 text-neutral-100 max-w-[65ch]">This allows direct JOIN-based analytics between budgets and spending.</p>
                
                <p className="text-xl font-medium mt-12 text-neutral-100">Key Engineering Descisions</p>
                <div className="mt-6 text-neutral-100  flex flex-col gap-4">
                    <p className='mt-6'>1. Moving aggregation to SQL</p>
                    <p>Instead of computing totals in React:</p>
                    <p className='ml-2'>• SQL handles grouping and summing</p>
                    <p className='ml-2'>• Backend returns pre-processed results</p>

                    <p>Impact:</p>
                    <p className='ml-2'>• Reduced frontend complexity</p>
                    <p className='ml-2'>• Improved performance</p>
                    <p className='ml-2'>• More scalable architecture</p>
                
                    <p className='mt-6'>2. Budget vs Spending computation via JOINs</p>
                    <p>Instead of multiple API calls:</p>
                    <p className='ml-2'>• Budgets are LEFT JOINed with transactions</p>
                    <p className='ml-2'>• Grouped by category</p>
                    <p className='ml-2'>• Summed server-side</p>
                    <p>This enables real-time biudget utilization tracking.</p>
                
                </div>

                <p className="text-xl font-medium mt-12 text-neutral-100">UI & Data Flow</p>
                <div className="mt-6 text-neutral-100  flex flex-col gap-4">
                    <p>1. User logs in (JWT session)</p>
                    <p>2. Transactins + budgets fetched</p>
                    <p>3. Backend aggregates</p>
                    <p className='ml-2'>• Totals</p>
                    <p className='ml-2'>• Category breakdowns</p>
                    <p className='ml-2'>• Time-based trends</p>
                    <p>4. Frontend renders charts + budget cards</p>
                    
                </div>

                <p className="text-xl font-medium mt-12 text-neutral-100">Performance Improvements</p>
                <div className="mt-6 text-neutral-100 grid grid-cols-1 md:grid-cols-2 gap-4 bg-neutral-800/50 p-6 rounded">
                
                <p>• Eliminated client-side nested loops for aggregation</p>
                <p>• Replaced with SQL GROUP BY operations</p>
                <p>• Reduced frontend computation overhead</p>
                <p>• Centralized business logic in backend</p>
                </div>  
                
                <p className="text-xl font-medium mt-12 text-neutral-100">What I Learned</p>
               <div className="mt-6 text-neutral-100  flex flex-col gap-4">
                        <p>• How relational databases outperform naive client aggregation</p>
                        <p>• Writing real-world SQL beyond basic CRUD</p>
                        <p>• Structuring backend systems for analytics workloads</p>
                        <p>• Designing dashboards based on derived data rather than stored state</p>
                </div>
                
            </div>
                

                 <div className='text-neutral-400 w-full font-medium bg-neutral-900 border-t border-neutral-800 shadow-xl backdrop-blur-sm z-20 bottom-0 p-6 text-xl'>
                    <div className='max-w-7xl mx-auto flex items-center justify-between'>
                    <p onClick={() => {
                        navigate("/#projects-section");
                        history.replaceState(null,null, ' ');
                    }} className='hover:opacity-80 cursor-pointer duration-150 group font-medium'>Back to projects</p>
                    <Link className="hover:opacity-80 cursor-pointer duration-150 group font-medium" to={`/task-tracker`}>Next</Link>
                    </div>
                </div>
        </>
    )
}