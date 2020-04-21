import React, { Component } from "react";
// import axios from "axios";
import Header from "./Header/Header";
import Sidebar from "./SideBar/SideBar";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  // connect = () => {
  //   const url = "localhost:3000/character";
  //   axios.get(url).then((data) => {
  //     console.log(data);
  //   });
  // };
  render() {
    return <Header />;
    // (<Sidebar />);
  }
}

export default App;
