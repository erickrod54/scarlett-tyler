import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useAppContext } from "../context";

 /**
 * Scarlett-taylor portfolio - version 1.04 - Navbar -
 * Features:
 *
 *      ---> Building 'Navbar'.  
 * 
 * Note: this file is going to be added more data
 * 
 * * */


const Navbar = () => {
    const { AppLinks } = useAppContext()

    console.log('data applinks =>', AppLinks)
    return(
        <Wrapper>
            <main className="header">
                <nav className="header_main-nav">
                    <div className="header_main--hamburger">
                        <div className="line-1"></div>
                        <div className="line-2"></div>
                        <div className="line-3"></div>
                    </div>
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
    background-color: var(--secondary-color);
    width: 97vw;
    height: calc(3vw + 3vh);

    .header{
        z-index: 2;
    }

    .header_main-nav--links{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    .header_main-nav--links li{
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
    
`

export default Navbar;