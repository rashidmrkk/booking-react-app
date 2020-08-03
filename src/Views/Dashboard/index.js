import React, { Component } from "react";
import {
  
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Services from "./Services";
import Workerspage from "./Workers";
import { Default } from "../../Layout";
class Dashboard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { match } = this.props;
    return (
      <div>
          <Switch>
            <Route
              path={`${match.url}/services`}
              component={(props) => {
                return (
                  <Default {...props}>
                    <Services {...props} />
                  </Default>
                );
              }}
            />
            <Route
              path={`${match.url}/workers`}
              component={(props) => {
                return (
                  <Default {...props}>
                    <Workerspage {...props} />
                  </Default>
                );
              }}
            />
            <Route render={() => <Redirect to={`${match.url}/workers`} />} />
          </Switch>
        
      </div>
    );
  }
}

export default Dashboard;
