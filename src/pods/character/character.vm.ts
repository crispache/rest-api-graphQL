export interface Character {
  name: string;
  image: string;
  gender: 'Female' | 'Male' | 'Genderless' | 'unknown';
  species: string;
  bestSentences: string,
}

export const createEmptyCharacter = (): Character => ({
  name: '',
  image: '',
  gender: 'unknown',
  species: '',
  bestSentences: '',
});
