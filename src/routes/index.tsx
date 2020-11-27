import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';
import Dashboard from '../pages/Dashboard';
import SignIn from '../pages/SignIn/Index';
import SignUp from '../pages/SignUp/Index';
import ForgotPassword from '../pages/ForgotPassword';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" component={SignUp} />
    <Route path="/forgot-password" component={ForgotPassword} />
    <Route path="/dashboard" component={Dashboard} isPrivate />
  </Switch>
);

export default Routes;
