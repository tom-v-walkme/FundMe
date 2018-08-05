import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import NewCampaign from './newCampaign/newCampaign';

Meteor.startup(() => {
    render(<NewCampaign />, document.getElementById('render-target'));
});