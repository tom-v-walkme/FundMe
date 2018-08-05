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

        this.totalRepeatingDonations = this.props.donations.filter((d) => d.type == "monthly").reduce((a, c) => a + c.payment, 0);
        this.totalSingleDonations = this.props.donations.filter((d) => d.type == "single").reduce((a, c) => a + c.payment, 0);
        this.totalDonation = this.props.fundEvent.donationMonthlyGoal || (this.totalRepeatingDonations + this.totalSingleDonations);

        var RepeatingDonationsPercent =  100 * this.totalRepeatingDonations / this.totalDonation;
        var singleDonationsPercent =  100 * this.totalSingleDonations / this.totalDonation;

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
                    <p className="total-donation">היעד {this.totalDonation}₪</p>
                    <div className="total-donation-bar">
                        <div id="total-repeating-donations"></div>
                        <div id="total-single-donations"></div>
                    </div>
                    <img src="/images/ProgressJar2.png" className="progress-jar" />
                </div>
                <div className="donation-summery">
                    <p className="donation-description">תרומות חד פעמיות</p>
                    <p className="donation-amount single-donation-amount">{this.totalSingleDonations}₪</p>
                    <p className="donation-description">תרומות קבועות</p>
                    <p className="donation-amount repeating-donation-amount">{this.totalRepeatingDonations}₪</p>
                </div>
            </div>
        );
    }
}