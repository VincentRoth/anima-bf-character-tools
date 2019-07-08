import { Component, OnInit } from '@angular/core';
import { ContentPanel, EContentType } from './content.model';
import { CreationHelpService } from './creation-help.service';

@Component({
  selector: 'app-creation-help',
  templateUrl: './creation-help.component.html',
  styleUrls: ['./creation-help.component.scss']
})
export class CreationHelpComponent implements OnInit {
  private contentPanels: ContentPanel[];

  constructor(private creationHelpService: CreationHelpService) {}

  ngOnInit() {
    this.creationHelpService.get().subscribe({
      next: data => (this.contentPanels = data)
    });
  }

  isParentPanel(panel: ContentPanel) {
    return (
      panel.content &&
      panel.content.filter(unit => unit.type === EContentType.PANEL).length
    );
  }
}
