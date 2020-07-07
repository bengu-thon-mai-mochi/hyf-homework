import React, { useContext } from 'react';
import SearchContext from './Context';

const SearchBox = () => { 
    const {updateUserList} = useContext(SearchContext);

    const fetchUserList = (userName) => {
        if(userName !== ''){
            fetch(`https://api.github.com/search/users?q=${userName}`)
                .then(updateUserList({isLoading: true}))
                .then(res => res.json())
                .then(data => updateUserList({
                     userList: data.items,
                     isLoading: false
                    }))
                .catch(err => updateUserList({ 
                    error: err,
                    isLoading: false
                 }))
        } else {
            updateUserList({
                isLoading: false,
                userList: [],
                error: ''
            });
        };
    };

    const handleChange = (e) => {
        const userName = e.target.value;

        fetchUserList(userName);
    };

    return (
        <input placeholder="Search Users" onChange={handleChange} />
    )
};

export default SearchBox;