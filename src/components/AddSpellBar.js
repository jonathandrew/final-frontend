import React, { Component } from "react";
import Button from "./Button";
import axios from "axios";
import "./AddSpellBar.css";

class AddSpellBar extends Component {
  constructor() {
    super();
    this.state = {
      createdSpells: [],
      localSpell: {
        spell: "",
        effect: "",
      },
      toggle: false,
      passedSpells: [],
    };
  }
  handleChange = (event) => {
    let handledSpell = { ...this.state.localSpell };
    handledSpell[event.target.name] = event.target.value;
    this.setState({ localSpell: handledSpell }, () => {
      console.log(this.state.localSpell);
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    let emptySpell = { spell: "", effect: "" };
    let axiosConfig = {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
      },
    };
    this.setState({ localSpell: emptySpell });
    axios
      .post(
        "http://localhost:8080/spell/createspell",
        this.state.localSpell,
        axiosConfig
      )
      .then(() => {
        axios.get("http://localhost:8080/spell/spells").then((spells) => {
          this.setState({ createdSpells: spells.data });
          // console.log("New Spell", spell);
        });
      });
  };

  componentDidMount() {
    axios.get("http://localhost:8080/spell/spells").then((spells) => {
      this.setState({ createdSpells: spells.data });
      // console.log("New Spell", spell);
    });
  }

  showSpells = (showMeSpells) => {
    this.setState({ passedSpells: showMeSpells, toggle: true });
  };

  render() {
    // console.log('props', this.props.createdSpells.data);
    // console.log(this.state.createdSpells);
    return (
      <div>
        <div className=" hi">
          <div className="test">
            <button
              onClick={() => {
                return this.showSpells(this.setState.createdSpells);
              }}
            >
              Created Spells
            </button>
          </div>
          <form onSubmit={this.handleSubmit}>
            <h1>Spell</h1>
            <input
              type="text"
              placeholder="spell..."
              name="spell"
              value={this.state.localSpell.spell}
              onChange={this.handleChange}
            />
            <h1>Effect</h1>
            <input
              type="text"
              placeholder="effect..."
              name="effect"
              value={this.state.localSpell.effect}
              onChange={this.handleChange}
            />
            <br></br>
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="goodbye">
          <h3>New Spells</h3>
          {this.state.createdSpells ? (
            this.state.createdSpells.map((info) => {
              return (
                <div>
                  <ul>
                    <li>
                      <h2>
                        {info.spell}
                        <p>{info.effect}</p>
                      </h2>
                    </li>
                  </ul>
                </div>
              );
            })
          ) : (
            <p>No data</p>
          )}
        </div>
      </div>
    );
  }
}
export default AddSpellBar;
