import React from 'react';

function InfoPage({error}){
    return(
        <p>Search failed: {error.message} </p>
    )
}

export default InfoPage;