export interface iGameState {
  games: Array<iGameModel>;
}

export interface iGameModel {
  id?: string;
  title: string;
  creator: string;
  description: string;
  image: string;
  characters: Array<string>;
  template: Object;
}

export class GameModel implements iGameModel {
  constructor(
    public title: string,
    public creator: string,
    public description: string,
    public image: string,
    public characters: Array<string>,
    public template: Object
  ) {}
}
