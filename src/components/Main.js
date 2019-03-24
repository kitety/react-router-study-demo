import React, { Component } from "react";
import { withRouter } from "react-router";

const Hello = (props) => {
  console.log(props)
  return <div>Hello Component</div>;
};
const WithRouterHello = withRouter(Hello);

export default class Main extends Component {
  handleBtnCLick = () => {
    this.props.history.push("/vip");
  };
  render() {
    console.log(this.props);
    return (
      <div>
        <p>Main Page</p>
        <button onClick={this.handleBtnCLick}>jump</button>
        <WithRouterHello/>
      </div>
    );
  }
}
