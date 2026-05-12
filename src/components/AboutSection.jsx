export default function AboutSection () {
    return (
        <>
      
      <div className="w-full bg-neutral-800/20 p-6 mt-18 "id="about">
        <div className="max-w-6xl mx-auto "  >
        <p className="text-4xl text-neutral-100 font-semibold">A little about me</p>
        
        <div className="text-neutral-100 mt-6 flex mx-auto md:text-lg w-fit  items-center justify-center flex-col gap-6 bg-neutral-700/50 p-6 shadow-xl rounded">
        <p className="max-w-[65ch]">I’m a self-taught full-stack developer focused on building data-driven applications and real-time user experiences.</p>
        <p className="max-w-[65ch]">I enjoy working on problems involving data aggregation, backend performance, and designing systems that handle increasing complexity without breaking UI responsiveness.</p>
        <p className="max-w-[65ch]">Recently, I've built a financial analytics dashboard with MongoDB aggregation pipelines, a full MERN stack drag-and-drop task manager with persistent ordering logic, and a real-time project collaboratin system using Firestore.</p>
        <p className="max-w-[65ch]">I'm currently seeking an internship or junior role where I can contribute to production-level systems and continue developing my experience with scalable applications.</p>
        </div>
        </div>
    </div>
        </>
    )
}