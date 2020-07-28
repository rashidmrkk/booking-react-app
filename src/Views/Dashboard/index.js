import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link,
} from "react-router-dom";
import Services from "./Services";
import Workerspage from "./Workers";
import {Default} from '../../Layout'
class Dashboard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { match } = this.props;
    return (
      
        <div>
          {console.log("path"+window.location.pathname)}
          
        <Router>
          {window.location.pathname==="/dashboard" ? <div><Redirect to={`${match.url}/workers`}/></div>:null}
          <Route path={`${match.url}/services`} component={(props) => {
                    return (
                      <Default {...props}>
                        <Services {...props} />
                      </Default>
                    );
                  }} />
          <Route path={`${match.url}/workers`} component={(props) => {
                    return (
                      <Default {...props}>
                        <Workerspage {...props} />
                      </Default>
                    );
                  }} />
          
        </Router>
        </div>
    );
  }
}

export default Dashboard;





