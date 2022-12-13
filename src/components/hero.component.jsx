import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { herofullimage } from "../assets/assets.index";

 /**
 * Scarlett-taylor portfolio - version 1.07 - Hero -
 * Features:
 *
 *      ---> Building 'hero'
 * 
 *      --> Building effects and animations
 * 
 * Note: this file is going to be added more data
 * 
 * * */

const Hero = () => {

    return(
        <Wrapper>
            <section className="showcase">
                <div className="showcase_content">
                    <h1 className="showcase_content--title">scarlet tyler</h1>
                    <p className="showcase_content--para">UX designer / frontend developer</p>
                    <Link to='#' className="showcase_content--link">my work</Link>
                </div>
            </section>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    .showcase{
        height: 100vh;
        background-image: url(${herofullimage}) ;
        background-size: cover;
        background-position: center;
        background-attachment: fixed;

        display: flex;
        justify-content: flex-start;
        align-items: center;

        .showcase_content{
            background-color: var(--secondary-color-m);
            padding: calc(1rem + 2vw);
            height: calc(5rem + 20vmax);

            display: flex;
            flex-direction: column;
            justify-content: space-between;

            /**this line gives the animation */
            animation: hero 2s cubic-bezier(0.68, -0.55, 0.27, 1.55);

            /**creating a 'keyframe' makes the rotation effect*/
            @keyframes hero {
                0%{
                    transform:translateX(100rem) rotate(360deg);
                    opacity: 0;
                }

                100%{
                    transform:translateX(0);
                    opacity: 1;
                }
            }

            .showcase_content--title{
                font-size: calc(2rem + 3vw);
                color: white;
            }

            .showcase_content--para,
            a{
                font-family: 'Indie Flower', cursive;
                font-size: calc(1.5rem + 1vw);
                font-size: calc(1.5rem + 1vw);
                color: white;
                text-decoration: none;
            }

            .showcase_content--link:link,
            .showcase_content--link:visited{
                padding: 1rem 0;
                transition: all 0.5s ease-in-out;
                width: 9rem;
                text-transform: uppercase;
                font-size: 1.5rem;
                font-weight: 600;
                letter-spacing: 0.2rem;
                position: relative;
                
                /**jsx elements are palced in stack */
                z-index: 1;

                /**the background '--primary-color'
                *is in top of the anchor tag */

                /**placing 'z-index: 1;' and 'z-index: -1;' 
                * places the test on top of '--primary-color'*/
            }

            .showcase_content--link:link::after,
            .showcase_content--link:visited::after{
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                height: 100%;
                width: 100%;
                background-color: var(--primary-color);
                transform: scaleX(0);
                transform-origin: right;
                transition: transform 0.45s cubic-bezier(0.645, 0.045, 0.355, 1);
                /**related with text on top (higher stacking order)*/
                z-index: -1;
            }

            .showcase_content--link:hover::after,
            .showcase_content--link:active::after{
                transform: scaleX(1);
                transform-origin: left;
            }
        }

        @media screen and (max-width:900px){
                background-position: 100%;
                align-items: flex-end;
        }

        background-position: 80%;
        
    }
`

export default Hero;