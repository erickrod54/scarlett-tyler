import React from "react";
import styled from "styled-components";
import { Logo } from "../assets/assets.index";
import { useAppContext } from "../context";

/**
* Scarlett-taylor Portfolio - version 1.02 - 
* SocialSidebar - Features: 
*  
*     --> Building 'SocialSidebar'
*
*     --> Building and styling 
*          'side-nav__content--social'  
*  
* Note: pending to convert 'li' in 'links' when
* react router-dom will implemented.
*/

const SocialSidebar = () => {
    
    const { facebook, instagram, twitter, linkedin, dribble, pinterest } = useAppContext()
    console.log('data from context ==>', facebook, instagram, twitter, linkedin, dribble, pinterest)
    
    return(
        <Wrapper>
            <aside className="side-bar">
                <div className="side-nav">
                    <div className="side-nav__content">
                        <div className="side-nav__content--logo">
                            <img src={Logo} alt='logo'/>
                        </div>
                        <ul className='side-nav__content--social'>
                            <li>
                             {facebook}      
                            </li>
                            <li>
                             {instagram}   
                            </li>
                            <li>
                              {twitter}  
                            </li>
                            <li>
                              {linkedin}  
                            </li>
                            <li>
                              {dribble}                             
                            </li>
                            <li>
                                {pinterest}                             
                            </li>
                        </ul>        
                    </div>
                </div>
            </aside>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    .side-nav__content--logo img{
        width: calc(7vw + 5vh);
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

        li{
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
        li:hover
        li:active{
           color:var(--secondary-color) ;
        }

    }
`

export default SocialSidebar;
