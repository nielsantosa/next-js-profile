import type { ReactElement } from 'react'
import Layout from '../components/layout'
import { NextPage } from 'next'
import { getPokemonData } from '../lib/pokemon';


const getStaticProps = async() => {
  try {
    const pokemonDataRes = await getPokemonData();
    let pokemonData = [];
    if (pokemonDataRes.results.length > 0) {
      pokemonData = pokemonDataRes.results
    }
    return {
      props: {
        pokemonData
      }
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        pokemonData: {}
      }
    };
};}

export { getStaticProps };

type Props = {
  pokemonData: any[]
}

const Page: NextPage<Props> = ({ pokemonData }) => {
    return (
      <>
      <Layout>
          <div>Portfolios Pages</div>
          {
            pokemonData.map(pokemon => (
              <div key={pokemon.name}>{pokemon.name}</div>
            ))
          }
      </Layout>
      </>
    )
}


export default Page