import React, {Component} from 'react';

export class BitCheckout extends Component {
    render() {
        return (
            <div className="bit-wrapper">
                <img src={"images/bit.png"} className="bit-image" />
                <p><strong>{this.props.fundEvent && this.props.fundEvent.bitPhone}</strong></p>
            </div>
        );
    }
}