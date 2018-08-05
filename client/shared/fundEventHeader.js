import React, { Component } from 'react';

// Task component - represents a single todo item
export default class FundEventHeader extends Component {
    render() {
        return (
            <div className="fundEventHeader">
                <img src={'/images/fundme.svg'} className="fundMeImageLogo" />
            </div>
        );
    }
}