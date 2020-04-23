import React, { Component } from "react";
// import axios from "axios";
import Header from "./Header/Header";
import SideBar from "./SideBar/SideBar";

class App extends Component {
  constructor() {
    super();
    this.state = { studentInfo: [], toggle: false };
  }
  getHouse = (house) => {
    // console.log(house);
    this.setState({ studentInfo: house, toggle: true });

    // return this.setState({ house: house });
  };

  render() {
    return (
      <div>
        <div>
          <Header getHouse={this.getHouse} />
        </div>
        <div>
          <SideBar
            toggle={this.state.toggle}
            studentInfo={this.state.studentInfo}
          />
        </div>
      </div>
    );

    // (<Sidebar />);
  }
}

export default App;
