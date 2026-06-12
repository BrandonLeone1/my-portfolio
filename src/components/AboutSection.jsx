export default function AboutSection () {
    return (
        <>
      
      <div className="w-full bg-neutral-800/20 p-6 mt-18 "id="about">
        <div className="max-w-6xl mx-auto "  >
        <p className="text-4xl text-neutral-100 font-semibold">A little about me</p>
        
        <div className="text-neutral-100 mt-6 flex mx-auto w-fit items-center justify-center flex-col gap-6 text-base bg-neutral-800/50 p-6 shadow-xl rounded">
        <p className="max-w-[65ch]">I am a full-stack developer specializing in building data-driven web applications, secure backend systems, and analytics dashboards.</p>
        <p className="max-w-[65ch]">Leveraging a background in marketing analytics, I focus on solving structural challenges around data ingestion, data consistency, and type-safe API architecture.</p>
        <p className="max-w-[65ch]"> Recently, I've engineered solutions featuring lightweight automated data ingestion pipelines, relational database aggregation, and multi-tenant access controls using React, TypeScript, Node.js, and PostgreSQL.</p>
        <p className="max-w-[65ch]">I am actively seeking a data-focused or junior developer role where I can optimize data infrastructure and contribute to real-world products.</p>
        </div>
        </div>
    </div>
        </>
    )
}