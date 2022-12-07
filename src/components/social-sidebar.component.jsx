import React from "react";
import styled from "styled-components";
import { Logo } from "../assets/assets.index";
import { useAppContext } from "../context";

/*Scarlett-taylor Portfolio - version 1.01 - 
* SocialSidebar - Features: 
*  
*     --> Starting to build 'SocialSidebar'
*
*     --> Destructuring icons from the context.
*  
* Note: this file will be refactor
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
                           
                        </ul>        
                    </div>
                </div>
            </aside>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    img{
        width: 150px;
        height: 200px;
    }
`

export default SocialSidebar;
