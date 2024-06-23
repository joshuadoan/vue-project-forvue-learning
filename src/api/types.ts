export enum ResourceType {
  Film = "films",
  People = "people",
  Planet = "planets",
  Species = "species",
  Starship = "starships",
  Vehicle = "vehicles",
}

/**
 * ResourceUrl String
 *
 * e.g. "https://swapi.co/api/people/1/",
 */
export type ResourceUrl = string;

export default interface People {
  birth_year: string;
  eye_color: string;
  films: ResourceUrl[];
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  name: string;
  skin_color: string;
  species: ResourceUrl[];
  starships: ResourceUrl[];
  vehicles: ResourceUrl[];
}

export default interface Planets {
  climate: string;
  diameter: string;
  films: ResourceUrl[];
  gravity: string;
  name: string;
  orbital_period: string;
  population: string;
  residents: ResourceUrl[];
  rotation_period: string;
  surface_water: string;
  terrain: string;
}
