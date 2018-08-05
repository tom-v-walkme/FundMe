import React, { Component } from 'react';
import './fundEventBar.css';

// Task component - represents a single todo item
export default class FundEventBar extends Component {

    constructor() {
        super();
    }

    componentDidMount() {
        this.calcDonations();
    }

    calcDonations() {
        var repeatingDonationsElement = document.getElementById("total-repeating-donations");
        var singleDonationsElement = document.getElementById("total-single-donations");

        if (!repeatingDonationsElement || !singleDonationsElement) {
            return;
        }

        let totalRepeatingDonations = this.props.donations.filter((d) => d.type == "monthly").reduce((a, c) => a + c.payment, 0);
        let totalSingleDonations = this.props.donations.filter((d) => d.type == "single").reduce((a, c) => a + c.payment, 0);
        let totalDonation = this.props.fundEvent.donationMonthlyGoal || (totalRepeatingDonations + totalSingleDonations);

        var RepeatingDonationsPercent =  100 * totalRepeatingDonations / totalDonation;
        var singleDonationsPercent =  100 * totalSingleDonations / totalDonation;

        repeatingDonationsElement.style.height = RepeatingDonationsPercent + "%";
        singleDonationsElement.style.bottom = RepeatingDonationsPercent + "%";
        singleDonationsElement.style.height = singleDonationsPercent + "%";
    }

    render() {
        this.calcDonations();
        return (
            <div className="donation-summery-outer">
            <p>תרומומטר</p>
                <div className="donation-bar-wrapper">
                    <p></p>
                    <div className="total-donation-bar">
                        <div id="total-repeating-donations"></div>
                        <div id="total-single-donations"></div>
                    </div>
                    <img src="/images/ProgressJar2.png" className="progress-jar" />
                </div>
            </div>
        );
    }
}