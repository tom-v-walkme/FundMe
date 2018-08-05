import React, { Component } from 'react';

import {withTracker} from 'meteor/react-meteor-data';
import {FundEvents} from '../../imports/api/fundEvents'
import FundEventShortcut from './fundEventShortcut';

class Home extends Component {
    constructor() {
        super();
    }

    renderFundEvents() {
        return this.props.fundEvents.map(event => {
            return <FundEventShortcut key={event._id} event={event}/>;
        });
    }

    createNewEvent() {
        this.props.history.push('/newFundEvent');
    }

    render() {
        return (
            <div>
                <img src="/images/fundme.svg" className="fundme-logo" />

                {this.renderFundEvents()}

                <input type='button' value='ליצירת עמוד תרומות' onClick={this.createNewEvent.bind(this)}/>
            </div>
        );
    }
}

export default withTracker(() => {
    return {
        fundEvents: FundEvents.find({}).fetch(),
    };
})(Home);