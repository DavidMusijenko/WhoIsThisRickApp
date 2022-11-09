import { useQuery, useInfiniteQuery } from "@tanstack/react-query";

export const fetchAllCharacters = ({
  pageParam = "https://rickandmortyapi.com/api/character?page=1",
}) => {
  return fetch(pageParam)
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.error(error);
    });
};

export const fetchCharacter = ({ id }: { id: number }) => {
  return fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.error(error);
    });
};

export const useFetchCharacterQuery = (id: number) => {
  return useQuery(["character", id], () => fetchCharacter({ id }));
};
