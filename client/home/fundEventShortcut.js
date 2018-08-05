import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';

import FundEventImage from '../fundEvent/funcEventImage';

class FundEventShortcut extends Component {
    goToEventPage() {
        this.props.history.push('/fundEvent?id=' + this.props.event._id);
    }

    render() {
        return (
            <div className="fund-event-shortcut">
                <div className="shortcut-image" onClick={this.goToEventPage.bind(this)}>
                    <FundEventImage url={this.props.event.logoUrl}/>
                </div>
            </div>
        );
    }
}

export default withRouter(FundEventShortcut)