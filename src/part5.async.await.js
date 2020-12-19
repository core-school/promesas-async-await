// PART 5: async await example with https://pokeapi.co/
// https://github.com/tc39/proposal-top-level-await
// https://v8.dev/features/top-level-await

import axios from "axios";

const api = axios.create({baseURL:"https://pokeapi.co/api/v2"});

// An async function to get one pokemon name and image
const getPokemon = async (id=25) => {
  const res = await api.get(`/pokemon/${id}`);
  const pokemon = res.data;
  //console.log(pokemon);
  const {name, sprites:{front_default:image}} = pokemon;
  // const name = pokemon.name;
  // const image = pokemon.sprites.front_default
  return {name, image};
};

//getPokemon(150).then(pk => console.log(pk));


Promise.allSettled([
  getPokemon(25),
  getPokemon(26),
  getPokemon(1006),
]).then(data => data.filter(e => e.value)).then(valid => console.log(valid));