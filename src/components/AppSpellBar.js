import React, { Component } from "react";
import Button from "./Button";
import axios from "axios";

class AddSpellBar extends Component {
  constructor() {
    super();
    this.state = {
      createdSpells: [],
      localSpell: {
        spell: "",
        effect: "",
      },
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
          this.setState({ createdSpells: spells });
          // console.log("New Spell", spell);
        });
      });
  };

  componentDidMount() {
    console.log("mount", this.props);
    // this.setState({
    //   createdSpells: this.props.createdSpells,
    // });
  }

  render() {
    console.log("props", this.props.createdSpells.data);
    // console.log(this.state.createdSpells);
    return (
      <div>
        <h3>New Spells</h3>
        {this.props.createdSpells.data ? (
          this.props.createdSpells.data.map((info) => {
            return (
              <div>
                <p>{info.spell}</p> <p>{info.effect}</p>
              </div>
            );
          })
        ) : (
          <p>No data</p>
        )}
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="spell..."
            name="spell"
            value={this.state.localSpell.spell}
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="effect..."
            name="effect"
            value={this.state.localSpell.effect}
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default AddSpellBar;
