import { createAction, props } from '@ngrx/store';
import { iUser, iUserState } from 'src/app/models/user';

export const loadUser = createAction(
  '[User Object] Load User',
  props<{ user: iUser; token: string }>()
);

export const updateUser = createAction(
  '[User] Update User',
  props<{ data: Partial<iUserState> }>()
);

export const logoutUser = createAction('[User] Logout');
