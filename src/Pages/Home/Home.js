import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { usePokemonContext } from "../../contexts/PokemonContext";
import { baseUrl, pokemonsQuery } from "../../urls";
import { setPokemons } from "../../contexts/action/actions";
import PokemonCard from "../../components/PokemonCard/PokemonCard";

import "swiper/css";
import "swiper/css/navigation";
import styles from "./Home.module.scss";
import pokemonHeading from "../../assets/images/Logo.png";
import image1 from "../../assets/images/Image01.png";
import image2 from "../../assets/images/Image02.png";
import image3 from "../../assets/images/Image03.png";
import image4 from "../../assets/images/Image04.png";
import image5 from "../../assets/images/Image05.png";
import ash from "../../assets/images/ash-sm.png";
import prev from "../../assets/images/arrow-left.png";
import next from "../../assets/images/arrow-right.png";

const Home = () => {
  const { data, dispatch } = usePokemonContext();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios({
          url: baseUrl,
          method: "post",
          data: {
            query: pokemonsQuery,
            variables: {
              limit: 10,
              offset: 0,
            },
          },
        });
        setIsLoading(false);
        dispatch(setPokemons(response.data.data.pokemons.results));
      } catch (err) {
        setIsLoading(false);
        setError(err.message);
      }
    };
    getData();
  }, [dispatch]);
  return (
    <main>
      {/* Hero section starts */}
      <section className={styles.hero}>
        <div className="container">
          {/* Hero title */}
          <h1 className={styles.heroTitle}>
            <img src={pokemonHeading} alt="Pokemon" />
          </h1>
          {/* Loading and error indicator */}
          {isLoading && (
            <p className={`text-center mb-20 ${styles.fetchingText}`}>
              Getting Pokemons, please wait...
            </p>
          )}
          {error && (
            <p className={`text-center ${styles.fetchingText}`}>{error}</p>
          )}
          {/* Pokemon cards */}
          <div className={`grid-container px-16 ${styles.pokemons}`}>
            {data.pokemons &&
              data.pokemons.map((pokemon) => (
                <div key={pokemon.url} className="column">
                  <PokemonCard
                    imageUrl={pokemon.artwork}
                    name={pokemon.name}
                    url={pokemon.url}
                  />
                </div>
              ))}
          </div>
          {/* Pokemon card slider for small device */}
          <div className={`pl-16 ${styles.swiperContainer}`}>
            <div className={`swiper-button-prev ${styles.swiperPrev}`}>
              <img src={prev} alt="" />
            </div>
            <div className={`swiper-button-next ${styles.swiperNext}`}>
              <img src={next} alt="" />
            </div>
            <Swiper
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              // navigation={true}
              modules={[Navigation]}
              spaceBetween={16}
              slidesPerView={1.5}
              className="mySwiper"
            >
              {data.pokemons &&
                data.pokemons.map((pokemon) => (
                  <SwiperSlide key={pokemon.url}>
                    <PokemonCard
                      imageUrl={pokemon.artwork}
                      name={pokemon.name}
                      url={pokemon.url}
                    />
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
      </section>
      {/* Hero section ends */}
      {/* Article section starts */}
      <section className={styles.articles}>
        <div className={styles.leftSideAnimation}></div>
        <div className={styles.rightSideAnimation}></div>
        <div className="container">
          {/* Articles title */}
          <h2>
            Ash & Pikachu Arrive in
            <br /> Pokémon Universe
          </h2>
          {/* Articles content parent container */}
          <div className={`grid-container px-16 ${styles.articlesContent}`}>
            {/* Articles left content starts */}
            <div className={styles.leftNewsContainer}>
              {/* Left content upper half */}
              <div className="grid-container col-10-2 col-gap-26">
                <div>
                  <p className={`mb-16 ${styles.news1}`}>
                    Lorem ipsum dolor sit amet consectetur. Risus cursus nibh
                    elementum ornare a aliquet ac. Feugiat scelerisque ultrices
                    tempor facilisi tempus risus nunc. Proin quis morbi posuere
                    nisl etiam scelerisque. Proin pretium gravida semper ut erat
                    nisi. Pulvinar ac mattis porta amet et. Nisl urna non fames
                    felis leo. Vitae pulvinar sed viverra sit pretium lorem
                    elementum. Iaculis sit maecenas sodales mi convallis justo
                    aliquam. Tincidunt semper ut ornare vivamus lectus.
                  </p>
                  <div className={styles.news2}>
                    <div className="grid-container col-10-2 col-gap-26 center-align">
                      <p>
                        Lorem ipsum dolor sit amet consectetur. Turpis integer
                        massa consectetur sed enim quis viverra. Vestibulum eu
                        nibh dolor semper. Nisl feugiat quis nec odio pulvinar
                        feugiat velit. Nulla massa sit morbi morbi. Tortor
                        viverra eget lacus feugiat. Tempus vitae vitae orci at
                        ultrices nisi diam faucibus. Ultricies in cursus
                        volutpat aliquam turpis urna in sed. Hendrerit arcu sit
                        lectus adipiscing egestas semper nunc. Ante consectetur
                        id congue pulvinar libero tristique et orci. Platea
                        convallis dictum dui augue. Tincidunt mattis urna sit
                        semper sed duis feugiat mi.
                      </p>
                      <img src={image4} alt="" />
                    </div>
                    <p className="mt-16 news3">
                      Lorem ipsum dolor sit amet consectetur. Tincidunt at cras
                      tortor non volutpat quisque facilisis. Ultricies consequat
                      sed vitae ac. Nisl eu nam id lectus tellus sit egestas.
                      Orci iaculis et vehicula nisi facilisi neque lorem. In
                      vulputate feugiat lobortis eros viverra. Turpis viverra
                      vel fames enim tortor. Scelerisque dictumst aliquam
                      gravida eget ut accumsan. A est dis platea vitae blandit
                      quis. Ultricies ac at urna vel morbi diam. Donec ut sit
                      sit et. Etiam cum faucibus eu elementum ut fermentum in
                      cursus.
                    </p>
                  </div>
                </div>
                <div className="flex-container flex-column row-gap-26">
                  <img src={image3} alt="" />
                  <img src={image2} alt="" />
                </div>
              </div>
              {/* Left content lower half */}
              <div>
                <p className="mt-16">
                  At a enim parturient id. Suspendisse ullamcorper fermentum
                  accumsan diam tellus. Nibh pretium ultrices scelerisque dolor
                  at etiam lectus gravida sed. Sit in turpis suspendisse et
                  aliquam. Vulputate sit phasellus proin eget arcu. Enim nec
                  ante velit erat nibh nunc amet. Tellus at sit imperdiet non.
                  Cras dictum curabitur urna mauris in. Ut dui odio sagittis ut
                  imperdiet ultricies mauris ac. A sit id etiam vitae non
                  posuere tristique. Morbi sit mi sed nam amet tristique tellus.
                  Sed quam aliquam pharetra nunc ipsum mattis. Volutpat
                  pellentesque cras euismod habitant sit nibh. Dictum odio at
                  aliquam sed. Orci odio lacinia id sem sed suspendisse mi
                  fringilla purus. Quis sed ultricies ac nullam odio. Gravida
                  sollicitudin viverra ornare pretium etiam tortor imperdiet
                  tellus. Id purus etiam nunc hendrerit quam in. Dui netus
                  lectus nulla cursus ultrices nulla. Morbi sit in gravida
                  fermentum. Non sed lobortis amet eget sed donec.At a enim
                  parturient id. Suspendisse ullamcorper fermentum accumsan diam
                  tellus. Nibh pretium ultrices scelerisque dolor at etiam
                  lectus gravida sed. Sit in turpis suspendisse et aliquam.
                  Vulputate sit phasellus proin eget arcu. Enim nec ante velit
                  erat nibh nunc amet. Tellus at sit imperdiet non. Cras dictum
                  curabitur urna mauris in. Ut dui odio sagittis ut imperdiet
                  ultricies mauris ac. A sit id etiam vitae non posuere
                  tristique. Morbi sit mi sed nam amet tristique tellus. Sed
                  quam aliquam pharetra nunc ipsum mattis. Volutpat pellentesque
                  cras euismod habitant sit nibh. Dictum odio at aliquam sed.
                  Orci odio lacinia id sem.
                </p>
              </div>
            </div>
            {/* Articles left content ends */}
            {/* Image between both sides on small device */}
            <div className={styles.imgBetween}>
              <img src={ash} alt="" />
            </div>
            {/* Articles right content starts */}
            <div className={styles.rightContent}>
              <div className={styles.innerTopContent}>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Risus cursus nibh
                  elementum ornare a aliquet ac. Feugiat scelerisque ultrices
                  tempor facilisi tempus risus nunc. Proin quis morbi posuere
                  nisl etiam scelerisque. Proin pretium gravida semper ut erat
                  nisi. Pulvinar ac mattis porta amet et. Nisl urna non fames
                  felis leo. Vitae pulvinar sed viverra .
                </p>
              </div>
              <div className={styles.innerMiddleContent}>
                <div className="grid-container col-2-10 col-gap-26 my-16 center-align">
                  <img src={image5} alt="" />
                  <p className="">
                    Lorem ipsum dolor sit amet consectetur. Turpis integer massa
                    consectetur sed enim quis viverra. Vestibulum eu nibh dolor
                    semper. Nisl feugiat quis nec odio pulvinar feugiat velit.
                    Nulla massa sit morbi morbi. Tortor viverra eget lacus
                    feugiat. Tempus vitae vitae orci at ultrices nisi diam
                    faucibus. Ultricies in cursus volutpat aliquam turpis urna
                    in sed. Hendrerit arcu sit lectus adipiscing egestas semper
                    nunc. Ante consectetur id congue pulvinar libero tristique
                    et orci. Platea convallis dictum dui augue. Tincidunt mattis
                    urna sit semper sed duis feugiat mi.Ante consectetur id
                    congue{" "}
                  </p>
                </div>
                <div className="grid-container col-2-10 col-gap-26 mb-16 center-align">
                  <img src={image1} alt="" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Tincidunt at cras
                    tortor non volutpat quisque facilisis. Ultricies consequat
                    sed vitae ac. Nisl eu nam id lectus tellus sit egestas. Orci
                    iaculis et vehicula nisi facilisi neque lorem. In vulputate
                    feugiat lobortis eros viverra. Turpis viverra vel fames enim
                    tortor. Scelerisque dictumst aliquam gravida eget ut
                    accumsan. A est dis platea vitae blandit quis. Ultricies ac
                    at urna vel morbi diam. Donec ut sit sit et. Etiam cum
                    faucibus eu elementum ut fermentum in cursus. Ante
                    consectetur id congue Ante consectetur id congue{" "}
                  </p>
                </div>
              </div>
              <div>
                <p>
                  At a enim parturient id. Suspendisse ullamcorper fermentum
                  accumsan diam tellus. Nibh pretium ultrices scelerisque dolor
                  at etiam lectus gravida sed. Sit in turpis suspendisse et
                  aliquam. At a enim parturient id. Suspendisse ullamcorper
                  fermentum accumsan diam tellus. Nibh pretium ultrices
                  scelerisque dolor at etiam lectus gravida sed. Sit in turpis
                  suspendisse et aliquam. Vulputate sit phasellus proin eget
                  arcu. Enim nec ante velit erat nibh nunc amet. Tellus at sit
                  imperdiet non. Cras dictum curabitur urna mauris in. Ut dui
                  odio sagittis ut imperdiet ultricies mauris ac. A sit id etiam
                  vitae non posuere tristique. Morbi sit mi sed nam amet
                  tristique tellus. Sed quam aliquam pharetra.
                </p>
              </div>
            </div>
            {/* Articles right content ends */}
          </div>
        </div>
      </section>
      {/* Article section ends */}
    </main>
  );
};

export default Home;
