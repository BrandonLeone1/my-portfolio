import { useState } from 'react'
import {Link, ScrollRestoration} from 'react-router-dom'

export default function ProjectsSection () {

    

    return (
        <>
    
            <div className="max-w-7xl mx-auto p-6 mt-44" id='projects-section'>

                <div className="flex flex-col gap-4" >
                <p className="text-neutral-100 text-4xl font-semibold">Projects</p>
            
                <p className="text-neutral-100 font-medium text-xl max-w-[65ch]">Full-stack applications engineered around real-world constraints. Prioritizing data integrity, performance optimization, and secure system architecture.
                </p>
                
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] bg-neutral-800/50 lg:min-h-120 lg:place-items-center gap-6 p-6 rounded mt-18">
                    <div className="flex flex-col gap-4 order-2">
                        <p className="text-neutral-100 text-2xl font-medium">Collaborative Marketing Operations Platform</p>
                        <p className="text-neutral-100 max-w-[65ch] text-lg">A full-stack, multi-tenant B2B SaaS platform designed to aggregate marketing campaign data, run automated lightweight data ingestion pipelines for third-party ad exports, and render performance charts.</p>

                        
                         <div className='gap-3 flex-wrap flex items-center font-medium text-sm '>
                                <a href="https://financial-tracker-sage.vercel.app/" target='_blank' className="text-center text-base text-neutral-100 z-10 after:z-[-1] px-3 py-1.5  after:content-[''] after:w-full after:bg-olive-400 duration-300 border-2 border-olive-400 after:h-0 hover:after:h-full after:duration-300 after:block relative after:absolute after:bottom-0 after:left-0 hover:text-neutral-900 bg-olive-400/20">Live site</a>
                                <a href="https://github.com/BrandonLeone1/Marketing-Software" target='_blank' className="text-center duration-300 text-neutral-100 hover:text-olive-400">GitHub <i className="fa-brands fa-github"></i></a>
                                <Link to={'/marketing-project'} className="text-center underline duration-300 text-neutral-100 group hover:opacity-80">Case study <i className="fa-solid text-neutral-100 fa-arrow-right group-hover:translate-x-0.5 duration-300"></i></Link>
                        </div>
                        
                        <div className='text-neutral-100 space-y-4 mt-4 max-w-[65ch]'>
                            <p className='border-l border-olive-400/30 py-1 px-2'>Developed a data ingestion pipeline using PapaParse and custom regex to automatically sanitize, remove currency symbols from, and map raw Google Ads CSV exports into structured JSON.</p>
                            <p className='border-l border-olive-400/30 py-1 px-2'>Engineered a <span className='italic'>bulk-ingestion backend</span> using Node.js and pg-format. Implemented UPSERT logic, wrapped inside database transactions to ensure data validity.</p>
                            <p className='border-l border-olive-400/30 py-1 px-2 hidden md:block'>Integrated AWS S3 SDK for secure digital asset management via presigned URL upload streams to handle marketing creative files (A/B tests) efficiently.</p>
                            <p className='border-l border-olive-400/30 py-1 px-2 hidden md:block'>Integrated the OpenAI API to analyze database metrics dynamically, generating automated text summaries of campaign performance trends and recommended next steps.</p>
                            <p className='border-l border-olive-400/30 py-1 px-2 hidden md:block'>Containerized the application backend using Docker Compose and implemented continuous deployment workflows to a secure Linux VPS via GitHub Actions.</p>
                        </div>

                    </div>
                    
                    <div className='lg:order-2'>
                        <Link 
                        to="/marketing-project" >
                        <div className="after:content-[''] group after:bg-black/80 after:backdrop-blur-[1px] after:h-full after:opacity-0 hover:after:opacity-100 items-center justify-center flex after:duration-300 after:w-full after:block relative after:absolute after:inset-0">
                        
                    <p className='text-neutral-100 text-center absolute z-10 text-lg  cursor-pointer duration-150 origin-bottom overflow-hidden opacity-0 -translate-y-5 group-hover:opacity-100 group-hover:translate-y-0'>View case study <i className="fa-solid fa-magnifying-glass"></i></p>
                        <img src="SQLPICOUTPUT.png" className="rounded-lg w-full brightness-95 " alt='View of my marketing project campaign dashboard'/>
                        </div>

                        </Link> 

                    </div>

              
                </div>

                </div>
            </div>
        </>
    )
}