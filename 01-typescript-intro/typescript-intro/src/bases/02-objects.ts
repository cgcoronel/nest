export const pokemonIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

pokemonIds.push("ssss");

interface Pokemon {
  id: number;
  name: string;
  age?: number;
}

export const bulbasaur: Pokemon = {
  id: 1,
  name: "Bulbasaur",
  age: 1,
};
