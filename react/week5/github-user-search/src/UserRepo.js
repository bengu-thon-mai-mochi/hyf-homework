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

    return(
            <>
                {userRepos.length > 0 
                    ? userRepos.map(repo =>
                        <li key={repo.name}>
                            <h4>{repo.name}</h4>
                            Language: {repo.language}
                            Description: {repo.language}
                            <a href={repo.html_url}>Visit for details!</a>
                        </li>
                    )
                    :
                    <p>The user doesn't have a public repo.</p> 
                }
            </>
    )
};

export default UserRepo;
