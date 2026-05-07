export default function AboutSection () {
    return (
        <>
      
      <div className="w-full bg-neutral-800/20 p-6 mt-18 "id="about">
        <div className="max-w-6xl mx-auto "  >
        <p className="text-4xl text-neutral-100 font-semibold">A little about me</p>
        
        <div className="text-neutral-100 mt-6 flex mx-auto w-fit items-center justify-center flex-col gap-6 text-base bg-neutral-800/50 p-6 shadow-xl rounded">
        <p className="max-w-[65ch]">I’m a self-taught full-stack developer focused on building data-driven applications and real-time user experiences.</p>
        <p className="max-w-[65ch]">I enjoy working on problems involving data aggregation, performance optimization, and designing systems that have the potentiality to scale beyond simple apps.</p>
        <p className="max-w-[65ch]">Recently, I've built projects involving finanalcial analytics, simulated user-scoped real-time collaboration, and complex UI interactions using modern tools like React, Node.js and MongoDB.</p>
        <p className="max-w-[65ch]">I'm currently seeking an internship or junior role where I can contribute to real-world products while continuing to grow as a developer.</p>
        </div>
        </div>
    </div>
        </>
    )
}