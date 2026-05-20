export default function SkillsSection () {
    return (
        <>
        <div className="max-w-6xl mx-auto p-6">
            
            <p id="skills" className="text-4xl mt-18 text-neutral-100 font-semibold">Skills</p>
            <p className="mt-6 text-neutral-100 text-xl font-medium">Some of the technologies I've been working with:</p>
        
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-6 mt-6 gap-6">
                <div className="bg-neutral-800/10 shadow-xl rounded p-6 flex flex-col gap-4 border-2 border-black/0 hover:border-olive-400 duration-150">
                    <p className="text-lg text-neutral-100 text-center font-medium">Frontend</p>
                    <ul className="text-neutral-100 space-y-1 mt-2">
                        <div className="flex items-center gap-1  text-center justify-center"><li>React</li><i className="fa-brands fa-react text-lg "></i></div>
                        <div className="flex items-center gap-1  text-center justify-center"><li>TypeScript</li></div>
                        <div className="flex items-center gap-1  text-center justify-center"><li>JavaScript (ES6+)</li></div>
                        <div className="flex items-center gap-1  text-center justify-center"><li>HTML/CSS</li></div>
                        <div className="flex items-center gap-1  text-center justify-center"><li>Tailwind CSS</li></div>
                    </ul>
                </div>

                <div className="bg-neutral-800/10 shadow-xl rounded p-6 flex flex-col gap-4 border-2 border-black/0 hover:border-olive-400 duration-150">
                    <p className="text-lg text-neutral-100 text-center font-medium">Backend & Databases</p>

                    <ul className="text-neutral-100 space-y-1 mt-2">
                       <div className="flex items-center gap-1  text-center justify-center"><li>Node.js</li><i className="fa-brands fa-node-js text-lg "></i></div>
                        <div className="flex items-center gap-1  text-center justify-center"><li>Express</li></div>
                        <div className="flex items-center gap-1  text-center justify-center"><li>PostgreSQL</li></div>
                        <div className="flex items-center gap-1  text-center justify-center"><li>SQL</li></div> 
                        <div className="flex items-center gap-1  text-center justify-center"><li>MongoDB (Mongoose)</li></div>
                        <div className="flex items-center gap-1  text-center justify-center"><li>Firebase/Firestore</li></div>
                    </ul>

                </div>

                <div className="bg-neutral-800/10 shadow-xl rounded p-6 flex flex-col gap-4 border-2 border-black/0 hover:border-olive-400 duration-150">
                    <p className="text-lg text-neutral-100 text-center font-medium">Data & Analytics</p>

                    <ul className="text-neutral-100 space-y-1 mt-2">    
                    <div className="flex items-center gap-1  text-center justify-center"><li>Data Visualization</li><i className="fa-solid fa-chart-simple text-lg "></i></div>
                    <div className="flex items-center gap-1  text-center justify-center"><li>Recharts</li></div>
                    <div className="flex items-center gap-1  text-center justify-center"><li>Excel</li></div>
                    <div className="flex items-center gap-1  text-center justify-center"><li>IBM SPSS</li></div>
                    <div className="flex items-center gap-1  text-center justify-center"><li>Qualtrics</li></div>
                    <div className="flex items-center gap-1  text-center justify-center"><li>Dashboard Development</li></div>
                    <div className="flex items-center gap-1  text-center justify-center"><li>Aggregation Queries</li></div>
                    <div className="flex items-center gap-1  text-center justify-center"><li>Reporting & Analytics</li></div>
                    
                    </ul>
                </div>

                <div className="bg-neutral-800/10 shadow-xl rounded p-6 flex flex-col gap-4 border-2 border-black/0 hover:border-olive-400 duration-150">
                    <p className="text-lg text-neutral-100 text-center font-medium">Tools</p>

                    <ul className="text-neutral-100 space-y-1 mt-2">    
                    <div className="flex items-center gap-1  text-center justify-center"><li>Git & GitHub</li><i className="fa-brands fa-github text-lg "></i></div>
                    <div className="flex items-center gap-1  text-center justify-center"><li>Vercel</li></div>
                    <div className="flex items-center gap-1  text-center justify-center"><li>pgAdmin</li></div>
                    <div className="flex items-center gap-1  text-center justify-center"><li>Postman</li></div>
                    <div className="flex items-center gap-1  text-center justify-center"><li>REST APIs</li></div>
                    <div className="flex items-center gap-1  text-center justify-center"><li>@dnd-kit</li></div>
                    <div className="flex items-center gap-1  text-center justify-center"><li>Framer Motion</li></div>
            
                    
                    </ul>
                </div>

            </div>
        </div>
        

        </>
    )
}