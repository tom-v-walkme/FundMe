import React, { Component } from 'react';
import './fundEventBar.css';

// Task component - represents a single todo item
export default class FundEventBar extends Component {

    constructor() {
        super();
    }

    calcDonations() {
        var repeatingDonationsElement = document.getElementById("total-repeating-donations");
        var singleDonationsElement = document.getElementById("total-single-donations");

        if (!repeatingDonationsElement || !singleDonationsElement) {
            return;
        }

        let totalDonation = 500;
        let totalRepeatingDonations = this.props.donations.reduce((a, c) => a + c.payment, 0);
        let totalSingleDonations = this.props.donations.reduce((a, c) => a + c.payment, 0);

        var RepeatingDonationsPercent =  100 * totalRepeatingDonations / totalDonation;
        var singleDonationsPercent =  100 * totalSingleDonations / totalDonation;

        repeatingDonationsElement.style.height = RepeatingDonationsPercent + "%";
        singleDonationsElement.style.bottom = RepeatingDonationsPercent + "%";
        singleDonationsElement.style.height = singleDonationsPercent + "%";
    }

    render() {
        this.calcDonations();
        return (
            <div className="donation-bar-wrapper">
                <div className="total-donation-bar">
                    <div id="total-repeating-donations"></div>
                    <div id="total-single-donations"></div>
                </div>
                <img src="/images/ProgressJar2.png" className="progress-jar" />
            </div>
        );
    }
}