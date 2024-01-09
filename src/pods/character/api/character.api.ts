
import Axios from 'axios';
import { Character } from './character.api-model';

const characterListURL = 'https://rickandmortyapi.com/api/character';

export const getCharacter = async (id: number): Promise<Character> => {
  try {
    const { data } = await Axios.get<Character>(`${characterListURL}/${id}`);
    return data;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};


export const saveCharacter = async (character: Character): Promise<boolean> => {
  return true;
};
