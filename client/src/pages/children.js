
import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
// import ChoresList from "../Components/ChoresList";
// Call Remaining imports
import API from "../utils/API.js";

class Children extends Component {

  state = {
    id: "",
    name: "Unknown",
    points: 0
  }

  componentDidMount() {
    this.setState({
      id: this.props.match.params.id
    });

    API.getChild(this.props.match.params.id).then((res) => {

      console.log(res.data);
      this.setState({
        name: res.data.name,
        points: res.data.points
      });

    });
  }

  render() {
    return (
      <div className="container">
        <h1> Hello, {this.state.name}! </h1>  
        <p>You have {this.state.points} points right now.</p>      
      </div>


    );
  }
}

export default Children;


