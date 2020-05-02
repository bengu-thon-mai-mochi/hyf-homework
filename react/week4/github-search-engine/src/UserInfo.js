import React from 'react';

function UserInfo({userInfo, isLoading}){
    if(isLoading){
        return ( 
           <ul> 
                <p> Loading... </p>
                {
                    userInfo.map(user => <li key={user.login}>{user.login}</li>)
                }
            </ul>
            )    
    } else { 
        return(
                <>
                    {userInfo.length === 0 && <p>Type into the box to search</p>}
                    <ul> 
                        {userInfo.map(user => <li key={user.login}>{user.login}</li>)}
                    </ul>
                </>
        )
    } 
};

export default UserInfo;