import { createReducer, on } from '@ngrx/store';
import { iUser } from 'src/app/models/user';
import * as ac from './user.action.creator';

export const initialState = {
  user: {} as iUser,
};

export const userReducer = createReducer(
  initialState,
  on(ac.loadUser, (state, { user }) => ({ user: user }))
);
