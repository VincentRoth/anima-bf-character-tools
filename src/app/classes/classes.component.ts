import { Component, OnInit } from '@angular/core';
import { ClassModel } from 'src/app/shared/models';
import { ClassesService } from 'src/app/shared/services';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit {
  classes: ClassModel[];

  constructor(private classesService: ClassesService) {}

  ngOnInit(): void {
    this.classesService.get().subscribe({
      next: (data) => (this.classes = data)
    });
  }

  getPsychicPointPerLevel(clazz: ClassModel): string {
    if (clazz.psychicPointPerLevel >= 1) {
      return `+ ${clazz.psychicPointPerLevel} par niveau`;
    }
    return `+ 1 tous les ${Math.trunc(1 / clazz.psychicPointPerLevel)} niveaux`;
  }
}
