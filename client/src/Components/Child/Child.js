import React, { Component } from 'react';
import classes from './Child.css'

class Child extends Component {

    render() {
        return (
            <div className={classes.Child}>
                <img className={classes.Image} src={require(`../../assets/images/${this.props.image}`)} />
                <span>Name: {this.props.name} </span>
                
            </div>
        )
    }
}
export default Child