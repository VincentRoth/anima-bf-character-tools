import { TestBed } from '@angular/core/testing';

import { CharacterService } from './character.service';
import { constant } from '../constant';
import { Advantage, Disadvantage } from 'src/app/advantages/advantage.model';

const storageKey = constant.localCharacterKey;
const startingCreationPoints = constant.startingCreationPoints;
const startingLevel = constant.startingLevel;

const advantage: Advantage = {
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
  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    const service: CharacterService = TestBed.get(CharacterService);
    expect(service).toBeTruthy();
  });

  it('should init a default character', () => {
    const service: CharacterService = TestBed.get(CharacterService);

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

    expect(JSON.parse(localStorage.getItem(storageKey))).toEqual(
      expectedResult
    );
  });

  it('should set character race', () => {
    const service: CharacterService = TestBed.get(CharacterService);

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

    expect(JSON.parse(localStorage.getItem(storageKey))).toEqual(
      expectedResult
    );
  });

  it('should set character class', () => {
    const service: CharacterService = TestBed.get(CharacterService);

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

    expect(JSON.parse(localStorage.getItem(storageKey))).toEqual(
      expectedResult
    );
  });

  it('should add an advantage to character', () => {
    const service: CharacterService = TestBed.get(CharacterService);

    service.addAdvantage(advantage, 2);

    expect(advantage).toEqual(
      {
        name: 'Dump advantage',
        description: 'Dump advantage description',
        effect: 'Dump advantage effect',
        condition: 'Dump advantage conditions',
        note: 'Dump advantage note',
        costs: [1, 2, 3],
        source: 'Core p.18',
        types: ['Avantage de passé', 'Richesse']
      },
      'Original advantage should not be modified.'
    );

    const expectedResult = {
      raceName: null,
      className: null,
      creationPoints: startingCreationPoints - 2,
      advantages: [{ ...advantage, creationPoints: 2 }],
      disadvantages: [],
      level: startingLevel,
      refTables: []
    };

    expect(service.get()).toEqual(expectedResult);

    expect(JSON.parse(localStorage.getItem(storageKey))).toEqual(
      expectedResult
    );
  });

  it('should add a disadvantage to character', () => {
    const service: CharacterService = TestBed.get(CharacterService);

    service.addAdvantage(disadvantage, 1);

    expect(disadvantage).toEqual(
      {
        name: 'Dump disadvantage',
        description: 'Dump disadvantage description',
        effect: 'Dump disadvantage effect',
        condition: 'Dump disadvantage conditions',
        note: 'Dump disadvantage note',
        benefits: [1, 2],
        source: 'Core p.19',
        types: ['Désavantage de passé', 'Test']
      },
      'Original disadvantage should not be modified.'
    );

    const expectedResult = {
      raceName: null,
      className: null,
      creationPoints: startingCreationPoints + 1,
      advantages: [],
      disadvantages: [{ ...disadvantage, creationPoints: 1 }],
      level: startingLevel,
      refTables: []
    };

    expect(service.get()).toEqual(expectedResult);

    expect(JSON.parse(localStorage.getItem(storageKey))).toEqual(
      expectedResult
    );
  });

  it('should remove an advantage from character', () => {
    const service: CharacterService = TestBed.get(CharacterService);

    service.addAdvantage(advantage, 3);

    expect(service.get()).toEqual({
      raceName: null,
      className: null,
      creationPoints: startingCreationPoints - 3,
      advantages: [{ ...advantage, creationPoints: 3 }],
      disadvantages: [],
      level: startingLevel,
      refTables: []
    });

    service.removeAdvantage(advantage.name);

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

    expect(JSON.parse(localStorage.getItem(storageKey))).toEqual(
      expectedResult
    );
  });

  it('should remove a disadvantage from character', () => {
    const service: CharacterService = TestBed.get(CharacterService);

    service.addAdvantage(disadvantage, 2);

    expect(service.get()).toEqual({
      raceName: null,
      className: null,
      creationPoints: startingCreationPoints + 2,
      advantages: [],
      disadvantages: [{ ...disadvantage, creationPoints: 2 }],
      level: startingLevel,
      refTables: []
    });

    service.removeAdvantage(disadvantage.name);

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

    expect(JSON.parse(localStorage.getItem(storageKey))).toEqual(
      expectedResult
    );
  });

  it('should take in account only last same advantage', () => {
    const service: CharacterService = TestBed.get(CharacterService);

    service.addAdvantage(advantage, 1);
    service.addAdvantage(advantage, 2);

    expect(service.get()).toEqual({
      raceName: null,
      className: null,
      creationPoints: startingCreationPoints - 2,
      advantages: [{ ...advantage, creationPoints: 2 }],
      disadvantages: [],
      level: startingLevel,
      refTables: []
    });

    service.addAdvantage(advantage, 1);

    expect(service.get()).toEqual({
      raceName: null,
      className: null,
      creationPoints: startingCreationPoints - 1,
      advantages: [{ ...advantage, creationPoints: 1 }],
      disadvantages: [],
      level: startingLevel,
      refTables: []
    });
  });

  it('should indicate if advantage belongs to character', () => {
    const service: CharacterService = TestBed.get(CharacterService);

    expect(service.hasAdvantage(advantage.name)).toBeFalsy();
    expect(service.hasAdvantage(advantage.name, 1)).toBeFalsy();
    expect(service.hasAdvantage(advantage.name, 2)).toBeFalsy();
    expect(service.hasAdvantage(advantage.name, 3)).toBeFalsy();

    service.addAdvantage(advantage, 2);

    expect(service.hasAdvantage(advantage.name)).toBeTruthy();
    expect(service.hasAdvantage(advantage.name, 1)).toBeFalsy();
    expect(service.hasAdvantage(advantage.name, 2)).toBeTruthy();
    expect(service.hasAdvantage(advantage.name, 3)).toBeFalsy();
  });

  it('should indicate if disadvantage belongs to character', () => {
    const service: CharacterService = TestBed.get(CharacterService);

    expect(service.hasAdvantage(disadvantage.name)).toBeFalsy();
    expect(service.hasAdvantage(disadvantage.name, 1)).toBeFalsy();
    expect(service.hasAdvantage(disadvantage.name, 2)).toBeFalsy();
    expect(service.hasAdvantage(disadvantage.name, 3)).toBeFalsy();

    service.addAdvantage(disadvantage, 1);

    expect(service.hasAdvantage(disadvantage.name)).toBeTruthy();
    expect(service.hasAdvantage(disadvantage.name, 1)).toBeTruthy();
    expect(service.hasAdvantage(disadvantage.name, 2)).toBeFalsy();
    expect(service.hasAdvantage(disadvantage.name, 3)).toBeFalsy();
  });

  it('should set character level', () => {
    const service: CharacterService = TestBed.get(CharacterService);

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

    expect(JSON.parse(localStorage.getItem(storageKey))).toEqual(
      expectedResult
    );
  });

  it('should add a reference table to character', () => {
    const service: CharacterService = TestBed.get(CharacterService);

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

    expect(JSON.parse(localStorage.getItem(storageKey))).toEqual(
      expectedResult
    );
  });

  it('should not add twice a reference table to character', () => {
    const service: CharacterService = TestBed.get(CharacterService);

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
    const service: CharacterService = TestBed.get(CharacterService);

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

    expect(JSON.parse(localStorage.getItem(storageKey))).toEqual(
      expectedResult
    );
  });

  it('should clear the character', () => {
    const service: CharacterService = TestBed.get(CharacterService);

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
      advantages: [{ ...advantage, creationPoints: 2 }],
      disadvantages: [{ ...disadvantage, creationPoints: 1 }],
      level: 8,
      refTables: ['test#ref2']
    };

    expect(service.get()).toEqual(expectedResult);

    expect(JSON.parse(localStorage.getItem(storageKey))).toEqual(
      expectedResult
    );

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

    expect(JSON.parse(localStorage.getItem(storageKey))).toEqual(
      expectedResultAfterClear
    );
  });
});
