import React, { Component } from 'react';
import {withRouter} from "react-router-dom";

// Task component - represents a single todo item
class FundEventHeader extends Component {
    goHome() {
        this.props.history.push('/home');
    }

    render() {
        return (
            <div className="fundEventHeader">
                <img src={'/images/fundme.svg'} className="fundMeImageLogo" onClick={this.goHome.bind(this)}/>
            </div>
        );
    }
}

export default withRouter(FundEventHeader)