import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useAppContext } from "../context";

 /**
 * Scarlett-taylor portfolio - version 1.06 - Navbar -
 * Features:
 *
 *      ---> Adding styles for 'links' to fade
 * 
 * Note: this file is going to be added more data
 * 
 * * */


const Navbar = () => {
    const { AppLinks } = useAppContext()

    console.log('data applinks =>', AppLinks)

    const handleHamburger = () => {
        const hamburgerContainer = document.querySelector('.header_main-nav')
        const hamburger = document.querySelector('.header_main--hamburger')
        const links = document.querySelectorAll('.header_main-nav--links li')

        hamburger.addEventListener('click', () => {
            hamburgerContainer.classList.toggle('clicked')
        })

        links.forEach((link) => {
            link.classList.toggle('fade');
        })
    }

    return(
        <Wrapper>
            <main className="header">
                <nav className="header_main-nav">
                <NavLink 
                    to='#' 
                    onClick={handleHamburger}>
                    <div className="header_main--hamburger">
                        <div className="line line-1"></div>
                        <div className="line line-2"></div>
                        <div className="line line-3"></div>
                    </div>
                </NavLink>    
                    <ul className="header_main-nav--links">
                        {AppLinks.map((link) => {
                            const { id, name } = link
                            return(
                                <li key={id}>
                                    <NavLink to='#'>
                                    {name}
                                    </NavLink>
                                    </li>
                            )
                        })}
                    </ul>
                </nav>
            </main> 
        </Wrapper>
    )
}

const Wrapper = styled.div`
    
    .header{
        background-color: var(--secondary-color);
        width: 97vw;
        height: calc(3vw + 3vh);
        z-index: 2;
        
        @media screen and (max-width:610px){    
        
        .header_main-nav{
            width: 30rem;
            height: 100%;
            position: fixed;
            top: 0;
            right: 0rem;
            background-color: var(--secondary-color);
            text-align: center;
            } 

            .header_main--hamburger{
                width: 5rem;
                height: 5rem;
                position: fixed;
                top: 2rem;
                right: 3rem;
                cursor: pointer;
                background-color: var(--secondary-color);
                padding:1rem;
                border-radius: 50%;
                
                display: flex;
                flex-direction: column;
                justify-content: space-around;
            }

            .line{
                width: 100%;
                height: 0.3rem;
                background-color: white;
                border-radius: 0.2rem;
                transition: all 0.4s ease-in-out;
            }

            .header_main-nav--links{
                flex-direction: column;
                justify-content: center;
                align-items: flex-start;
            }

            .header_main-nav--links li{
                margin-bottom: 4vh;
                margin-left: 6vw;
            }

            .clicked{
                left: 100%;
            }

            .clicked .line-1{
                transform: rotateZ(-405deg) translate(-0.8rem, 0.6rem);
            }

            .clicked .line-2{
                opacity: 0;
            }

            .clicked .line-3{
                transform: rotateZ(405deg) translate(-0.8rem, -0.6rem);
            }

            .header_main-nav--links li{
                opacity: 1;
            }

            .header_main-nav--links li:nth-child(1){
                transition: all 0.5s ease-in-out 0.2s;
            }

            .header_main-nav--links li:nth-child(2){
                transition: all 0.5s ease-in-out 0.4s;
            }

            .header_main-nav--links li:nth-child(3){
                transition: all 0.5s ease-in-out 0.6s;
            }

            .header_main-nav--links li:nth-child(4){
                transition: all 0.5s ease-in-out 0.8s;
            }

            .header_main-nav--links li:nth-child(5){
                transition: all 0.5s ease-in-out 1s;
            }

            .header_main-nav--links li:nth-child(6){
                transition: all 0.5s ease-in-out 1.2s;
            }

            .header_main-nav--links li.fade{
                opacity: 0;
            }
        }
    
    .header_main-nav--links{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        
    }
    
    .header_main-nav--links li{
        margin-top: 1rem;
        padding-right: 3vw;
    }
    
    .header_main-nav--links li a{ 
        position: relative;
        padding: 0.2rem 0.6rem;
        font-size: calc(1rem + 0.66667vw);
    }
    
    li{
        list-style-type: none;
    }
    
    a:Link,
    a:visited{
        text-decoration: none;
        color: white;
        font-size: 1.5rem;
    }
}



/**main nav header on hamburger change */
.header_main-nav--links li a:Link::before,
.header_main-nav--links li a:visited::before,
.header_main-nav--links li a:Link::after,
.header_main-nav--links li a:visited::after{
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    height: 0.25rem;
    background-color: white;
    
    transform: scaleX(0);
    
    transition: transform 0.6s cubic-bezier(1, 0, 0, 1);
}

.header_main-nav--links li a:Link::before,
.header_main-nav--links li a:visited::before{
    top: 0;
   
    transform-origin: left;
}

.header_main-nav--links li a:Link::after,
.header_main-nav--links li a:visited::after{
    bottom: 0;
    transform-origin: right;
}

.header_main-nav--links li a:hover::before,
.header_main-nav--links li a:active::before,
.header_main-nav--links li a:hover::after,
.header_main-nav--links li a:active::after{
    transform: scaleX(1);
}

`
export default Navbar;