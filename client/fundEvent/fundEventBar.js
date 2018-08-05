import React, { Component } from 'react';
import './fundEventBar.css';

// Task component - represents a single todo item
export default class FundEventBar extends Component {

    constructor() {
        super();
    }

    componentDidMount() {
        var repeatingDonationsElement = document.getElementById("total-repeating-donations");
        var singleDonationsElement = document.getElementById("total-single-donations");

        var RepeatingDonationsPercent =  100 * this.props.totalRepeatingDonations / this.props.totalDonation;
        var singleDonationsPercent =  100 * this.props.totalSingleDonations / this.props.totalDonation;

        repeatingDonationsElement.style.height = RepeatingDonationsPercent + "%";
        singleDonationsElement.style.bottom = RepeatingDonationsPercent + "%";
        singleDonationsElement.style.height = singleDonationsPercent + "%";
    }

    render() {
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