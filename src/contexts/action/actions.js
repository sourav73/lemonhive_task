export const SET_POKEMONS = "set-pokemons";
export const CLEAR_POKEMON = "clear-pokemon";
export const SET_POKEMON = "set-pokemon";
export const SET_POKEMON_IMAGE = "set-pokemon-image";

export const setPokemons = (pokemons) => {
  return {
    type: SET_POKEMONS,
    payload: pokemons,
  };
};
export const clearPokemon = () => {
  return {
    type: CLEAR_POKEMON,
  };
};
export const setPokemon = (pokemon) => {
  return {
    type: SET_POKEMON,
    payload: pokemon,
  };
};
export const setPokemonImage = (image) => {
  return {
    type: SET_POKEMON_IMAGE,
    payload: image,
  };
};
