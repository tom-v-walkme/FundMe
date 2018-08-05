import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import { renderRoutes } from './routing/route';

import FundMeLogo from './shared/fundMeLogo';

Meteor.startup(() => {
    render(<FundMeLogo />, document.getElementById('logo'));
    render(renderRoutes(), document.getElementById('render-target'));
});