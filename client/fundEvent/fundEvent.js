import React, {Component} from 'react';
import {FundEvents} from '../../imports/api/fundEvents';
import {withTracker} from 'meteor/react-meteor-data';
import FundEventHeader from "./fundEventHeader";

class FundEvent extends Component {
    fundEvent;

    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <FundEventHeader />
                <p>{this.props.fundEvent && this.props.fundEvent.name}</p>
            </div>
        );
    }
}

export default withTracker(() => {
    return {
        fundEvent: FundEvents.findOne({_id: '1'}),
    };
})(FundEvent);