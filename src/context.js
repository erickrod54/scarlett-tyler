import React, { useContext } from "react";
import { Aboutimg, AppLinks, ServicesData, SkillsData, SocialIcons, TestimonialsData, WorkImages } from "./data";

 /**
 * Scarlett-taylor portfolio - version 2.03 - context js -
 * Features:
 *
 *      --->Importing 'TestimonialsData' 
 *          and providing it them.  
 * 
 * Note: this file is going to be added more data
 * 
 * * */

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    
    return(
        <AppContext.Provider 
        
        value={{ 
            AppLinks,
            SocialIcons,
            WorkImages,
            Aboutimg,
            ServicesData,
            SkillsData,
            TestimonialsData
             }}>
            { children }
        </AppContext.Provider>
    )
}

export { AppContext, AppProvider }

export const useAppContext = () => {
    return useContext(AppContext)
} 
