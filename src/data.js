import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter, faLinkedin, faDribbble, faPinterest } from '@fortawesome/free-brands-svg-icons'
import { branding, clothbag, cup, paperbag, poster, printer } from "./assets/assets.index";


/**
 * Scarlett-taylor portfolio - version 1.07 - data js -
 * Features:
 *
 *      --->Building 'WorkImages' array
 * 
 * Note: this file is going to be added more data
 * 
 * * */


export const facebook = <FontAwesomeIcon icon={faFacebook} />
export const instagram = <FontAwesomeIcon icon={faInstagram} />
export const twitter = <FontAwesomeIcon icon={faTwitter} />
export const linkedin = <FontAwesomeIcon icon={faLinkedin} />
export const dribble = <FontAwesomeIcon icon={faDribbble} />
export const pinterest = <FontAwesomeIcon icon={faPinterest} />

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
