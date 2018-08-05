import React, { Component } from 'react';

// Task component - represents a single todo item
export default class FundEvent extends Component {
    render() {
        return (
            <li>{this.props.fundEvent.name}</li>
        );
    }
}