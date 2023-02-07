import {
  CLEAR_POKEMON,
  SET_POKEMON,
  SET_POKEMONS,
  SET_POKEMON_IMAGE,
} from "../action/actions";

export const pokemonReducer = (state, action) => {
  switch (action.type) {
    case SET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
      };
    case SET_POKEMON:
      return {
        ...state,
        pokemon: action.payload,
      };
    case SET_POKEMON_IMAGE:
      return {
        ...state,
        pokemonImage: action.payload,
      };
    case CLEAR_POKEMON:
      return {
        pokemon: {},
        pokemonImage: "",
      };
    default:
      return state;
  }
};
