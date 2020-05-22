import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return(
        <main>
            <nav>
                <Link to="/">Home</Link>
            </nav>
                <p>This project utilizes .... technologies!</p>
        </main>
    )
};

export default About;
