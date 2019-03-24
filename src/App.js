import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route,HashRouter } from "react-router-dom";
import About from "./About";
import Vip from "./Vip";
import Main from "./Main";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <div className="page-header">
            <h1>
              title<small>subtext</small>
            </h1>
          </div>
          <Route path={"/about"} component={About} exact={true} />
          <Route path={"/vip"} component={Vip} exact={true} />
          <Route path={"/"} component={Main} exact={true} />
        </div>
      </HashRouter>
    );
  }
}

export default App;
