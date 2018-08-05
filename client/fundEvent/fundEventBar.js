import React, { Component } from 'react';
import './fundEventBar.css';

// Task component - represents a single todo item
export default class FundEventBar extends Component {

    constructor() {
        super();
    }

    componentDidMount() {
        var repaetingDonationsElement = document.getElementById("total-repaeting-donations");
        var singleDonationsElement = document.getElementById("total-single-donations");

        var RepaetingDonationsPercent =  100 * this.props.totalRepaetingDonations / this.props.totalDonation;
        var singleDonationsPercent =  100 * this.props.totalSingleDonations / this.props.totalDonation;

        repaetingDonationsElement.style.height = RepaetingDonationsPercent + "%";
        singleDonationsElement.style.bottom = RepaetingDonationsPercent + "%";
        singleDonationsElement.style.height = singleDonationsPercent + "%";
    }

    render() {
        return (
            <div className="total-donation-bar">
                <div id="total-repaeting-donations"></div>
                <div id="total-single-donations"></div>
            </div>
        );
    }
}