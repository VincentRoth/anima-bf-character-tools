import { Component, OnInit } from '@angular/core';
import { ClassesService } from './classes.service';
import { ClassModel } from './class.model';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit {
  private classes: ClassModel[];

  constructor(private classesService: ClassesService) {}

  ngOnInit() {
    this.classesService.get().subscribe({
      next: data => (this.classes = data)
    });
  }

  getPsychicPointPerLevel(clazz: ClassModel): string {
    if (clazz.psychicPointPerLevel >= 1) {
      return `+ ${clazz.psychicPointPerLevel} par niveau`;
    }
    return `+ 1 tous les ${Math.trunc(1 / clazz.psychicPointPerLevel)} niveaux`;
  }
}
