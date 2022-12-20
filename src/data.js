import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter, faLinkedin, faDribbble, faPinterest } from '@fortawesome/free-brands-svg-icons'
import { aboutimg, branding, clothbag, cup, paperbag, poster, printer, testimonial1, testimonial2, testimonial3, testimonial4 } from "./assets/assets.index";
import { faListCheck, faMobileScreenButton, faPaintBrush, faPaintRoller, faShareNodes } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";

/**
 * Scarlett-taylor portfolio - version 2.03 - data js -
 * Features:
 *
 *      --->Building 'TestimonialsData' 
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

export const TestimonialsData = [
    {
      id:1,
      name:'tony',
      testimonial:'remarkable eye',
      image:testimonial1,
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id:2,
      name:'natasha',
      testimonial:'catchy designs',
      image:testimonial2,
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id:3,
      name:'veers',
      testimonial:'smoking websites',
      image:testimonial3,
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id:4,
      name:'xavi',
      testimonial:'easy to work with',
      image:testimonial4,
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
]

export const SkillsData = [
    {
        id:1,
        title:'design skills'
    },
    {
        id:2,
        title:'coding skills'
    },
    {
        id:3,
        skillname:'web design'
    },
    {
        id:4,
        skillname:'print design'
    },
    {
        id:5,
        skillname:'logo design'
    },
    {
        id:6,
        skillname:'graphic design'
    },
    {
        id:7,
        skillname:'html/css'
    },
    {
        id:8,
        skillname:'javaScript'
    },
    {
        id:9,
        skillname:'phyton'
    },
    {
        id:10,
        skillname:'sql'
    }
]

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
