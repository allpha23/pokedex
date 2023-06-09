import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Card from '@/components/Card';

export const getStaticProps = async () => {
  const maxPokemons = 251;
  const api = "https://pokeapi.co/api/v2/pokemon/";

  const res = await fetch(`${api}/?limit=${maxPokemons}`);
  const data = await res.json();

  data.results.forEach((item, index) => {
    item.id = index + 1;
  });

  return {
    props: {
      pokemons: data.results,
    },
  }
}

export default function Home({ pokemons }) {
  return (
    <>
      <div className={styles.title_container}>
        <h1 className={styles.title}>Pokedex</h1>
        <Image
          src="/images/pokeball.png"
          width="50"
          height="50"
          alt="pokeball"
        />
      </div>
      <div className={styles.pokemons_container}>
        {pokemons.map((pokemon) => (
          <Card key={ pokemon.id } pokemon={ pokemon } />
        ))}
      </div>
    </>
  );
}
