import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import Child from "../Components/Child/Child";
import classes from "./parent.css"


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
      <div className={classes.Parent}>
      <h1> Your Children </h1>   
      <div>  <Link to={"/login"}>Login.</Link>  </div>  





        {this.state.children.map( child => (
          <Child name={child.name}
                 image={child.image}
                 key={child._id} />
        ))}
      </div>
    );
  }
}

export default Parent;
