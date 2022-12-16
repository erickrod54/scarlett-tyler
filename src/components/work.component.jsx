import React from "react";
import styled from "styled-components";
import { useAppContext } from "../context";

/*Scarlett-taylor Portfolio - version 1.08 - 
* assets.index - Features: 
*  
*     --> Finish Building Work Component.
*
*     --> Finish writting styles.
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
        /**this is the style for the background */
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        padding: 2rem;
        background-color: var(--tertiary-color);

        /**this is the style for the cards */
        .work_card{
            padding: 2rem;
            flex-basis: 40rem;
            flex-grow: 1;

            /**this is the style for the corners */
            clip-path: polygon(
                 20% 0%,
                 80% 0%,
                 100% 20%,
                 100% 80%,
                 80% 100%,
                 20% 100%,
                 0% 80%,
                 0% 20%
                 );
        }

        /**this is the styles for the image */
        .work_card img{
            height: 40rem;
            width: 40rem;
            object-fit: cover;
        }

        .work_card img:hover,
        .work_card img:active{
            filter: sepia(80%);
        }
   
`

export default Work;