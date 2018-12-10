 import React, { Component } from 'react';
 import { Link } from "react-router-dom";


 // Call Remaining imports


class Children extends Component {
  render() {
    return (
      <div>
          <h1> You are a Children </h1>  
          <div>  <Link to={"/login"}>Login.</Link>  </div>  
      </div>
    

    );
  }
}

export default Children;
