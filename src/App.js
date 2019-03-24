import React, { Component } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  HashRouter,
  Link
} from "react-router-dom";
import About from "./components/About";
import Vip from "./components/Vip";
import Main from "./components/Main";
import NoMatch from "./components/Error";
import queryString  from 'query-string'

const User = (props) => {
  const params=new URLSearchParams(props.location.search);
  console.log(params.get('name'));
  console.log(params.get('age'));
  const parsed = queryString.parse(props.location.search);
  console.log(parsed);
  return <div>User {props.match.params.id}</div>;
}



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
                <NavLink exact to="/">
                  Main
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/about">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/vip">
                  Vip
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/new_home">
                  New Home
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/new_home2">
                  New Home2
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/user/nameisCool?name=zhangsan&age=12">
                  user
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/vi12p">
                  404
                </NavLink>
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
              <Route path={"/user/:id"} component={User} exact={true} />
              <Route
                path={"/new_home"}
                render={() => <div>New Home</div>}
                exact={true}
              />
              <Route
                path={"/new_home2"}
                render={props => <Main {...props} name={"react-router"} />}
                exact={true}
              />
              <Route component={NoMatch} strict={true} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
