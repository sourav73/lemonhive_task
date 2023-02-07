import { createContext, useReducer, useContext } from "react";
import { pokemonReducer } from "./reducers/pokemonReducer";

export const PokemonContext = createContext();

const PokemonContextProvider = ({ children }) => {
  const initialState = {
    pokemons: [],
    pokemon: {},
  };
  // Initializing states
  const [data, dispatch] = useReducer(pokemonReducer, initialState);

  return (
    <PokemonContext.Provider value={{ data, dispatch }}>
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonContextProvider;

// hook for using the PokemonContext
export const usePokemonContext = () => useContext(PokemonContext);
