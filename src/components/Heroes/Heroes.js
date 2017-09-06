import React, { Component } from "react";
import "./Heroes.css";
import HeroesList from "./HeroesList";
//import { getHeroes } from "./../services/heroes.service";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
//import { propTypes } from "prop-types";
//import HeroesAdd from "./AddHeroes";

const DEFAULT_NO_HERO = {
  name: "",
  id: undefined
};

class Heroes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedHero: DEFAULT_NO_HERO
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.selectHero = this.selectHero.bind(this);
  }

  selectHero(hero) {
    const heroIndex = this.props.heroes.map(o => o.id).indexOf(hero.id);
    hero = this.state.selectedHero.id !== hero.id ? hero : DEFAULT_NO_HERO;
    this.setState({
      selectedHero: {
        ...hero,
        index: heroIndex
      }
    });
  }

  handleSubmit(event) {
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
    return (
      <div>
        <HeroesList
          heroes={this.props.heroes}
          selectedHero={this.state.selectedHero}
          onHeroClick={this.selectHero}
        />
        {this.state.selectedHero.name && (
          <div>
            <h2>{this.state.selectedHero.name}</h2>
            <Link to={`/heroes/details/${this.state.selectedHero.id}`}>
              <button>Details</button>
            </Link>
          </div>
        )}
      </div>
    );
  }
}

const mapStatetoProps = state => ({
  heroes: state.heroes
});

export default connect(mapStatetoProps)(Heroes);
