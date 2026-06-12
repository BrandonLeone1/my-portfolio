import { Link, useNavigate } from 'react-router';
import ReturnNavBar from '../components/ReturnNavbar'
import { useEffect, useRef } from 'react';
export default function MarketingWriteUp () {
    
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
                <p className="text-neutral-100 text-3xl font-semibold mb-2">Marketing Platform - Case Study</p>

                <div>
                <video src="FinanceFinal.mp4" loop playsInline muted controls className="rounded" ref={videoRef}/>
                </div>
                <p className="text-xl font-medium mt-12 text-neutral-100">1. The Problem</p>
                <p className="mt-6 text-neutral-100 max-w-[65ch] opacity-80">Marketing teams frequently rely on manual data exports from various platforms such as Google Ads to track campaign performance. However, these files are messy and are guaranteed to not fit the format of the rest of your data - currency symbols, metadata rows, etc. Manually cleaning this data and finding a way to organize/centralize it is difficult and introduces human error.</p>
            
                <p className="text-xl font-medium mt-12 text-neutral-100">2. Solution & Architecture</p>
                
                <div className='flex text-neutral-100 flex-col gap-6 opacity-80'>
                <p className="mt-6 max-w-[65ch]">• Frontend: PapaParse + Sanitization</p>
                <p className=" max-w-[65ch]">• API Layer: Express + Zod Schemas</p>
                <p className=" max-w-[65ch]">• Database Layer: PostgreSQL + pg-format Batch Ingest</p>
                </div>

                <p className="text-xl font-medium mt-12 text-neutral-100">3. Engineering Challenges & Deep Dives</p>
                <div className="mt-6 text-neutral-100  flex flex-col gap-4 opacity-82">
                    <p className='font-medium mt-3 text-lg'>• Third-Party File Anomalies</p>
                    <p className='ml-2'>Situation: Google Ads exports contain metadata headers at the top of the file and summary rows at the bottom, causing errors in standard parsing.</p>
                    <p className='ml-2'>Challenge: Extracting proper data dynamically without forcing the user to manually edit the CSV before upload.</p>
                    <p className='ml-2'>Solution: Implemented PapaParse's beforeFirstChunk hook to slice the file string at the exact row where the proper relational column headers begin, instantly discarding noise before parsing begins.</p>

                    <p className='font-medium mt-3 text-lg'>• Data Integrity & Security</p>
                    <p className='ml-2'>Situation: Accepting raw client-side files exposes backend routes to malicious inputs or malformed data.</p>
                    <p className='ml-2'>Challenge: Ensuring incoming data strictly match database expectations without writing unperformant code.</p>
                    <p className='ml-2'>Solution: Deployed strict Zod Schema validation at the entry point of the API route, stripping unmapped JSON attributes and ensuring numerical inputs are primitive, non-negative values before they can ever touch the database.</p>

                    <p className='font-medium mt-3 text-lg'>• Relational Batch Data Ingestion</p>
                    <p className='ml-2'>Situation: Uploading weeks of daily marketing metrics results in dozens of individual row operations that must be synchronized with the database.</p>
                    <p className='ml-2'>Challenge: Traditional loop-based updates (forEach) create N network round-trips, throttling the Express server and leaving the database vulnerable to partial data corruption if a single day fails.</p>
                    <p className='ml-2'>Solution: Consolidated data objects into an array and leveraged pg-format to issue a single SQL INSERT ... ON CONFLICT DO UPDATE query. Wrapping the execution inside explicit database transactions (BEGIN/COMMIT/ROLLBACK) reduced network overhead to a single round-trip and guaranteed absolute data consistency.</p>


                    <p className='font-medium mt-3 text-lg'>• Scalable Creative Asset Storage</p>
                    <p className='ml-2'>Situation: Marketing campaigns require tracking static creative assets (image ads) alongside financial metrics. Storing large binary files directly on the filesystem or database consumes storage, slows down server processes, and is less secure.</p>
                    <p className='ml-2'>Challenge: Implementing secure file uploads that protect asset privacy without overwhelming the Node.js server.</p>
                    <p className='ml-2'>Solution: Integrated the AWS S3 SDK to offload asset management to cloud infrastructure. Configured secure file upload streams and multi-part handling to process media files efficiently - storing the unique S3 object keys in PostgreSQL, mapped directly to their respective campaigns.</p>

                    <p className='font-medium mt-3 text-lg'>• Context-Aware Performance Summaries via OpenAI</p>
                    <p className='ml-2'>Situation: Raw dashboard metrics require manual analysis from campaign members to identify underperforming or high-performing trend lines.</p>
                    <p className='ml-2'>Challenge: Formatting raw relational data arrays into dense, contextually rich text payloads that can be interpreted accurately by large language models without exceeding token limits.</p>
                    <p className='ml-2'>Solution: Developed an internal data-formatting layer that extracts key campaign KPIs for the past 2 weeks from PostgreSQL. This structured summary is passed to the OpenAI API with strict system prompting, returning automated performance insights and trend analysis directly to the campaign dashboard.</p>
                </div>

                <p className="text-xl font-medium mt-12 text-neutral-100">4. What I Learned</p>
                <p className="mt-6 text-neutral-100 max-w-[65ch] opacity-80">Building this platform shifted my approach from writing basic application logic to thinking about data pipelines as integrated systems. I learned how to manage database transaction contexts, optimize network overhead for bulk data, and build defensive backend validation systems that protect relational integrity.</p>

                
            </div>
                

                 <div className='text-neutral-400 w-full font-medium bg-neutral-900 border-t border-neutral-800 shadow-xl backdrop-blur-sm z-20 bottom-0 p-6 text-xl'>
                    <div className='max-w-7xl mx-auto flex items-center justify-between'>
                    <p onClick={() => {
                        navigate("/#projects-section");
                        history.replaceState(null,null, ' ');
                    }} className='hover:opacity-80 cursor-pointer duration-150 group font-medium'>Back to projects</p>
                    </div>
                </div>
        </>
    )
}