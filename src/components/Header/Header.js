import React, { Component } from "react";
import "./Header.css";
import axios from "axios";
class Header extends Component {
  constructor() {
    super();
    this.state = {
      info: [],
    };
  }
  componentDidMount() {
    axios.get("http://localhost:3000/character").then((results) => {
      this.setState({ info: results.data }, () => {
        console.log(this.setState);
      });
    });
  }
  render() {
    console.log(this.state.info);
    return (
      <div className="header">
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
        <div className="box">
          <div className="card">
            <img src="/images/hufflepuff.jpeg" alt="..." />
            <div className="container">
              <h4>
                <b>John Doe</b>
              </h4>
              <p>Architect & Engineer</p>
            </div>
          </div>
          <div className="card">
            <img src="/images/slytherin.jpeg" alt="..." />
            <div className="container">
              <h4>
                <b>John Doe</b>
              </h4>
              <p>Architect & Engineer</p>
            </div>
          </div>
          <div className="card">
            <img src="/images/gryffindor.jpeg" alt="..." />
            <div className="container">
              <h4>
                <b>John Doe</b>
              </h4>
              <p>Architect & Engineer</p>
            </div>
          </div>
          <div className="card">
            <img src="/images/ravenclaw.jpeg" alt="..." />
            <div className="container">
              <h4>
                <b>John Doe</b>
              </h4>
              <p>Architect & Engineer</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
