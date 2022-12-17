import React from "react";
import styled from "styled-components";
import { useAppContext } from "../context";

/*Scarlett-taylor Portfolio - version 2.00 - 
* Services - Features: 
*  
*     --> Adding icons    
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
                        <i>{icon}</i>
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