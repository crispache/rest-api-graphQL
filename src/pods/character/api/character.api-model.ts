export interface Character {
  id: number;
  name: string;
  image: string;
  gender: 'Female' | 'Male' | 'Genderless' | 'unknown';
  species: string;
}
