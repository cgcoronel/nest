import axios from "axios";
import { PokeapiResponse } from "./interfaces/pokeapi-response.interface";

export class Pokemon {
  get imageUrl(): string {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${this.id}.png`;
  }

  constructor(
    public readonly id: number,
    public name: string,
  ) {}

  scream() {
    console.log(`${this.name.toUpperCase()}!!!`);
  }

  speak() {
    console.log(`${this.name}, ${this.name}`);
  }

  async getMoves() {
    const { data } = await axios.get<PokeapiResponse>(
      `https://pokeapi.co/api/v2/pokemon/${this.id}`,
    );

    return data.moves;
  }
}

export const charmander = new Pokemon(4, "Charmander");

const moves = await charmander.getMoves();
console.log("ssss", moves);
