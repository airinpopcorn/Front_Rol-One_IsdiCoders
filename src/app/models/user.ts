export interface iUserState {
  user: iUser;
}
export interface iUser {
  id?: string;
  name: string;
  email: string;
  password: string;
  role: string;
  characters: Array<string>;
  games: Array<string>;
}

export class UserModel implements iUser {
  constructor(
    public name: string,
    public email: string,
    public password: string,
    public role: string,
    public characters: Array<string>,
    public games: Array<string>
  ) {}
}
