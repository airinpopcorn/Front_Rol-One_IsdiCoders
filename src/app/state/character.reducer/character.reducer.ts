/* istanbul ignore file */
import { createReducer, on } from '@ngrx/store';
import { iCharacter } from 'src/app/models/character';
import * as ac from './character.actions.creators';

export const initialState = {
  characters: [] as Array<iCharacter>,
};

export const characterReducer = createReducer(
  initialState,
  on(ac.loadCharacters, (state, { characters }) => ({
    characters: [...characters],
  })),
  on(ac.addCharacter, (state, { newCharacter }) => ({
    characters: [...state.characters, newCharacter],
  })),
  on(ac.updateCharacter, (state, { updatedCharacter }) => ({
    characters: state.characters.map((character) =>
      character._id === updatedCharacter._id
        ? { ...character, ...updatedCharacter }
        : character
    ),
  })),
  on(ac.deleteCharacter, (state, { idDelete }) => ({
    characters: state.characters.filter(
      (character) => character._id !== idDelete
    ),
  }))
);
