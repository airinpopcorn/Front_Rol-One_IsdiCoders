import { createReducer, on } from '@ngrx/store';
import { iGameModel } from 'src/app/models/game';
import * as ac from './game.action.creators';

export const initialState = {
  game: {} as iGameModel,
};

export const gameReducer = createReducer(
  initialState,
  on(ac.loadGame, (state, { game }) => ({ game: game }))
);
