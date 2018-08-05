import React, { Component } from 'react';
import {withRouter} from "react-router-dom";

export default class FundMeLogo extends Component {
    goHome() {
        this.props.history.push('/home');
    }

    render() {
        return (
            <div>
                <img src="/images/fundme.svg" className="fundme-logo" onClick={this.goHome.bind(this)}/>
            </div>
        );
    }
}

// withRouter(FundMeLogo);