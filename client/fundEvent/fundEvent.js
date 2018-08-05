import React, {Component} from 'react';
import {FundEvents} from '../../imports/api/fundEvents';
import {Donations} from '../../imports/api/fundEvents';
import {withTracker} from 'meteor/react-meteor-data';
import FundEventHeader from "./fundEventHeader";
import FundEventBar from "./fundEventBar";
import FundEventImage from "./funcEventImage";
import FundEventGeneralText from "./fundEventGeneralText";
import FundEventDonate from "./fundEventDonate";
import {parse} from 'query-string';

class FundEvent extends Component {
    constructor() {
        super();
    }

    render() {
        console.log("total donations",this.props.donations && this.props.donations.reduce((a, c) => a + c.payment, 0));
        return (
            <div>
                <FundEventHeader name={this.props.fundEvent && this.props.fundEvent.associationName}/>
                <p>{this.props.fundEvent && this.props.fundEvent.associationName}</p>
                <br/>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <FundEventImage url={this.props.fundEvent && this.props.fundEvent.logoUrl}/>
                            </td>
                            <td>
                                <FundEventBar totalDonation={100000} totalRepeatingDonations={20000} totalSingleDonations={40000}/>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br/>
                <FundEventGeneralText fundEvent={this.props.fundEvent}/>

                <br/>
                <br/>
                <FundEventDonate fundEvent={this.props.fundEvent}/>
            </div>
        );
    }
}

export default withTracker(() => {
    return {
        fundEvent: FundEvents.findOne({_id: parse(location.search).id}),
        donations: Donations.find({fundEventId: parse(location.search).id}).fetch()
    };
})(FundEvent);