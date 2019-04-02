import React, { Component } from "react";
import { Prompt } from "react-router";

export default class About extends Component {
  state={
    inpVal:''
  }
  render() {
    return (
      <div>
        <Prompt message="Are you sure you want to leave?" when={!!this.state.inpVal}/>
        <span>离开的时候提示</span>
        <input onChange={e => this.setState({ inpVal: e.target.value })} value={this.state.inpVal}/>
      </div>
    );
  }
}
