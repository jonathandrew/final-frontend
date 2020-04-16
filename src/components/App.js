import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  connect = () => {
    const url = "/";
    axios.get(url).then((data) => {
      return console.log(data.data);
    });
  };
  render() {
    return <div>Hello</div>;
  }
}

export default App;
