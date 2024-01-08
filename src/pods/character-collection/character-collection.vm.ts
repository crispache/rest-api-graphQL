export interface CharacterEntityVm {
  id: number;
  name: string;
  picture: string;
  gender: 'Female' | 'Male' | 'Genderless' | 'unknown';
  species: string;
}
