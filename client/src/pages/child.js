import React, { Component } from 'react';
import axios from 'axios';
class ChildPage extends Component {
  state = {
    id: "",
    data: {}
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.setState({
      id: id,
    })

    console.log(this.props.match.params);

    axios.get('/api/child/' + this.props.match.params.id)
    .then(response => {        
      this.setState({data: response.data})      
    })
    .catch(function (error) {
    console.log(error)
    })
  }

  render() {
    return (
      <div className="container">
        <p>Name: {this.state.data.name} </p>
        Child ID: {this.state.id}
      </div>
    

    );
  }
}

export default ChildPage;
