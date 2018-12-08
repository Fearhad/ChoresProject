import React, { Component } from 'react';
import axios from 'axios';
import Child from "../Components/Child";

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
      <h1> You are a parent </h1>      
        {this.state.children.map( child => (
          <Child name={child.name} />
        ))}
      </div>
    );
  }
}

export default Parent;
