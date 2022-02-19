import React from 'react';

function HomePage() {
    return ( 
        <>
        <h1 className="home">Welcome :) </h1>
        <p className="home" > Welcome on this page that was build during my learing process of JavaScrip, Node.js and React.js. Hope you will like it :) </p>
        <h2 className="home">Proof of many concepts</h2>
        <p className="home"> Few words of overview first. This is a small project/page that is a Po(m)C "Proof of many concetps".  </p>
            <ul className="home"> Build to proof:
                <li>that I still can code</li>
                <li>that I still can learn new technologies
                    <ul>
                        <li>JavaScript</li>
                        <li>JSX</li>
                        <li>React.js</li>
                        <li>Git and GitHub</li>
                        <li>Node.js</li>
                        <li>Bootstrap</li>
                    </ul>
                </li>
                <li>that I will enjoy and have fun with code</li>
            </ul>
        </>
     );
}

export default HomePage;