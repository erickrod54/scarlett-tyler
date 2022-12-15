import React from "react";
import styled from "styled-components";
import { Aboutme, Contact, Hero, Navbar, Skills, SocialSidebar, Testimonials, Work } from "../components/index.components";

/*Scarlett-taylor Portfolio - version 1.07 - 
*HomePage - Features: 
*  
*     --> Uncommenting 'Work' to start to
*         work on it.
*
* Note: this file will be refactor
*/


const HomePage = () => {

    return(
        <>
        <Wrapper>
            <SocialSidebar />
            <div className="home-content">
            <Navbar />
            <Hero />
            <Work />
            </div>
            {/** <Aboutme />
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

    .home-content{
        display: flex;
        flex-direction: column;
    }

    display: flex;  
    
   
`

export default HomePage;