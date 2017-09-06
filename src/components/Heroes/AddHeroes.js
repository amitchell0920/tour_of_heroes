import React from "react";
import fetchGitHeroes from "./../services/heroes.service";

class HeroesAdd extends React.Component {
  state = {
    hero: undefined,
    error: undefined
  };
  handleSubmit = e => {
    e.preventDefault();
    fetchGitHeroes(this.refs.userInput.value)
      .then(user => {
        this.setState({
          hero: user,
          error: undefined
        });
      })
      .catch(err => {
        this.setState({
          hero: undefined,
          error: err.message
        });
      });
  };

  handleClick = event => {};

  render() {
    const hero = this.state.hero;
    return (
      <div>
        <h2>Enter a GitHub Username</h2>
        <form onSubmit={this.handleSubmit}>
          <input ref="userInput" className="Search-page__input" type="text" />
          <input clsssName="button" type="submit" value="Submit" />
        </form>
        {this.state.hero && (
          <div>
            <h2>{hero.name} details!</h2>
            <label>id: </label>
            {hero.id} <br />
            <label> Bio: </label>
            {hero.bio} <br />
            <button
              className="btn btn-default"
              style={buttonStyle}
              onClick={this.handleClick}
            >
              Add Me as a Hero!!
            </button>
          </div>
        )}
        {this.state.error && (
          <div>
            <h2>
              {"\u2639"}
              {this.state.error}
            </h2>
          </div>
        )}
      </div>
    );
  }
}

const buttonStyle = {
  margin: "10px 10px 10px 10px"
};

export default HeroesAdd;
