import React, { Component } from 'react';

class Child extends Component {

    render() {
        return (
            <div className="child">
                {this.props.name}
            </div>
        )
    }
}
export default Child