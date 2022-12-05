import React from "react";
import { Aboutme, Contact, Hero, Navbar, Skills, SocialSidebar, Testimonials, Work } from "../components/index.components";



const HomePage = () => {

    return(
        <>
            <Navbar />
            <Hero />
            <SocialSidebar />
            <Work />
            <Aboutme />
            <Skills />
            <Testimonials />
            <Contact />    
        </>
    )
}

export default HomePage;