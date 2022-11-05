//A diferencia de las clases, las interfaces no obligan a que el objeto venga con las propiedades especificadas

export interface PokemonListResponse {
    count:     number;
    next?:     string;
    previous?: string;
    results:   SmallPokemon[];
}

export interface SmallPokemon {
    name: string;
    url:  string;
    id:   number;
    img:  string;
}
