import { iUser } from './user';

export interface iCharacterState {
  characters: Array<iCharacter>;
}

export interface iCharacter {
  _id?: string;
  player?: iUser;
  idGame?: string;
  image?: string;
  name: string;
  life: string;
  strength: string;
  intelligence: string;
  constitution: string;
  sanity?: string;
  willingness?: string;
  skill?: string;
  violence?: string;
  profession?: string;
  reputation?: string;
  tools?: Array<string>;
  clan?: string;
  perception?: string;
  dexterity?: string;
  awareness?: string;
  weapon?: string;
  shield?: string;
  effort?: string;
  injury?: string;
  charisma?: string;
  manipulation?: string;
  appearence?: string;
}

export class CharacterModel implements iCharacter {
  constructor(
    public name: string,
    public life: string,
    public strength: string,
    public intelligence: string,
    public constitution: string
  ) {}
}
