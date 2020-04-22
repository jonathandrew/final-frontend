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

  chooseHouse = (houses) => {
    this.setState.house = houses;
    this.setState.house.map((info) => {
      console.log(info.house);
    });
    // houses.map((item) => {

    // if (item.house === "Slytherin") return;
    // item.filter(item.house);
    // console.log(item);
    // console.log(this.setState.house);
    // if (item.house === "Gryffindor") return console.log(item);
    // });
    // event.preventDefault();
    // console.log(house);
  };
  componentDidMount() {
    axios.get("http://localhost:3000/character").then((results) => {
      this.setState({ info: results.data }, () => {
        console.log(this.setState.house);
      });
    });
  }
  render() {
    console.log(this.state.info);
    return (
      <div>
        <div>
          <div className="split farleft left">
            <div className="centered">
              <img src="/images/hufflepuff.jpeg" alt="..." />
              <h2>Hufflepuff</h2>
              <button
                onClick={() => {
                  return this.chooseHouse(this.state.info);
                }}
              >
                Students
              </button>
            </div>
          </div>

          <div className="split left">
            <div className="centered">
              <img src="images/gryffindor.jpeg" alt="..." />
              <h2>Gryffindor</h2>
              <button
                onClick={() => {
                  return this.chooseHouse(this.state.info);
                }}
              >
                Students
              </button>
            </div>
          </div>
          <div className="split right">
            <div className="centered">
              <img src="/images/ravenclaw.jpeg" alt="..." />
              <h2>Ravenclaw</h2>
              <button
                onClick={() => {
                  return this.chooseHouse(this.state.info);
                }}
              >
                Students
              </button>
            </div>
          </div>

          <div className="split farright right">
            <div className="centered">
              <img src="/images/slytherin.jpeg" alt="..." />
              <h2>Slytherin</h2>
              <button
                onClick={() => {
                  return this.chooseHouse(this.state.info);
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
