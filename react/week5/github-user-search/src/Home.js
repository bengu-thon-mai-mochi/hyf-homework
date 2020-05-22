import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { SearchProvider } from './Context';

import SearchBox from './SearchBox';
import SearchResults from './SearchResults';

class Home extends Component {
    state = {
        isLoading: false,
        userList: [],
        error: ''
    };

    updateUserList = (userList) => {
        this.setState(userList);
    };

    render(){
        return(
            <SearchProvider value={{ contextState: this.state, updateUserList: this.updateUserList }}>
                <nav>
                    <Link to="/about">About</Link>
                </nav>
                <SearchBox />
                <SearchResults />   
            </SearchProvider>
        )
    };
}

export default Home;
