import { Character } from './character';
import { Counselor } from './counselor';
import { Fighter } from './fighter';
import { King } from './king';
import { Squire } from './squire';

describe('Given the class Character', () => {
  describe('When i INSTANTIATE an object', () => {
    const char = new Character('', '', 0, 'king');
    test('Then an object should be created with instances properties: name, family, age, category isAlive, message and static property serie = got', () => {
      expect(char).toBeInstanceOf(Character);
      expect(char).toHaveProperty('name');
      expect(char).toHaveProperty('family');
      expect(char).toHaveProperty('age');
      expect(char).toHaveProperty('category');
      expect(char).toHaveProperty('isAlive');
      expect(char).toHaveProperty('message');
      expect(Character.series).toBe('GoT');
    });
  });
});

describe('Given the class counselor', () => {
  describe('When i INSTANTIATE an object', () => {
    const char = new Character('', '', 0, 'counselor');
    test('Then an object should be created with instances properties: name, family, age, category isAlive, message and static property serie = got', () => {
      expect(char).toBeInstanceOf(Character);
      expect(char).toHaveProperty('name');
      expect(char).toHaveProperty('family');
      expect(char).toHaveProperty('age');
      expect(char).toHaveProperty('category');
      expect(char).toHaveProperty('isAlive');
      expect(char).toHaveProperty('message');
      expect(Character.series).toBe('GoT');
    });
  });
});
