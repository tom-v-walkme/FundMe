import React, {Component} from 'react';
import {FundEvents} from '../../imports/api/fundEvents';
import {withTracker} from 'meteor/react-meteor-data';

class FundEvent extends Component {
    fundEvent;

    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <p>{this.props.fundEvent && this.props.fundEvent.associationName}</p>
            </div>
        );
    }
}

export default withTracker(() => {
    return {
        fundEvent: FundEvents.findOne({_id: 'GLMZHZPEWfmrnmz3p'}),
    };
})(FundEvent);