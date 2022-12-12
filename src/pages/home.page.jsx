import React from "react";
import styled from "styled-components";
import { Aboutme, Contact, Hero, Navbar, Skills, SocialSidebar, Testimonials, Work } from "../components/index.components";

/*Scarlett-taylor Portfolio - version 1.05 - 
*HomePage - Features: 
*  
*     --> Reseting 'ui white space' and 
*         displaying 'flex'.
*
* Note: this file will be refactor
*/


const HomePage = () => {

    return(
        <>
        <Wrapper>
            <SocialSidebar />
            <Navbar />
           {/** <Hero /> */}
            {/** <Work />
            <Aboutme />
            <Skills />
            <Testimonials />
            <Contact />*/}    
        </Wrapper>
        </>
    )
}

const Wrapper = styled.div`
    *{
        margin: 0;
        padding: 0;
    }
    
    display: flex;
    
   
`

export default HomePage;