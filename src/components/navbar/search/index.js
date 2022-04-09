import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SearchResult } from '../../../result-context/searchResult';
import AppNavBar from '..';

const SearchBarComponent = () => {
    const {accTokenBearer} = useSelector((state) => state.token);
    const dispatch = useDispatch();

    const [queryInput, setQueryInput] = useState('');
    const {result, setResult} = SearchResult();

    const handleSearchQueryInput = () => {
        const getSearchData = async() =>{ 
            try {
                const response = await axios.get(`${process.env.REACT_APP_SPOTIFY_BASE_URL}search`, {
                    params: {
                        q: queryInput,
                        type: 'track',
                    },
                    headers: {
                        'Authorization': accTokenBearer
                    },
                });
                setResult(response.data.tracks.items);
            } catch(err) {
                console.log(err);
            }
        };
        getSearchData();
    };

    const handleQueryInputChanges = (e) => {
        setQueryInput(e.target.value);
    };

    //HANDLE LOGOUT
    // const handleLogout = () => {
    //     window.localStorage.removeItem(accTokenBearer)
    // }

    return (
        <AppNavBar>
            <ul>
                <li>
                    <input className="search-bar" value={queryInput} onChange={handleQueryInputChanges}></input>
                    <button className="search-btn" type="submit" onClick={handleSearchQueryInput}>Search</button>
                </li>
                <li>
                    <button className='logout-btn'>Logout</button>
                </li>
            </ul>
        </AppNavBar>
    );
};

export default SearchBarComponent;