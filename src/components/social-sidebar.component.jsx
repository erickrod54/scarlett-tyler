import React from "react";
import styled from "styled-components";
import { Logo } from "../assets/assets.index";
import { NavLink } from 'react-router-dom'
import { useAppContext } from "../context";

/**
* Scarlett-taylor Portfolio - version 1.04 - 
* SocialSidebar - Features: 
*  
*     --> Adding a dynamic 'width'
*        to img logo           
*  
* Note: by adding the dynamic width as the 
* same dynamic hieght in 'Navbar' they will
* grow in the same porportion.
*/

const SocialSidebar = () => {
    
    const { SocialIcons } = useAppContext()

    return(
            
        <Wrapper >
            <aside className="side-bar">
                <div className="side-nav">
                    <div className="side-nav__content">
                        <div className="side-nav__content--logo">
                            <img src={Logo} alt='logo'/>
                        </div>
                        <ul className='side-nav__content--social'>
                           {SocialIcons.map((social) => {
                            const { id, name, url } = social;

                            return(
                                <NavLink 
                                    key={id} 
                                    to={url}
                                    >
                                    {name}
                                </NavLink>
                            )
                           })}
                        </ul>        
                    </div>
                </div>
            </aside>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    .side-nav__content--logo img{
        width: calc(2vw + 2vh);
        object-fit: cover;
    }

    .side-nav{
        position: sticky;
        top: 0;
        left: 0;
        height: 100vh;
    }

    .side-nav__content{
        height: 100%;

        display: flex;
        flex-direction: column;
        justify-content: space-between;

        background-color: var(--primary-color);
    }

    .side-nav__content--social{
        height: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;

        
        a{
            list-style-type: none;
            /**20px => 2rem => (1rem + [10/1500] + 100 -0.666667-)
            * Dynamic value for an aspect ratio oof 1500px */
            font-size: calc(1rem + 0.666667vw);
            color: white;
    
            /***make the transition smooth */
            transition: color 0.35s cubic-bezier(0.68, -0.55, 0.265, 1.55);
            padding-bottom: calc(2rem + 0.666667vw);
        }
    
        /**pending to fix hover effect ( waiting for 
            router implementation ) */
        a:hover{
           color: var(--secondary-color) ;
        }
    }

`

export default SocialSidebar;
