import { Injectable } from '@angular/core';

function roll(from: number, to: number): number {
  return Math.trunc(Math.random() * (to - from + 1) + from);
}

@Injectable({
  providedIn: 'root'
})
export class RollService {

  constructor() { }

  roll10(): number {
    return roll(1, 10);
  }

  roll100(): number {
    return roll(1, 100);
  }
}
