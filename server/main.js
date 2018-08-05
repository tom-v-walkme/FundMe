import {Meteor} from 'meteor/meteor';
import {FundEvents} from '../imports/api/fundEvents.js';

Meteor.startup(() => {
    const events = FundEvents.find({}).fetch();

    if (!events || events.length === 0) {
        FundEvents.insert({
            _id:"GLMZHZPEWfmrnmz3p",
            associationId:"123456",
            associationName:"עמותה",
            associationDescription:"תיאור תיאור תיאור",
            logoUrl:"http://desabancpa.co.il/wp-content/uploads/2016/10/Depositphotos_5983724_s-2015-250x250.jpg",
            homePage:"http://amuta.co.il",
            phoneNumber:"03-6666666",
            eventDescription: "עוד תיאור תיאור תיאור עוד",
            eventDetails:"<p>כתבנו <strong>משהו</strong></p><ol><li>תרמו</li><li>תודה</li></ol>",
            bankCode:"14",
            bankBranch:"111",
            bankAccount:"99999",
            bankAccountOwner:"עמותה עמותה",
            payPalEmail:"amuta@gmail.co.il",
            bitPhone:"050-6666666"
        });
    }
});
