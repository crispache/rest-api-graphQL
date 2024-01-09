export interface Character {
  name: string;
  image: string;
  gender: 'Female' | 'Male' | 'Genderless' | 'unknown';
  species: string;
}

export const createEmptyCharacter = (): Character => ({
  name: '',
  image: '',
  gender: 'unknown',
  species: '',
});
