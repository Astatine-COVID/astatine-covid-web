import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Calendar from "../pages/Calendar";
import Login from '../pages/Login';
import Records from '../pages/Records';
import Settings from '../pages/Settings';

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route path="/dashboard/calendar" component={Calendar} />
        <Route path="/dashboard/records" component={Records} />
        <Route path="/dashboard/settings" component={Settings} />
      </Switch>
    </Router>
  );
}
