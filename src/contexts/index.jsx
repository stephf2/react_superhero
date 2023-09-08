import React, { useState, useContext, createContext } from "react";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
    const [search, setSearch] = useState('');
    const [superheros, setSuperheros] = useState([]);
    const [inputText, setInputText] = useState('');

    return (
        <SearchContext.Provider value={{ search, setSearch, superheros, setSuperheros, inputText, setInputText }}>
            {children}
        </SearchContext.Provider>
    );
};

export const useSearch = () => useContext(SearchContext);
