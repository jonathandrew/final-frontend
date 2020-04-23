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
        // console.log(this.setState.spell);
      });
    });
  }
  render() {
    // console.log("Sidebar", this.props.studentInfo);
    return (
      <div className="sideBar">
        <div>
          {this.props.studentInfo.map((people) => {
            return (
              <div class="card">
                <img src="img.jpg" alt="John" />
                style="width:100%">
                <h1>{people.name}</h1>
                <p class="title">{people.role}</p>
                <p>{people.bloodStatus}</p>
                <a href="#">
                  <i class="fa fa-dribbble"></i>
                </a>
                <a href="#">
                  <i class="fa fa-twitter"></i>
                </a>
                <a href="#">
                  <i class="fa fa-linkedin"></i>
                </a>
                <a href="#">
                  <i class="fa fa-facebook"></i>
                </a>
              </div>
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
