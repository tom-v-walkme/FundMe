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
                <div className="events-shortcuts-wrapper">
                    {this.renderFundEvents()}
                    <input className="create-event-btn" type='button' value='ליצירת עמוד תרומות' onClick={this.createNewEvent.bind(this)}/>
                </div>
            </div>
        );
    }
}

export default withTracker(() => {
    return {
        fundEvents: FundEvents.find({}).fetch(),
    };
})(Home);