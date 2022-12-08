import React, { useContext } from "react";
import { dribble, facebook, instagram, linkedin, pinterest, twitter } from "./data";

 /**
 * Scarlett-taylor portfolio - version 1.02 - context js -
 * Features:
 *
 *      --->Importing 'social' icons and provide it 
 *          them  
 * 
 * Note: this file is going to be added more data
 * 
 * * */


const AppContext = React.createContext()

const AppProvider = ({ children }) => {

    return(
        <AppContext.Provider 
            
            value={{ 
                facebook,
                instagram,
                twitter, 
                linkedin, 
                dribble, 
                pinterest
             }}>
            { children }
        </AppContext.Provider>
    )
}

export { AppContext, AppProvider }

export const useAppContext = () => {
    return useContext(AppContext)
} 
