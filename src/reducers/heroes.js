import * as types from "../constants";

const initialState = [
  {
    id: 76360,
    name: "Jesse Tomchak",
    avatar_url: "https://avatars0.githubusercontent.com/u/76360?v=4",
    bio:
      "firm believer that technology is awesome, the ability to create and contribute to software is possible from everyone. "
  },
  {
    id: 150330,
    name: "Kyle Simpson",
    avatar_url: "https://avatars0.githubusercontent.com/u/150330?v=4",
    bio:
      "I teach Javascript and I love to come help your team's developer. If that's interesting to you, please reacg out to me getify@gmail.com."
  }
];

const heroes = (state = initialState, action) => {
  switch (action.type) {
    case types.SAVE_HERO:
      const heroIndex = state.map(o => o.id).indexOf(action.id);
      return [
        ...state.slice(0, heroIndex),
        { ...state[heroIndex], name: action.name },
        ...state.slice(heroIndex + 1, state.lemgth)
      ];
    default:
      return state;
  }
};

export default heroes;
