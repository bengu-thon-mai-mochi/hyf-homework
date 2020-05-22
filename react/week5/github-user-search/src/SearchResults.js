import React, { useContext } from 'react';
import SearchContext from './Context';
import { Link } from "react-router-dom";

const SearchResults = () => {
    const { contextState } = useContext(SearchContext);

    return(
            <>
                {contextState.error && <p>Search failed: {contextState.error.message} </p>}
                {contextState.isLoading && <p>Loading...</p>}
                <ul> 
                    {contextState.userList.map(user =>
                         <Link to={user.login}><li key={user.login}>{user.login}</li></Link>
                    )}
                </ul>
            </>
    )
}

export default SearchResults;
