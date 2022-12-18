import React, { useContext } from "react";
import { Aboutimg, AppLinks, ServicesData, SkillsData, SocialIcons, WorkImages } from "./data";

 /**
 * Scarlett-taylor portfolio - version 2.01 - context js -
 * Features:
 *
 *      --->Importing 'ServicesData' 
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
            SkillsData
             }}>
            { children }
        </AppContext.Provider>
    )
}

export { AppContext, AppProvider }

export const useAppContext = () => {
    return useContext(AppContext)
} 
