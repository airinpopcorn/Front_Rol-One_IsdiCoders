import { ActionReducerMap } from '@ngrx/store';
import { iCharacterState } from '../models/character';
import { iGameState } from '../models/game';
import { iUserState } from '../models/user';
import { characterReducer } from './character.reducer/character.reducer';
import { gameReducer } from './game.reducer/game.reducer';
import { userReducer } from './user.reducer/user.reducer';

export interface AppState {
  users: iUserState;
  characters: iCharacterState;
  games: iGameState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  users: userReducer,
  characters: characterReducer,
  games: gameReducer,
};
