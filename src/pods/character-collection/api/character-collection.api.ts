import { CharacterEntityApi } from './character-collection.api-model';
import { mockCharacterCollection } from './hotel-collection.mock-data';

let characterCollection = [...mockCharacterCollection];

export const getCharacterCollection = async (): Promise<CharacterEntityApi[]> => {
  return characterCollection;
};
