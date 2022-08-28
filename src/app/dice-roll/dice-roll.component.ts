import { Component, OnInit } from '@angular/core';

import { RollService } from '../shared/services';

@Component({
  selector: 'app-dice-roll',
  templateUrl: './dice-roll.component.html',
  styleUrls: ['./dice-roll.component.scss']
})
export class DiceRollComponent implements OnInit {
  rollHistory: string[];
  private diceValue: number;
  private is100Dice: boolean;

  constructor(private rollService: RollService) {}

  addRollToHistory(): void {
    this.rollHistory.unshift(this.getFormatedDiceValue());
    if (this.rollHistory.length > 10) {
      this.rollHistory.pop();
    }
  }

  getFormatedDiceValue(): string {
    if (!this.diceValue) {
      return '';
    }
    if (this.is100Dice && this.diceValue < 10) {
      return `0${this.diceValue}`;
    }
    return this.diceValue.toString();
  }

  ngOnInit(): void {
    this.is100Dice = false;
    this.rollHistory = [];
  }

  roll100Dice(): void {
    this.is100Dice = true;

    this.addRollToHistory();
    this.diceValue = this.rollService.roll100();
  }

  roll10Dice(): void {
    this.is100Dice = false;

    this.addRollToHistory();
    this.diceValue = this.rollService.roll10();
  }
}
