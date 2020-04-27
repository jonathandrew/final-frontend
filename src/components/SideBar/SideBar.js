import React, { Component } from "react";
import "./SideBar.css";
import axios from "axios";
import AppSpellBar from "../AddSpellBar";
import App from "../App";

class SideBar extends Component {
  constructor(props) {
    super();
    this.state = {
      spell: [],
      createdSpells: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:8080/spell")
      .then((results) => {
        this.setState({ spell: results.data });
      })
      .then(() => {
        axios
          .get("http://localhost:8080/spell/spells")
          .then((createdSpells) => {
            const updatedSpell = [...createdSpells.data, ...this.state.spell];

            // const arr1 = [1, 2, 3];
            // const arr2 = [4, 5, 6];
            // const arr3 = [...arr1, ...arr2];

            // Math.random()
            // console.log("Test", arr3);
            console.log("Updated spell", updatedSpell);

            this.setState({ createdSpells, spell: updatedSpell }, () => {
              console.log("Update", this.state.spell);
            });
          });
      });
  }
  render() {
    console.log("studentinfo", this.props.studentInfo);
    console.log("render", this.state.createdSpells);
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
              // console.log(faker)
              <div class="cardss">
                {/* <img src="img.jpg" alt="John" />
                style="width:100%"> */}
                <h1>{people.name}</h1>
                <br></br>
                <div>
                  <h1>Spells:</h1>
                  <h2>{this.state.spell[spell1].spell}</h2>
                  <p>{this.state.spell[spell1].effect}</p>
                  <h2>{this.state.spell[spell2].spell}</h2>
                  <p>{this.state.spell[spell2].effect}</p>
                  <h2>{this.state.spell[spell3].spell}</h2>
                  <p>{this.state.spell[spell3].effect}</p>
                  <br></br>
                </div>
                {/* <h1>{spell1}</h1> */}
                {/* <p class="title">{people.role}</p> */}
              </div>
            );
          })}
        </div>

        <AppSpellBar createdSpells={this.state.createdSpells} />
      </div>
    );
  }
}

export default SideBar;
