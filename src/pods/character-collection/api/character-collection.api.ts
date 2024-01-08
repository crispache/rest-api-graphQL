import Axios from 'axios';
import { CharacterEntityApi } from './character-collection.api-model';
interface ResponseApi {
  info: {
    count: number,
    pages: number,
    next: string,
    prev: number | null
  },
  results: CharacterEntityApi[]
}
const URL = 'https://rickandmortyapi.com/api/character/'

export const getCharacterCollection = async (): Promise<CharacterEntityApi[]> => {
  try {
    const { data } = await Axios.get<ResponseApi>(URL);
    return data.results;
  } catch (error) {
    console.log(error)
    return [];
  }
};
