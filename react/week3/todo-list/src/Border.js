import React from 'react';
import './Border.css'

function Border(props){
    return (
        <main className="mainContentBorder">
            {props.children}   
        </main>
    )
}

export default Border;
