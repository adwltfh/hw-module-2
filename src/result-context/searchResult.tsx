import React from 'react';
import { useState, createContext, useContext } from 'react';

type GlobalSearchContent = {
    result: any
    setResult: (r: any) => void
    selectedSongs: any
    setSelectedSongs: (s: any) => void
};

const SearchContext = createContext<GlobalSearchContent>({
    result: null,
    setResult: () => ({}),
    selectedSongs: null,
    setSelectedSongs: () => ({}),
});

const SearchProvider: React.FC = ({children}) => {
    const [result, setResult] = useState<any[]>([]);
    const [selectedSongs, setSelectedSongs] = useState<any[]>([]);

    return (
        <SearchContext.Provider 
            value={{ result, setResult, selectedSongs, setSelectedSongs }}
        >
            {children}
        </SearchContext.Provider>
    );
};

const SearchResult = () => {
    const context = useContext<any>(SearchContext);
    return context;
};

export {
    SearchProvider,
    SearchResult,
};