import React from "react";
import styled from "styled-components";
import { useAppContext } from "../context";

/*Scarlett-taylor Portfolio - version 1.09 - 
* Services - Features: 
*  
*     --> Startting to build 'Services'
*  
*     --> Destructuring and testing data from 
*          the context    
*       
* Note: this file will be refactor
*/

const Services = () => {
    
    const { ServicesData } = useAppContext()

    console.log('the ServicesData =>',ServicesData)
    
    return(
        <Wrapper>
            {ServicesData.map((service) => {
                const { id, icon, name, description } = service;

                return(
                    <div key={id} className="service">
                        <h3>{name}</h3>
                        <p>{description}</p>
                    </div>                  
                )
            })}
        </Wrapper>
    )
}

const Wrapper = styled.div`

`

export default Services;