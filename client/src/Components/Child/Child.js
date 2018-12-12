import React, { Component } from 'react';
import classes from './Child.css'
import {Link} from "react-router-dom"


class Child extends Component {
    
    render() {        
        return (            
            <div className={classes.Child}>
                <img alt="avatar" className={classes.Image} src={this.props.image} />
                <span>Name: {this.props.name} </span>
                <Link to={{
                    pathname: "/child/" + this.props.id
                }}>Details</Link>
            </div>            
        )
    }
}
export default Child