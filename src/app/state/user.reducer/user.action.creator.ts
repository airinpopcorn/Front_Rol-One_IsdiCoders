import { createAction, props } from '@ngrx/store';
import { iUser } from 'src/app/models/user';

export const loadUser = createAction("[User Object] Load User", props<{user:iUser}>());
