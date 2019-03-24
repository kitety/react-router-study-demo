import React, { Component } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  HashRouter,
  Link
} from "react-router-dom";
import About from "./components/About";
import Vip from "./components/Vip";
import Main from "./components/Main";
import NoMatch from "./components/Error";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="page-header">
            <h1>
              title<small>subtext</small>
            </h1>
          </div>
          <div className="app-router">
            <ul>
              <li>
                <Link to="/">Main</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/vip">Vip</Link>
              </li>
              <li>
                <Link to="/vi12p">404</Link>
              </li>
            </ul>
            <Switch>
            <Route path={"/"} component={Main} exact={true} />
            <Route
            path={"/about"}
            component={About}
            exact={true}
            strict={true}
            />
            <Route path={"/vip"} component={Vip} exact={true} />
            <Route component={NoMatch} strict={true} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
