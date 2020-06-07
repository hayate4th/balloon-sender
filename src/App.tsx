import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/send">Send your message</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/">
          <div>This is the main page!</div>
        </Route>
        <Route path="/send">
          <div>This is the sending page!</div>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
