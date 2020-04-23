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
    console.log(this.state.spell.length);
    // console.log("Sidebar", this.props.studentInfo);
    return (
      <div className="sideBar">
        <div>
          {this.props.studentInfo.map((people) => {
            let spell1 = Math.floor(Math.random() * Math.floor(151));
            // console.log(spell1);
            let spell2 = Math.floor(Math.random() * Math.floor(151));
            let spell3 = Math.floor(Math.random() * Math.floor(151));
            return (
              <div class="card">
                {/* <img src="img.jpg" alt="John" />
                style="width:100%"> */}
                <h1>{people.name}</h1>
                <div>
                  <h1>Spells:</h1>
                  <p>{this.state.spell[spell1].spell}</p>
                  <br></br>
                  <p>{this.state.spell[spell2].spell}</p>
                  <br></br>
                  <p>{this.state.spell[spell3].spell}</p>
                </div>
                <h1>{spell1}</h1>
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

        {/* <div>
          {this.state.spell.map((spells) => {
            return (
              <ul>
                <li>
                  {spells.spell}...{spells.effect}
                </li>
              </ul>
            );
          })}
        </div> */}
        <AppSpellBar></AppSpellBar>
      </div>
    );
  }
}

export default SideBar;
