import React, { Component } from 'react';
import axios from 'axios';
import ChildHeader from '../Components/Child/ChildHeader/ChildHeader'


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

      <div>
         <ChildHeader  
            name={this.state.data.name}
            points={this.state.data.points}>
        </ChildHeader>

              


      </div>
     
    );
  }
}

export default ChildPage;
