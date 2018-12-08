 import React, { Component } from 'react';
 import axios from 'axios';


class Parent extends Component {

  state = {
    children: []
  }

  componentDidMount() {
  
    axios.get('/parent/childrenDB')
    .then(response => {
      this.setState({children: response.data})
      console.log(response.data)
      console.log('test')
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
