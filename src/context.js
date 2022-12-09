import React, { useContext } from "react";
import { AppLinks, SocialIcons } from "./data";

 /**
 * Scarlett-taylor portfolio - version 1.03 - context js -
 * Features:
 *
 *      --->Importing 'AppLinks', and 'SocialIcons' 
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
            SocialIcons
             }}>
            { children }
        </AppContext.Provider>
    )
}

export { AppContext, AppProvider }

export const useAppContext = () => {
    return useContext(AppContext)
} 
