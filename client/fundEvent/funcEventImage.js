import React, { Component } from 'react';

// Task component - represents a single todo item
export default class FundEventImage extends Component {
    render() {
        return (
            <div className="fund-event-image">
                <img src={this.props.url} />
            </div>
        );
    }
}