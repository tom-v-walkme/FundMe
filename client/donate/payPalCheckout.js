import React, {Component} from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';

export class PayPalCheckout extends Component {
    render() {
        const client = {
            sandbox: 'AceU6rklFFq9LDEB5fbIW6Mfxy0qUWG9agn3y1SVIg4thq53OmLz3MMVO30RR8ihA6JMCKjXU_u8LEhj'
        };

        const style = {
            layout: 'vertical',
            size:   'medium',
            shape:  'rect',
            color:  'blue'
        };

        return (
            <PaypalExpressBtn client={client} currency={'ILS'} total={this.props.amount} style={style} onSuccess={(payment) => this.props.onSuccessPayment(payment)}/>
        );
    }
}