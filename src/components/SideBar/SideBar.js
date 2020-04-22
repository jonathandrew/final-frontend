import React, { Component } from "react";
import "./SideBar.css";
import axios from "axios";
import AppSpellBar from "../AppSpellBar";
import App from "../App";

class SideBar extends Component {
  constructor(props) {
    super();
    this.state = {
      spell: [],
    };
  }
  componentDidMount() {
    axios.get("http://localhost:3000/spell").then((results) => {
      this.setState({ spell: results.data }, () => {
        console.log(this.setState.spell);
      });
    });
  }

  render() {
    console.log("Sidebar", this.props.studentInfo);
    return (
      <div className="sideBar">
        <div>
          {this.props.studentInfo.map((people) => {
            return (
              <ul>
                <li>
                  {people.name}...{people.role}...
                  {people.bloodStatus}...{people.species}
                </li>
              </ul>
            );
          })}
        </div>
        <div>
          {this.state.spell.map((spells) => {
            return (
              <ul>
                <li>
                  {spells.spell}...{spells.effect}
                </li>
              </ul>
            );
          })}
        </div>
        <AppSpellBar></AppSpellBar>
      </div>
    );
  }
}

export default SideBar;
