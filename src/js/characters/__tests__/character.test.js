import Character, { InvalidCharacterNameError, InvalidCharacterTypeError, CharacterIsDeadErorr } from '../base';

test('Should throw an InvalidCharacterNameError', () => {
  function createCharacter() {
    let character = new Character('a', 'Bowman');
    if (character) {
      character = null;
    }
  }
  expect(createCharacter).toThrow(InvalidCharacterNameError);
});

test('Should throw an InvalidCharacterNameError', () => {
  function createCharacter() {
    let character = new Character('abcdefghijk', 'Bowman');
    if (character) {
      character = null;
    }
  }
  expect(createCharacter).toThrow(InvalidCharacterNameError);
});

test('Should throw an InvalidCharacterTypeError', () => {
  function createCharacter() {
    let character = new Character('John', 'Betman');
    if (character) {
      character = null;
    }
  }
  expect(createCharacter).toThrow(InvalidCharacterTypeError);
});

test('Test character damage', () => {
  const bowman = new Character('Jake', 'Bowman');
  bowman.damage(150);
  expect(bowman.health).toBe(0);
});

test('Test character level up', () => {
  const bowman = new Character('Jake', 'Bowman');
  bowman.damage(50);
  bowman.levelUp();
  expect([bowman.health, bowman.level]).toEqual([100, 2]);
});

test('Should throw an CharacterIsDeadErorr', () => {
  function levelUp() {
    const character = new Character('Jake', 'Bowman');
    character.damage(150);
    character.levelUp();
  }
  expect(levelUp).toThrow(CharacterIsDeadErorr);
});
