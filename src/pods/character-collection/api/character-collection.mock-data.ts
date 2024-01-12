import { CharacterEntityApi } from './character-collection.api-model';

export const mockCharacterCollection: CharacterEntityApi[] = [
  {
    id: 1,
    name: 'Rick Sanchez',
    species: 'Human',
    gender: 'Male',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  },
  {
    id: 2,
    name: 'Morty Smith',
    species: 'Human',
    gender: 'Male',
    image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
  },
];
