import React from 'react'
import HomeImg from '../images/Home.png';

const Home = (props) => {
    console.log("props", props);
    return (
        <div>
            <h1>This is our Home page.</h1>
            <div>
                <img src={HomeImg} alt={HomeImg} />
            </div>
        </div>
    )
}

export default Home
