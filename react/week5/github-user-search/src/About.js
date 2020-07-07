import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return(
        <main>
            <nav>
                <Link to="/">Home</Link>
            </nav>
            <section>
                <h3>About this project:</h3>
                <p>   
                Behind its simple UI to search for user profiles on Github, this website uses <span>React.js</span> and implements <span>react router</span> and  <span>context api</span> for data flow and user experience on the website. 
                </p>
            </section>
            <section>
                <h3>My experience building this project:</h3>
                <p>
                This project was exciting and fun to build. And, it made me fall in love with React library. Mainly, because in this project I realised coding pattern in react became very intuitive to build user interaction. Secondly, introducing new features was a lot easier compared to vanilla javascript. For example, introducting "loading..." text came later in the project after building the ui for fetching user names.
                </p>
            </section>  
        </main>
    )
};

export default About;
