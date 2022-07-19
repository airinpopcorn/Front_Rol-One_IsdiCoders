import { iCharacter } from './character';

export interface iGameState {
  games: Array<iGameModel>;
}

export interface iGameModel {
  _id?: string;
  title: string;
  creator: string;
  description: string;
  image: string;
  img_detail?: string;
  characters: Array<iCharacter>;
  template: { [key: string]: string };
}

export class GameModel implements iGameModel {
  constructor(
    public title: string,
    public creator: string,
    public description: string,
    public image: string,
    public characters: Array<iCharacter>,
    public template: { [key: string]: string }
  ) {}
}
