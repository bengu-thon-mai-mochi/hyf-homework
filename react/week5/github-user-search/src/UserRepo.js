import React, {useEffect, useState} from 'react';

const UserRepo = ( {username} ) => {
    const [userRepos, setUserRepos] =  useState({});

    useEffect(() => {
        async function fetchData(){
            const res = await fetch(`https://api.github.com/users/${username}/repos`);
            res
                .json()
                .then(res => {
                    setUserRepos(res)
                })
                .catch(err => console.log(err));
        }

        fetchData();
    }, [username]);

    return (
        <div>
            {console.log(userRepos)}
        </div>
    );
};

export default UserRepo;
