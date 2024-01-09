import Axios from 'axios';
import { Character } from './character.api-model';
import { Lookup } from 'common/models';

const characterListURL = '/api/characters';
const gendersListURL = '/api/genders';

export const getCharacter = async (id: number): Promise<Character> => {
  try {
    const { data } = await Axios.get<Character>(`${characterListURL}/${id}`);
    return data;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

export const getGenders = async (): Promise<Lookup[]> => {
  try {
    const { data } = await Axios.get<Lookup[]>(`${gendersListURL}`);
    return data;
  } catch (error) {
    console.log(error);
    return []
  }
};

export const saveCharacter = async (character: Character): Promise<boolean> => {
  try {
    await Axios.put<Character>(
      `${characterListURL}/${character.id}`,
      character
    );
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
