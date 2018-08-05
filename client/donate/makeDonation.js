import React, {Component} from 'react';
import {FundEvents, Donations} from '../../imports/api/fundEvents';
import {withTracker} from 'meteor/react-meteor-data';
import {PayPalCheckout} from './payPalCheckout';
import './makeDonation.css';
import {parse} from "query-string";
import FundEventHeader from "../fundEvent/fundEventHeader";

class MakeDonation extends Component {

    constructor() {
        super();

        this.state = {
            amount: 0,
            donateType: "monthly",
            otherAmount: false
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
                <FundEventHeader/>
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
                    <div id="monthly-donate" className={"btn btn-primary" + (this.state.donateType == "monthly" ? " chosen" : "")} onClick={() => this.setState({donateType: "monthly"})}>תרומה חודשית</div>
                    <div id="single-donate" className={"btn btn-primary" + (this.state.donateType == "single" ? " chosen" : "")} onClick={() => this.setState({donateType: "single"})}>תרומה חד-פעמית</div>
                </div>
                <div className="amount-details">
                    <div id="payment-25" className={"btn btn-primary" + (this.state.amount == 25 && this.state.otherAmount == false ? " chosen" : "")} onClick={() => this.setState({amount: 25, otherAmount: false})}>25 ש"ח</div>
                    <div id="payment-50" className={"btn btn-primary" + (this.state.amount == 50 && this.state.otherAmount == false ? " chosen" : "")} onClick={() => this.setState({amount: 50, otherAmount: false})}>50 ש"ח</div>
                    <div id="payment-100" className={"btn btn-primary" + (this.state.amount == 100 && this.state.otherAmount == false ? " chosen" : "")} onClick={() => this.setState({amount: 100, otherAmount: false})}>100 ש"ח</div>
                    <div id="payment-200" className={"btn btn-primary" + (this.state.amount == 200 && this.state.otherAmount == false ? " chosen" : "")} onClick={() => this.setState({amount: 200, otherAmount: false})}>200 ש"ח</div>
                    <div>
                        <span id="payment-other" className={"btn btn-primary" + (this.state.otherAmount == true ? " chosen" : "")} onClick={() => this.setState({otherAmount: true})}>אחר</span>
                        {this.state.otherAmount ? <input type="number" id="other-amount" value={this.state.amount} onChange={(e) => this.setState({amount: e.target.value})}></input> : ""}
                    </div>
                </div>
                <PayPalCheckout amount={parseInt(this.state.amount)} onSuccessPayment={this.onSuccessPayment.bind(this)}></PayPalCheckout>
            </div>
        );
    }
}

export default withTracker(() => {
    return {
        fundEvent: FundEvents.findOne({_id: parse(location.search).id}),
    };
})(MakeDonation);