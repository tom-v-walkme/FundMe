import React, { Component } from 'react';

// Task component - represents a single todo item
export default class FundEventImage extends Component {
    render() {
        return (
            <div className="fundEventImage">
                <img src={"http://www.good-deeds.co.il/wp-content/uploads/2017/03/gdolim.600.jpg"} />
            </div>
        );
    }
}