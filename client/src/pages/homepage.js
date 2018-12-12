import React from 'react';
import { Link } from "react-router-dom";

function HomePage () {
    return (
        <div className="container">
            <h1>This is the Chores Project</h1>
            <p>Let's see how much allowance your children have earned!</p>            
            <Link to={"/parent"}>I am a parent.</Link>
            
        </div>
    );
}

export default HomePage;
