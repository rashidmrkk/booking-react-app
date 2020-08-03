import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { Dashboard } from "./Views";
import Auth from "./Views/Auth";
const App = () => (
  <Router>
    <Switch>
      <Route path="/auth" component={Auth} />
      <Route path="/dashboard" component={Dashboard} />
      <Route render={() => <Redirect to='/auth' />} />
    </Switch>
  </Router>
);

export default App;
