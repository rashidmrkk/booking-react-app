import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";
import { ForgotPassword } from "./ForgotPassword";

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import React, { Component } from "react";
// export const SignInPage = SignIn
// export const SignUpPage = SignUp

class Auth extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { match } = this.props;
    return (
      <div>
        {console.log("path" + window.location.pathname)}

        <Router>
          <Switch>
            <Route
              path={`${match.url}/login`}
              component={(props) => {
                return <SignIn {...props} />;
              }}
            />
            <Route
              path={`${match.url}/signup`}
              component={(props) => {
                return <SignUp {...props} />;
              }}
            />
            <Route
              path={`${match.url}/forgotPassword`}
              component={(props) => {
                return <ForgotPassword {...props} />;
              }}
            />
            <Route render={() => <Redirect to={`${match.url}/login`} />} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Auth;
