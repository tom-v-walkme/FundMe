import React, {Component} from 'react';
import {FundEvents, Donations} from '../../imports/api/fundEvents';
import {withTracker} from 'meteor/react-meteor-data';
import {PayPalCheckout} from './payPalCheckout';

class MakeDonation extends Component {

    constructor() {
        super();

        this.state = {
            value: 0
        };
    }

    onSuccessPayment = (payment) => {
        const donation = {
            firstName: this.refs.firstName.value,
            lastName: this.refs.lastName.value,
            socialId: this.refs.socialId.value,
            payment: this.state.value,
            fundEventId: this.props.fundEvent._id
        };

        if (payment.paid) {
            Donations.insert(donation);
        }
    };

    render() {
        return (
            <div>
                <p>Donate to {this.props.fundEvent && this.props.fundEvent.name}</p>

                <img src="C:/Projects/FundMe/client/images/fundme.svg" />

                <div className="donner-details">
                    <label>שם פרטי</label>
                    <input type="text" ref="firstName"/>
                    <br/>

                    <label>שם משפחה</label>
                    <input type="text" ref="lastName"/>
                    <br/>

                    <label>ת.ז</label>
                    <input type="text" ref="socialId"/>
                    <br/>
                </div>
                <div className="amount-details">
                    <div id="payment-25" onClick={() => this.setState({value: 25})}>25 ש"ח</div>
                    <div id="payment-50" onClick={() => this.setState({value: 50})}>50 ש"ח</div>
                    <div id="payment-100" onClick={() => this.setState({value: 100})}>100 ש"ח</div>
                    <div id="payment-200" onClick={() => this.setState({value: 200})}>200 ש"ח</div>
                    <div id="payment-other">אחר
                        <input type="number" id="other-amount" value={this.state.value} onChange={(e) => this.setState({value: e.target.value})}></input>
                    </div>
                </div>
                <PayPalCheckout amount={parseInt(this.state.value)} onSuccessPayment={this.onSuccessPayment.bind(this)}></PayPalCheckout>
            </div>
        );
    }
}

export default withTracker(() => {
    return {
        fundEvent: FundEvents.findOne({_id: 'GLMZHZPEWfmrnmz3p'}),
    };
})(MakeDonation);