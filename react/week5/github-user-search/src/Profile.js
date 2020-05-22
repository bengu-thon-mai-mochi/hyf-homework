import React, { useState, useEffect } from 'react';
import {useParams, Link} from 'react-router-dom';

import './Profile.css';
import UserRepo from './UserRepo';

const Profile = () => {
    const {username} = useParams();

    const [userinfo, setUserinfo] =  useState({});

    useEffect(() => {
        async function fetchData(){
            const res = await fetch(`https://api.github.com/users/${username}`);
            res
                .json()
                .then(res => {
                    setUserinfo(res)
                })
                .catch(err => console.log(err));
        }

        fetchData();
    }, [username]);

    return (
        <>
            <nav>
                <Link to="/about">About</Link>
                <Link to="/">Home</Link>
            </nav>
            <main>
                <div>
                    <h3>{userinfo.name} <span>({username})</span>'s profile</h3> 
                    <img src={userinfo.avatar_url} alt="" />
                    
                    <div>
                        {userinfo.bio && <p>{userinfo.bio}</p>}
                        {userinfo.location && <p>I'm based in {userinfo.location}</p>}
                        {userinfo.hireable && <p>I am open for exciting opportunities</p>}
                        {username.email && <p>You can reach me at {username.email}</p>}
                    </div>
                </div>
                <UserRepo username={username} />

            </main>
        </>
    );
};

export default Profile;
