import React, { Component } from "react";
import "./Header.css";
import axios from "axios";
class Header extends Component {
  constructor() {
    super();
    this.state = {
      info: [],
      house: [],
    };
  }

  chooseHouse = (house) => {
    // console.log(house);
    let houseResult = this.state.info.filter((item) => {
      if (item.house === house && item.role === "student") return item;
    });
    // console.log(houseResult);

    //send info to Header
    this.props.getHouse(houseResult);
  };

  componentDidMount() {
    axios.get("http://localhost:8080/character").then((results) => {
      this.setState({ info: results.data }, () => {
        // console.log(this.setState.house);
      });
    });
  }
  render() {
    // console.log(this.state.info);
    return (
      <div>
        <div className="header">
          <div className="container">
            <div className="card">
              <img src="/images/hufflepuff.jpeg" alt="..." />
              <h2>Hufflepuff</h2>
              <button
                onClick={() => {
                  return this.chooseHouse("Hufflepuff");
                }}
              >
                Students
              </button>
            </div>
          </div>

          <div className="container">
            <div className="card">
              <img src="images/gryffindor.jpeg" alt="..." />
              <h2>Gryffindor</h2>
              <button
                onClick={() => {
                  return this.chooseHouse("Gryffindor");
                }}
              >
                Students
              </button>
            </div>
          </div>
          <div className="container">
            <div className="card">
              <img src="/images/ravenclaw.jpeg" alt="..." />
              <h2>Ravenclaw</h2>
              <button
                onClick={() => {
                  return this.chooseHouse("Ravenclaw");
                }}
              >
                Students
              </button>
            </div>
          </div>

          <div className="container">
            <div className="card">
              <img src="/images/slytherin.jpeg" alt="..." />
              <h2>Slytherin</h2>
              <button
                onClick={() => {
                  return this.chooseHouse("Slytherin");
                }}
              >
                Students
              </button>
            </div>
          </div>
        </div>
        {/* <div>
          {this.state.info.map((names) => {
            return (
              <ul>
                <li>
                  {names.name}...{names.house}...{names.role}...
                  {names.bloodStatus}
                </li>
              </ul>
            );
          })}
        </div> */}
      </div>
    );
  }
}

export default Header;
