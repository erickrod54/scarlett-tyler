import React from "react";
import { useAppContext } from "../context";

/*Scarlett-taylor Portfolio - version 2.02 - 
* Testimonials- Features: 
*  
*     --> Destructuring data from the context.
*
*     --> Testing data.       
*       
* Note: this file will be refactor
*/

const Testimonials = () => {

    const { TestimonialsData } = useAppContext()
    console.log('the testimonials  data ==>', TestimonialsData)

    return(
        <h2>Testimonials Component</h2>
    )
}

export default Testimonials;