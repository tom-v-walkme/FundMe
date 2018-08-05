import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';

class FundEventDonate extends Component {
    constructor() {
        super();
    }

    donate() {
        this.props.history.push('/donate?id=' + this.props.fundEvent._id)
    };

    render() {
        return (
            <div>
                <button type="button" className="btn btn-primary" onClick={this.donate.bind(this)}>תרומה קבועה</button>
                <button type="button" className="btn btn-secondary" onClick={this.donate.bind(this)}>תרומה חד-פעמית</button>
            </div>
        );
    }
}

export default withRouter(FundEventDonate)