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
    house.map((item) => {
      if (item.house === "Slytherin") return console.log(item);
    });
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
                  return this.chooseHouse("Hufflepuff");
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
                  return this.chooseHouse("Gryffindor");
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
                  return this.chooseHouse("Ravenclaw");
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

      //     <div className="header">
      //       {this.state.info.map((names) => {
      //         return (
      //           <ul>
      //             <li>
      //               {names.name}...{names.house}...{names.role}...
      //               {names.bloodStatus}
      //             </li>
      //           </ul>
      //         );
      //       })}
      //       <div className="card">
      //         <div className="test">
      //           <img src="/images/hufflepuff.jpeg" alt="..." />
      //           <div className="container">
      //             <h4>
      //               <b>Hufflepuff</b>
      //             </h4>
      //             <p>Architect & Engineer</p>
      //           </div>
      //         </div>
      //       </div>
      //       <div className="card">
      //         <div className="test">
      //           <img src="/images/slytherin.jpeg" alt="..." />
      //           <div className="container">
      //             <h4>
      //               <b>Slytherin</b>
      //             </h4>
      //             <p>Architect & Engineer</p>
      //           </div>
      //         </div>
      //       </div>
      //       <div className="card">
      //         <img src="/images/gryffindor.jpeg" alt="..." />
      //         <div className="container">
      //           <h4>
      //             <b>Gryffindor</b>
      //           </h4>
      //           <p>Architect & Engineer</p>
      //         </div>
      //       </div>
      //       <div className="card">
      //         <img src="/images/ravenclaw.jpeg" alt="..." />
      //         <div className="container">
      //           <h4>
      //             <b>Ravenclaw</b>
      //           </h4>
      //           <p>Architect & Engineer</p>
      //         </div>
      //       </div>
      // </div>
    );
  }
}

export default Header;
