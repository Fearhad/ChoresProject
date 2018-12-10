import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Link } from "react-router-dom";

function HomePage () {
    return (
        <div>
            <h1>This is the HomePage v2 </h1>
            <div>  <Link to={"/loginregister"}>New User.</Link>  </div>     
            <div>  <Link to={"/parent"}>I am a parent.</Link>  </div>     
            <div> <Link to={"/children"}>I am a children.</Link>  </div>           
        </div>
    );
}

export default HomePage;
