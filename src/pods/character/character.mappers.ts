import * as apiModel from './api/character.api-model';
import * as viewModel from './character.vm';

export const mapCharacterFromApiToVm = (
  character: apiModel.Character
): viewModel.Character => ({
  ...character,
  name: character.name,
  image: character.image,
  gender: character.gender,
  species: character.species,
  sentences: character.sentences
});

export const mapCharacterFromVmToApi = (
  character: viewModel.Character
): apiModel.Character =>
  ({
    ...character,
    name: character.name,
    image: character.image,
    gender: character.gender,
    species: character.species,
    sentences: character.sentences
  } as unknown as apiModel.Character);
