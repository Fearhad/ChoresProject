import React, { Component } from 'react';
import axios from 'axios';
import ChildHeader from '../Components/Child/ChildHeader/ChildHeader'
import Wrapper from '../hoc/Wrapper/Wrapper'
import AssignedChores from '../Components/Child/AssignedChores/AssignedChores'

class ChildPage extends Component {
  state = {
    id: "",
    data: {},
    chores: []
  }
  
  componentDidMount() {
    this.setState({loading: true});
    const { id } = this.props.match.params;
    this.setState({
      id: id,
    })

    console.log(this.props.match.params);

    axios.get('/api/child/' + this.props.match.params.id)
    .then(response => {
      
      console.log(choresArray, this.state.chores)
      this.setState({data: response.data})  
      let choresArray = []
      for (let key in this.response.data) {
        choresArray[key] = this.response.data[key].value;
        this.state.chores.push(choresArray[key])
      }           
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
          points={this.state.data.points}>
         </ChildHeader>         
         <AssignedChores 
         assignedChores = {this.state.chores} />
      </Wrapper>
    
     
    );
    }
  }


export default ChildPage;
