import { createReducer, on } from '@ngrx/store';
import { iUser, iUserState } from 'src/app/models/user';
import * as ac from './user.action.creator';

export const initialState: iUserState = {
  user: {} as iUser,
};

export const userReducer = createReducer(
  initialState,
  on(ac.loadUser, (state, { user }) => ({ user: user }))
);
