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
      <div>
        <div className="split farleft left">
          <div className="centered">
            <img src="/images/hufflepuff.jpeg" alt="..." />
            <h2>Hufflepuff</h2>
            <p>Some text.</p>
          </div>
        </div>

        <div className="split left">
          <div className="centered">
            <img src="images/gryffindor.jpeg" alt="..." />
            <h2>Gryffindor</h2>
            <p>Some text here too.</p>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <img src="/images/ravenclaw.jpeg" alt="..." />
            <h2>Ravenclaw</h2>
            <p>Some text.</p>
          </div>
        </div>

        <div className="split farright right">
          <div className="centered">
            <img src="/images/slytherin.jpeg" alt="..." />
            <h2>Slytherin</h2>
            <p>Some text here too.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
