import React, { Component } from 'react';
import axios from 'axios';
import ChildHeader from '../Components/Child/ChildHeader/ChildHeader'
import Wrapper from '../hoc/Wrapper/Wrapper'
import AssignedChores from '../Components/Child/AssignedChores/AssignedChores'

class ChildPage extends Component {
  state = {
    id: "",
    data: {},
    
  }
  
  componentDidMount() {
    const { id } = this.props.match.params;
    this.setState({
      id: id,
    })

    console.log(this.props.match.params);

    axios.get('/api/child/' + this.props.match.params.id)
    .then(response => {        
      this.setState({loading: false, data: response.data})           
    })
    .catch(function (error) {
      this.setState({loading: false});
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
         <AssignedChores />
      </Wrapper>
    
     
    );
  }
}

export default ChildPage;
