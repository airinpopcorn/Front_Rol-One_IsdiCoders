import { createReducer, on } from '@ngrx/store';
import { iUser, iUserState } from 'src/app/models/user';
import * as ac from './user.action.creator';

export const initialState: iUserState = {
  user: {} as iUser,
  token: '',
};

export const userReducer = createReducer(
  initialState,
  on(ac.loadUser, (state, { user, token }) => ({ user, token })),
  on(ac.updateUser, (state, { data }) => ({
    user: { ...state.user, ...data.user },
    token: data.token ? data.token : state.token,
  })),
  on(ac.logoutUser, (state) => initialState)
);
