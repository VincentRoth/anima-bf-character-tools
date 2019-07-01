import { Component, OnInit } from '@angular/core';
import { RollService } from '../shared/roll/roll.service';

@Component({
  selector: 'app-dice-roll',
  templateUrl: './dice-roll.component.html',
  styleUrls: ['./dice-roll.component.scss']
})
export class DiceRollComponent implements OnInit {

  diceValue: number;
  rollHistory: string[];
  is10Dice: boolean;
  is100Dice: boolean;

  constructor(private rollService: RollService) { }

  ngOnInit() {
    this.is10Dice = false;
    this.is100Dice = false;
    this.rollHistory = [];
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

  addRollToHistory() {
    this.rollHistory.push(this.getFormatedDiceValue());
    if (this.rollHistory.length > 10) {
      this.rollHistory.shift();
    }
  }

  roll10Dice() {
    this.is10Dice = true;
    this.is100Dice = false;

    this.diceValue = this.rollService.roll10();
    this.addRollToHistory();
  }

  roll100Dice() {
    this.is10Dice = false;
    this.is100Dice = true;

    this.diceValue = this.rollService.roll100();
    this.addRollToHistory();
  }

}
