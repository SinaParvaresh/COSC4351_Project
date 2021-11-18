import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar";
import SignUp from "./components/pages/SignUp";
import Login from "./components/pages/login";
import reservations from "./components/pages/reservation";

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/reservations' component={reservations} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
