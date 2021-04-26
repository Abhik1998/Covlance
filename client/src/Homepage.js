import "./stylehome.css";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <a className="btn" href="/edit">
            <span>Add Availability</span>
          </a>
          <br />
          <a className="btn" href="/available">
            <span>View</span>
          </a>
        </div>
      </Router>
    );
  }
}

export default Home;
