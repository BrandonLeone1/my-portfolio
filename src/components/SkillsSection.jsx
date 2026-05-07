export default function SkillsSection () {
    return (
        <>
        <div className="max-w-5xl mx-auto p-6" id="skills">
            <p className="text-4xl mt-18 text-neutral-100 font-semibold">Skills</p>
            <p className="mt-6 text-neutral-100 text-xl font-medium">Some of the technologies I've been working with:</p>
        
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-6 mt-6 gap-6">
                <div className="bg-neutral-800/50 shadow-xl rounded p-6 flex flex-col gap-4 hover:-translate-y-1 duration-300">
                    <p className="text-lg text-neutral-100 text-center">Frontend</p>
                    <ul className="text-neutral-100 space-y-1 mt-2">
                        <div className="flex items-center gap-1 hover:text-olive-400 duration-300 text-center justify-center"><li>React</li><i className="fa-brands fa-react text-lg "></i></div>
                        <div className="flex items-center gap-1 hover:text-olive-400 duration-300 text-center justify-center"><li>JavaScript (ES6+)</li><i className="fa-brands fa-square-js text-lg "></i></div>
                        <div className="flex items-center gap-1 hover:text-olive-400 duration-300 text-center justify-center"><li>HTML, CSS</li><i className="fa-regular fa-file-code text-lg "></i></div>
                        <div className="flex items-center gap-1 hover:text-olive-400 duration-300 text-center justify-center"><li>Tailwind CSS</li><i className="fa-brands fa-tailwind-css text-lg "></i></div>
                    </ul>
                </div>

                <div className="bg-neutral-800/50 shadow-xl hover:-translate-y-1 duration-300 rounded p-6 flex flex-col gap-4">
                    <p className="text-lg text-neutral-100 text-center">Backend/BaaS</p>

                    <ul className="text-neutral-100 space-y-1 mt-2">
                       <div className="flex items-center gap-1 hover:text-olive-400 duration-300 text-center justify-center"><li>Node.js</li><i className="fa-brands fa-node-js text-lg "></i></div>
                        <div className="flex items-center gap-1 hover:text-olive-400 duration-300 text-center justify-center"><li>Express</li><i className="fa-solid fa-server text-lg "></i></div>
                         <div className="flex items-center gap-1 hover:text-olive-400 duration-300 text-center justify-center"><li>MongoDB (Mongoose)</li><i className="fa-brands fa-mdb text-lg "></i></div>
                        <div className="flex items-center gap-1 hover:text-olive-400 duration-300 text-center justify-center"><li>Firebase</li><i className="fa-solid fa-fire text-lg "></i></div>
                    </ul>

                </div>

                <div className="bg-neutral-800/50 shadow-xl hover:-translate-y-1 duration-300 rounded p-6 flex flex-col gap-4">
                    <p className="text-lg text-neutral-100 text-center">Tools & Libraries</p>

                    <ul className="text-neutral-100 space-y-1 mt-2">    
                    <div className="flex items-center gap-1 hover:text-olive-400 duration-300 text-center justify-center"><li>Git & GitHub</li><i className="fa-solid fa-code-branch text-lg "></i></div>
                    <li className="hover:text-olive-400 duration-300 text-center justify-center">Vercel</li>
                    <div className="flex items-center gap-1 hover:text-olive-400 duration-300 text-center justify-center"><li>Recharts</li><i className="fa-solid fa-chart-simple text-lg "></i></div>
                    <div className="flex items-center gap-1 hover:text-olive-400 duration-300 text-center justify-center"><li>@dnd-kit</li><i className="fa-solid fa-hand-fist text-lg "></i></div>
                    <li className="hover:text-olive-400 duration-300 text-center justify-center">Framer Motion</li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}