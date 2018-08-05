import React, {Component} from 'react';
import {FundEvents, Donations} from '../../imports/api/fundEvents';
import {withTracker} from 'meteor/react-meteor-data';
import {PayPalCheckout} from './payPalCheckout';
import {parse} from "query-string";

class MakeDonation extends Component {

    constructor() {
        super();

        this.state = {
            amount: 0,
            donateType: "monthly"
        };
    }

    onSuccessPayment = (payment) => {
        const donation = {
            firstName: this.refs.firstName.value,
            lastName: this.refs.lastName.value,
            socialId: this.refs.socialId.value,
            payment: this.state.amount,
            fundEventId: this.props.fundEvent._id,
            type: this.state.donateType
        };

        if (payment.paid) {
            Donations.insert(donation);
        }
    };

    render() {
        return (
            <div>
                <p>תרומה ל-{this.props.fundEvent && this.props.fundEvent.associationName}</p>

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
                <div className="donate-type">
                    <div id="monthly-donate" onClick={() => this.setState({donateType: "monthly"})}>תרומה חודשית</div>
                    <div id="single-donate" onClick={() => this.setState({donateType: "single"})}>תרומה חד-פעמית</div>
                </div>
                <div className="amount-details">
                    <div id="payment-25" onClick={() => this.setState({amount: 25})}>25 ש"ח</div>
                    <div id="payment-50" onClick={() => this.setState({amount: 50})}>50 ש"ח</div>
                    <div id="payment-100" onClick={() => this.setState({amount: 100})}>100 ש"ח</div>
                    <div id="payment-200" onClick={() => this.setState({amount: 200})}>200 ש"ח</div>
                    <div id="payment-other">אחר
                        <input type="number" id="other-amount" value={this.state.amount} onChange={(e) => this.setState({amount: e.target.amount})}></input>
                    </div>
                </div>
                <PayPalCheckout amount={parseInt(this.state.amount)} onSuccessPayment={this.onSuccessPayment.bind(this)}></PayPalCheckout>
            </div>
        );
    }
}

export default withTracker(() => {
    return {
        fundEvent: FundEvents.findOne({_id: 'GLMZHZPEWfmrnmz3p'}),
    };
})(MakeDonation);