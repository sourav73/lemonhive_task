import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import styles from "./PokemonCard.module.scss";
import { baseUrl, pokemonTypeQuery } from "../../urls";

const PokemonCard = ({ name, imageUrl, url }) => {
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState({});
  const [error, setError] = useState(null);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios({
          url: baseUrl,
          method: "post",
          data: {
            query: pokemonTypeQuery,
            variables: {
              name,
            },
          },
        });
        setPokemon(response.data.data);
      } catch (err) {
        setError(err.message);
      }
    };
    getData();
  }, [name]);
  return (
    <div
      className={styles.pokemonCard}
      onClick={() => navigate(`/pokemon/${name}`, { state: { imageUrl } })}
    >
      {error && <p>Error getting data</p>}
      {Object.keys(pokemon).length !== 0 && (
        <>
          <span className={styles.pokemonNumber}>
            #{pokemon.pokemon.id.toString().padStart(3, "0")}
          </span>
          <div className={styles.cardImg}>
            <img src={imageUrl} alt={name} />
          </div>
          <div className={styles.cardBody}>
            <p className={styles.cardTitle}>{name}</p>
            <div className={styles.type}>
              {pokemon.pokemon.types.map((type, index) => (
                <span key={index} className={`${type.type.name}-sm`}>
                  {type.type.name}
                </span>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PokemonCard;
