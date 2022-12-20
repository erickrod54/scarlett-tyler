import React from "react";
import styled from "styled-components";
import { useAppContext } from "../context";

/*Scarlett-taylor Portfolio - version 2.03 - 
* Testimonials- Features: 
*  
*     --> Building 'Testimonials'
*       
*     --> Building styles  
*       
* Note: this file will be refactor
*/

const Testimonials = () => {

    const { TestimonialsData } = useAppContext()
    console.log('the testimonials  data ==>', TestimonialsData)

    return(
        <Wrapper>
            {TestimonialsData.map((review) => {
                const { id, name, testimonial, image, description } = review;

                return(
                <section key={id} className="testimonials">
                    <section className="testimonials-card">
                        <div className="testimonials-card--img">
                            <img src={image} alt={name}/>
                        </div>
                        <div className="testimonials-card--content">
                           <h3 className="testimonials-card--content--title">
                           {testimonial}     
                           </h3>
                           <h3 className="testimonials-card--content--para">
                           {description}
                           </h3> 
                        </div>
                    </section>
                </section>
                )
            })}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding: calc(1rem + 2vw);
    background-color: var(--secondary-color);
    color: white;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  

        .testimonials-card{
            padding: 1.5vw;
            flex-basis: 50rem;
            flex-grow: 1;
            position: relative;
            overflow: hidden;
            
            .testimonials-card--img{
                width: 100%;
                height: 100%;
                object-fit: cover;
                
            }
            
            .testimonials-card--img img{
                width: 100%;
                height: 100%;
                object-fit: cover;
                transition: all 0.35s ease-in-out;
            }
            
        }
        
        
        .testimonials-card--content--title{
            font-size: 3rem;
            text-transform: uppercase;
        }
        
        .testimonials-card--content--para{
            font-family: 'Indie Flower', cursive;
            font-size: 1.5rem;
        }
        
        .testimonials-card--content{
            position: absolute;
            top:60%;
            left: 0;
            width: 80%;
            background-color: var(--tertiary-color-m);
            padding: 1.5rem;

            transform: scaleY(0);
            /**opacity: 0; */
            transform-origin: top;
            transition: transform 0.35s ease-in-out;
            /**transition: opacity 2s ease-in-out; */
        }

        .testimonials-card:hover .testimonials-card--content{
            transform: scaleY(1);
            /**opacity: 1; */
            transform-origin: center;
        }
        
        .testimonials-card:hover .testimonials-card--img img,
        .testimonials-card:active .testimonials-card--img img{
            transform: scale(0.98);
            filter:grayscale(50%);
        }
        
        /**dynamic titles and paragraph */
        .testimonials-card--content--title{
            font-size: calc(1.2rem + 1.5vw);
        }

        .testimonials-card--content--para{
            font-size: calc(0.6rem + 1.5vw);
        }

        /**rule for responsive content below 460px */
        /**interesting visualization of faces 
        ** in relation with the content*/

        @media screen and (max-width: 460px){
            .testimonials-card--content{
                top: 0;
                height: 100%;
                width: 100%;

                transform-origin: bottom;
                
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
            }

            /**makes the content goes from top to bottom */
            .testimonials-card:hover .testimonials-card--content,
            .testimonials-card:active .testimonials-card--content{
                transform-origin: top;
            }
        }

        `
export default Testimonials;