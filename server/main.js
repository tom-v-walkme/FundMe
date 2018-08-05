import {Meteor} from 'meteor/meteor';
import {FundEvents} from '../imports/api/fundEvents.js';

Meteor.startup(() => {
    const events = FundEvents.find({}).fetch();

    if (!events || events.length === 0) {
        FundEvents.insert({_id: '1', name: 'Product 1'});
        FundEvents.insert({_id: '2', name: 'Product 2'});
    }
});
