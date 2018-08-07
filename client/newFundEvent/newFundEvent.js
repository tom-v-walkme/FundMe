import React, { Component } from 'react';

import {FundEvents} from '../../imports/api/fundEvents';

import FundEventHeader from "../shared/fundEventHeader";

export default class NewFundEvent extends Component {

    constructor() {
        super();
        setTimeout(() => {
            ClassicEditor
                .create( document.querySelector( '#editor' ) )
                .then( newEditor => {
                    window.editor = newEditor;
                } )
                .catch( error => {
                    console.error(error);
                } );
        }, 1);
    }

    create(e) {
        e.preventDefault();

        const fundEvent = {
            associationId: this.refs.associationId.value,
            associationName: this.refs.name.value,
            logoUrl: this.refs.logoUrl.value,
            homePage: this.refs.homePage.value,
            phoneNumber: this.refs.phone.value,
            eventDetails: window.editor.getData(),
            bankCode: this.refs.bankCode.value,
            bankBranch: this.refs.bankBranch.value,
            bankAccount: this.refs.bankAccount.value,
            bankAccountOwner: this.refs.bankAccountOwner.value,
            payPalEmail: this.refs.payPalEmail.value,
            bitPhone: this.refs.bitPhone.value,
            eventName: this.refs.eventName.value,
            donationMonthlyGoal: this.refs.donationMonthlyGoal.value
        };

        let generatedId = FundEvents.insert(fundEvent);

        this.props.history.push('/fundEvent?id=' + generatedId);
    }

    render() {
        return (
            <div>
                <FundEventHeader />
                <form className="create-campaign" onSubmit={this.create.bind(this)}>
                    <div className="client-details">
                        <h3>פרטי עמותה</h3>
                        <label>שם העמותה</label>
                        <input type="text" ref="name"/>
                        <br/>

                        <label>לוגו העמותה (URL)</label>
                        <input type="text" ref="logoUrl"/>
                        <br/>

                        <label>דף הבית</label>
                        <input type="text" ref="homePage"/>
                        <br/>

                        <label>מספר עמותה</label>
                        <input type="text" ref="associationId"/>
                        <br/>

                        <label>טלפון</label>
                        <input type="text" ref="phone"/>
                        <br/>
                    </div>
                    <div className="funding-details">
                        <h3>פרטי תשלום</h3>
                        <label>סכום יעד חודשי</label>
                        <input type="text" ref="donationMonthlyGoal"/>

                        <label>בנק</label>
                        <input type="text" ref="bankCode"/>
                        <br/>

                        <label>מספר סניף</label>
                        <input type="text" ref="bankBranch"/>
                        <br/>

                        <label>מספר חשבון</label>
                        <input type="text" ref="bankAccount"/>
                        <br/>

                        <label>שם בעל החשבון</label>
                        <input type="text" ref="bankAccountOwner"/>
                        <br/>

                        <label>שם משתמש ב-PayPal</label>
                        <input type="text" ref="payPalEmail"/>
                        <br/>

                        <label>מספר טלפון (bit)</label>
                        <input type="text" ref="bitPhone"/>
                        <br/>

                    </div>
                    <br/>
                    <label class="event-name">שם האירוע</label>
                    <input type="text" class="full-width-input" ref="eventName"/>
                    <br/>

                    <label>כתבו משהו...</label>
                    <textarea name="content" id="editor"></textarea>
                    <input type="submit" value="צור עמוד"/>

                </form>
            </div>
        );
    }
}