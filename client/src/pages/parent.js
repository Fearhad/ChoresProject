 import React, { Component } from 'react';
 import axios from 'axios';


class Parent extends Component {

  state = {
    children: []
  }

  componentDidMount() {
  
    axios.get('/api/children')
      .then(response => {
        console.log(response.data)
        this.setState({children: response.data})
      
    })
    .catch(function (error) {
      console.log(error)
    })
    
  }

  

  render() {

    return (

      <h1> You are a parent </h1>
    );
  }
}

export default Parent;
