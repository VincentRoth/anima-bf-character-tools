import { Component, OnInit } from '@angular/core';
import { ContentPanel, EContentType } from '../shared/models';
import { CreationHelpService } from '../shared/services';

@Component({
  selector: 'app-creation-help',
  templateUrl: './creation-help.component.html',
  styleUrls: ['./creation-help.component.scss']
})
export class CreationHelpComponent implements OnInit {
  contentPanels: ContentPanel[];

  constructor(private creationHelpService: CreationHelpService) {}

  isParentPanel(panel: ContentPanel): boolean {
    return panel.content && panel.content.every((unit) => unit.type === EContentType.PANEL);
  }

  ngOnInit(): void {
    this.creationHelpService.get().subscribe({
      next: (data) => (this.contentPanels = data)
    });
  }
}
