import { iCharacter } from './character';

export interface iUserState {
  user: iUser;
  token: string;
}
export interface iUser {
  _id?: string;
  name: string;
  email: string;
  password: string;
  role: string;
  characters?: Array<iCharacter>;
  games?: Array<string>;
}

export class UserModel implements iUser {
  constructor(
    public name: string,
    public email: string,
    public password: string,
    public role: string,
    public characters: Array<iCharacter>,
    public games: Array<string>
  ) {}
}
