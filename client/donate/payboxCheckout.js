import React, {Component} from 'react';

export class PayboxCheckout extends Component {
    render() {
        return (
            <div className="paybox-wrapper">
                <img src={"images/paybox.png"} className="paybox-image" />
                <p><strong><center><a href="http://hey.pbme.co/276da7">תרום</a></center></strong></p>
            </div>
        );
    }
}