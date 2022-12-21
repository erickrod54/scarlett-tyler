import React from "react";
import styled from "styled-components";
import { contactbg } from "../assets/assets.index";

 /**
 * Scarlett-taylor portfolio - version 2.04 - Contact -
 * Features:
 *
 *      ---> Building 'Contact' Component
 * 
 *      --> Building styles
 * 
 * Note: this file is going to be added more data
 * 
 * * */

const Contact = () => {

    return(
        <Wrapper>
        <form className="contact-form">
            <input type='text' placeholder="Name"/>
            <input type='email' placeholder="Email"/>
            <input type='text' placeholder="Subject"/>
            <textarea name='message'/>
            <input type='submit' value='Submit'/>
        </form> 
    </Wrapper>
    )
}

const Wrapper = styled.div`
    height: 100vh;
    background-image: url(${contactbg});
    /**this place the image in the center */
    background-position: 15% 5%;

    display: flex;
    justify-content: flex-end;
    align-items: flex-end;

    .contact-form{
        flex-basis: 40rem;
        display: flex;
        flex-direction: column;
        background-color: var(--tertiary-color-m);
    }

    .contact-form input,
    .contact-form textarea{
        color: white;
        font-family: 'Indie Flower', cursive;
        font-size: 1.5rem;
        letter-spacing: 0.2rem;
        padding: 2rem;
        background: transparent;
        border: none;
        border-bottom: var(--secondary-color) solid 0.1rem;
    }

    .contact-form textarea{
        height: 25vh;
    }

    input[type=submit]{
        border: none;
        cursor: pointer;
    }

    input[type=submit]:hover{
        transition: 0.4s ease-in-out;
        background: var(--secondary-color);
    }

`

export default Contact;