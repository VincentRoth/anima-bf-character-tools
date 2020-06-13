import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content-title',
  templateUrl: './content-title.component.html',
  styleUrls: ['./content-title.component.scss']
})
export class ContentTitleComponent {
  @Input() level: number;
  @Input() title: string;

  constructor() {}
}
