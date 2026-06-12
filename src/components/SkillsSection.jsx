import { SkillsColumn } from "./SkillsColumn";

export default function SkillsSection () {
    
    const backendSkills = ["Node.js / Express", "PostgreSQL, SQL", "MongoDB", "Zod Validation", "REST APIs"];
    const frontendSkills = ["React", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS"];
    const infrastructureSkills = ["Docker", "AWS S3 (Cloud Storage)", "GitHub Actions (CI/CD)", "Git / GitHub", "Linux VPS Hosting"];
    const dataSkills = ["SQL Aggregation", "Data Visualization (Recharts)", "Excel", "Metric Tracking"];
    
    return (
        <>

        <div className="max-w-6xl mx-auto p-6 mb-24" id="skills">
            
            <p className="text-4xl text-neutral-100 font-semibold">Skills</p>
            <p className="mt-6 text-neutral-100 text-xl font-medium">Some of the technologies I've been working with:</p>
        
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-6 mt-6 gap-6">
                <SkillsColumn title={"Backend & Databases"} skillsArray={backendSkills}/>
                <SkillsColumn title={"Frontend"} skillsArray={frontendSkills}/>
                <SkillsColumn title={"Infrastructure & Tools"} skillsArray={infrastructureSkills}/>
                <SkillsColumn title={"Data & Analytics"} skillsArray={dataSkills}/>

            </div>
        </div>
        </>
    )
}