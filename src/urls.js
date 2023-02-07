export const baseUrl = "https://graphql-pokeapi.graphcdn.app/";
export const pokemonsQuery = `query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      results {
        url
        name
        artwork
      }
    }
  }`;

export const pokemonQuery = `query pokemon($name: String!) {
  pokemon(name: $name) {
    id
    name
    height
    weight
    message
    sprites {
      front_default
    }
    types {
      type {
        name
      }
    }
    abilities{
      ability{
        name
      }
    }
    stats {
      base_stat
      stat {
        name
      }
    }
  }
}`;

export const pokemonTypeQuery = `query pokemon($name: String!) {
  pokemon(name: $name) {
    id
    types {
      type {
        name
      }
    }
  }
}`;

export const abilityQuery = `query abilities {
  abilities {
    count
    next
    previous
    results {
      url
      name
    }
  }
}`;

export const pokemonsVariables = {
  limit: 10,
  offset: 0,
};
