import React, { useState, useContext, createContext } from "react";

const SuperheroContext = createContext();

export const SuperheroProvider = ({ children }) => {
    const [superhero, setSuperhero] = useState(null)

    return (
        <SuperheroContext.Provider value={{ superhero, setSuperhero }}>
            {children}
        </SuperheroContext.Provider>
    );
};

export const useSuperhero = () => useContext(SuperheroContext);
