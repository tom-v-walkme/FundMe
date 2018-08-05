import React, { Component } from 'react';

export default class FundEventImage extends Component {
    render() {
        return (
            <div className="fund-event-image">
                <img src={this.props.event.logoUrl} />
                <div className="event-hover-panel thumbnail">
                    <span className="association-title">{this.props.event.associationName + ' - ' + this.props.event.eventName}</span>
                    <br/><br/><br/>
                    <span className="association-description">{this.props.event.associationDescription}</span>
                </div>
            </div>
        );
    }
}