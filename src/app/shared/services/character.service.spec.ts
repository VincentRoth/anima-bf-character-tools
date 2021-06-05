import { TestBed } from '@angular/core/testing';
import { constant } from '../constant';
import { Advantage, Disadvantage } from '../models';
import { CharacterService } from './character.service';

const storageKey = constant.localCharacterKey;
const startingCreationPoints = constant.startingCreationPoints;
const startingLevel = constant.startingLevel;

const advantage: Advantage = {
  id: 1,
  name: 'Dump advantage',
  description: 'Dump advantage description',
  effect: 'Dump advantage effect',
  condition: 'Dump advantage conditions',
  note: 'Dump advantage note',
  costs: [1, 2, 3],
  source: 'Core p.18',
  types: ['Avantage de passé', 'Richesse']
};

const disadvantage: Disadvantage = {
  id: 2,
  name: 'Dump disadvantage',
  description: 'Dump disadvantage description',
  effect: 'Dump disadvantage effect',
  condition: 'Dump disadvantage conditions',
  note: 'Dump disadvantage note',
  benefits: [1, 2],
  source: 'Core p.19',
  types: ['Désavantage de passé', 'Test']
};

describe('CharacterService', () => {
  let service: CharacterService;

  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharacterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should init a default character', () => {
    const expectedResult = {
      raceName: null,
      className: null,
      creationPoints: startingCreationPoints,
      advantages: [],
      disadvantages: [],
      level: startingLevel,
      refTables: []
    };

    expect(service.get()).toEqual(expectedResult);

    expect(JSON.parse(localStorage.getItem(storageKey))).toEqual(expectedResult);
  });

  it('should set character race', () => {
    service.changeRace('Humain');

    const expectedResult = {
      raceName: 'Humain',
      className: null,
      creationPoints: startingCreationPoints,
      advantages: [],
      disadvantages: [],
      level: startingLevel,
      refTables: []
    };

    expect(service.get()).toEqual(expectedResult);

    expect(JSON.parse(localStorage.getItem(storageKey))).toEqual(expectedResult);
  });

  it('should set character class', () => {
    service.changeClass('Guerrier');

    const expectedResult = {
      raceName: null,
      className: 'Guerrier',
      creationPoints: startingCreationPoints,
      advantages: [],
      disadvantages: [],
      level: startingLevel,
      refTables: []
    };

    expect(service.get()).toEqual(expectedResult);

    expect(JSON.parse(localStorage.getItem(storageKey))).toEqual(expectedResult);
  });

  it('should add an advantage to character', () => {
    service.addAdvantage(advantage, 2);

    expect(advantage)
      .withContext('Original advantage should not be modified.')
      .toEqual({
        id: 1,
        name: 'Dump advantage',
        description: 'Dump advantage description',
        effect: 'Dump advantage effect',
        condition: 'Dump advantage conditions',
        note: 'Dump advantage note',
        costs: [1, 2, 3],
        source: 'Core p.18',
        types: ['Avantage de passé', 'Richesse']
      } as Advantage);

    const expectedResult = {
      raceName: null,
      className: null,
      creationPoints: startingCreationPoints - 2,
      advantages: [{ id: advantage.id, creationPoints: 2 }],
      disadvantages: [],
      level: startingLevel,
      refTables: []
    };

    expect(service.get()).toEqual(expectedResult);

    expect(JSON.parse(localStorage.getItem(storageKey))).toEqual(expectedResult);
  });

  it('should add a disadvantage to character', () => {
    service.addAdvantage(disadvantage, 1);

    expect(disadvantage)
      .withContext('Original disadvantage should not be modified.')
      .toEqual({
        id: 2,
        name: 'Dump disadvantage',
        description: 'Dump disadvantage description',
        effect: 'Dump disadvantage effect',
        condition: 'Dump disadvantage conditions',
        note: 'Dump disadvantage note',
        benefits: [1, 2],
        source: 'Core p.19',
        types: ['Désavantage de passé', 'Test']
      } as Disadvantage);

    const expectedResult = {
      raceName: null,
      className: null,
      creationPoints: startingCreationPoints + 1,
      advantages: [],
      disadvantages: [{ id: disadvantage.id, creationPoints: 1 }],
      level: startingLevel,
      refTables: []
    };

    expect(service.get()).toEqual(expectedResult);

    expect(JSON.parse(localStorage.getItem(storageKey))).toEqual(expectedResult);
  });

  it('should remove an advantage from character', () => {
    service.addAdvantage(advantage, 3);

    expect(service.get()).toEqual({
      raceName: null,
      className: null,
      creationPoints: startingCreationPoints - 3,
      advantages: [{ id: advantage.id, creationPoints: 3 }],
      disadvantages: [],
      level: startingLevel,
      refTables: []
    });

    service.removeAdvantage(advantage.id);

    const expectedResult = {
      raceName: null,
      className: null,
      creationPoints: startingCreationPoints,
      advantages: [],
      disadvantages: [],
      level: startingLevel,
      refTables: []
    };

    expect(service.get()).toEqual(expectedResult);

    expect(JSON.parse(localStorage.getItem(storageKey))).toEqual(expectedResult);
  });

  it('should remove a disadvantage from character', () => {
    service.addAdvantage(disadvantage, 2);

    expect(service.get()).toEqual({
      raceName: null,
      className: null,
      creationPoints: startingCreationPoints + 2,
      advantages: [],
      disadvantages: [{ id: disadvantage.id, creationPoints: 2 }],
      level: startingLevel,
      refTables: []
    });

    service.removeAdvantage(disadvantage.id);

    const expectedResult = {
      raceName: null,
      className: null,
      creationPoints: startingCreationPoints,
      advantages: [],
      disadvantages: [],
      level: startingLevel,
      refTables: []
    };

    expect(service.get()).toEqual(expectedResult);

    expect(JSON.parse(localStorage.getItem(storageKey))).toEqual(expectedResult);
  });

  it('should take in account only last same advantage', () => {
    service.addAdvantage(advantage, 1);
    service.addAdvantage(advantage, 2);

    expect(service.get()).toEqual({
      raceName: null,
      className: null,
      creationPoints: startingCreationPoints - 2,
      advantages: [{ id: advantage.id, creationPoints: 2 }],
      disadvantages: [],
      level: startingLevel,
      refTables: []
    });

    service.addAdvantage(advantage, 1);

    expect(service.get()).toEqual({
      raceName: null,
      className: null,
      creationPoints: startingCreationPoints - 1,
      advantages: [{ id: advantage.id, creationPoints: 1 }],
      disadvantages: [],
      level: startingLevel,
      refTables: []
    });
  });

  it('should indicate if advantage belongs to character', () => {
    expect(service.hasAdvantage(advantage.id)).toBeFalsy();
    expect(service.hasAdvantage(advantage.id, 1)).toBeFalsy();
    expect(service.hasAdvantage(advantage.id, 2)).toBeFalsy();
    expect(service.hasAdvantage(advantage.id, 3)).toBeFalsy();

    service.addAdvantage(advantage, 2);

    expect(service.hasAdvantage(advantage.id)).toBeTruthy();
    expect(service.hasAdvantage(advantage.id, 1)).toBeFalsy();
    expect(service.hasAdvantage(advantage.id, 2)).toBeTruthy();
    expect(service.hasAdvantage(advantage.id, 3)).toBeFalsy();
  });

  it('should indicate if disadvantage belongs to character', () => {
    expect(service.hasAdvantage(disadvantage.id)).toBeFalsy();
    expect(service.hasAdvantage(disadvantage.id, 1)).toBeFalsy();
    expect(service.hasAdvantage(disadvantage.id, 2)).toBeFalsy();
    expect(service.hasAdvantage(disadvantage.id, 3)).toBeFalsy();

    service.addAdvantage(disadvantage, 1);

    expect(service.hasAdvantage(disadvantage.id)).toBeTruthy();
    expect(service.hasAdvantage(disadvantage.id, 1)).toBeTruthy();
    expect(service.hasAdvantage(disadvantage.id, 2)).toBeFalsy();
    expect(service.hasAdvantage(disadvantage.id, 3)).toBeFalsy();
  });

  it('should set character level', () => {
    service.changeLevel(9);

    const expectedResult = {
      raceName: null,
      className: null,
      creationPoints: startingCreationPoints,
      advantages: [],
      disadvantages: [],
      level: 9,
      refTables: []
    };

    expect(service.get()).toEqual(expectedResult);

    expect(JSON.parse(localStorage.getItem(storageKey))).toEqual(expectedResult);
  });

  it('should add a reference table to character', () => {
    service.addRefTable('test#ref');

    const expectedResult = {
      raceName: null,
      className: null,
      creationPoints: startingCreationPoints,
      advantages: [],
      disadvantages: [],
      level: startingLevel,
      refTables: ['test#ref']
    };

    expect(service.get()).toEqual(expectedResult);

    expect(JSON.parse(localStorage.getItem(storageKey))).toEqual(expectedResult);
  });

  it('should not add twice a reference table to character', () => {
    service.addRefTable('test#ref');
    service.addRefTable('test#ref');

    expect(service.get()).toEqual({
      raceName: null,
      className: null,
      creationPoints: startingCreationPoints,
      advantages: [],
      disadvantages: [],
      level: startingLevel,
      refTables: ['test#ref']
    });
  });

  it('should remove a reference table from character', () => {
    service.addRefTable('test#ref');

    expect(service.get()).toEqual({
      raceName: null,
      className: null,
      creationPoints: startingCreationPoints,
      advantages: [],
      disadvantages: [],
      level: startingLevel,
      refTables: ['test#ref']
    });

    service.removeRefTable('test#ref');

    const expectedResult = {
      raceName: null,
      className: null,
      creationPoints: startingCreationPoints,
      advantages: [],
      disadvantages: [],
      level: startingLevel,
      refTables: []
    };

    expect(service.get()).toEqual(expectedResult);

    expect(JSON.parse(localStorage.getItem(storageKey))).toEqual(expectedResult);
  });

  it('should indicate if referrence table belongs to character', () => {
    expect(service.hasRefTable('test#ref')).toBeFalsy();

    service.addRefTable('test#ref');

    expect(service.hasRefTable('test#ref')).toBeTruthy();
  });

  it('should clear the character', () => {
    service.changeRace('Humain');
    service.changeClass('Guerrier');
    service.addAdvantage(advantage, 2);
    service.addAdvantage(disadvantage, 1);
    service.changeLevel(8);
    service.addRefTable('test#ref2');

    const expectedResult = {
      raceName: 'Humain',
      className: 'Guerrier',
      creationPoints: startingCreationPoints - 1,
      advantages: [{ id: advantage.id, creationPoints: 2 }],
      disadvantages: [{ id: disadvantage.id, creationPoints: 1 }],
      level: 8,
      refTables: ['test#ref2']
    };

    expect(service.get()).toEqual(expectedResult);

    expect(JSON.parse(localStorage.getItem(storageKey))).toEqual(expectedResult);

    service.clearCharacter();

    const expectedResultAfterClear = {
      raceName: null,
      className: null,
      creationPoints: startingCreationPoints,
      advantages: [],
      disadvantages: [],
      level: startingLevel,
      refTables: []
    };

    expect(service.get()).toEqual(expectedResultAfterClear);

    expect(JSON.parse(localStorage.getItem(storageKey))).toEqual(expectedResultAfterClear);
  });
});
