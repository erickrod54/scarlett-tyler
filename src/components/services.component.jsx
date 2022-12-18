import React from "react";
import styled from "styled-components";
import { useAppContext } from "../context";

/*Scarlett-taylor Portfolio - version 2.01 - 
* Services - Features: 
*  
*     --> Writting styles.
*
*     --> Writting media query for
*         better responsiveness.    
*       
* Note: this file will be refactor
*/

const Services = () => {
    
    const { ServicesData } = useAppContext()

    //console.log('the ServicesData =>',ServicesData)
    
    return(
        <Wrapper>
            {ServicesData.map((service) => {
                const { id, icon, name, description } = service;

                return(
                    <div key={id} className="service">
                        <i>{icon}</i>
                        <h3 className="service--title">{name}</h3>
                        <p className="service--para">{description}</p>
                    </div>                  
                )
            })}
        </Wrapper>
    )
}

const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;

padding: 6rem 2rem 2rem;
background-color: var(--primary-color);

        .service{
            padding: 4rem;
            margin: 0 2rem 4rem;
            flex-basis: 40rem;
            flex-grow: 1;
            background-color: var(--secondary-color);

            /**this lines give style to the border */
            border-bottom: 0.2rem solid var(--secondary-color);
            border-right: 0.2rem solid var(--secondary-color);
            border-left: 0.2rem solid var(--secondary-color);

            /**to make the effect before the 'after' and 'hover' */
            position: relative;

            z-index: 1;

            .service--title,
            i{
                font-size: 3rem;
                margin-bottom: 2rem;
                color: white;
            }

            .service--title{
                text-transform: uppercase;
            }

            .service--para{
                font-family: 'Indie Flower', cursive;
                font-size: 2rem;
                color: white;
            }    
        }

        /**this style for the 'after effect' */
        .service::after{
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            background-color: var(--primary-color);
            transform: scaleX(0);
            transition: transform 0.45s cubic-bezier(1, 0, 0, 1);

            z-index: -1;
        }

        /**this effect for the 'hover' and 'active'
        * using 'scaleX' will make the effect in X axis*/
        .service:hover::after,
        .service:active::after{
            transform: scaleX(1);
        }

    /**media query rule to improve styles before 610px */    
    @media screen and (max-width:610px){
        padding: 6rem 3rem 2rem;

        .service{
            padding: calc(1rem + 2vw);
            margin: 0 0 calc(1rem + 2vw);
            
            .service--title{
                font-size: calc(2rem + 2vw);
            }

            .service--para{
                font-size: calc(0.8rem + 1.5vw);
            }
        }

    }
`

export default Services;