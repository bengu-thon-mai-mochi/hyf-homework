import React, { Component } from 'react';
import SearchBox from './SearchBox';
import SearchResults from './SearchResults';

class Page extends Component {
    state = {
        query: '',
        isLoading: false,
        userList: [],
        error: ''
    }

    updateUserList = (userName) => {
        if(userName !== ''){
            fetch(`https://api.github.com/search/users?q=${userName}`)
                .then(this.setState({isLoading: true}))
                .then(res => res.json())
                .then(data => this.setState ({
                     userList: data.items,
                     isLoading: false
                    }))
                .catch(err => this.setState({ 
                    error: err,
                    isLoading: false
                 }))
        } else {
            this.setState({
                query: '',
                isLoading: false,
                userList: [],
                error: ''
            });
        };
    }

    handleChange = (e) => {
        const userName = e.target.value;

        this.setState({
            query: userName
        });

        this.updateUserList(userName);
    } 

    render(){
        return(
            <main>
                <SearchBox handleChange={this.handleChange} />
                <SearchResults query={this.state.query} userList={this.state.userList} isLoading={this.state.isLoading} error={this.state.error} />
            </main>
        )
    }
}

export default Page;