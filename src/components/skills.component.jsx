import React from "react";
import styled from "styled-components";
import { useAppContext } from "../context";

/*Scarlett-taylor Portfolio - version 2.01 - 
* Skills - Features: 
*  
*     --> Destructuring data from the context.
*
*     --> Testing data     
*       
* Note: this file will be refactor
*/

const Skills = () => {

    const { SkillsData } = useAppContext()
    console.log('testing skills data ==>', SkillsData)
    console.log('testing skills data ==>', SkillsData[0].title)
    console.log('testing skills data ==>', SkillsData[2].skillname)

    return(
        <Wrapper>
            <h2>Skills Component</h2>

        </Wrapper>
    )
}

const Wrapper = styled.div`

`

export default Skills;