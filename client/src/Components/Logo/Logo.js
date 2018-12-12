import React from 'react'
import classes from './Logo.css'
import choresLogo from '../../assets/images/ur-chores.png'

const logo = (props) => (
  <div className={classes.Logo}>
    <img src={choresLogo} alt="Site Logo"></img>
    <span className={classes.Span}>YourChores</span>
  </div>
)

export default logo;