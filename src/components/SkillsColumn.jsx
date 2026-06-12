export function SkillsColumn ({title, skillsArray}) {
    return (
        <>
        <div className="bg-neutral-800/10 shadow-xl rounded p-6 flex flex-col gap-4 border-2 border-black/0 hover:border-olive-400 duration-150">
                    <p className="text-lg text-neutral-100 text-center font-medium">{title}</p>
                    <ul className="text-neutral-100 space-y-1 mt-2 opacity-75">
                        
                        {skillsArray?.map(skill => (
                            <div key={skill} className="flex items-center gap-1  text-center justify-center"><li>{skill}</li></div>
                        ))

                        }
                    </ul>
        </div>
        </>
    )
}