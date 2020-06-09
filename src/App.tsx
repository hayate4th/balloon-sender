import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";

import MainPage from "./components/MainPage";

const App: React.FC = () => {
  return (
    <Router>
      <Header>
        <Menu>
          <li>
            <StyledLink to="/">Home</StyledLink>
          </li>
          <li>
            <StyledLink to="/send">Send your message</StyledLink>
          </li>
        </Menu>
      </Header>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route path="/send">
          <div>This is the sending page!</div>
        </Route>
      </Switch>
    </Router>
  );
};

const Header = styled.header`
  display: flex;
  height: 50px;
`;

const Menu = styled.ul`
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 0;
  align-self: center;
  list-style-type: none;
  padding: 0;

  li {
    margin-right: 10px;

    &:last-of-type {
      margin-right: 0;
    }
  }
`;

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-weight: bold;
`;

export default App;
