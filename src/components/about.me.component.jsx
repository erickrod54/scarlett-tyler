import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useAppContext } from "../context";

/*Scarlett-taylor Portfolio - version 1.09 - 
* Aboutme - Features: 
*  
*     --> Finish Building 'Aboutme' Component.
*
*     --> Destructuring data from the context  
*         
* Note: this file will be refactor
*/

const Aboutme = () => {

    const { Aboutimg } = useAppContext()
    //console.log('Aboutimg', Aboutimg)
    //console.log('Aboutimg is ==>', Aboutimg[0].aboutimg)
    //console.log('Aboutimg is ==>', Aboutimg[0].name)

    return(
        <Wrapper> 
            <div className="about-me_img">
                <img src={Aboutimg[0].aboutimg} alt={Aboutimg[0].name}/>
            </div> 
            <div className="about-me_content">
                <h2 className="about-me_content--title">
                    about me
                </h2>
                <p className="about-me_content--para">
                Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua.
                </p>
                <Link to='#' className="about-me_content--link">
                    read more
                </Link>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;

    padding: 2rem;
    background-color: var(--secondary-color);

    .about-me_img,
    .about-me_content{
        flex-basis: 40rem;
        padding: 2rem;
        flex-grow: 1;
    }

    .about-me_img img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .about-me_content--title{
        font-size: 4rem;
        padding: 1rem 0;
        color: white;
        text-transform: uppercase;

        /**position relative because the underline that
        *is a pseudo element */
        position: relative;
    }

    a{
        color: white;
        text-decoration: none;
    }

    .about-me_content--title::after{
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        height: 0.3rem;
        width: 10%;
        background-color: var(--primary-color);
    }

    .about-me_content--title,
    .about-me_content--para{
        margin-bottom: 4rem;
        letter-spacing: 0.2rem;
    }

    /**effects for the readme link */
    .about-me_content--link:link,
    .about-me_content--link:visited{
        padding: 1rem 0;
        font-size: 1.5rem;
        letter-spacing: 0.2rem;
        text-transform: uppercase;
        
        position: relative;
        z-index: 1;
    }

    .about-me_content--link::after,
    .about-me_content--link::after{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: var(--primary-color);
        transform: scaleY(0);
        transform-origin: bottom;
        transition: transform 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
        
        z-index: -1;
    }

    .about-me_content--link:hover::after,
    .about-me_content--link:active::after{
        transform: scale(1);
        transform-origin: top;
    }
`

export default Aboutme;