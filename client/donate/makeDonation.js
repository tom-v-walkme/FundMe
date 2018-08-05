import React, {Component} from 'react';
import {FundEvents} from '../../imports/api/fundEvents';
import {withTracker} from 'meteor/react-meteor-data';
import {PayPalCheckout} from './payPalCheckout';

class MakeDonation extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <p>Donate to {this.props.fundEvent && this.props.fundEvent.name}</p>
                <PayPalCheckout></PayPalCheckout>
            </div>
        );
    }
}

export default withTracker(() => {
    return {
        fundEvent: FundEvents.findOne({_id: '1'}),
    };
})(MakeDonation);