import React from 'react';
import classes from './ChildHeader.css'

const childHeader = (props) => (
  <div className={classes.ChildHeader}>
    <p>Name: {props.name}</p>
    <p>Points: {props.points}</p>
  </div>
)

export default childHeader;