import React, { Component } from 'react';
import './fundEventheader.css';

// Task component - represents a single todo item
export default class FundEventHeader extends Component {
    render() {
        return (
            <div className="fundEventHeader">
                FUND ME - {this.props.name}
            </div>
        );
    }
}