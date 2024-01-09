import Axios from 'axios';
import { CharacterEntityApi } from './character-collection.api-model';
/* interface ResponseApi {
  info: {
    count: number,
    pages: number,
    next: string,
    prev: number | null
  },
  results: CharacterEntityApi[]
} */
const URL_RICK_MORTY_API = 'https://rickandmortyapi.com/api/character/';
const characterListURL = '/api/characters'; // SERVER

export const getCharacterCollection = async (): Promise<CharacterEntityApi[]> => {
  try {
    const { data } = await Axios.get<CharacterEntityApi[]>(characterListURL);
    return data;
  } catch (error) {
    console.log(error)
    return [];
  }
};
