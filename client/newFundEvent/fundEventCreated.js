import React, { Component } from 'react';

import {parse} from 'query-string';

export default class NewFundEvent extends Component {
    openEventPage() {
        let id = parse(this.props.location.search).id;
        this.props.history.push('/fundEvent?id=' + id);
    }

    render() {
        return (
            <div>
                <span>העמוד שלך נוצר!</span>
                <input type="button" onClick={this.openEventPage.bind(this)} value="לך לשם"/>
            </div>
        );
    }
}