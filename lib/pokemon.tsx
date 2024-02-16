export const getPokemonData = async (page_limit: number = 10, page_offset: number = 0) => {
    try {
      const pokemonRes = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${page_limit}&offset=${page_offset}`);
      return pokemonRes.json();
    } catch (error) {
      console.error('Error fetching Pokemon data:', error);
      throw error; // Re-throw the error to be caught in the calling function
    }
};

export const getPokemonDataByName = async (name: string) => {
    try {
        const pokemonRes = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        return pokemonRes.json();
    } catch (error) {
        console.error('Error fetching Pokemon data:', error);
        throw error; // Re-throw the error to be caught in the calling function
    }
};