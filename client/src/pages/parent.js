import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import Child from "../Components/Child";
import Images from "../Components/choresImages/choresImages";

class Parent extends Component {

  state = {
    children: []
  }

  componentDidMount() {
  
    axios.get('/api/children')
      .then(response => {        
        this.setState({children: response.data})
      
    })
    .catch(function (error) {
      console.log(error)
    })
    
  }

  render() {

    return (

      <div>
      <Images />
      <h1> You are a parent </h1>   
      <div>  <Link to={"/login"}>Login.</Link>  </div>  





        {this.state.children.map( child => (
          <Child name={child.name} />
        ))}
      </div>
    );
  }
}

export default Parent;
