import {Meteor} from 'meteor/meteor';
import {FundEvents} from '../imports/api/fundEvents.js';
import {Donations} from '../imports/api/fundEvents.js';

Meteor.startup(() => {
    const events = FundEvents.find({}).fetch();

    if (!events || events.length === 0) {
        FundEvents.insert({
            _id:"GLMZHZPEWfmrnmz3p",
            associationId:"123456",
            associationName:"לתת",
            associationDescription:"עכשיו גם אתם יכולים לעזור ולהעניק חיים חדשים ומלאי משמעות וחוויות לילדים ברחבי העולם",
            logoUrl:"http://desabancpa.co.il/wp-content/uploads/2016/10/Depositphotos_5983724_s-2015-250x250.jpg",
            homePage:"http://amuta.co.il",
            phoneNumber:"03-6666666",
            eventName:"אירוע התרמה לילדים וילדות",
            eventDetails:"<p>כתבנו <strong>משהו</strong></p><ol><li>תרמו</li><li>תודה</li></ol>",
            bankCode:"14",
            bankBranch:"111",
            bankAccount:"99999",
            bankAccountOwner:"עמותה עמותה",
            payPalEmail:"amuta@gmail.co.il",
            bitPhone:"050-6666666",
            donationMonthlyGoal: 7000
        });

        FundEvents.insert({
            _id:"LJaKdpNZPEDdhHiej",
            associationId:"111153456431",
            associationName:"חוות החופש",
            logoUrl:"data:image/jpeg;base64,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",
            homePage:"http://www.freedom-farm.org.il/",
            phoneNumber:"08-6695524",
            eventDetails:"<p><i><strong>בואו לתרום לחוות החופש</strong></i></p>",
            bankCode:"10",
            bankBranch:"332",
            bankAccount:"649817897",
            bankAccountOwner:"חוות החופש",
            payPalEmail:"freedom@gmail.com",
            bitPhone:"08-6695524",
            eventName: "התרמת לטיפולים רפואיים בחווה",
            donationMonthlyGoal: 2000
        });

        FundEvents.insert({
            _id:"29suDFHs8Dai5M6m6",
            associationId:"53456456",
            associationName:"חיים לבעלי חיים",
            logoUrl:"https://www.mimoona.co.il/UserPic/2931&type=big",
            homePage:"http://www.yad4.co.il/amuta-94",
            phoneNumber:"03-5652121",
            eventDetails:"<p>חיים לבעלי חיים!!!</p>",
            bankCode:"12",
            bankBranch:"557",
            bankAccount:"7456116",
            bankAccountOwner:"חיים לבעלי חיים",
            payPalEmail:"chaimtoanimals@gmail.com",
            bitPhone:"03-5652121",
            eventName: "גיוס למען בעלי חיים",
            donationMonthlyGoal: 5500
        });
    }

    const donations = Donations.find({}).fetch();
    if (!donations || donations.length === 0) {
        Donations.insert({
            firstName: "Amir",
            lastName: "S",
            socialId: 1123,
            payment: 1000,
            fundEventId: "GLMZHZPEWfmrnmz3p",
            type: "single"
        });

        Donations.insert({
            firstName: "Sami",
            lastName: "The Fireman",
            socialId: 1133,
            payment: 2000,
            fundEventId: "GLMZHZPEWfmrnmz3p",
            type: "monthly"
        });

        Donations.insert({
            firstName: "Mani",
            lastName: "Umberla",
            socialId: 1223,
            payment: 500,
            fundEventId: "GLMZHZPEWfmrnmz3p",
            type: "single"
        });

        Donations.insert({
            firstName: "Mani",
            lastName: "Umberla",
            socialId: 1223,
            payment: 800,
            fundEventId: "LJaKdpNZPEDdhHiej",
            type: "single"
        });

        Donations.insert({
            firstName: "Sami",
            lastName: "The Fireman",
            socialId: 1133,
            payment: 2300,
            fundEventId: "29suDFHs8Dai5M6m6",
            type: "monthly"
        });
    }
});
