import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { herofullimage } from "../assets/assets.index";

 /**
 * Scarlett-taylor portfolio - version 1.06 - Hero -
 * Features:
 *
 *      ---> Starting to build 'hero'
 * 
 * Note: this file is going to be added more data
 * 
 * * */

const Hero = () => {

    return(
        <Wrapper>
            <section className="showcase">
                <div className="showcase_content">
                    <h1 className="showcase_content--title">scarlet tyler</h1>
                    <p className="showcase_content--para">UX designer / frontend developer</p>
                    <Link to='#' className="showcase_content--link">my work</Link>
                </div>
            </section>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    .showcase{
        height: 100vh;
        background-image: url(${herofullimage}) ;
        background-size: cover;
        background-position: center;
        background-attachment: fixed;

        display: flex;
        justify-content: flex-start;
        align-items: center;

        .showcase_content{
            background-color: var(--secondary-color-m);
            padding: calc(1rem + 2vw);
            height: calc(5rem + 20vmax);

            .showcase_content--title{

            }

            .showcase_content--para{

            }

            .showcase_content--link{

            }
        }
    }
`

export default Hero;