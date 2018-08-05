import React, {Component} from 'react';
import {FundEvents} from '../../imports/api/fundEvents';
import {Donations} from '../../imports/api/fundEvents';
import {withTracker} from 'meteor/react-meteor-data';
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
        return (
            <div>
                <p>{this.props.fundEvent && this.props.fundEvent.associationName}</p>
                <br/>
                    <FundEventImage url={this.props.fundEvent && this.props.fundEvent.logoUrl}/>
                    <FundEventBar donations={this.props.donations}/>
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