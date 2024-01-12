import { gql } from 'graphql-request';
import { Character } from './character.api-model';
import { graphQLClient } from 'core/api';

export const getCharacter = async (id: number): Promise<Character> => {
  try {
    const query = gql`
      query ($id: ID!) {
        character(id: $id) {
            id
            name
            image
            gender
            species
        }
      }
    `;
    const { character } = await graphQLClient.request<{character: Character}>(query, { id });
    return character;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

export const saveCharacter = async (character: Character): Promise<boolean> => {
  return true;
};
