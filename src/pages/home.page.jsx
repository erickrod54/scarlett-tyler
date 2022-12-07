import React from "react";
import { Aboutme, Contact, Hero, Navbar, Skills, SocialSidebar, Testimonials, Work } from "../components/index.components";

/*Scarlett-taylor Portfolio - version 1.01 - 
*HomePage - Features: 
*  
*     --> Commenting Components to 
*         start working in the SocialSidebar.
*
* Note: this file will be refactor
*/


const HomePage = () => {

    return(
        <>
            {/**<Navbar />
            <Hero /> */}
            <SocialSidebar />
            {/** <Work />
            <Aboutme />
            <Skills />
            <Testimonials />
            <Contact />*/}    
        </>
    )
}

export default HomePage;