import React, { Component } from "react";
import "./App.css";

const HEROES = [
  { id: 11, name: "Superman" },
  { id: 12, name: "Batman" },
  { id: 13, name: "Spider-Man" },
  { id: 14, name: "Thor" },
  { id: 15, name: "Hal Jordan" },
  { id: 16, name: "Wonder Woman" },
  { id: 17, name: "Captain America" },
  { id: 18, name: "Martian Manhunter" },
  { id: 19, name: "Super Girl" },
  { id: 20, name: "Cat Woman" }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Cartoon Super Heros",
      heroes: HEROES,
      selectedHero: {
        name: "",
        id: undefined
      }
    };
    this.handleSelectHero = this.handleSelectHero.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleOnChange(event) {
    this.setState({
      selectedHero: {
        ...this.state.selectedHero,
        name: event.target.value
      }
    });
  }

  handleSelectHero(hero) {
    const heroIndex = this.state.heroes.map(o => o.id).indexOf(hero.id);
    this.setState({
      selectedHero: {
        ...hero,
        index: heroIndex
      }
    });
    console.log(this.state.selectedHero.name);
  }

  handleOnSubmit(event) {
    const slHero = this.state.selectedHero;
    const heroes = this.state.heroes;
    this.setState({
      heroes: [
        ...heroes.slice(0, slHero.index),
        { ...slHero },
        ...heroes.slice(slHero.index + 1, heroes.length)
      ]
    });
    event.preventDefault();
  }

  render() {
    const heroesList = this.state.heroes.map(function(hero) {
      return (
        <li
          className=""
          key={hero.id}
          onClick={() => this.handleSelectHero(hero)}
        >
          <span className="badge">{hero.id}</span>
          {hero.name}
        </li>
      );
    }, this);

    return (
      <div>
        <h1>{this.state.title}</h1>
        <ul className="heroes">{heroesList}</ul>
        <div>
          <h2> {this.state.selectedHero.name} Details!!!</h2>
          <div>
            <label>id: </label>
            {this.state.selectedHero.id}
          </div>
        </div>
        <form onSubmit={this.handleOnSubmit}>
          <label>name:</label>
          <input
            type="text"
            value={this.state.selectedHero.name}
            onChange={this.handleOnChange}
          />
          <input className="button" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default App;
