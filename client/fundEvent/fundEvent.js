import React, {Component} from 'react';
import {FundEvents} from '../../imports/api/fundEvents';
import {withTracker} from 'meteor/react-meteor-data';
import FundEventHeader from "./fundEventHeader";
import FundEventBar from "./fundEventBar";
import FundEventImage from "./funcEventImage";
import FundEventGeneralText from "./fundEventGeneralText";
import FundEventDonate from "./fundEventDonate";

class FundEvent extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <p>{this.props.fundEvent && this.props.fundEvent.associationName}</p>
                <FundEventHeader name={this.props.fundEvent && this.props.fundEvent.associationName}/>
                <br/>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <FundEventBar totalDonation={100000} totalRepeatingDonations={20000} totalSingleDonations={40000}/>
                            </td>
                            <td>
                                <FundEventImage/>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br/>
                <FundEventGeneralText />

                <div class="tabs">
                    <ul className="nav nav-tabs">
                        <li role="presentation" className="active">
                            <span data-target="#tab1" data-toggle="tab">פרטים:</span>
                        </li>

                        <li role="presentation" >
                            <span data-target="#tab2" data-toggle="tab">פרטים על האגודה:</span>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <div className="tab-pane active" id="tab1">
                            <div
                                className="event-description">{this.props.fundEvent && this.props.fundEvent.eventDescription}</div>
                        </div>
                        <div className="tab-pane" id="tab2">
                            <div
                                className="association-description">{this.props.fundEvent && this.props.fundEvent.associationDescription}</div>
                            <div className="phone-number">{this.props.fundEvent && this.props.fundEvent.phoneNumber}</div>
                        </div>
                    </div>
                </div>

                <br/>
                <br/>
                <FundEventDonate/>
            </div>
        );
    }
}

export default withTracker(() => {
    return {
        fundEvent: FundEvents.findOne({_id: 'GLMZHZPEWfmrnmz3p'}),
    };
})(FundEvent);