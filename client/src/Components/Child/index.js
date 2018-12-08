import React, { Component } from 'react';

class Child extends Component {

    render() {
        return (
            <div className="child">
                Name: {this.props.name}
                
            </div>
        )
    }
}
export default Child