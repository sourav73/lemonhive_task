import React, { useState, useEffect } from "react";
import axios from "axios";
import { usePokemonContext } from "../../contexts/PokemonContext";
import {
  clearPokemon,
  setPokemon,
  setPokemonImage,
} from "../../contexts/action/actions";
import styles from "./PokemonDetails.module.scss";
import { baseUrl, pokemonQuery } from "../../urls";
import { Link, useParams, useLocation } from "react-router-dom";

import pokemonHeading from "../../assets/images/Logo.png";
import homeIcon from "../../assets/images/home.png";
import StatsBar from "../../components/StatsBar/StatsBar";

const PokemonDetails = () => {
  const { name } = useParams();
  const location = useLocation();
  const { data, dispatch } = usePokemonContext();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const placeholderMessage =
    "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.";
  const image = location.state.imageUrl;
  useEffect(() => {
    dispatch(clearPokemon());
    dispatch(setPokemonImage(image));
    const getData = async () => {
      try {
        const response = await axios({
          url: baseUrl,
          method: "post",
          data: {
            query: pokemonQuery,
            variables: {
              name,
            },
          },
        });
        setIsLoading(false);
        dispatch(setPokemon(response.data.data.pokemon));
      } catch (err) {
        setIsLoading(false);
        setError(err.message);
      }
    };
    getData();
  }, [dispatch, name, image]);
  const {
    name: pokemonName,
    id,
    abilities,
    types,
    stats,
    message,
    height,
    weight,
  } = data.pokemon;
  return (
    <main className={styles.main}>
      <div className={styles.leftSideAnimation}></div>
      <div className={styles.rightSideAnimation}></div>
      <h1 className="text-center">
        <Link to="/">
          <img src={pokemonHeading} alt="Pokemon" />
        </Link>
      </h1>
      <section className={styles.pokemonDetails}>
        <div className="container">
          {/* Loading and error indicator */}
          {isLoading && (
            <p className={`text-center ${styles.fetchingText}`}>
              Getting Pokemon data, please wait...
            </p>
          )}
          {error && (
            <p className={`text-center ${styles.fetchingText}`}>{error}</p>
          )}
          {Object.keys(data.pokemon).length !== 0 && (
            <div className={`grid-container px-16 ${styles.pokemonInfo}`}>
              <div className={styles.pokemonBuild}>
                <h2>
                  {pokemonName} #{id.toString().padStart(3, "0")}
                </h2>
                <p className={styles.smallInfo}>
                  {message ? message : placeholderMessage}
                </p>
                <div className={styles.pokeInfo}>
                  <div className="height">
                    <p className={styles.infoTitle}>Height</p>
                    <p>{height}'</p>
                  </div>
                  <div className="category">
                    <p className={styles.infoTitle}>Category</p>
                    <p>Seed</p>
                  </div>
                  <div className="weight">
                    <p className={styles.infoTitle}>Weight</p>
                    <p>{weight}lbs</p>
                  </div>
                  <div className="abilities">
                    <p className={styles.infoTitle}>Abilities</p>
                    {abilities.map((ability, index) => (
                      <p key={index}>{ability.ability.name}</p>
                    ))}
                  </div>
                </div>
              </div>
              <div className={`${styles.pokemonImage}`}>
                <img src={data.pokemonImage} alt={name} />
              </div>
              <div className={styles.pokemonStats}>
                <div className="type">
                  <p className={styles.statsTitle}>Type</p>
                  {types.map((type, index) => (
                    <span key={index} className={`${type.type.name}-lg`}>
                      {type.type.name}
                    </span>
                  ))}
                </div>
                <div className="weakness">
                  <p className={styles.statsTitle}>Weakness</p>
                  {/* {data.pokemon.types.map((type, index) => (
                    <span key={index} className={type.type.name}>
                      {type.type.name}
                    </span>
                  ))} */}
                  <span className="fire-lg">Fire</span>
                  <span className="psychic-lg">Psychic</span>
                  <span className="flying-lg">Flying</span>
                  <span className="ice-lg">Ice</span>
                </div>
                <div className="stats pt-11">
                  <p className={styles.statsTitle}>Stats</p>
                  {stats.map((stat, index) => (
                    <div key={index} className={stat.stat.name}>
                      <p className={styles.subStatsTitle}>{stat.stat.name}</p>
                      <StatsBar
                        value={stat.base_stat > 100 ? 100 : stat.base_stat}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          <div className={styles.backHome}>
            <Link to="/" className="text-center">
              <img src={homeIcon} alt="" />
              Back to Homepage
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PokemonDetails;
