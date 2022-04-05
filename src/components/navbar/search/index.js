const SearchBarComponent = ({query, handleSearchValue, handleSearch, handleLogout}) => {
    return (
        <>
            <ul>
                <li>
                    <input className="search-bar" value={query} onChange={handleSearchValue}></input>
                    <button className="search-btn" type="submit" onClick={handleSearch}>Search</button>
                </li>
                <li>
                    <button className='logout-btn' onClick={handleLogout}>Logout</button>
                </li>
            </ul>
        </>
    )
}

export default SearchBarComponent;