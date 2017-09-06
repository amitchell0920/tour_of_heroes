import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import Heroes from "../Heroes/Heroes";
import HeroesForm from "../Heroes/HeroesForm";
import HeroesAdd from "../Heroes/AddHeroes";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h1> Tour of Heroes </h1>
          <nav>
            <NavLink exact to="/" activeClassName="active">
              Dashboard
            </NavLink>
            <NavLink exact to="/heroes" activeClassName="active">
              Heroes
            </NavLink>
            <NavLink to="/heroes/add" activeClassName="active">
              Add Heroes
            </NavLink>
          </nav>
          <hr />
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/heroes" component={Heroes} />
          <Route path="/heroes/add" component={HeroesAdd} />
          <Route path={"/heroes/details/:heroId"} component={HeroesForm} />
        </div>
      </Router>
    );
  }
}
export default App;
