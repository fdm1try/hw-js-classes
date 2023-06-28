export const InvalidCharacterNameError = new Error('Name should be from 2 to 10 characters long.');
export const InvalidCharacterTypeError = new Error('Unknown character type.');
export const CharacterIsDeadErorr = new Error('Character is dead.');

export default class Character {
  constructor(name, type) {
    if (name.length < 2 || name.length > 10) {
      throw InvalidCharacterNameError;
    }
    if (['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'].indexOf(type) === -1) {
      throw InvalidCharacterTypeError;
    }
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = 0;
    this.defence = 0;
  }

  levelUp() {
    if (this.health <= 0) {
      throw CharacterIsDeadErorr;
    }
    this.level += 1;
    this.health = 100;
  }

  damage(points) {
    this.health -= points * (1 - this.defence / 100);
    this.health = this.health >= 0 ? this.health : 0;
  }
}
