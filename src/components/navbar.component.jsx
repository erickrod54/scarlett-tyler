import React from "react";
import styled from "styled-components";
import { useAppContext } from "../context";

 /**
 * Scarlett-taylor portfolio - version 1.03 - Navbar -
 * Features:
 *
 *      ---> Starting to build 'Navbar'.  
 * 
 * Note: this file is going to be added more data
 * 
 * * */

const Navbar = () => {
    const { AppLinks } = useAppContext()

    console.log('data applinks =>', AppLinks)
    return(
        <Wrapper>
            <h2>Navbar Component</h2>

        </Wrapper>
    )
}

const Wrapper = styled.div`

`

export default Navbar;