import { createAction, props } from '@ngrx/store';
import { iCharacter } from 'src/app/models/character';

export const loadCharacters = createAction(
  '[Character List] Load Characters',
  props<{ characters: Array<iCharacter> }>()
);

export const addCharacter = createAction(
  '[Character List] Add Character',
  props<{ newCharacter: iCharacter }>()
);

export const updateCharacter = createAction(
  '[Character List] Update Character',
  props<{ id: iCharacter['_id']; updatedCharacter: iCharacter }>()
);

export const deleteCharacter = createAction(
  '[Character List] Delete Character',
  props<{ idDelete: iCharacter['_id'] }>()
);
