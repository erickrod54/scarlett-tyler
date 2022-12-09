import React from "react";
import { Aboutme, Contact, Hero, Navbar, Skills, SocialSidebar, Testimonials, Work } from "../components/index.components";

/*Scarlett-taylor Portfolio - version 1.03 - 
*HomePage - Features: 
*  
*     --> Uncommenting 'Navbar' to start to 
*         work on it.
*
* Note: this file will be refactor
*/


const HomePage = () => {

    return(
        <>
            <Navbar />
           {/** <Hero /> */}
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