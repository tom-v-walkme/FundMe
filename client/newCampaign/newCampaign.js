import React, { Component } from 'react';

export default class CreateCampaign extends Component {

    create() {
        console.log('created!');
    }

    render() {
        return (
            <div>
                <form className="create-campaign" onSubmit={this.create.bind(this)}>
                    <input type="text" ref="name" placeholder="name"/>
                </form>
            </div>
        );
    }
}