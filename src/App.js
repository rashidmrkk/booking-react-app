import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import SignIn from './Views/Auth/SignIn';
import SignUp from './Views/Auth/SignUp';
import {Dashboard} from './Views';
const App = () => (
  <Router>
    <Route exact path='/' component={SignIn} />
    <Route  path='/dashboard' component={Dashboard} />

    <Route  path='/signUp' component={SignUp} />
  </Router>
  
)

export default App;