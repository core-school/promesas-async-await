// PART 5: async await example with https://pokeapi.co/
// https://github.com/tc39/proposal-top-level-await
// https://v8.dev/features/top-level-await

import axios from "axios";

const api = axios.create({baseURL:"https://pokeapi.co/api/v2/"});

// An async function to get one pokemon name and image
const getPokemon = async (id = 25) => {
  const pokemon = await api.get(`/pokemon/${id}`);
  const {name, sprites:{front_default:image}} = pokemon.data;
  return {name, image};
};

getPokemon().then(pk => console.log(pk));