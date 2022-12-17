import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter, faLinkedin, faDribbble, faPinterest } from '@fortawesome/free-brands-svg-icons'
import { aboutimg, branding, clothbag, cup, paperbag, poster, printer } from "./assets/assets.index";
import { faListCheck, faMobileScreenButton, faPaintBrush, faPaintRoller, faShareNodes } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";

/**
 * Scarlett-taylor portfolio - version 2.00 - data js -
 * Features:
 *
 *      --->Building 'WorkImages' array
 * 
 *      --> Importing icons and adding them to 
 *          ServicesData
 * 
 * Note: this file is going to be added more data
 * 
 * * */

export const Aboutimg = [
    {
        aboutimg:aboutimg,
        name:'about me image'
    }
]

/**brands icons */
export const facebook = <FontAwesomeIcon icon={faFacebook} />
export const instagram = <FontAwesomeIcon icon={faInstagram} />
export const twitter = <FontAwesomeIcon icon={faTwitter} />
export const linkedin = <FontAwesomeIcon icon={faLinkedin} />
export const dribble = <FontAwesomeIcon icon={faDribbble} />
export const pinterest = <FontAwesomeIcon icon={faPinterest} />

/**services icons */
export const brush = <FontAwesomeIcon icon={faPaintBrush}/> 
export const  checklist = <FontAwesomeIcon icon={faListCheck}/>
export const phonescreen = <FontAwesomeIcon icon={faMobileScreenButton}/>
export const  paintrole = <FontAwesomeIcon icon={faPaintRoller}/>
export const pensquare = <FontAwesomeIcon icon={faPenToSquare}/>
export const  nodes = <FontAwesomeIcon icon={faShareNodes}/>

export const ServicesData = [
    {
     id:1,
     icon:brush,
     name:'ui design',
     description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
     id:2,
     icon:checklist,
     name:'web development',
     description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
     id:3,
     icon:phonescreen,
     name:'app development',
     description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
     id:4,
     icon:paintrole,
     name:'type design',
     description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
     id:5,
     icon:pensquare,
     name:'blog writer',
     description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
     id:6,
     icon:nodes,
     name:'project management',
     description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
]

export const SocialIcons = [
    {
        id:1,
        name:facebook,
        url:'#'
    },{
        id:2,
        name:instagram,
        url:'#'
    },{
        id:3,
        name:twitter,
        url:'#'
    },{
        id:4,
        name:linkedin,
        url:'#'
    },{
        id:5,
        name:dribble,
        url:'#'
    },{
        id:6,
        name:pinterest,
        url:'#'
    },
]

export const AppLinks = [
    {
        id:1,
        name:'home',
        url:'/'
    },{
        id:2,
        name:'about',
        url:'about'
    },{
        id:3,
        name:'projects',
        url:'projects'
    },{
        id:4,
        name:'services',
        url:'services'
    },{
        id:5,
        name:'hire me',
        url:'hire-me'
    },{
        id:6,
        name:'contact',
        url:'contact'
    },
]

 
export const WorkImages = [
    {
        id:1,
        workimage:poster,
        name:'poster'
    },
    {
        id:2,
        workimage:paperbag,
        name:'paperbag'
    },
    {
        id:3,
        workimage:clothbag,
        name:'clothbag'
    },
    {
        id:4,
        workimage:branding,
        name:'branding'
    },
    {
        id:5,
        workimage:cup,
        name:'cup'
    },
    {
        id:6,
        workimage:printer,
        name:'printer'
    }
]
