import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Homepage.js";
import edit from "./Edit.js";
import Available from "./Available.js";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/edit" component={edit} />
          <Route exact path="/available" component={Available} />
        </Switch>
      </Router>
    );
  }
}

export default App;
