import React from "react";
import styled from "styled-components";
import { Aboutme, Contact, Hero, Navbar, Skills, SocialSidebar, Testimonials, Work } from "../components/index.components";

/*Scarlett-taylor Portfolio - version 1.06 - 
*HomePage - Features: 
*  
*     --> Uncommenting 'Hero' to start to
*         work on it.
*
*     --> Building 'home-content' to style 
*        'hero' in relation with 'Navbar'
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
            </div>
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

    .home-content{
        display: flex;
        flex-direction: column;
    }

    display: flex;  
    
   
`

export default HomePage;