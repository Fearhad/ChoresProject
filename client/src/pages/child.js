import React, { Component } from 'react';
import axios from 'axios';
import ChildHeader from '../Components/Child/ChildHeader/ChildHeader'
import Wrapper from '../hoc/Wrapper/Wrapper'
import AssignedChores from '../Components/Child/AssignedChores/AssignedChores'
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
      console.log(this.state.data)
           
    })
    .catch(function (error) {
    console.log(error)
    })
  }
  
  render() {
    return (
      <Wrapper>
      
        <ChildHeader  
          name={this.state.data.name}
          points={this.state.data.points}/>
        <AssignedChores
          assignedChores={this.state.data.assignedchores} />
      </Wrapper>
    

    );
  }
}

export default ChildPage;
