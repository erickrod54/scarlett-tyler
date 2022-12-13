import React from "react";
import styled from "styled-components";
import { useAppContext } from "../context";

/*Scarlett-taylor Portfolio - version 1.07 - 
* assets.index - Features: 
*  
*     --> Starting to build 'Work' Component.
*  
* Note: this file will be refactor
*/

const Work = () => {
    
    const { WorkImages } = useAppContext()

    console.log('assets to build work ==>', WorkImages)
    return(
        <Wrapper>
            {WorkImages.map((picture) => {
                const { id, workimage, name } = picture;

                return(
                <section key={id} className="work">
                    <div className="work_card">
                        <img src={workimage} alt={name}/>
                    </div>
                </section>

                )
            })}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    .work{
        .work_card{

        }
    }
`

export default Work;