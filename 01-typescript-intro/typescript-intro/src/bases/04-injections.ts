import { Move, PokeapiResponse } from "./interfaces/pokeapi-response.interface";
import {
  HttpAdapter,
  PokeApiAdapter,
  PokeApiFetchAdapter,
} from "../api/pokeApi.adapter";

export class Pokemon {
  get imageUrl(): string {
    return `https://pokemon.com/${this.id}.jpg`;
  }

  constructor(
    public readonly id: number,
    public name: string,
    private readonly http: HttpAdapter,
  ) {}

  scream() {
    console.log(`${this.name.toUpperCase()}!!!`);
  }

  speak() {
    console.log(`${this.name}, ${this.name}`);
  }

  async getMoves(): Promise<Move[]> {
    const data = await this.http.get<PokeapiResponse>(
      "https://pokeapi.co/api/v2/pokemon/4",
    );

    console.log("data", data.moves[0].move.name);
    return data.moves;
  }
}

const pokeapi = new PokeApiAdapter();
const pokeapiFetch = new PokeApiFetchAdapter();

export const charmander = new Pokemon(4, "Charmander", pokeapi);
export const charmander2 = new Pokemon(4, "Charmander2", pokeapiFetch);

charmander.getMoves();
charmander2.getMoves();
