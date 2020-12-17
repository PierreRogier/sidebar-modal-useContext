import React, { useState, useContext } from "react";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return <AppContext.Provider value={{ isModalOpen, setIsModalOpen, isSidebarOpen, setIsSidebarOpen }}>{children}</AppContext.Provider>;
};

// Custom hook
export const useGlobalContext = () => {
    return useContext(AppContext);
};
