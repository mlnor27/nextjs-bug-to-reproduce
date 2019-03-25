import { Component } from "react";
import Router from "next/router";

export default class About extends Component {
  componentDidMount() {
    Router.beforePopState(() => {
      window.alert("URL shouldn't change 😢");
      return false;
    });
  }

  render() {
    return <h1>About</h1>;
  }
}
