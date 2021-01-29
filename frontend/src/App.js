import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: "",
    };
  }
  componentDidMount() {
    axios.get("http://localhost:9000/helloword").then((result) => {
      this.setState({
        greeting: result.data,
      });
    });
  }
  render() {
    return (
      <div className="App">
        <header>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <p className="App-intro">
          To get started, edit<code>src/App.js</code>
        </p>
        <h1>{this.state.greeting}</h1>
      </div>
    );
  }
}

export default App;
