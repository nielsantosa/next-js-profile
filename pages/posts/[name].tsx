import Head from 'next/head';
import Layout from '@/components/layout';
import { getPokemonDataByName } from '@/lib/pokemon';
import { capitalizeFirstLetter } from '@/lib/utils';
import { useRouter } from 'next/router'



export const getStaticPaths = async () => {
    return {
        paths: [
            { params: { name: 'ditto' } },
            { params: { name: 'bulbasaur' } },
        ],
        fallback: true
    }
}

type Params = {
    name: string
}


export const getStaticProps = async ({ params }: { params: Params }) => {
    const pokemonData = await getPokemonDataByName(params.name);
    const metaTitle = `Pokemon Page : ${capitalizeFirstLetter(params.name)}`;
    return {
        props: {
            name: params.name,
            abilities: pokemonData.abilities,
            metaTitle
        }
    }
}

type Ability = {
    ability: {
        name: string,
        url: string
    },
    is_hidden: boolean,
    slot: number
}


const Post = ( { name, abilities, metaTitle }: { name: string, abilities: Ability[], metaTitle: string } ) => {
    const router = useRouter();
    // If the page is not yet generated, this will be displayed
    // initially until getStaticProps() finishes running
    if (router.isFallback) {
        return <div>Loading...</div>
    }
    
    return (
        <Layout>
            <Head>
                <title>{metaTitle}</title>
            </Head>
            <div>Pokemon Name : {capitalizeFirstLetter(name)}</div>
            <div>Abilities:</div>
            <ul>
                {abilities.map((ability, index) => (
                    <li key={index}>{ability.ability.name}</li>
                ))}
            </ul>
        </Layout>
    );
}
  
export default Post;