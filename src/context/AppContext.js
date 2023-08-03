import React, { createContext } from 'react'


export const appContext = createContext({})
const AppContext = ({ children }) => {
    return (
        <appContext.Provider>
            {children}
        </appContext.Provider>
    )
}

export default AppContext