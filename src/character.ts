type CharacterMin = {
  name: string;
  family: string;
  age: number;
  category: 'king' | 'fighter' | 'counselor' | 'squire';
};

export class Character implements CharacterMin {
  static series = 'GoT';
  _isAlive: boolean;
  public get isAlive(): boolean {
    return this._isAlive;
  }
}
