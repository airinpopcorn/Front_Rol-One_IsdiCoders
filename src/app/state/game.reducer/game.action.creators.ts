import { createAction, props } from '@ngrx/store';
import { iGameModel } from 'src/app/models/game';

export const loadGame = createAction(
  '[Game List] Load Games',
  props<{ games: Array<iGameModel> }>()
);
