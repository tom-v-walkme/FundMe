import React, { Component } from 'react';
import renderHTML from 'react-render-html';

// Task component - represents a single todo item
export default class FundEventGeneralText extends Component {
    render() {
        return (
            <div className="tabs fundEventGeneralText">
                <ul className="nav nav-tabs">
                    <li role="presentation" className="active">
                        <span data-target="#tab1" data-toggle="tab">אירועים קרובים</span>
                    </li>

                    <li role="presentation">
                        <span data-target="#tab2" data-toggle="tab">קצת עלינו</span>
                    </li>
                </ul>
                <div className="tab-content">
                    <div className="tab-pane active" id="tab1">
                        <div className="event-description">{this.props.fundEvent && renderHTML(this.props.fundEvent.eventDetails)}</div>
                    </div>
                    <div className="tab-pane" id="tab2">
                        <div className="association-description">{this.props.fundEvent && this.props.fundEvent.associationDescription}</div>
                        <div className="phone-number">{this.props.fundEvent && this.props.fundEvent.phoneNumber}</div>
                    </div>
                </div>
            </div>
        );
    }
}