import { gql } from 'graphql-request';
import { CharacterEntityApi } from './character-collection.api-model';
import { graphQLClient } from 'core/api';

interface ResponseApi {
  characters: {
    results: CharacterEntityApi[];
  };
}

export const getCharacterCollection = async (): Promise<
  CharacterEntityApi[]
> => {
  try {
    const query = gql`
      query {
        characters {
          results {
            id
            name
            image
            gender
            species
          }
        }
      }
    `;

    const { characters } = await graphQLClient.request<ResponseApi>(query);
    return characters.results;
  } catch (error) {
    console.log(error);
    return [];
  }
};
