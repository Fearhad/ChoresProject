import React from 'react';
import { Link } from "react-router-dom";

function HomePage () {
    return (
        <div>
            <h1>This is the HomePage</h1>
            <Link to={"/parent"}>I am a parent.</Link>
            <Link to={"/children"}>I am a parent.</Link>            
        </div>
    );
}

export default HomePage;
