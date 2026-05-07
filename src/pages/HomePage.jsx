import AboutSection from '../components/AboutSection'
import ContactSection from '../components/ContactSection'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/NavBar'
import ProjectsSection from '../components/ProjectsSection'
import SkillsSection from '../components/SkillsSection'
import { useLocation } from "react-router-dom";
import { useEffect } from "react";


export default function HomePage () {
    
    

    return (
        <>

        
            <Navbar />
            <HeroSection />
            <ProjectsSection />
            <AboutSection />
            <SkillsSection />
            <ContactSection />
        </>
    )
}