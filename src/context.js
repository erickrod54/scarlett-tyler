import React, { useContext } from "react";
import { AppLinks, SocialIcons, WorkImages } from "./data";

 /**
 * Scarlett-taylor portfolio - version 1.07 - context js -
 * Features:
 *
 *      --->Importing 'WorkImages' 
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
            WorkImages
             }}>
            { children }
        </AppContext.Provider>
    )
}

export { AppContext, AppProvider }

export const useAppContext = () => {
    return useContext(AppContext)
} 
