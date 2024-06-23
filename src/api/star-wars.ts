import { useQuery } from "@tanstack/vue-query";

export enum StarWarsEntities {
  People = "people",
  Planets = "planets",
}

export const useStarWarsEntities = {
  setup(entity: StarWarsEntities = StarWarsEntities.People) {
    const getStarWarsNames = async () => {
      const response = await fetch(`https://swapi.dev/api/${entity}`);
      const data = await response.json();
      return data;
    };

    return useQuery({
      queryKey: ["star-wars-entities", entity],
      queryFn: getStarWarsNames,
      staleTime: 1000 + 30, // 30 seconds,
      refetchOnMount: false,
    });
  },
};

export const useEntity = {
  setup(entity: StarWarsEntities, id: string) {
    const getStarWarsNames = async () => {
      const response = await fetch(`https://swapi.dev/api/${entity}/${id}`);
      const data = await response.json();
      return data;
    };

    return useQuery({
      queryKey: ["star-wars-entity", entity, id],
      queryFn: getStarWarsNames,
      staleTime: 1000 + 30, // 30 seconds,
    });
  },
};

// export const usePerson = {
//   setup(id?: string) {
//     const getStarWarsNames = async () => {
//       const response = await fetch(`https://swapi.dev/api/people/${id}`);
//       const data = await response.json();
//       return data;
//     };

//     return useQuery({
//       queryKey: ["star-wars-person"],
//       queryFn: getStarWarsNames,
//       staleTime: 1000 + 30, // 30 seconds
//     });
//   },
// };

export function getIdFromUrl(url: string) {
  return url.split("/")[5];
}
