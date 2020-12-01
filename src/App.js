import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Home, Users, About } from "./pages";
import { NavMenu } from "./components";
import "./styles.css";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen((prev) => !prev);
  };

  const closeNav = () => {
    setIsOpen(() => false);
  };

  return (
    <>
      <div className="App">
        <Router>
          <div className="wrapper">
            <button onClick={toggleNav}>{`${
              isOpen ? "Close" : "Open"
            } nav`}</button>
            <NavMenu isOpen={isOpen} closeNav={closeNav} />
          </div>

          <Switch>
            <Route path="/users">
              <Users color="#00950033" />
            </Route>

            <Route path="/about">
              <About color="#ffe0ba70" />
            </Route>

            <Route path="/">
              <Home color="#d6e6f3" a />
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}
