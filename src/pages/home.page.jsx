import React from "react";
import styled from "styled-components";
import { Aboutme, Contact, Hero, Navbar, Services, Skills, SocialSidebar, Testimonials, Work } from "../components/index.components";

/*Scarlett-taylor Portfolio - version 2.03 - 
*HomePage - Features: 
*  
*     --> Uncommenting 'Contact' to start to
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
            <Aboutme />
            <Services />
            <Skills />
            <Testimonials />
            <Contact />
            </div>    
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