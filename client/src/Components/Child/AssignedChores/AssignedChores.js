import React from 'react';
import classes from './AssignedChores.css';
import Wrapper from '../../../hoc/Wrapper/Wrapper'

const assignedChores = (props) => {
 console.log(props);
 return(
   <Wrapper>
 <div className={classes.AssignedChores}>
   <h1> Assigned Chores</h1>
   <ul>
     <li><span>20</span><img src={require('../../../assets/images/walk-dog.png')}></img>Walk Dog</li>
     <li><span>10</span><img src={require('../../../assets/images/recycling.png')}></img>Recycling</li>
     <li><span>30</span><img src={require('../../../assets/images/babysitting.png')}></img>Babysitting</li>
   </ul>
  </div>
  <div className={classes.AssignedChores}>
    <h1> Available Chores</h1>
   <ul>
   <li><span>30</span><img src={require('../../../assets/images/babysitting.png')}></img>Babysitting</li>
     <li><span>20</span><img src={require('../../../assets/images/walk-dog.png')}></img>Walk Dog</li>
     <li><span>10</span><img src={require('../../../assets/images/recycling.png')}></img>Recycling</li>
     
   </ul>
  </div>
  </Wrapper>
 )
}

export default assignedChores;