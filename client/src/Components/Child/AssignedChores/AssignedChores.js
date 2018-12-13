import React from 'react';
import classes from './AssignedChores.css'

const assignedChores = (props) => (
  <div className={classes.assignedChores}>
    Assigned Chores: {props.assignedChores}
  </div>
)

export default assignedChores;