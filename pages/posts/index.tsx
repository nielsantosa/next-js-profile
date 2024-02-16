import type { ReactElement } from 'react'
import Layout from '@/components/layout'
import { NextPage } from 'next'
import { getPokemonData } from '@/lib/pokemon';
import Link from 'next/link';
import Head from 'next/head';


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
        <Head>
            <title>Posts : Pokemonss</title>
        </Head>
          <div className="flex flex-row">Post Pages</div>
          <ul>
          {
            pokemonData.map(pokemon => (
              <li key={pokemon.name}><Link href={{pathname: `/posts/${pokemon.name}`}}>{pokemon.name}</Link></li>
            ))
          }
          </ul>
      </Layout>
      </>
    )
}


export default Page