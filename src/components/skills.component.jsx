import React from "react";
import styled from "styled-components";
import { useAppContext } from "../context";

/*Scarlett-taylor Portfolio - version 2.02 - 
* Skills - Features: 
*  
*     --> Building 'Skills' Component.
*
*     --> Building a return
*
*     --> Styling it titles, skills and
*         progress bars.     
*       
* Note: this file will be refactor
*/

const Skills = () => {

    const { SkillsData } = useAppContext()
    //console.log('testing skills data ==>', SkillsData)
    //console.log('testing skills data ==>', SkillsData[0].title)
    //console.log('testing skills data ==>', SkillsData[2].skillname)

    const skilldesign = SkillsData[0].title;
    const skillcoding = SkillsData[1].title;

    return(
        <Wrapper>

            <section className="skills">
                <div className="skills-design">
                    <h3 className="skills-design-title">
                    {skilldesign}
                    </h3>
                    {/**---design skills */}
                    {SkillsData.filter((skill) => skill.id > 2 && skill.id <= 6).map((skills) => {
                        const { id, skillname } = skills;

                        return(
                            <div key={id}>
                                <h4>{skillname}</h4>
                                <div className="skills--design-progress">
                                    <span className={`skills--design-progress_${id}`}/>
                                </div>
                            </div>
                            )
                        })}
                </div>
                <div className="skills-coding">
                    <h3 className="skills-coding-title">
                    {skillcoding}
                    </h3>
                    
                    {/**---coding skills */}
                    {SkillsData.filter((skill) => skill.id > 6 && skill.id <= 10).map((skills) => {
                        const { id, skillname } = skills;

                        return(
                            <div key={id}>
                                <h4>{skillname}</h4>
                                <div className="skills--coding-progress">
                                    <span className={`skills--coding-progress_${id}`}/>
                                </div>
                            </div>                
                                )
                            })}
                </div>
            </section>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    .skills{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;

        padding: calc(1rem + 2vw);
        background-color: var(--tertiary-color);

        .skills-coding-title,
        .skills-design-title{
            text-transform: capitalize;
            font-size: 3rem;
            margin-bottom: 2rem;
        }

        .skills-design,
        .skills-coding{
            padding: calc(1rem + 2vw);
            
            /**they take the entire space with 40rem each */
            flex-basis: 40rem;
            flex-grow: 1;
        }

        .skills-design h4,
        .skills-coding h4{
            text-transform: uppercase;
            font-size: 2rem;
            color: white;
        }

        .skills-design h4{
            text-transform: capitalize;
        }

        .skills--design-progress,
        .skills--coding-progress{
            position: relative;
            display: block;
            padding: 0.5rem;
            border-radius: 3rem;
            background-color: var(--primary-color);

            width: 100%;
            margin-bottom: 2rem;
        }

        .skills--design-progress span,
        .skills--coding-progress span{
            position: relative;
            display: inline-block;
            vertical-align: middle;
            height: 2rem;
            border-radius: 1rem 0 0 1rem;
            background-color: var(--secondary-color);
            /**width: 4rem; */
        }

        .skills--design-progress_3{
            animation: design-3 4s infinite cubic-bezier(1, 0, 0, 1);
        }

        @keyframes design-3{
            0%{
              width:0;
            }

            100%{
                width: 80%;
            }
        }

        .skills--design-progress_4{
            animation: design-4 4s infinite cubic-bezier(1, 0, 0, 1);
        }

        @keyframes design-4{
            0%{
              width:0;
            }

            100%{
                width: 75%;
            }
        }

        .skills--design-progress_5{
            animation: design-5 4s infinite cubic-bezier(1, 0, 0, 1);
        }

        @keyframes design-5{
            0%{
              width:0;
            }

            100%{
                width: 95%;
            }
        }

        .skills--design-progress_6{
            animation: design-6 4s infinite cubic-bezier(1, 0, 0, 1);
        }

        @keyframes design-6{
            0%{
              width:0;
            }

            100%{
                width: 65%;
            }
        }
        
        /**coding skills animations */
        .skills--coding-progress_7{
            animation: coding-7 4s infinite cubic-bezier(1, 0, 0, 1);
        }

        @keyframes coding-7{
            0%{
              width:0;
            }

            100%{
                width: 95%;
            }
        }

        .skills--coding-progress_8{
            animation: coding-8 4s infinite cubic-bezier(1, 0, 0, 1);
        }

        @keyframes coding-8{
            0%{
              width:0;
            }

            100%{
                width: 80%;
            }
        }

        .skills--coding-progress_9{
            animation: coding-9 4s infinite cubic-bezier(1, 0, 0, 1);
        }

        @keyframes coding-9{
            0%{
              width:0;
            }

            100%{
                width: 65%;
            }
        }

        .skills--coding-progress_10{
            animation: coding-10 4s infinite cubic-bezier(1, 0, 0, 1);
        }

        @keyframes coding-10{
            0%{
              width:0;
            }

            100%{
                width: 90%;
            }
        }
    }

    .skills-coding-title,
    .skills-design-title{
        font-size: calc(1.2rem + 2vw);
    }

    .skills-coding h4,
    .skills-design h4{
        font-size: calc(0.8rem + 1.5vw);
    }
`

export default Skills;