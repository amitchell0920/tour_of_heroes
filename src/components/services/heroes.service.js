const BASE_URL = "https://api.github.com/users/";

const fetchGitHeroes = name =>
  fetch(
    `${BASE_URL}${name}?access_token=554612bc8de7a1a6744b77055cbab693543d20f0`
  )
    .then(status)
    .then(payload => payload.json())
    .then(user => user)
    .catch(error => {
      return Promise.reject(error);
    });

function status(res) {
  if (!res.ok) {
    throw new Error(res.status.text);
  }
  return res;
}

export default fetchGitHeroes;

// const HEROES = [
//   { id: 11, name: "Superman" },
//   { id: 12, name: "Batman" },
//   { id: 13, name: "Spider-Man" },
//   { id: 14, name: "Thor" },
//   { id: 15, name: "Hal Jordan" },
//   { id: 16, name: "Wonder Woman" },
//   { id: 17, name: "Captain America" },
//   { id: 18, name: "Martian Manhunter" },
//   { id: 19, name: "Super Girl" },
//   { id: 20, name: "Cat Woman" }
// ];

// const getHeroes = new Promise((resolve, reject) => {
//   resolve(HEROES);
// });

// // const getHeroesSlowly = new Promise((resolve, reject) => {
// //   setTimeout(() => resolve(HEROES), 2000);
// // });

// const getHeroById = heroId =>
//   new Promise((resolve, reject) => {
//     resolve(HEROES.find(hero => hero.id === heroId));
//   });

// export { getHeroes, getHeroById };
