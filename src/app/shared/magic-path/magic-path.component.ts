import { Component, Input, OnInit } from '@angular/core';
import { MagicPath } from 'src/app/shared/models';

@Component({
  selector: 'app-magic-path',
  templateUrl: './magic-path.component.html',
  styleUrls: ['./magic-path.component.scss']
})
export class MagicPathComponent implements OnInit {
  @Input() magicPath: MagicPath;

  constructor() {}

  ngOnInit() {}
}
