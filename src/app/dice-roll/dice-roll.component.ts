import { Component, OnInit } from '@angular/core';
import { RollService } from 'src/app/shared/services';

@Component({
  selector: 'app-dice-roll',
  templateUrl: './dice-roll.component.html',
  styleUrls: ['./dice-roll.component.scss']
})
export class DiceRollComponent implements OnInit {
  private diceValue: number;
  rollHistory: string[];
  private is100Dice: boolean;

  constructor(private rollService: RollService) {}

  ngOnInit() {
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
    this.rollHistory.unshift(this.getFormatedDiceValue());
    if (this.rollHistory.length > 10) {
      this.rollHistory.pop();
    }
  }

  roll10Dice() {
    this.is100Dice = false;

    this.addRollToHistory();
    this.diceValue = this.rollService.roll10();
  }

  roll100Dice() {
    this.is100Dice = true;

    this.addRollToHistory();
    this.diceValue = this.rollService.roll100();
  }
}
