import React, {Component} from 'react';
import {FundEvents} from '../../imports/api/fundEvents';
import {Donations} from '../../imports/api/fundEvents';
import {withTracker} from 'meteor/react-meteor-data';
import FundEventBar from "./fundEventBar";
import FundEventImage from "./funcEventImage";
import FundEventGeneralText from "./fundEventGeneralText";
import FundEventDonate from "./fundEventDonate";
import FundEventHeader from "../shared/fundEventHeader";
import {parse} from 'query-string';

class FundEvent extends Component {
    constructor() {
        super();
    }

    render() {
        if (this.props.fundEvent && this.props.donations) {
            return (
                <div>
                    <FundEventHeader/>
                    <p>{this.props.fundEvent.associationName + '-' + this.props.fundEvent.eventName}</p>
                    <br/>
                    <FundEventImage event={this.props.fundEvent}/>

                    <FundEventBar donations={this.props.donations} fundEvent={this.props.fundEvent}/>
                    <br/>
                    <FundEventGeneralText fundEvent={this.props.fundEvent}/>
                    <br/>
                    <br/>
                    <FundEventDonate fundEvent={this.props.fundEvent}/>
                </div>
            );
        } else {
            return (
              <div></div>
            );
        }
    }
}

export default withTracker(() => {
    return {
        fundEvent: FundEvents.findOne({_id: parse(location.search).id}),
        donations: Donations.find({fundEventId: parse(location.search).id}).fetch()
    };
})(FundEvent);