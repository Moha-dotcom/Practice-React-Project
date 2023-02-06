import React, { useState, useContext } from 'react'


export const AppContext = React.createContext()







export const AppProvider = ({children}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isModalOpen, SetisModalOpen] = useState(false);


    const openSideBar = () => {
        setIsSidebarOpen(true);
    }
    const CloseSideBar = () => {
        setIsSidebarOpen(false);
        
    }
    const openModal= () => {
        SetisModalOpen(true);
    }
    const CloseModal= () => {
        SetisModalOpen(false);
        
    }
    return <AppContext.Provider value={{isModalOpen, isSidebarOpen, openSideBar, CloseSideBar, openModal, CloseModal}}>
        {children}
    </AppContext.Provider>
}


// Custom Hook

export const useGlobalContext = () => {
    return useContext(AppContext);
}