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

        var totalDonation = 20000;
        var totalRepaetingDonations = 10000;
        var totalSingleDonations = 5000;

        var RepaetingDonationsPercent =  100 * totalRepaetingDonations / totalDonation;
        var singleDonationsPercent =  100 * totalSingleDonations / totalDonation;

        repaetingDonationsElement.style.top = RepaetingDonationsPercent + "%";
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