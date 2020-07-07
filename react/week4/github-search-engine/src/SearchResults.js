import React from 'react';
import UserInfo from './UserInfo';
import InfoPage from './InfoPage';

function SearchResults({userList, error, isLoading}){
    if(error){
        return(<InfoPage error={error} />)
    }else{
        return(<UserInfo isLoading={isLoading} userInfo={userList} />)
    }
};

export default SearchResults;