import {Meteor} from 'meteor/meteor';
import {FundEvents} from '../imports/api/fundEvents.js';
import {Donations} from '../imports/api/fundEvents.js';

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
            eventName:"אירוע התרמה למשהו טוב",
            eventDetails:"<p>כתבנו <strong>משהו</strong></p><ol><li>תרמו</li><li>תודה</li></ol>",
            bankCode:"14",
            bankBranch:"111",
            bankAccount:"99999",
            bankAccountOwner:"עמותה עמותה",
            payPalEmail:"amuta@gmail.co.il",
            bitPhone:"050-6666666"
        });
    }

    const donations = Donations.find({}).fetch();
    if (!donations || donations.length === 0) {
        Donations.insert({
            firstName: "Amir",
            lastName: "S",
            socialId: 1123,
            payment: 100,
            fundEventId: "GLMZHZPEWfmrnmz3p",
            type: "single"
        });

        Donations.insert({
            firstName: "Sami",
            lastName: "The Fireman",
            socialId: 1133,
            payment: 20,
            fundEventId: "GLMZHZPEWfmrnmz3p",
            type: "monthly"
        });

        Donations.insert({
            firstName: "Mani",
            lastName: "Umberla",
            socialId: 1223,
            payment: 30,
            fundEventId: "GLMZHZPEWfmrnmz3p",
            type: "single"
        });
    }
});
