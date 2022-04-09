import { useState, createContext, useContext } from 'react';

const SearchContext = createContext({});

const SearchProvider = ({children}) => {
    const [result, setResult] = useState([]);
    const [selectedSongs, setSelectedSongs] = useState([]);

    return (
        <SearchContext.Provider 
            value={{ result, setResult, selectedSongs, setSelectedSongs }}
        >
            {children}
        </SearchContext.Provider>
    );
};

const SearchResult = () => {
    const context = useContext(SearchContext);
    return context;
};

export {
    SearchProvider,
    SearchResult,
};