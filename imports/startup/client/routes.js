import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { App } from '../../ui/layouts/app';
import { Medicines } from '../../ui/pages/MedicinesPage';
import { DonatePage } from '../../ui/pages/DonatePage';
import { Cart } from '../../ui/pages/CartPage';
import { Donations } from '../../ui/pages/DonationsPage';
import { MedicinePage } from '../../ui/pages/MedicinePage';



import { Index } from '../../ui/pages/IndexPage';
import { Login } from '../../ui/pages/LoginPage';
import { NotFound } from '../../ui/pages/NotFoundPage';
import { RecoverPassword } from '../../ui/pages/RecoverPasswordPage';
import { ResetPassword } from '../../ui/pages/ResetPasswordPage';
import { Signup } from '../../ui/pages/SignupPage';

const requireAuth = (nextState, replace) => {
  if (!Meteor.loggingIn() && !Meteor.user()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname },
    });
  }
};

Meteor.startup(() => {
  render(
    <Router history={ browserHistory }>
      <Route path="/" component={ App }>
        <IndexRoute name="index" component={ Index } onEnter={ requireAuth } />
        <Route name="medicines" path="/medicines" component={ Medicines } onEnter={ requireAuth } />
        <Route name="medicine" path="/medicine/:brand" component={ MedicinePage } onEnter={ requireAuth } />

        <Route name="donations" path="/donations" component={ Donations } onEnter={ requireAuth } />

        <Route name="donate" path="/donate/:brand/:manufacturer/:category" component={ DonatePage } onEnter={ requireAuth } />
        <Route name="cart" path="/cart" component={ Cart } onEnter={ requireAuth } />

        <Route name="login" path="/login" component={ Login } />
        <Route name="recover-password" path="/recover-password" component={ RecoverPassword } />
        <Route name="reset-password" path="/reset-password/:token" component={ ResetPassword } />
        <Route name="signup" path="/signup" component={ Signup } />
        <Route path="*" component={ NotFound } />
      </Route>
    </Router>,
    document.getElementById('react-root')
  );
});
