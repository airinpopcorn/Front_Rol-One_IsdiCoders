import { createReducer, on } from '@ngrx/store';
import { iGameModel, iGameState } from 'src/app/models/game';
import * as ac from './game.action.creators';

export const initialState: iGameState = {
  games: [] as Array<iGameModel>,
};

export const gameReducer = createReducer(
  initialState,
  on(ac.loadGame, (state, { games }) => ({ games: games }))
);
